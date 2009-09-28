/*!
 * ���e��ۑ����Ă���X����񋓂���B
 * 
 * @include "../janescript/JaneScript.js"
 */

var title = "���e�ꗗ";
var menuTitle1 = "���e�̈ꗗ�������o��";
var menuTitle2 = "���e�̈ꗗ����e���ŏ����o��";

var messageFirst = "<b>���e���������ł��B�����I���ƕ\�������܂Ō����͏I����Ă��܂���B</b><br><br>";
var messageLast = "<br><br><b>���e�̌������I�����܂����B</b>";

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
				
				// HACK NewThread.mns �̒u���ꏊ��JaneView.txt�̋L�q�ƈႤ�悤�Ȃ̂ł��̂��߂̒ǉ��R�[�h
				// �J�e�S���̃f�B���N�g���� "��NewThread.mns" �ƂȂ��Ă���ۂ�
				var boardDraftFilePath = category.LogDir + "\\" + board.Name + "NewThread.mns";
				if(fso.FileExists(boardDraftFilePath)){
					WriteBoard(datout, board);
					if(includeContents) WriteTextFileContent(datout, fso.GetFile(boardDraftFilePath));
				}
				
				// �f�B���N�g������ *.mns �t�@�C�������e�t�@�C��
				// NewThread.mns �͐V�K�X��
				// 1234567890.mns �͒ʏ�̃��X
				var fileEnum = new Enumerator(fso.GetFolder(board.LogDir).Files);
				for(;!fileEnum.atEnd(); fileEnum.moveNext()){ //MSDN�ł� Enumerator ���g�킸�� for in �œ����Ƃ̂��Ƃ炵���������Ȃ�
					var file = fileEnum.item();
					/**
					 * �t�@�C�����̊g���q�ȊO�Ɗg���q�̂͂�
					 * @type String[]
					 */
					var names = file.Name.split(".");
					if(names.length != 2) continue; // �h�b�g��1����Ȃ�
					if(names[1] != "mns") continue; // �g���q�� mns ����Ȃ�
					
					// mns�t�@�C������
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
			//0x8001�͏�������viewItem��������Ɣ�������
			throw e; //0x8001�ȊO�̏ꍇ�͉����ʂ̃G���[�Ȃ̂ŗ�O���Đ���
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
 * @param {} file FileSystemObject �� File �I�u�W�F�N�g
 */
function WriteTextFileContent(datout, file){
	var text;
	var stream = file.OpenAsTextStream(1,0); //���[�h���[�h��ASCII
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
	//HTML�G�X�P�[�v
	text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	//���s
	text = text.replace(/\r\n/g, "<br>");
	return text;
}

//�������j���[�̈�ԉ��Ƀ��j���[�A�C�e����ǉ�
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
