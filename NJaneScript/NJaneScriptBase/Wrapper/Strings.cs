using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 文字列リストを保持するオブジェクト。IEnumlatorなどは実装されていないので、列挙する場合も
	/// インデックスを順に指定して取得していく必要あり。
	/// </summary>
	[JaneScriptApi]
	public sealed class Strings : ComWrapperBase, IItemizable<string> {
		internal Strings(object comobj) : base(comobj) {
		}

		/// <summary>
		/// インデックスを指定して格納された文字列を取得する
		/// </summary>
		/// <param name="Index">格納文字列のインデックス(インデックスの範囲は 0～Count - 1)</param>
		/// <returns></returns>
		[JaneScriptApi]
		public string Items(int Index) {
			return (string)base.InvokeMethod("Items", Index);
		}

		/// <summary>
		/// オブジェクトが保持している文字列の数
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}
	}
}
