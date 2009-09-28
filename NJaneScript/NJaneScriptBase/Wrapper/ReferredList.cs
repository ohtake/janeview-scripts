using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// ThreadItem.GetReferredListにより取得される、スレの各レスがどのレスから参照されているかの情報を
	/// 保持するオブジェクト。
	/// レス番着色の着色情報を作成するためのクラスをラップしたもの。
	/// 参照された数とどのレスから参照されたのかを確認できるので、特定のレスから参照されたレスを
	/// 抽出する場合などに利用可能。
	/// </summary>
	[JaneScriptApi]
	public sealed class ReferredList : ComWrapperBase {
		internal ReferredList(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// ReferredListの取得元のスレのレス数
		/// </summary>
		[JaneScriptApi]
		public int Lines {
			get {
				return (int)base.InvokeGet("Lines");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// レス番Indexのレスを参照しているレスの数
		/// レス番着色が使用しているデータ）
		/// </summary>
		/// <param name="Index"></param>
		/// <returns></returns>
		[JaneScriptApi]
		public int RefCount(int Index) {
			return (int)base.InvokeMethod("RefCount", Index);
		}

		/// <summary>
		/// レス番Indexのレスを参照しているRefIndex番目のレスのレス番
		/// </summary>
		/// <param name="Index"></param>
		/// <param name="RefIndex"></param>
		/// <returns></returns>
		[JaneScriptApi]
		public int ReferencedFrom(int Index, int RefIndex) {
			return (int)base.InvokeMethod("ReferencedFrom", Index, RefIndex);
		}
	}
}
