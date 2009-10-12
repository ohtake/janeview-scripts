using System;
using System.Collections.Generic;
using System.Linq;
using System.Diagnostics;
using System.IO;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;
using System.ComponentModel;

namespace NJSP_CN {
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
			return "[CN] " + caption;
		}
		/// <summary>
		/// 
		/// </summary>
		/// <param name="board">板。事前にLoadを呼んでおくこと。</param>
		/// <returns></returns>
		public static DisposableList<ThreadItem> CreateThreadItemList(Board board) {
			int count = board.Count;
			DisposableList<ThreadItem> list = new DisposableList<ThreadItem>(count);
			for (int i = 0; i < count; i++) {
				list.Add(board.GetThread(i));
			}
			return list;
		}
	}
	
	sealed class DisposableList<T> : List<T>, IDisposable where T : IDisposable {
		public DisposableList()
			: base() {
		}
		public DisposableList(int capacity)
			: base(capacity) {
		}
		public DisposableList(IItemizable<T> itemizable)
			: base(itemizable.Count) {
			int count = itemizable.Count;
			for (int i = 0; i < count; i++) {
				base.Add(itemizable.Items(i));
			}
		}
		
		private void Dispose(bool disposing) {
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

	public abstract class PluginComponentBase {
		private IHost host;
		private DisposableList<MenuItem> menuItems = new DisposableList<MenuItem>();

		protected void PersistMenuItem(MenuItem menu) {
			this.menuItems.Add(menu);
		}
		protected void PersistMenuItems(IEnumerable<MenuItem> menus) {
			this.menuItems.AddRange(menus);
		}
		protected IHost Host {
			get {
				return this.host;
			}
		}

		public abstract void Initialize();
		public void Initialize(IHost host) {
			this.host = host;
			this.Initialize();
		}
		public virtual void Quit() {
			this.menuItems.Dispose();
		}
	}
}
