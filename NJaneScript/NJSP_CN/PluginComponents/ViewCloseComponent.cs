using System;
using System.Collections.Generic;
using System.Linq;
using NJaneScript.Wrapper;

namespace NJSP_CN {
	public sealed class ViewCloseComponent : PluginComponentBase {
		public override void Initialize(JaneScript js) {
			MenuItem menu1 = js.InsertMenu(MenuNames.MainWnd_MainMenu, "MenuThre",
				js.MenuIndex(MenuNames.MainWnd_MainMenu, "N28"));
			MenuItem menu2 = js.InsertMenu(MenuNames.MainWnd_ThreadPopupMenu, "",
				js.MenuIndex(MenuNames.MainWnd_ThreadPopupMenu, "N9"));
			this.RegisterMenu(js, menu1);
			this.RegisterMenu(js, menu2);
		}
		private void RegisterMenu(JaneScript js, MenuItem menu) {
			menu.Caption = Util.GetPrefixedMenuCaption("条件で閉じる");
			base.PersistMenuItem(menu);
			base.PersistMenuItems(FunctionMenuUtil.AppendSubmenuItems(menu, this.MenuHandler, true));
		}
		
		public void MenuHandler(Predicate<ViewItem> pred, MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript())
			using (ViewList vl = js.ViewList())
			using (DisposableList<ViewItem> views = new DisposableList<ViewItem>(vl.GetEnumerable())) {
				List<ViewItem> closeTargets = new List<ViewItem>();
				foreach (ViewItem view in views) {
					if (pred(view)) {
						closeTargets.Add(view);
					}
				}
				foreach (ViewItem view in closeTargets) {
					js.Close(view);
				}
			}
		}
	}
}
