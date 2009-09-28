/*!
 * @include "_InternalClasses.js"
 * @include "Board.js"
 * @include "Category.js"
 * @include "CategoryList.js"
 * @include "CosSim.js"
 * @include "DatOut.js"
 * @include "Edit.js"
 * @include "MenuItem.js"
 * @include "NamedVariant.js"
 * @include "PopupTargetInfo.js"
 * @include "RangeList.js"
 * @include "ReferredList.js"
 * @include "ResItem.js"
 * @include "Strings.js"
 * @include "ThreadFinder.js"
 * @include "ThreadItem.js"
 * @include "ViewItem.js"
 * @include "ViewList.js"
 */

/**
 * @static
 * @class JaneScript
 */
var JaneScript = {
	/**
	 * 現在アクティブなスレビューのアイテムを取得する
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @return {_JVS.ViewItem} アクティブなViewItemのオブジェクト(オブジェクトリファレンス参照)
	 */
	ActiveView: function(){return new _JVS.ViewItem();},
	
	/**
	 * NGに新しいアイテムを登録する。
	 * 
	 * ※アクティブなスレビューの再読込によるNGの反映は自動では行われない。
	 * そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
	 * スクリプトでthread.LocalReloadを実行する。
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @param {String} Item
	 * @param {int} AboneType 登録するNGのあぼーんの種別
	 * 0: 通常あぼーん
	 * 2: 透明あぼーん
	 * 4: 重要キーワード
	 * @param {int} LiffeSpan アイテムの寿命
	 * -1: アイテムの種類ごとの設定値に従う
	 * 0: 寿命を管理されず、自動では削除されない
	 * その他: その日数だけ新たなレスがなければ自動消去
	 * @return {bool} 正常に登録された場合はtrue
	 * すでに登録されていたり、空白文字列を登録しようとした場合はfalse
	 */
	AddNgName: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NGに新しいアイテムを登録する。
	 * 
	 * ※アクティブなスレビューの再読込によるNGの反映は自動では行われない。
	 * そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
	 * スクリプトでthread.LocalReloadを実行する。
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @param {String} Item
	 * @param {int} AboneType 登録するNGのあぼーんの種別
	 * 0: 通常あぼーん
	 * 2: 透明あぼーん
	 * 4: 重要キーワード
	 * @param {int} LiffeSpan アイテムの寿命
	 * -1: アイテムの種類ごとの設定値に従う
	 * 0: 寿命を管理されず、自動では削除されない
	 * その他: その日数だけ新たなレスがなければ自動消去
	 * @return {bool} 正常に登録された場合はtrue
	 * すでに登録されていたり、空白文字列を登録しようとした場合はfalse
	 */
	AddNgMail: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NGに新しいアイテムを登録する。
	 * 
	 * ※アクティブなスレビューの再読込によるNGの反映は自動では行われない。
	 * そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
	 * スクリプトでthread.LocalReloadを実行する。
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @param {String} Item
	 * @param {int} AboneType 登録するNGのあぼーんの種別
	 * 0: 通常あぼーん
	 * 2: 透明あぼーん
	 * 4: 重要キーワード
	 * @param {int} LiffeSpan アイテムの寿命
	 * -1: アイテムの種類ごとの設定値に従う
	 * 0: 寿命を管理されず、自動では削除されない
	 * その他: その日数だけ新たなレスがなければ自動消去
	 * @return {bool} 正常に登録された場合はtrue
	 * すでに登録されていたり、空白文字列を登録しようとした場合はfalse
	 */
	AddNgId: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NGに新しいアイテムを登録する。
	 * 
	 * ※アクティブなスレビューの再読込によるNGの反映は自動では行われない。
	 * そのような動作をさせたい場合は、これらの関数を実行した後でNGを反映させたいスレに対して
	 * スクリプトでthread.LocalReloadを実行する。
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @param {String} Item
	 * @param {int} AboneType 登録するNGのあぼーんの種別
	 * 0: 通常あぼーん
	 * 2: 透明あぼーん
	 * 4: 重要キーワード
	 * @param {int} LiffeSpan アイテムの寿命
	 * -1: アイテムの種類ごとの設定値に従う
	 * 0: 寿命を管理されず、自動では削除されない
	 * その他: その日数だけ新たなレスがなければ自動消去
	 * @return {bool} 正常に登録された場合はtrue
	 * すでに登録されていたり、空白文字列を登録しようとした場合はfalse
	 */
	AddNgWord: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * アドレスバーを参照するEditオブジェクト
	 * Action：○　LateCall:○　Command:○
	 * @type _JVS.Edit
	 */
	AddressBar: new _JVS.Edit(),
	
	/**
	 * 板一覧検索バーを参照するEditオブジェクト
	 * Action：○　LateCall:○　Command:○
	 * @type _JVS.Edit
	 */
	BoardSearchBar: new _JVS.Edit(),
	
	/**
	 * Janeの板一覧を格納したオブジェクトを取得する。取得したCategoryListにより、
	 * すべての板の列挙やURLからの板、スレの検索が可能。
	 * Action：○　LateCall:○　Command:○
	 * ;
	 */
	CategoryList: new _JVS.CategoryList(),
	
	/**
	 * 板またはスレを閉じる
	 * Action：×　LateCall:○　Command:○
	 * @param {_JVS.Board | _JVS.ThreadItem | _JVS.ViewItem} Item 閉じる対象の板(Boardオブジェクト)またはスレ(ThreadItemオブジェクトまたはViewItemオブジェクト)
	 */
	Close: function(Item){},
	
	/**
	 * 文字列のCosine Similarityに基づく比較を行うためのCosSimオブジェクトを作成する
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @return {_JVS.CosSim} 作成されたCosSimオブジェクト
	 */
	CreateCosSimObject: function(){return new _JVS.CosSim();},
	
	/**
	 * グローバル座標系でのマウスカーソルの位置を取得する
	 * Action：○　LateCall:○　Command:○
	 * @return {_JVS.NamedVariant} カーソル位置情報を格納したNamedVariant
	 * NamedVariant.X カーソルのX座標
	 * NamedVariant.Y カーソルのY座標
	 */
	CursorPos: function(){return new _JVS.NamedVariant();},
	
	/**
	 * JaneViewの実行ファイルパスを取得する
	 * Action：○　LateCall:○　Command:○
	 * @return {String} Jane2ch.exeのフルパス名
	 */
	ExeName: function(){return "C:\\JaneDoeView\\Jane2ch.exe";},
	
	/**
	 * モーダルの入力ダイアログを表示し、ユーザーが入力した文字列を返す
	 * Action：×　LateCall:○　Command:○
	 * @param {String} Caption 入力ボックスのタイトルバーに表示する文字列
	 * @param {String} InitialText テキストボックスの文字列の初期値
	 * @return {_JVS.NamedVariant} ユーザーの入力結果を保持したNamedVariant
	 * ・NamedVariant.Canceled
	 * ユーザーがOKをクリックした場合はFalse, OKしないでダイアログを閉じた場合はtrue
	 * ・NamedVariant.Text: String
	 * ユーザーが入力した文字列
	 */
	InputBox: function(Caption, InitialText){return new _JVS.NamedVariant();},
	
	/**
	 * 既存のメニュー項目にスクリプト用メニューを追加する
	 * 追加できる場所はメニューのルートまたはコンテナ(一つ以上のサブメニューを持つ)の項目
	 * Action：○　LateCall:○　Command:○
	 * @param {String} MenuName スクリプト用のメニューを追加したいメニューの名前
	 * (menuconf.iniのセクション名) 例: "MainWnd.MainMenu"
	 * @param {String} ItenMane スクリプト用のメニューを追加したいメニューの親アイテム名
	 * (menuconf.iniのメニュー名) 例: "MainWnd.MainMenu"
	 * ヌルストリングの場合はMenuNameのルートが親アイテムになる
	 * @param {int} Index 親アイテムの中での順番。Index=0が最上位、親アイテムの項目数よりも
	 * 大きな数字を設定した場合は最下位に追加される
	 * @return {_JVS.MenuItem} 追加されたMenuItemオブジェクト
	 */
	InsertMenu: function(MenuName, ItenMane, Index){return new _JVS.MenuItem();},
	
	/**
	 * URLがビューアが対応する形式の拡張子を持っているかを確認する
	 * (swfは対象外)
	 * Action：○　LateCall:○　Command:○
	 * @param {String} URL 画像かどうかを調べたいURL
	 * @return {Boolean} URLがビューアで対応した画像の拡張子を持っていればtrue、そうでなければfalse
	 */
	IsImageURL: function(URL){return true;},
	
	/**
	 * アクションの中から呼び出せない処理(メッセージボックスの表示など)をアクションのコンテキストの外で
	 * 安全に呼び出すために使用する
	 * Action：○　LateCall:○　Command:○
	 * @param {Function} Func 呼び出したい関数
	 * Funcとして設定できるのは、一つのVariantを引数として受け取る関数。
	 * 例: function CalleeFunction (funcObject) {};
	 * Funcの呼び出しはアイドルループなどJaneのシステムがメッセージ処理をするタイミングで行われる
	 * @param {Object} funcParam Funcに渡す引数
	 */
	LateCall: function(Func, funcParam){},
	
	/**
	 * トレースに文字列を出力する
	 * Action：○　LateCall:○　Command:○
	 * @param {} Text
	 */
	Log: function(Text){},
	
	/**
	 * 既存のメニュー項目の親アイテム上での位置を調べる。
	 * 特定の位置にメニューを挿入する場合、この関数の結果を元にInsertMenuのIndexを決める
	 * Action：○　LateCall:○　Command:○
	 * @param {String} MenuName 親アイテム上での位置を調べたいメニュー項目が属するメニューの名前
	 * (menuconf.iniのセクション名) 例: "MainWnd.MainMenu"
	 * @param {String} ItemName 親アイテム上での位置を調べたいメニュー項目の名前
	 * (menuconf.iniのメニュー名) 例: "MainWnd.MainMenu"
	 * @return {Number} 指定したメニュー項目の、親アイテム上での順番(0が最上位)
	 */
	MenuIndex: function(MenuName, ItemName){return 0;},
	
	/**
	 * URLまたはスレ、板を開く。
	 * ※対象がビューアで開かれるURLだった場合、Number以降のパラメータは無視される
	 * Action：×　LateCall:○　Command:○
	 * @param {String|ThreadItem|Board} target URL/Thread/Board
	 * 開きたい対象のURL(文字列)またはスレ(ThreadItemオブジェクト)または板(Boardオブジェクト)の
	 * いずれかを指定する
	 * @param {int} Number 対象がスレの場合、開いてからNumberが示すレス番にジャンプする。それ以外では無視される
	 * @param {int} Operation 開くときにサーバからのデータ取得を行うか、ローカルだけで取得を行わないかを設定する
	 * 0: なにもしない　※まったく無意味だが、内部処理上必要なために存在
	 * 1: ローカル
	 * 2: 適宜取得
	 * 3:更新チェック
	 * 4: 時間に応じて
	 * @param {bool} NewTab trueならば新しいタブで開くことを強制する
	 * falseならば、現在アクティブなスレタブがスレ表示用のビューならばアクティブタブで、
	 * そうでなければ新しいタブで開く
	 * @param {bool} Relative 新規タブで開く場合、Relativeがtrueならば現在のアクティブタブの隣に開かれる
	 * @param {bool} BackGround 開いたタブを選択状態にしない
	 */
	Open: function(target, Number, Operation, NewTab, Relative, BackGround){},
	
	/**
	 * Windows APIのPeekMessage関数を呼び出し、バッファのWindows Messageを処理する。
	 * 長い時間がかかる処理の途中に挟むことでUIがフリーズするのを防ぐことができるが、
	 * その中で受け付けたユーザー操作により使用中のオブジェクトの状態が変化したり
	 * 破棄される可能性があり、使用には細心の注意と適切な処理を要する
	 */
	ProcessMessages: function(){},
	
	/**
	 * メッセージダイアログを表示する。WSHのWScript.Echoに対応する。
	 * Action：×　LateCall:○　Command:○
	 * @param {String} Text メッセージボックスに表示する文字列
	 */
	ShowMessage: function(Text){},
	
	/**
	 * Windows APIのSleep関数を呼び出し、一定時間だけ動作を停止する
	 * Action：○　LateCall:○　Command:○
	 * @param {int} millisec 停止する時間、単位はミリ秒
	 */
	Sleep: function(millisec){},
	
	/**
	 * スレビュー検索バーを参照するEditオブジェクト
	 * Action：○　LateCall:○　Command:○
	 * @type _JVS.Edit
	 */
	ThreadSearchBar: new _JVS.Edit(),
	
	/**
	 * Windows APIのtimeGetTimeの値を取得する。
	 * Action：○　LateCall:○　Command:○
	 * @return {int} timeGetTime API関数によるシステム時刻
	 */
	TimeGetTime: function(){return 0;},
	
	/**
	 * スレビューの一覧を保持するViewListオブジェクトを取得する
	 * ViewListから、各スレビューへのアクセスやユーザー定義の新規スレビュー作成が可能
	 * 
	 * Action：○　LateCall:○　Command:○
	 * 
	 * @return {_JVS.ViewList} スレビュー一覧を参照するViewListオブジェクト
	 */
	ViewList: function(){return new _JVS.ViewList();}
};

