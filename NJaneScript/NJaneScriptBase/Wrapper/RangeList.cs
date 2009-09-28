using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 複数の数値範囲を保持するオブジェクト。
	/// レス番リンクのリンク先などを取得する関数の戻り値などに使われる。
	/// </summary>
	[JaneScriptApi]
	public sealed class RangeList : ComWrapperBase {
		internal RangeList(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// RangeListが保持したレスが参照するIndex番目の参照レス番範囲の開始番号を返す
		/// </summary>
		/// <param name="Index">参照レス番範囲のRangeList中での番号</param>
		/// <returns>参照レス番範囲の開始番号</returns>
		[JaneScriptApi]
		public int RangeBegin(int Index) {
			return (int)base.InvokeMethod("RangeBegin", Index);
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// RangeListが保持したレスが参照するIndex番目の参照レス番範囲の終了番号を返す
		/// </summary>
		/// <param name="Index">参照レス番範囲のRangeList中での番号</param>
		/// <returns>参照レス番範囲の終了番号</returns>
		[JaneScriptApi]
		public int RangeEnd(int Index) {
			return (int)base.InvokeMethod("RangeEnd", Index);
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// RangeListが保持した、レスが参照するレス番範囲の数を返す
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// RangeListの参照先が存在しているか
		/// true  参照先の実体は存在している
		/// false 参照先の実体は削除された
		/// </summary>
		/// <remarks>現在の実装では、RangeList.Connectedがfalseになることはない</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// RangeListが保持する全てのRangeの幅(最大値-最小値)の合計を返す
		/// </summary>
		/// <returns>RangeListが保持する全てのRangeの幅の合計</returns>
		[JaneScriptApi]
		public int WholeRangeWidth() {
			return (int)base.InvokeMethod("WholeRangeWidth");
		}
	}
}
