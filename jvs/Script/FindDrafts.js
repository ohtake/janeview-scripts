/*!
 * 草稿を保存しているスレを列挙する。
 * 
 * @include "../janescript/JaneScript.js"
 */

var title = "草稿一覧";
var menuTitle1 = "草稿の一覧を書き出す";
var menuTitle2 = "草稿の一覧を内容つきで書き出す";

var messageFirst = "<b>草稿を検索中です。検索終了と表示されるまで検索は終わっていません。</b><br><br>";
var messageLast = "<br><br><b>草稿の検索が終了しました。</b>";

/**
 * 
 * @param {bool} includeContents
 */
function FindDrafts(includeContents){
	var cl = JaneScript.CategoryList;
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	
	var nv = JaneScript.ViewList().NewView(false, false);
	try{
		nv.TabText = title;
		nv.ExtraTitle = title;
		var datout = nv.QueryDatOut();
		nv.WriteSkin("");
		datout.WriteHTML(messageFirst);
		datout.Flush();
		for(var i=0; i<cl.Count; i++){
			var category = cl.Items(i);
			if(!fso.FolderExists(category.LogDir)) continue;
			for(var j=0; j<category.Count; j++){
				var board = category.Items(j);
				board.Load();
				
				if(!fso.FolderExists(board.LogDir)) continue;
				
				// HACK NewThread.mns の置き場所がJaneView.txtの記述と違うようなのでそのための追加コード
				// カテゴリのディレクトリに "板名NewThread.mns" となってるっぽい
				var boardDraftFilePath = category.LogDir + "\\" + board.Name + "NewThread.mns";
				if(fso.FileExists(boardDraftFilePath)){
					WriteBoard(datout, board);
					if(includeContents) WriteTextFileContent(datout, fso.GetFile(boardDraftFilePath));
				}
				
				// 板ディレクトリ内の *.mns ファイルが草稿ファイル
				// NewThread.mns は新規スレ
				// 1234567890.mns は通常のレス
				var fileEnum = new Enumerator(fso.GetFolder(board.LogDir).Files);
				for(;!fileEnum.atEnd(); fileEnum.moveNext()){ //MSDNでは Enumerator を使わずに for in で動くとのことらしいが動かない
					var file = fileEnum.item();
					/**
					 * ファイル名の拡張子以外と拡張子のはず
					 * @type String[]
					 */
					var names = file.Name.split(".");
					if(names.length != 2) continue; // ドットが1つじゃない
					if(names[1] != "mns") continue; // 拡張子が mns じゃない
					
					// mnsファイル発見
					if(names[0] == "NewThread"){
						WriteBoard(datout, board);
					}else{
						WriteThread(datout, board.FindThread(names[0]));
					}
					if(includeContents) WriteTextFileContent(datout, file);
				}
				JaneScript.ProcessMessages();
			}
			JaneScript.ProcessMessages();
		}
		datout.WriteHTML(messageLast);
	} catch(e) {
		if ((e.number & 0xFFFF) != 0x8001){
			//0x8001は処理中にviewItemが閉じられると発生する
			throw e; //0x8001以外の場合は何か別のエラーなので例外を再生成
		}
	} finally {
		if (nv.Connected) nv.EndDatOut();
	}
}

/**
 * 
 * @param {_JVS.DatOut} datout
 * @param {_JVS.Board} board
 */
function WriteBoard(datout, board){
	datout.WriteHTML(
		'<dt>'
		+ ToHtml(board.Category.Name)
		+ ' [<a href="' + board.Url + '">' + ToHtml(board.Name) + '</a>]'
		+ '</dt>');
	datout.WriteBR();
}

/**
 * 
 * @param {_JVS.DatOut} datout
 * @param {_JVS.ThreadItem} thread
 */
function WriteThread(datout, thread){
	var board = thread.Board;
	datout.WriteHTML(
		'<dt>'
		+ ToHtml(board.Category.Name)
		+ ' [<a href="' + board.Url + '">' + ToHtml(board.Name) + '</a>] '
		+ '<a href="' + thread.URL + '">' + ToHtml(thread.Title) + '</a>'
		+ '</dt>');
	datout.WriteBR();
}

/**
 * 
 * @param {_JVS.DatOut} datout
 * @param {} file FileSystemObject の File オブジェクト
 */
function WriteTextFileContent(datout, file){
	var text;
	var stream = file.OpenAsTextStream(1,0); //リードモードでASCII
	try{
		text = stream.ReadAll();
	}finally{
		stream.close();
	}
	datout.WriteHTML("<dd>" + ToHtml(text) + "</dd>");
	datout.WriteBR();
}

/**
 * 
 * @param {String} text
 * @return {String}
 */
function ToHtml(text){
	//HTMLエスケープ
	text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	//改行
	text = text.replace(/\r\n/g, "<br>");
	return text;
}

//検索メニューの一番下にメニューアイテムを追加
var menu1 = JaneScript.InsertMenu("MainWnd.MainMenu", "Find1", 1000);
menu1.Caption = menuTitle1;
menu1.OnClick = function(m, t){
	FindDrafts(false);
};
var menu2 = JaneScript.InsertMenu("MainWnd.MainMenu", "Find1", 1000);
menu2.Caption = menuTitle2;
menu2.OnClick = function(m, t){
	FindDrafts(true);
};
