﻿using System;
using System.Collections.Generic;
using System.Linq;
using NJaneScript.Wrapper;

namespace NJSP_ViewListEx {
	public sealed class ThreadSortPlugin : BasePlugin {
		public override void Initialize(JaneScript js) {
			this.AddMenus(js, null);
			this.AddMenus(js, true);
			this.AddMenus(js, false);
		}
		private void AddMenus(JaneScript js, bool? ascending) {
			MenuItem menu1 = js.InsertMenu(MenuNames.MainWnd_MainMenu, "MenuThre",
				js.MenuIndex(MenuNames.MainWnd_MainMenu, "N28"));
			MenuItem menu2 = js.InsertMenu(MenuNames.MainWnd_ThreadPopupMenu, "",
				js.MenuIndex(MenuNames.MainWnd_ThreadPopupMenu, "N9"));
			this.RegisterMenu(js, menu1, ascending);
			this.RegisterMenu(js, menu2, ascending);
		}
		private void RegisterMenu(JaneScript js, MenuItem menu, bool? ascending) {
			if (!ascending.HasValue) {
				menu.Caption = "-";
			} else {
				menu.Caption = Util.GetPrefixedMenuCaption(string.Format("開いているスレを{0}ソート", ascending.Value ? "昇順" : "降順"));
				base.PersistMenuItems(FunctionMenuUtil.AppendSubmenuItems(menu, new SortHandlerClass(ascending.Value).MenuHandler));
			}
			base.PersistMenuItem(menu);
		}
		
		private sealed class SortHandlerClass {
			private bool ascending;
			public SortHandlerClass(bool ascending) {
				this.ascending = ascending;
			}
			public void MenuHandler(Converter<ThreadItem, object> selector, MenuItem menu, PopupTargetInfo pti) {
				using (JaneScript js = WrapperManager.GetJaneScript())
				using (ViewList vl = js.ViewList())
				using (DisposableList<ViewItem> views = new DisposableList<ViewItem>(vl.GetEnumerable()))
				using (DisposableList<ThreadItem> threads = new DisposableList<ThreadItem>()) {
					//スレッドを抽出
					foreach (ViewItem view in views) {
						ThreadItem t = view.Thread();
						if (t != null) threads.Add(t);
					}
					//スレッドを全部閉じる
					foreach (ThreadItem t in threads) {
						js.Close(t);
					}
					//スレッドのソートキー取得
					List<ThreadKeyPair> pairs = new List<ThreadKeyPair>(threads.Count);
					foreach (ThreadItem t in threads) {
						pairs.Add(new ThreadKeyPair() {
							Thread = t,
							SortKey = (IComparable)selector(t),
						});
					}
					//スレッドソート
					if (this.ascending) {
						pairs.Sort(this.AscendingComparison);
					} else {
						pairs.Sort(this.DescendingComparison);
					}
					//閉じようとしているスレッドを開こうとするとよくないっぽいので
					js.ProcessMessages();
					//全部開く
					foreach (var p in pairs) {
						js.Open(p.Thread, 0, OpenOperation.Local, true, false, true);
					}
				}
			}
			private int AscendingComparison(ThreadKeyPair x, ThreadKeyPair y) {
				return x.SortKey.CompareTo(y.SortKey);
			}
			private int DescendingComparison(ThreadKeyPair x, ThreadKeyPair y) {
				return y.SortKey.CompareTo(x.SortKey);
			}
		}
		private sealed class ThreadKeyPair {
			public ThreadItem Thread { get; set; }
			public IComparable SortKey { get; set; }
		}
	}
}
