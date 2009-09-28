using System;
using System.Collections.Generic;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// NGのあぼーんの種別
	/// </summary>
	[Flags]
	public enum AboneType : int {
		/// <summary>
		/// 通常あぼーん
		/// </summary>
		Tsuujou = 0,
		/// <summary>
		/// 透明あぼーん
		/// </summary>
		Toumei = 2,
		/// <summary>
		/// 重要キーワード
		/// </summary>
		Juuyou = 4,
	}

	/// <summary>
	/// 表示で使用するあぼーん表示形式を指定する。
	/// </summary>
	public enum AboneLevel : int {
		/// <summary>
		/// とうめい
		/// </summary>
		Toumei = -1,
		/// <summary>
		/// ふつう
		/// </summary>
		Futsuu = 0,
		/// <summary>
		/// ぽっぷあっぷ
		/// </summary>
		Popup = 1,
		/// <summary>
		/// さぼり
		/// </summary>
		Sabori = 2,
		/// <summary>
		/// よりごのみ
		/// </summary>
		Yorigonomi = 3,
		/// <summary>
		/// はきだめ
		/// </summary>
		Hakidame = 4,
		/// <summary>
		/// ポップアップヒント用
		/// </summary>
		PopupHintYou = 255,
	}

	/// <summary>
	/// 開くときにサーバからのデータ取得を行うか、ローカルだけで取得を行わないかを設定する
	/// </summary>
	public enum OpenOperation : int {
		/// <summary>なにもしない</summary>
		/// <remarks>まったく無意味だが、内部処理上必要なために存在</remarks>
		NanimoShinai = 0,
		/// <summary>ローカル</summary>
		Local = 1,
		/// <summary>適宜取得</summary>
		TekigiShutoku = 2,
		/// <summary>更新チェック</summary>
		KoushinCheck = 3,
		/// <summary>時間に応じて</summary>
		JikanniOujite = 4,
	}

	public interface IItemizable<T> {
		int Count { get; }
		T Items(int Index);
	}

	/// <summary>
	/// ラッパクラスのためのイクステンション。
	/// </summary>
	public static class Extensions {
		public static IEnumerable<T> GetEnumerable<T>(this IItemizable<T> items) {
			int count = items.Count;
			for (int i = 0; i < count; i++) {
				yield return items.Items(i);
			}
		}
		/// <summary>
		/// 板内のスレを列挙するために用いる。
		/// 全スレッドを取得するには事前に<see cref="Board.Load"/>を呼び出しておく必要がある。
		/// </summary>
		/// <param name="board"></param>
		/// <returns></returns>
		/// <seealso cref="Board.Load"/>
		public static IEnumerable<ThreadItem> GetEnumerable(this Board board) {
			int count = board.Count;
			for (int i = 0; i < count; i++) {
				yield return board.GetThread(i);
			}
		}
	}

	/// <summary>
	/// menuconf.iniのセクション名をまとめたクラス。
	/// <see cref="JaneScript.InsertMenu"/>の第一引数で用いる。
	/// </summary>
	public static class MenuNames {
		/// <summary>画像ビューアでアーカイブファイルの時のコンテキストメニュー。書庫の保存、書庫の再展開、など。</summary>
		public const string ImageForm_ArchiveInfoPopUp = "ImageForm.ArchiveInfoPopUp";
		/// <summary>画像ビューアでタブや画像のコンテキストメニュー。このタブを閉じる、エラーのタブを閉じる、など。</summary>
		public const string ImageForm_ImagePopUpMenu = "ImageForm.ImagePopUpMenu";
		/// <summary>画像ビューアのステータスバーを右クリックしたときのメニュー。URLをコピー、など。</summary>
		public const string ImageForm_StatusBarPopupMenu = "ImageForm.StatusBarPopupMenu";
		/// <summary>メインのメニュー。板覧、スレ覧、など。</summary>
		public const string MainWnd_MainMenu = "MainWnd.MainMenu";
		/// <summary>スレッド一覧のコンテキストメニュー。バックグラウンドで開く、新しいタブで開く、など。</summary>
		public const string MainWnd_ListPopupMenu = "MainWnd.ListPopupMenu";
		/// <summary>スレッドツールバーの表示レス数をクリックしたときのメニューー。とうめい、ふつう、など。</summary>
		public const string MainWnd_PopupDrawLines = "MainWnd.PopupDrawLines";
		/// <summary>お気に入りツリーのコンテキストメニュー。新しいタブで開く、今のタブで開く、など。</summary>
		public const string MainWnd_PopupFavorites = "MainWnd.PopupFavorites";
		/// <summary>スレビューのIDのコンテキストメニュー。IDでレス抽出、NGIDに追加、など。</summary>
		public const string MainWnd_PopupIDMenu = "MainWnd.PopupIDMenu";
		/// <summary>スレッド一覧のカラムを右クリックしたときのメニュー。スレ絞込み、絞込み解除など。</summary>
		public const string MainWnd_PopupListColumn = "MainWnd.PopupListColumn";
		/// <summary>スレッド一覧の検索バーのメニュー。通常検索、migemo検索、など。</summary>
		public const string MainWnd_PopupListSearchMenu = "MainWnd.PopupListSearchMenu";
		/// <summary>アドレスバーのメニュー。お気に入り検索、板検索など。</summary>
		public const string MainWnd_PopupLocationbar = "MainWnd.PopupLocationbar";
		/// <summary>アドレスバー検索の候補を右クリックしたときのメニュー。板順、マーク順、など。</summary>
		public const string MainWnd_PopupLocationbarListBox = "MainWnd.PopupLocationbarListBox";
		/// <summary>スレビューの検索バーのメニュー。抽出、抽出+ツリー、など。</summary>
		public const string MainWnd_PopupSearchMenu = "MainWnd.PopupSearchMenu";
		/// <summary>スレビューのコンテキストメニュー。コピー、リンクをコピーなど。</summary>
		public const string MainWnd_PopupTextMenu = "MainWnd.PopupTextMenu";
		/// <summary>スレッドタイトル(スレッドツールバーの左)の右クリックメニュー。絞り込み強、絞り込み弱など。</summary>
		public const string MainWnd_PopupThreadTitle = "MainWnd.PopupThreadTitle";
		/// <summary>スレッドツールバーのゴミ箱メニュー。このログを削除、強制過去ログ化など。</summary>
		public const string MainWnd_PopupTrash = "MainWnd.PopupTrash";
		/// <summary>通知領域(タスクトレイ)に格納したときのコンテキストメニュー。終了、など。</summary>
		public const string MainWnd_PopupTrayIcon = "MainWnd.PopupTrayIcon";
		/// <summary>スレッド一覧のタブを右クリックしたときのメニュー。このタブを閉じる、このタブ以外を閉じる、など。</summary>
		public const string MainWnd_PopupTree = "MainWnd.PopupTree";
		/// <summary>板一覧ツリーのコンテキストメニュー。お気に入りに追加、ここに板を追加、など。</summary>
		public const string MainWnd_PopupTreeCategory = "MainWnd.PopupTreeCategory";
		/// <summary>レス番号クリックのメニュー。これにレス、引用付きレス、など。</summary>
		public const string MainWnd_PopupViewMenu = "MainWnd.PopupViewMenu";
		/// <summary>スレッドタブを右クリックしたときのメニュー。このタブを閉じる、未読として閉じる、など。</summary>
		public const string MainWnd_ThreadPopupMenu = "MainWnd.ThreadPopupMenu";
	}
}
