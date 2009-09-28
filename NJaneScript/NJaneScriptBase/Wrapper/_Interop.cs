using System;
using System.Runtime.InteropServices;
using System.Reflection;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// COMオブジェクトをラップするための基底クラス。
	/// </summary>
	public class ComWrapperBase : IDisposable {
		private object comobj;
		private Type type;
		
		internal ComWrapperBase(object comobj) {
			this.comobj = comobj;
			this.type = comobj.GetType();
		}
		
		/// <summary>
		/// COMオブジェクトのメソッドを実行する。
		/// </summary>
		/// <param name="methodName">メソッド名。</param>
		/// <param name="args">メソッドに渡す引数。</param>
		/// <returns>メソッドの戻り値。</returns>
		protected object InvokeMethod(string methodName, params object[] args) {
			return this.type.InvokeMember(methodName, BindingFlags.InvokeMethod, null, this.comobj, args);
		}
		/// <summary>
		/// COMオブジェクトのプロパティを取得する。
		/// </summary>
		/// <param name="propName">プロパティ名。</param>
		/// <returns>プロパティの値。</returns>
		protected object InvokeGet(string propName) {
			return this.type.InvokeMember(propName, BindingFlags.GetProperty, null, this.comobj, null);
		}
		/// <summary>
		/// COMオブジェクトのプロパティを設定する。
		/// </summary>
		/// <param name="propName">プロパティ名。</param>
		/// <param name="value">セットする値。</param>
		protected void InvokeSet(string propName, object value) {
			this.type.InvokeMember(propName, BindingFlags.SetProperty, null, this.comobj, new object[] { value });
		}
		
		/// <summary>
		/// ラップしているCOMオブジェクトを取得する。
		/// </summary>
		internal object ComObject {
			get {
				return this.comobj;
			}
		}
		
		/// <summary>
		/// ラップしているCOMオブジェクトを開放したか否かを確認する。
		/// </summary>
		public bool IsDisposed {
			get {
				return null == this.comobj;
			}
		}
		
		protected virtual void Dispose(bool disposing) {
			if (disposing) {
				// nop
			}
			if (null != this.comobj) {
				Marshal.ReleaseComObject(this.comobj);
				this.comobj = null;
				this.type = null;
			}
		}
		
		/// <summary>
		/// ラップしているCOMオブジェクトを開放する。
		/// </summary>
		public void Dispose() {
			this.Dispose(true);
			GC.SuppressFinalize(this);
		}
		
		~ComWrapperBase() {
			this.Dispose(false);
		}
		
		/// <summary>
		/// 具象ラッパクラスに変換する。変換後はこのインスタンスは使用できない。
		/// </summary>
		/// <remarks>
		/// <see cref="PopupTargetInfo.PopupObject"/>で得られる<see cref="ComWrapperBase"/>クラスを
		/// <see cref="ViewItem"/>や<see cref="Board"/>クラスに変換するために用いる。
		/// </remarks>
		/// <typeparam name="T">具象ラッパクラス</typeparam>
		/// <returns>thisでラップしていたCOMオブジェクトをラップした具象ラッパクラスのインスタンス</returns>
		public T ConvertToConcreteWrapper<T>() where T : ComWrapperBase {
			if (this.IsDisposed) throw new ObjectDisposedException("ComWrapperBase");
			
			ConstructorInfo ci = typeof(T).GetConstructor(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance, null, new[] { typeof(object) }, null);
			T ret = (T)ci.Invoke(new[] { this.ComObject });
			
			// ReleaseComObject をせずに Dispose させるために null を先に代入
			this.comobj = null;
			this.type = null;
			this.Dispose();
			
			return ret;
		}
	}
	
	/// <summary>
	/// JScriptのプロキシオブジェクトのラッパ。
	/// </summary>
	sealed class ProxyWrapper : ComWrapperBase {
		internal ProxyWrapper(object comobj) : base(comobj) {
		}
		internal JaneScript GetJaneScript() {
			return new JaneScript(base.InvokeMethod("GetJaneScript"));
		}
		internal object CreateMenuClickHandler(MenuClickHandlerContainer container) {
			return base.InvokeMethod("CreateMenuClickHandler", container);
		}
		internal object CreateLateCallCallback(LateCallCallbackContainer container) {
			return base.InvokeMethod("CreateLateCallCallback", container);
		}
	}
	
	/// <summary>
	/// <see cref="MenuItem.OnClick"/>へのハンドラ登録を実装するために用いるクラス。
	/// JScript側から見えるようにするために public になっているが、
	/// ラッパを利用する側が使うものではない。
	/// </summary>
	[ComVisible(true)]
	public sealed class MenuClickHandlerContainer {
		private Action<MenuItem, PopupTargetInfo> handler;
		internal MenuClickHandlerContainer(Action<MenuItem, PopupTargetInfo> handler) {
			this.handler = handler;
		}
		/// <summary>
		/// JScriptから.NETのハンドラを呼び出すためのメソッド。
		/// </summary>
		/// <param name="mi"></param>
		/// <param name="pti"></param>
		public void InvokeHandler(object mi, object pti) {
			MenuItem menu = (null == mi) ? null : new MenuItem(mi);
			PopupTargetInfo targetInfo = (null == pti) ? null : new PopupTargetInfo(pti);
			this.handler(menu, targetInfo);
		}
	}

	/// <summary>
	/// <see cref="JaneScript.LateCall"/>へのコールバック登録を実装するために用いるクラス。
	/// JScript側から見えるようにするために public になっているが、
	/// ラッパを利用する側が使うものではない。
	/// </summary>
	[ComVisible(true)]
	public sealed class LateCallCallbackContainer {
		private Action<object> callback;
		internal LateCallCallbackContainer(Action<object> callback) {
			this.callback = callback;
		}
		/// <summary>
		/// JScriptから.NETのコールバックを呼び出すためのメソッド。
		/// </summary>
		/// <param name="arg"></param>
		public void InvokeCallback(object arg) {
			this.callback(arg);
		}
	}
}
