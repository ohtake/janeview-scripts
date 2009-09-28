using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// Janeのウィンドウ上にあるエディットボックスやコンボボックスの文字列を参照するためのオブジェクト
	/// 文字列の参照や変更が可能
	/// </summary>
	[JaneScriptApi]
	public sealed class Edit : ComWrapperBase {
		internal Edit(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// エディットボックスまたはコンボボックスの文字列全体
		/// </summary>
		[JaneScriptApi]
		public string Text {
			get {
				return (string)base.InvokeGet("Text");
			}
			set {
				base.InvokeSet("Text", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// エディットボックスまたはコンボボックスで範囲選択された文字列
		/// このプロパティに代入した場合、範囲選択部分が代入した文字列で置換される
		/// </summary>
		[JaneScriptApi]
		public string SelText {
			get {
				return (string)base.InvokeGet("SelText");
			}
			set {
				base.InvokeSet("SelText", value);
			}
		}
	}
}
