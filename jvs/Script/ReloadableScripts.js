/*!
 * 外部のスクリプトファイルのタイムスタンプが変更されたら、それをリロードしてから実行する。
 * スクリプトの開発時に Jane の再起動をするのが面倒なときに利用するとよい。
 * ResAction 系には未対応。
 * 
 * 外部スクリプトが読み込まれるタイミング：
 * ・Janeが起動して ReloadableScripts.js が読み込まれたとき
 * ・メニューから外部スクリプトを選んだときにそのファイルのタイムスタンプが更新されていたとき
 * 
 * 外部スクリプトで定義しておかなければいけない関数：
 * ・Reloadable_OnExec
 *   ・メニューから外部スクリプトを選んだとき (再読み込みが起きるときは再読み込みが先)
 * ・Reloadable_OnUnload
 *   ・再読み込みが発生する直前 (実行される内容は再読み込み前のスクリプト)
 *   ・この ReloadableScripts.js の Finalize が呼ばれるとき
 * 
 * ScriptIndex.txt に記述する内容は、この ReloadableScripts.js だけでよい。
 * 本スクリプトから読み込まれるスクリプトを ScriptIndex.txt に書く必要はない。
 * 自動再読み込みの対象となるスクリプトを変更するには scripts グローバル変数を書き換えておくこと。
 * 
 * ThreadItem#Obj などのようにスクリプトごとに独立した領域が与えられていても、
 * ReloadableScripts.js から読み込んだスクリプトでは共通の領域となる。
 * ThreadItem#Obj などを使うスクリプトを同時に ReloadableScripts.js から読み込ませないほうがいい。
 * 
 * ReloadableSample.js や ReloadableSample.vbs も参照のこと。
 * 
 * @include "../janescript/JaneScript.js"
 */

var title = "ReloadableScripts";

/**
 * 
 * @param {String} filepath
 * @param {String} language
 * @class ReloadableScriptInfo
 * @constructor
 */
var ReloadableScriptInfo = function(filepath, language){
	this.filepath = filepath;
	this.language = language;
};
ReloadableScriptInfo.prototype.lastModified = null;
ReloadableScriptInfo.prototype.scriptControl = null;

var fso = new ActiveXObject("Scripting.FileSystemObject");
var scriptDirPath = fso.GetFile(JaneScript.ExeName()).ParentFolder.Path + "\\Script\\";

/**
 * 自動再読み込みの対象となるスクリプトの配列。
 * 
 * @type ReloadableScriptInfo[]
 */
var scripts = [
	new ReloadableScriptInfo(scriptDirPath + "ReloadableSample.js", "JScript"),
	new ReloadableScriptInfo(scriptDirPath + "ReloadableSample.vbs", "VBScript")
];

/**
 * 
 * @param {ReloadableScriptInfo} scriptInfo
 */
function LoadScript(scriptInfo){
	JaneScript.Log(title + ": 外部スクリプトのロード開始 " + scriptInfo.filepath);
	var file = fso.GetFile(scriptInfo.filepath);
	scriptInfo.lastModified = "" + file.DateLastModified;//HACK インスタンスで直接比較する方法がわからないので文字列で
	var body;
	var stream = file.OpenAsTextStream(1,0); //リードモードでASCII
	try{
		body = stream.ReadAll();
	}finally{
		stream.close();
	}
	scriptInfo.scriptControl = new ActiveXObject("ScriptControl");
	scriptInfo.scriptControl.Language = scriptInfo.language;
	scriptInfo.scriptControl.AddObject("JaneScript", JaneScript, false);
	scriptInfo.scriptControl.AddCode(body);
	JaneScript.Log(title + ": 外部スクリプトのロード終了 " + scriptInfo.filepath);
}
/**
 * 
 * @param {ReloadableScriptInfo} scriptInfo
 */
function UnloadScript(scriptInfo){
	JaneScript.Log(title + ": 外部スクリプトのアンロード開始 " + scriptInfo.filepath);
	scriptInfo.scriptControl.Run("Reloadable_OnUnload");
	scriptInfo.scriptControl.Reset(); // THINK 不要かも
	scriptInfo.scriptControl = null; // THINK 不要かも
	JaneScript.Log(title + ": 外部スクリプトのアンロード終了 " + scriptInfo.filepath);
}
/**
 * メニューがクリックされたときのイベントハンドラを作成する。
 * @param {ReloadableScriptInfo} scriptInfo
 * @return {Function}
 */
function CreateHandler(scriptInfo){
	return function(menuObject, targetInfo){
		var file = fso.GetFile(scriptInfo.filepath);
		if(scriptInfo.lastModified != "" + file.DateLastModified){
			// タイムスタンプが変わっていたので再読み込み
			UnloadScript(scriptInfo);
			LoadScript(scriptInfo);
		}
		scriptInfo.scriptControl.Run("Reloadable_OnExec");
	};
}

//メインメニューの最後にメニューアイテムを追加
var menu = JaneScript.InsertMenu("MainWnd.MainMenu", "", 1000);
menu.Caption = title;

var submenus = [];

for(var i=0; i<scripts.length; i++){
	var si = scripts[i];
	LoadScript(si);
	var submenu = menu.Insert(menu.Count);
	submenu.Caption = si.filepath;
	submenu.OnClick = CreateHandler(si);
	submenus.push(submenu); // グローバル変数で持っておくなどしておかないとメニューから消えちゃう
}

function Finalize(){
	for(var i=0; i<scripts.length; i++){
		UnloadScript(scripts[i]);
	}
}
