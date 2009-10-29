/*!
 * HeadlineAutoNavigation
 * 
 * 速報headline板などのheadlineスレを開いたら、対象のスレッドを自動で開く。
 * 
 * @include "../janescript/JaneScript.js"
 */

/**
 * 設定用のオブジェクト。
 * ソース上でこのオブジェクトの初期値を書き換えてカスタマイズ可能。
 */
var settings = {
	/**
	 * メニュー項目名。このメニューを選択することで機能の有効無効をJane実行時に切り替えられる。
	 * @type String
	 */
	title: "headlineスレから対象スレを自動で開く",
	/**
	 * 起動時に機能が有効になっているか否か。
	 * @type Boolean
	 */
	enabled: true,
	/**
	 * 対象スレッドを開くときにバックグラウンドで開くか否か。
	 * Janeの設定の基本、操作、スレを裏で開くの設定とあわせておくとよい。
	 * @type Boolean
	 */
	background: true,
	/**
	 * headlineスレを閉じるか否か。
	 * @type Boolean
	 */
	closeHeadline: true
};

var regexThreadUri = /http:\/\/[-.a-z0-9]+\/test\/read\.cgi\/[a-z0-9]+\/[0-9]+\//;
var shell;

var menu =  JaneScript.InsertMenu("MainWnd.MainMenu", "MenuOpt", 1000);
menu.Caption = settings.title;
menu.Checked = settings.enabled;
menu.OnClick = function(){
	settings.enabled = !settings.enabled;
	menu.Checked = settings.enabled;
};

/**
 * 
 * @class SessionObject
 * @constructor
 * @param {_JVS.ThreadItem} thread
 */
function SessionObject(thread){
	/**
	 * 
	 * @type _JVS.ThreadItem
	 */
	this.thread = thread;
}

/**
 * 
 * @param {_JVS.ThreadItem} thread
 * @param {String} sessionType
 */
function ResActionPrepare(thread, sessionType){
	// 現在設定のチェック
	if(!settings.enabled) return;
	// 通常のスレビューでのみ
	if(sessionType !== "ThreadView") return;
	// ヘッドラインかの判定
	if(thread.URL.indexOf("http://headline.") !== 0) return;
	
	return new SessionObject(thread);
}

/**
 * 
 * @param {SessionObject} sessionObject
 */
function ResActionFinish(sessionObject){
	var thread = sessionObject.thread;
	
	if(thread.Lines !== 2){
		JaneScript.Log("ヘッドラインスレと判断されたがレス数が2ではなかった。");
		return;
	}
	var res2 = sessionObject.thread.GetRes(2);
	var uris = res2.Msg.match(regexThreadUri);
	if(!uris){
		JaneScript.Log("2レス目からスレURLを見つけれなかった。");
		return;
	}
	if(uris.length >= 2){
		JaneScript.Log("2レス目から複数のスレURLを見つけてしまった。");
		return;
	}
	var uri = uris[0];
	var tf = JaneScript.CategoryList.CreateThreadFinder();
	if(0 === tf.Find(uri)){
		JaneScript.Log("2レス目にあるURIがJaneで処理できないみたい。");
		return;
	}
	
	// JaneScript.Open は Action でも LateCall でも呼べないのでコマンドライン引数でスレを開く
	if(!shell){
		shell = new ActiveXObject("WScript.Shell");
	}
	shell.Run("\"" + JaneScript.ExeName() + "\" " + uri + (settings.background ? " -b": ""));
	
	if(settings.closeHeadline){
		// JaneScript.Close は Action では使えないので LateCall
		JaneScript.LateCall(function(){
			JaneScript.Close(thread);
		}, null);
	}
}
