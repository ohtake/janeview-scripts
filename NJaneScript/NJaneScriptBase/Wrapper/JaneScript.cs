using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// WSHでのWScriptオブジェクトに対応するグローバルの組み込みオブジェクト。
	/// システム全般へのアクセスや各種の出力、UIのコントロールなどを担当する。
	/// </summary>
	[JaneScriptApi]
	public sealed class JaneScript : ComWrapperBase {
		internal JaneScript(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 現在アクティブなスレビューのアイテムを取得する
		/// </summary>
		/// <returns>アクティブなViewItemのオブジェクト</returns>
		[JaneScriptApi]
		public ViewItem ActiveView() {
			return new ViewItem(base.InvokeMethod("ActiveView"));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// NGに新しいアイテムを登録する。</summary>
		/// <remarks>
		/// アクティブなスレビューの再読込によるNGの反映は自動では行われない。
		/// そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
		/// スクリプトでthread.LocalReloadを実行する。</remarks>
		/// <param name="Item"></param>
		/// <param name="AboneType">登録するNGのあぼーんの種別</param>
		/// <param name="LifeSpan">アイテムの寿命
		///		-1: アイテムの種類ごとの設定値に従う
		///		0: 寿命を管理されず、自動では削除されない
		///		その他: その日数だけ新たなレスがなければ自動消去</param>
		/// <returns>正常に登録された場合はtrue
		/// すでに登録されていたり、空白文字列を登録しようとした場合はfalse</returns>
		[JaneScriptApi]
		public bool AddNgName(string Item, AboneType AboneType, int LifeSpan) {
			return (bool)base.InvokeMethod("AddNgName", Item, (int)AboneType, LifeSpan);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// NGに新しいアイテムを登録する。</summary>
		/// <remarks>
		/// アクティブなスレビューの再読込によるNGの反映は自動では行われない。
		/// そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
		/// スクリプトでthread.LocalReloadを実行する。</remarks>
		/// <param name="Item"></param>
		/// <param name="AboneType">登録するNGのあぼーんの種別</param>
		/// <param name="LifeSpan">アイテムの寿命
		///		-1: アイテムの種類ごとの設定値に従う
		///		0: 寿命を管理されず、自動では削除されない
		///		その他: その日数だけ新たなレスがなければ自動消去</param>
		/// <returns>正常に登録された場合はtrue
		/// すでに登録されていたり、空白文字列を登録しようとした場合はfalse</returns>
		[JaneScriptApi]
		public bool AddNgMail(string Item, AboneType AboneType, int LifeSpan) {
			return (bool)base.InvokeMethod("AddNgMail", Item, (int)AboneType, LifeSpan);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// NGに新しいアイテムを登録する。</summary>
		/// <remarks>
		/// アクティブなスレビューの再読込によるNGの反映は自動では行われない。
		/// そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
		/// スクリプトでthread.LocalReloadを実行する。</remarks>
		/// <param name="Item"></param>
		/// <param name="AboneType">登録するNGのあぼーんの種別</param>
		/// <param name="LifeSpan">アイテムの寿命
		///		-1: アイテムの種類ごとの設定値に従う
		///		0: 寿命を管理されず、自動では削除されない
		///		その他: その日数だけ新たなレスがなければ自動消去</param>
		/// <returns>正常に登録された場合はtrue
		/// すでに登録されていたり、空白文字列を登録しようとした場合はfalse</returns>
		[JaneScriptApi]
		public bool AddNgId(string Item, AboneType AboneType, int LifeSpan) {
			return (bool)base.InvokeMethod("AddNgId", Item, (int)AboneType, LifeSpan);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// NGに新しいアイテムを登録する。</summary>
		/// <remarks>
		/// アクティブなスレビューの再読込によるNGの反映は自動では行われない。
		/// そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
		/// スクリプトでthread.LocalReloadを実行する。</remarks>
		/// <param name="Item"></param>
		/// <param name="AboneType">登録するNGのあぼーんの種別</param>
		/// <param name="LifeSpan">アイテムの寿命
		///		-1: アイテムの種類ごとの設定値に従う
		///		0: 寿命を管理されず、自動では削除されない
		///		その他: その日数だけ新たなレスがなければ自動消去</param>
		/// <returns>正常に登録された場合はtrue
		/// すでに登録されていたり、空白文字列を登録しようとした場合はfalse</returns>
		[JaneScriptApi]
		public bool AddNgWord(string Item, AboneType AboneType, int LifeSpan) {
			return (bool)base.InvokeMethod("AddNgWord", Item, (int)AboneType, LifeSpan);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// アドレスバーを参照するEditオブジェクト
		/// </summary>
		[JaneScriptApi]
		public Edit AddressBar {
			get {
				return new Edit(base.InvokeGet("AddressBar"));
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 板一覧検索バーを参照する<see cref="Edit"/>オブジェクト
		/// </summary>
		[JaneScriptApi]
		public Edit BoardSearchBar {
			get {
				return new Edit(base.InvokeGet("BoardSearchBar"));
			}
		}

		/// <summary>
		/// Janeの板一覧を格納したオブジェクトを取得する。取得したCategoryListにより、
		/// すべての板の列挙やURLからの板、スレの検索が可能。
		/// </summary>
		/// <returns>板一覧</returns>
		[JaneScriptApi]
		public CategoryList CategoryList() {
			return new CategoryList(base.InvokeMethod("CategoryList"));
		}
		
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// 板を閉じる
		/// </summary>
		/// <param name="Item">閉じる対象の板</param>
		[JaneScriptApi]
		public void Close(Board Item) {
			base.InvokeMethod("Close", Item.ComObject);
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレを閉じる
		/// </summary>
		/// <param name="Item">閉じる対象のスレ</param>
		[JaneScriptApi]
		public void Close(ThreadItem Item) {
			base.InvokeMethod("Close", Item.ComObject);
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレを閉じる
		/// </summary>
		/// <param name="Item">閉じる対象のスレ</param>
		[JaneScriptApi]
		public void Close(ViewItem Item) {
			base.InvokeMethod("Close", Item.ComObject);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 文字列のCosine Similarityに基づく比較を行うためのCosSimオブジェクトを作成する
		/// </summary>
		/// <returns>作成されたCosSimオブジェクト</returns>
		[JaneScriptApi]
		public CosSim CreateCosSimObject() {
			return new CosSim(base.InvokeMethod("CreateCosSimObject"));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// グローバル座標系でのマウスカーソルの位置を取得する
		/// </summary>
		/// <returns>カーソル位置情報を格納したNamedVariant(オブジェクトリファレンス参照)
		/// NamedVariant.X カーソルのX座標
		/// NamedVariant.Y カーソルのY座標</returns>
		[JaneScriptApi]
		public NamedVariant CursorPos() {
			return new NamedVariant(base.InvokeMethod("CursorPos"));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// JaneViewの実行ファイルパスを取得する
		/// </summary>
		/// <returns>Jane2ch.exeのフルパス名</returns>
		[JaneScriptApi]
		public string ExeName() {
			return (string)base.InvokeMethod("ExeName");
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// モーダルの入力ダイアログを表示し、ユーザーが入力した文字列を返す
		/// </summary>
		/// <param name="Caption">入力ボックスのタイトルバーに表示する文字列</param>
		/// <param name="InitialText">テキストボックスの文字列の初期値</param>
		/// <returns>ユーザーの入力結果を保持したNamedVariant
		/// ・NamedVariant.Canceled ユーザーがOKをクリックした場合はFalse, OKしないでダイアログを閉じた場合はtrue
		/// ・NamedVariant.Text: String ユーザーが入力した文字列</returns>
		[JaneScriptApi]
		public NamedVariant InputBox(string Caption, string InitialText) {
			return new NamedVariant(base.InvokeMethod("InputBox", Caption, InitialText));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 既存のメニュー項目にスクリプト用メニューを追加する
		/// 追加できる場所はメニューのルートまたはコンテナ(一つ以上のサブメニューを持つ)の項目
		/// </summary>
		/// <param name="MenuName">スクリプト用のメニューを追加したいメニューの名前
		/// (menuconf.iniのセクション名) 例: "MainWnd.MainMenu"</param>
		/// <param name="ItemName">スクリプト用のメニューを追加したいメニューの親アイテム名
		/// (menuconf.iniのメニュー名) 例: "MainWnd.MainMenu"
		/// ヌルストリングの場合はMenuNameのルートが親アイテムになる</param>
		/// <param name="Index">親アイテムの中での順番。Index=0が最上位、親アイテムの項目数よりも
		/// 大きな数字を設定した場合は最下位に追加される</param>
		/// <returns>追加されたMenuItemオブジェクト</returns>
		[JaneScriptApi]
		public MenuItem InsertMenu(string MenuName, string ItemName, int Index) {
			return new MenuItem(base.InvokeMethod("InsertMenu", MenuName, ItemName, Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// URLがビューアが対応する形式の拡張子を持っているかを確認する
		/// (swfは対象外)
		/// </summary>
		/// <param name="URL">画像かどうかを調べたいURL</param>
		/// <returns>URLがビューアで対応した画像の拡張子を持っていればtrue、そうでなければfalse</returns>
		[JaneScriptApi]
		public bool IsImageURL(string URL) {
			return (bool)base.InvokeMethod("IsImageURL", URL);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// アクションの中から呼び出せない処理(メッセージボックスの表示など)をアクションのコンテキストの外で
		/// 安全に呼び出すために使用する
		/// </summary>
		/// <param name="Func">呼び出したい関数
		/// Funcとして設定できるのは、一つのVariantを引数として受け取る関数。
		/// 例: function CalleeFunction (funcObject) {};
		/// Funcの呼び出しはアイドルループなどJaneのシステムがメッセージ処理をするタイミングで行われる</param>
		/// <param name="funcParam">Funcに渡す引数</param>
		[JaneScriptApi]
		public void LateCall(Action<object> Func, object funcParam) {
			LateCallCallbackContainer container = new LateCallCallbackContainer(Func);
			base.InvokeMethod("LateCall", WrapperManager.Proxy.CreateLateCallCallback(container), funcParam);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// トレースに文字列を出力する
		/// </summary>
		/// <param name="Text">トレースに書き出す文字列</param>
		[JaneScriptApi]
		public void Log(string Text) {
			base.InvokeMethod("Log", Text);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 既存のメニュー項目の親アイテム上での位置を調べる。
		/// 特定の位置にメニューを挿入する場合、この関数の結果を元にInsertMenuのIndexを決める
		/// </summary>
		/// <param name="MenuName">親アイテム上での位置を調べたいメニュー項目が属するメニューの名前
		/// (menuconf.iniのセクション名) 例: "MainWnd.MainMenu"</param>
		/// <param name="ItemName">親アイテム上での位置を調べたいメニュー項目の名前
		/// (menuconf.iniのメニュー名) 例: "MainWnd.MainMenu"</param>
		/// <returns>指定したメニュー項目の、親アイテム上での順番(0が最上位)</returns>
		[JaneScriptApi]
		public int MenuIndex(string MenuName, string ItemName) {
			return (int)base.InvokeMethod("MenuIndex", MenuName, ItemName);
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// URLを開く。</summary>
		/// <remarks>対象がビューアで開かれるURLだった場合、Number以降のパラメータは無視される</remarks>
		/// <param name="URL">開きたい対象のURL(文字列)を指定する</param>
		/// <param name="Number">対象がスレの場合、開いてからNumberが示すレス番にジャンプする。それ以外では無視される</param>
		/// <param name="Operation">開くときにサーバからのデータ取得を行うか、ローカルだけで取得を行わないかを設定する</param>
		/// <param name="NewTab">trueならば新しいタブで開くことを強制する
		/// falseならば、現在アクティブなスレタブがスレ表示用のビューならばアクティブタブで、
		/// そうでなければ新しいタブで開く</param>
		/// <param name="Relative">新規タブで開く場合、Relativeがtrueならば現在のアクティブタブの隣に開かれる</param>
		/// <param name="BackGround">開いたタブを選択状態にしない</param>
		[JaneScriptApi]
		public void Open(string URL, int Number, OpenOperation Operation, bool NewTab, bool Relative, bool BackGround) {
			base.InvokeMethod("Open", URL, Number, (int)Operation, NewTab, Relative, BackGround);
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// スレを開く。</summary>
		/// <remarks>対象がビューアで開かれるURLだった場合、Number以降のパラメータは無視される</remarks>
		/// <param name="Thread">開きたい対象のスレを指定する</param>
		/// <param name="Number">対象がスレの場合、開いてからNumberが示すレス番にジャンプする。それ以外では無視される</param>
		/// <param name="Operation">開くときにサーバからのデータ取得を行うか、ローカルだけで取得を行わないかを設定する</param>
		/// <param name="NewTab">trueならば新しいタブで開くことを強制する
		/// falseならば、現在アクティブなスレタブがスレ表示用のビューならばアクティブタブで、
		/// そうでなければ新しいタブで開く</param>
		/// <param name="Relative">新規タブで開く場合、Relativeがtrueならば現在のアクティブタブの隣に開かれる</param>
		/// <param name="BackGround">開いたタブを選択状態にしない</param>
		[JaneScriptApi]
		public void Open(ThreadItem Thread, int Number, OpenOperation Operation, bool NewTab, bool Relative, bool BackGround) {
			base.InvokeMethod("Open", Thread.ComObject, Number, (int)Operation, NewTab, Relative, BackGround);
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// 板を開く。</summary>
		/// <remarks>対象がビューアで開かれるURLだった場合、Number以降のパラメータは無視される</remarks>
		/// <param name="Board">開きたい対象の板を指定する</param>
		/// <param name="Number">対象がスレの場合、開いてからNumberが示すレス番にジャンプする。それ以外では無視される</param>
		/// <param name="Operation">開くときにサーバからのデータ取得を行うか、ローカルだけで取得を行わないかを設定する</param>
		/// <param name="NewTab">trueならば新しいタブで開くことを強制する
		/// falseならば、現在アクティブなスレタブがスレ表示用のビューならばアクティブタブで、
		/// そうでなければ新しいタブで開く</param>
		/// <param name="Relative">新規タブで開く場合、Relativeがtrueならば現在のアクティブタブの隣に開かれる</param>
		/// <param name="BackGround">開いたタブを選択状態にしない</param>
		[JaneScriptApi]
		public void Open(Board Board, int Number, OpenOperation Operation, bool NewTab, bool Relative, bool BackGround) {
			base.InvokeMethod("Open", Board.ComObject, Number, (int)Operation, NewTab, Relative, BackGround);
		}
		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// Windows APIのPeekMessage関数を呼び出し、バッファのWindows Messageを処理する。
		/// 長い時間がかかる処理の途中に挟むことでUIがフリーズするのを防ぐことができるが、
		/// その中で受け付けたユーザー操作により使用中のオブジェクトの状態が変化したり
		/// 破棄される可能性があり、使用には細心の注意と適切な処理を要する
		/// </summary>
		[JaneScriptApi]
		public void ProcessMessages() {
			base.InvokeMethod("ProcessMessages");
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// メッセージダイアログを表示する。WSHのWScript.Echoに対応する。
		/// </summary>
		/// <param name="Text">メッセージボックスに表示する文字列</param>
		[JaneScriptApi]
		public void ShowMessage(string Text) {
			base.InvokeMethod("ShowMessage", Text);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// Windows APIのSleep関数を呼び出し、一定時間だけ動作を停止する
		/// </summary>
		/// <param name="millisec">停止する時間、単位はミリ秒</param>
		[JaneScriptApi]
		public void Sleep(int millisec) {
			base.InvokeMethod("Sleep", millisec);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレビュー検索バーを参照するEditオブジェクト
		/// </summary>
		[JaneScriptApi]
		public Edit ThreadSearchBar {
			get {
				return new Edit(base.InvokeGet("ThreadSearchBar"));
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// Windows APIのtimeGetTimeの値を取得する。
		/// </summary>
		/// <returns>timeGetTime API関数によるシステム時刻</returns>
		[JaneScriptApi]
		public int TimeGetTime() {
			return (int)base.InvokeMethod("TimeGetTime");
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレビューの一覧を保持するViewListオブジェクトを取得する
		/// ViewListから、各スレビューへのアクセスやユーザー定義の新規スレビュー作成が可能
		/// </summary>
		/// <returns>スレビュー一覧を参照するViewListオブジェクト</returns>
		[JaneScriptApi]
		public ViewList ViewList() {
			return new ViewList(base.InvokeMethod("ViewList"));
		}
	}
}
