using System;
using System.Collections.Generic;
using System.Linq;
using System.Diagnostics;
using System.IO;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;

namespace NJSP_ViewListEx {
	[PluginFactoryClass]
	public sealed class PluginFactory : IPluginFactory {
		public PluginFactory() {
		}
		public IPlugin[] CreatePlugins() {
			return new IPlugin[]{
				new HelpPlugin(),
				new ThreadListPlugin(),
				new ViewClosePlugin(),
				new ThreadSortPlugin(),
				new MiscWritePlugin(),
			};
		}
	}

	static class Util {
		public static void WriteToNewView(JaneScript js, string tabText, string extraTitle, string hintText, bool relative, bool background, Action<DatOut> writeAction) {
			using (ViewList vl = js.ViewList())
			using (ViewItem nv = vl.NewView(relative, background)) {
				nv.TabText = tabText;
				nv.ExtraTitle = extraTitle;
				nv.HintText = hintText;
				DatOut datout = nv.QueryDatOut();
				try {
					nv.WriteSkin("");
					writeAction(datout);
				} catch (Exception ex) {
					js.Log(ex.Source);
					js.Log(ex.GetType().ToString());
					js.Log(ex.Message);
					throw ex;
				} finally {
					nv.EndDatOut();
					datout.Dispose();
				}
			}
		}
		public static string GetPrefixedMenuCaption(string caption) {
			return "[ViewListEx] " + caption;
		}
	}

	sealed class DisposableList<T> : List<T>, IDisposable where T : IDisposable {
		public DisposableList()
			: base() {
		}
		public DisposableList(int capacity)
			: base(capacity) {
		}
		public DisposableList(IEnumerable<T> collection)
			: base(collection) {
		}

		private void Dispose(bool disposing){
			if (disposing) {
				base.ForEach(x => x.Dispose());
				base.Clear();
			}
		}
		public void Dispose() {
			this.Dispose(true);
			GC.SuppressFinalize(this);
		}
		~DisposableList(){
			this.Dispose(false);
		}
	}

	public abstract class BasePlugin : IPlugin {
		private DisposableList<MenuItem> menuItems = new DisposableList<MenuItem>();
		
		protected void PersistMenuItem(MenuItem menu) {
			this.menuItems.Add(menu);
		}
		protected void PersistMenuItems(IEnumerable<MenuItem> menus) {
			this.menuItems.AddRange(menus);
		}
		
		public abstract void Initialize(JaneScript js);
		public virtual void Quit(JaneScript js) {
			this.menuItems.Dispose();
		}
	}

	public sealed class HelpPlugin : BasePlugin {
		public override void Initialize(JaneScript js) {
			MenuItem menu = js.InsertMenu(MenuNames.MainWnd_MainMenu, "MenuHelps", 1000);
			menu.Caption = Util.GetPrefixedMenuCaption("ヘルプ");
			menu.OnClick = this.HandleOpenHelp;
			base.PersistMenuItem(menu);
		}
		
		private void HandleOpenHelp(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				FileInfo fi = new FileInfo(js.ExeName());
				Process.Start(Path.Combine(fi.Directory.FullName, "NJSP_ViewListEx.txt"));
			}
		}
	}
}
