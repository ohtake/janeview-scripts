﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;

namespace NJSP_Test2 {
	/// <summary>
	/// レスをつけられている個数関係のプラグイン。
	/// </summary>
	public sealed class RefCountPlugin : IPlugin {
		private List<MenuItem> menus = new List<MenuItem>(); // メニューへの参照を持ったままにしておいてメニュー項目が消えないようにする

		public void Initialize(JaneScript js) {
			this.AddMenu(js, "レス数でグループ化", this.HandleGroupBy);
			this.AddMenu(js, "レス数トップ10", this.HandleTop10);
		}
		public void Quit(JaneScript js) {
			// MenuItemを開放
			this.menus.ForEach(m => m.Dispose());
			menus.Clear();
		}

		private void AddMenu(JaneScript js, string name, Action<MenuItem, PopupTargetInfo> handler) {
			MenuItem menu1 = js.InsertMenu(MenuNames.MainWnd_ThreadPopupMenu, "", 1000);
			menu1.Caption = name;
			menu1.OnClick = handler;
			this.menus.Add(menu1);
		}

		private void HandleGroupBy(MenuItem mi, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript())
			using (ViewItem view = pti.PopupObject.ConvertToConcreteWrapper<ViewItem>())
			using (ThreadItem thread = view.Thread()) {
				if (null == thread) {
					js.Log("通常のスレッドのタブから実行してください。");
					return;
				}
				this.DoGroupBy(js, thread);
			}
		}
		private void HandleTop10(MenuItem mi, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript())
			using (ViewItem view = pti.PopupObject.ConvertToConcreteWrapper<ViewItem>())
			using (ThreadItem thread = view.Thread()) {
				if (null == thread) {
					js.Log("通常のスレッドのタブから実行してください。");
					return;
				}
				this.DoTop10(js, thread);
			}
		}

		private List<ResRefInfo> GetResRefInfos(ThreadItem thread) {
			int lines = thread.Lines;
			var ret = new List<ResRefInfo>(lines);
			using (ReferredList rl = thread.GetReferredList()) {
				for (int i = 1; i <= lines; i++) {
					ret.Add(new ResRefInfo() {
						ResNumber = i, RefCount = rl.RefCount(i),
					});
				}
			}
			return ret;
		}

		private void DoGroupBy(JaneScript js, ThreadItem thread) {
			// レス数でグループ化して降順ソート
			var groups =
				from rr in this.GetResRefInfos(thread)
				group rr.ResNumber by rr.RefCount into g
				orderby g.Key descending
				select g;
			Uri threadUri = thread.URL;
			Util.WriteToNewView(js, "レス数でグループ化", "レス数でグループ化: " + thread.Title, (DatOut datout) => {
				foreach (var g in groups) {
					datout.WriteHTML(string.Format("<dt>{0} ({1})</dt>", g.Key, g.Count()));
					StringBuilder sb = new StringBuilder("<dd>");
					foreach (var resNumber in g) {
						sb.AppendFormat("<a href=\"{0}{1}\">{1}</a> ", threadUri, resNumber);
					}
					sb.AppendLine("<br></dd>");//ddを閉じる前にbrを入れるとインデントする
					datout.WriteHTML(sb.ToString());
					datout.Flush();
				}
			});
		}
		private void DoTop10(JaneScript js, ThreadItem thread) {
			// レス数で降順ソートしてトップ10
			var top = (
				from rr in this.GetResRefInfos(thread)
				orderby rr.RefCount descending
				select rr)
				.Take(10).ToArray();
			Util.WriteToNewView(js, "レス数トップ10", "レス数トップ10: " + thread.Title, (DatOut datout) => {
				for (int i = 0; i < top.Length; i++) {
					var rr = top[i];
					datout.WriteText(string.Format("{0}位 {1}レス", i + 1, rr.RefCount));
					datout.WriteBR();
					datout.WriteThread(thread, rr.ResNumber, rr.ResNumber, AboneLevel.Futsuu);
				}
			});
		}

		private sealed class ResRefInfo {
			public int ResNumber { get; set; }
			public int RefCount { get; set; }
		}
	}
}
