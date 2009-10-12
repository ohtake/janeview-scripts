using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NJaneScript.Wrapper;

namespace NJSP_CN {
	public sealed class ThreadListComponent : PluginComponentBase {
		public override void Initialize(JaneScript js) {
			MenuItem menu = js.InsertMenu(MenuNames.MainWnd_MainMenu, "Find1", 1000);
			menu.Caption = Util.GetPrefixedMenuCaption("開いているスレを条件で書き出す");
			base.PersistMenuItem(menu);
			base.PersistMenuItems(FunctionMenuUtil.AppendSubmenuItems(menu, this.MenuHandler, false));
		}

		public void MenuHandler(Predicate<ViewItem> pred, MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript())
			using (ViewList vl = js.ViewList()){
				List<TitleUriPair> pairs = new List<TitleUriPair>();
				using (DisposableList<ViewItem> views = new DisposableList<ViewItem>(vl.GetEnumerable())) {
					foreach (ViewItem view in views) {
						if (pred(view)) {
							using (ThreadItem t = view.Thread()) {
								pairs.Add(new TitleUriPair() {
									Title = t.Title,
									Uri = t.URL,
								});
							}
						}
					}
				}
				if (pairs.Count == 0) {
					js.Log("書き出す対象のスレッドが1つもありませんでした。");
					return;
				}
				string titleShort = "開いているスレの書き出し";
				string titleLong = string.Format("{0}: {1}", titleShort, menu.Caption);
				Util.WriteToNewView(js, titleShort, titleLong, titleLong, false, false, (datout) => {
					datout.WriteText(titleLong);
					datout.WriteBR();
					datout.WriteText(string.Format("{0} スレッド", pairs.Count));
					datout.WriteBR();
					datout.WriteHTML("<hr><br>");
					foreach (TitleUriPair pair in pairs) {
						datout.WriteHTML(string.Format("{0}<br><a href=\"{1}\">{1}</a><br>", HttpUtility.HtmlEncode(pair.Title), pair.Uri));
					}
				});
			}
		}
		
		private struct TitleUriPair {
			public string Title { get; set; }
			public Uri Uri { get; set; }
		}
	}
}
