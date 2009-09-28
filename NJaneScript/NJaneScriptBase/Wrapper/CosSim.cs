using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 文字列の類似度を調べるためのオブジェクト
	/// Subjectに基準文字列を代入し、Evaluete(Str)でSubjectとStrの類似度を取得する。
	/// 類似度はtri-gramのCosine Similarityにより算出され、0～1の浮動小数点値として得られる。
	/// (1が完全に同一の文字列、0が類似性なし)
	/// 文字には重み付けがあり、数字、記号を含む部分は重み付けを小さく判定する。
	/// オートヒストリで使用しているのと基本的には同一の処理。
	/// </summary>
	[JaneScriptApi]
	public sealed class CosSim : ComWrapperBase {
		internal CosSim(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 類似度比較の基準となる文字列。Evaluateで、この文字列との類似度が得られる。
		/// </summary>
		[JaneScriptApi]
		public string Subject {
			get {
				return (string)base.InvokeGet("Subject");
			}
			set {
				base.InvokeSet("Subject", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// SubjectとStrの類似度を算出する
		/// </summary>
		/// <param name="Str">Subjectと比較する文字列</param>
		/// <returns>SubjectとStrの類似度</returns>
		[JaneScriptApi]
		public float Evaluate(string Str) {
			return (float)base.InvokeMethod("Evaluate", Str);
		}
	}
}
