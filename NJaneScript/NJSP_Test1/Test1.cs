using System;
using System.Collections.Generic;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;

namespace NJSP_Test1 {
	[PluginFactoryClass]
	public sealed class PluginFactory : IPluginFactory {
		public PluginFactory() {
		}
		public IPlugin[] CreatePlugins() {
			return new[]{
				new HelloPlugin(),
			};
		}
	}

	/// <summary>
	/// ハローワールドのプラグイン。
	/// </summary>
	public sealed class HelloPlugin : IPlugin{
		private MenuItem menu; // メニューへの参照を持ったままにしておいてメニュー項目が消えないようにする
		
		public void Initialize(JaneScript js) {
			this.menu = js.InsertMenu(MenuNames.MainWnd_MainMenu, "", 1000);
			this.menu.Caption = "Hello";
			this.menu.OnClick = (MenuItem mi, PopupTargetInfo pti) => {
				using (JaneScript j = WrapperManager.GetJaneScript()) {
					j.Log(mi.Caption);
				}
			};
		}
		public void Quit(JaneScript js) {
			// MenuItemを開放
			menu.Dispose();
		}
	}
}
