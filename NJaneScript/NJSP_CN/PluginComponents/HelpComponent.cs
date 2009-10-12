using System;
using System.Collections.Generic;
using System.Linq;
using System.Diagnostics;
using System.IO;
using NJaneScript.Wrapper;

namespace NJSP_CN {
	public sealed class HelpComponent : PluginComponentBase {
		public override void Initialize(JaneScript js) {
			MenuItem menu = js.InsertMenu(MenuNames.MainWnd_MainMenu, "MenuHelps", 1000);
			menu.Caption = Util.GetPrefixedMenuCaption("ヘルプ");
			menu.OnClick = this.HandleOpenHelp;
			base.PersistMenuItem(menu);
		}

		private void HandleOpenHelp(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				FileInfo fi = new FileInfo(js.ExeName());
				Process.Start(Path.Combine(fi.Directory.FullName, "NJSP_CN.txt"));
			}
		}
	}
}
