using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// スレビューに文字列を書き込むためのオブジェクト。書き込む対象となるViewItemオブジェクトから、
	/// ViewItem.QueryDatOutで取得する
	/// DatOutの処理はメッセージ処理を伴うので、処理中に対象のスレビューが解放される可能性を考慮して
	/// プログラミングを行う必要がある
	/// (スレビューが解放されてしまった場合、対象のViewItemとDatOutのConnectedがfalseになることで
	/// 確認できる）
	/// </summary>
	[JaneScriptApi]
	public sealed class DatOut : ComWrapperBase {
		internal DatOut(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// バッファに残っている文字列をスレビューに表示する
		/// </summary>
		/// <remarks>
		/// DatOutは処理効率を上げるために入力された文字列をバッファし、改行などのタイミングでスレビューに
		/// 出力する。このため、Write???の時点では文字列が表示されない場合がある。強制的にバッファの内容を
		/// スレビューに出力させたい場合にFlushを使用する
		/// </remarks>
		[JaneScriptApi]
		public void Flush() {
			base.InvokeMethod("Flush");
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレビューに改行を書き込む。
		/// </summary>
		[JaneScriptApi]
		public void WriteBR() {
			base.InvokeMethod("WriteBR");
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレビューにHTMLを書き込む(DoeではHTML風の簡易マークアップ)
		/// HTML文字列をいくつかに分割してWriteHTMLする場合、タグの途中で分割してしまうと正しい結果が
		/// 得られないので注意すること
		/// </summary>
		/// <param name="Text">書き込むHTMLの文字列</param>
		[JaneScriptApi]
		public void WriteHTML(string Text) {
			base.InvokeMethod("WriteHTML", Text);
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレビューに画像を書き込む(IE版のスレビューでは動作しない)
		/// </summary>
		/// <param name="Src">画像ファイルのURL</param>
		/// <param name="Href">画像のリンク先</param>
		/// <param name="MaxWidth">画像の最大幅(サイズ固定の場合は画像枠の幅)</param>
		/// <param name="MaxHeight">画像の最大高さ(サイズ固定の場合は画像枠の高さ)</param>
		/// <param name="SizeFixed">画像の表示サイズ固定の指定
		/// true  画像の表示サイズをMaxWidth×MaxHeightに固定
		/// false 画像の表示サイズをMaxWidth×MaxHeightの範囲内で調整</param>
		[JaneScriptApi]
		public void WriteImage(string Src, string Href, int MaxWidth, int MaxHeight, bool SizeFixed) {
			base.InvokeMethod("WriteImage", Src, Href, MaxWidth, MaxHeight, SizeFixed);
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// Doeの場合
		/// スレビューに文字列を書き込む。タグや文字参照もベタの文字列として出力される。
		/// IE版の場合
		/// スレビューではWriteHTMLと同じ動作
		/// </summary>
		/// <param name="Text">書き込む文字列</param>
		[JaneScriptApi]
		public void WriteText(string Text) {
			base.InvokeMethod("WriteText", Text);
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// 指定したレスをViewItemに表示する。WriteThrreadで表示したレスは、ログから検索βで表示された
		/// レスとほぼ同等の扱いで、着色や範囲選択あぼーんは動作するがレス番やIDの右クリックが効かない
		/// </summary>
		/// <param name="Thread">表示したいスレを参照したThreadItem</param>
		/// <param name="StartLine">表示したいレス範囲の最初のレス番</param>
		/// <param name="EndLine">表示したいレス範囲の最後のレス番(※レス番がEndLineのレスは表示対象に含む)</param>
		/// <param name="AboneLevel">　表示で使用するあぼーん表示形式を指定する。メニューのスレ→「ローカルあぼーん表示の変更」と
		/// 同等の表示設定が可能</param>
		[JaneScriptApi]
		public void WriteThread(ThreadItem Thread, int StartLine, int EndLine, AboneLevel AboneLevel) {
			base.InvokeMethod("WriteThread", Thread.ComObject, StartLine, EndLine, (int)AboneLevel);
		}
	}
}
