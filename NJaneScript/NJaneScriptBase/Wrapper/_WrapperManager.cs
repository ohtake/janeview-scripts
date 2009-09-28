using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// ラッパライブラリを利用するための静的クラス。
	/// ラッパを利用する前に<see cref="InitializeWrapper"/>を呼び出すこと。
	/// </summary>
	public static class WrapperManager {
		private static ProxyWrapper proxy;
		internal static ProxyWrapper Proxy {
			get {
				return proxy;
			}
		}
		
		/// <summary>
		/// ラッパライブラリを初期化するためのメソッド。
		/// </summary>
		/// <param name="comProxy">JScriptとの通信に用いるJScriptオブジェクト。</param>
		public static void InitializeWrapper(object comProxy) {
			WrapperManager.proxy = new ProxyWrapper(comProxy);
		}
		/// <summary>
		/// JScriptのグローバル変数 JaneScript をラップして返すメソッド。
		/// </summary>
		/// <returns>ラップされた JaneScript オブジェクト。</returns>
		public static JaneScript GetJaneScript() {
			return WrapperManager.Proxy.GetJaneScript();
		}
	}
}
