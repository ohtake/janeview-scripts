using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 任意の名前のプロパティを作成してデータを保持する機能を持つオブジェクト。
	/// 複数の値を返す必要がある関数で戻り値として使用する。
	/// </summary>
	/// <example>
	/// // JaneScript.CursorPosは X,Yの二つのプロパティ変数にマウスカーソルのX座標とY座標を代入した
	/// // NamedVariantを戻り値として返す。
	/// var pos = JaneScript.CursorPos();
	/// JaneScript.Log("現在のマウスの位置は(X:" + pos.X + ",Y:" + pos.Y + ")");
	/// </example>
	[JaneScriptApi]
	public sealed class NamedVariant : ComWrapperBase {
		internal NamedVariant(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持している名前付き変数を全て消去する
		/// </summary>
		[JaneScriptApi]
		public void Clear() {
			base.InvokeMethod("Clear");
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 文字列を使ってプロパティにアクセスする。
		/// NamedVariant.HogeHoge と NamedVariant.Items("HogeHoge") は同じ。
		/// </summary>
		/// <param name="Name"></param>
		/// <returns></returns>
		[JaneScriptApi]
		public object Items(string Name) {
			return base.InvokeMethod("Items", Name);
		}
	}
}
