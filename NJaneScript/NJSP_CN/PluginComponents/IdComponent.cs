using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;
using System.Web;

namespace NJSP_CN {
	public sealed class IdComponent : PluginComponentBase {
		public override void Initialize() {
			JaneScript js = base.Host.JaneScript;
			this.AddMenu(js, Util.GetPrefixedMenuCaption("所属板の取得ログからID検索して日時順にソート"), this.HandleFindId);
		}
		
		private void AddMenu(JaneScript js, string name, Action<MenuItem, PopupTargetInfo> handler) {
			MenuItem menu1 = js.InsertMenu(MenuNames.MainWnd_PopupIDMenu, "", 1000);
			menu1.Caption = name;
			menu1.OnClick = handler;
			base.PersistMenuItem(menu1);
		}

		private void HandleFindId(MenuItem mi, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript())
			using (ViewItem view = pti.PopupObject.ConvertToConcreteWrapper<ViewItem>())
			using (ThreadItem thread = view.Thread()) {
				if (null == thread) {
					js.Log("通常のスレッドのタブから実行してください。");
					return;
				}
				string id;
				int resNumber = pti.Number;
				if (resNumber > 0) {
					//日付中ID
					using (ResItem res = thread.GetRes(resNumber)) {
						id = res.Id;
					}
				} else {
					id = pti.InfoText;
				}
				if (string.IsNullOrEmpty(id)) {
					js.Log("IDが取得できませんでした。");
				}
				try {
					this.DoFindId(js, thread, id);
				} catch (Exception ex) {
					js.Log(ex.Message);
					js.Log(ex.StackTrace);
				}
			}
		}
		
		private void DoFindId(JaneScript js, ThreadItem thread, string id) {
			using (Board board = thread.Board) {
				board.Load();
				List<IdMatchInfo> matches = this.GetIdMatches(js, board, id);
				this.OutputMatches(js, board, id, matches);
			}
		}
		private List<IdMatchInfo> GetIdMatches(JaneScript js, Board board, string id) {
			List<IdMatchInfo> matches = new List<IdMatchInfo>();
			foreach (ThreadItem t in board.GetEnumerable()) {
				if (!t.DatExist) continue;
				int lines = t.Lines;
				// HACK 全取得スレッドをなめなくてもいいようにすべき
				// sinse や LastGot で事前に日付チェックを行ったり
				// バイナリサーチで日付の一致する範囲を事前に調べたり
				for (int i = 1; i <= lines; i++) {
					using (ResItem res = t.GetRes(i)) {
						if (res.Id == id) {
							matches.Add(new IdMatchInfo() {
								datName = t.DatName,
								resNumber = i,
								datetime = res.DateValue,
							});
						}
					}
				}
				js.ProcessMessages();
			}
			return matches;
		}
		
		private void OutputMatches(JaneScript js, Board board, string id, List<IdMatchInfo> matches) {
			string shortTitle = "ID検索";
			string longTitle = string.Format("ID検索: ID:{0} {1}", id, board.Name);
			Util.WriteToNewView(js, shortTitle, longTitle, longTitle, false, false, (DatOut datout) => {
				var q =
					from m in matches
					orderby m.datetime
					select m;
				foreach (var m in q) {
					using (ThreadItem t = board.FindThread(m.datName)) {
						datout.WriteHTML(string.Format("<a href=\"{0}\">{1}</a><br>", t.URL, HttpUtility.HtmlEncode(t.Title)));
						datout.WriteThread(t, m.resNumber, m.resNumber, AboneLevel.Futsuu);
					}
				}
				datout.WriteHTML("<br><hr><br>");
				datout.WriteText("スレごとのレス数は以下のとおりです。");
				datout.WriteBR();
				var boardGroups =
					from m in matches
					group m by m.datName into boardg
					orderby boardg.Count() descending
					select boardg;
				foreach (var bg in boardGroups) {
					using (ThreadItem t = board.FindThread(bg.Key)) {
						datout.WriteHTML(string.Format("{0}レス: <a href=\"{1}\">{2}</a><br>", bg.Count(), t.URL, HttpUtility.HtmlEncode(t.Title)));
					}
				}
			});
		}
		
		private sealed class IdMatchInfo {
			public string datName { get; set; }
			public int resNumber { get; set; }
			public DateTime datetime { get; set; }
		}
	}
}
