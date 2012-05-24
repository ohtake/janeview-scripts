/*!
 * HeadlineAutoNavigation
 * 
 * ����headline�Ȃǂ�headline�X�����J������A�Ώۂ̃X���b�h�������ŊJ���B
 * 
 * @include "../janescript/JaneScript.js"
 */

/**
 * �ݒ�p�̃I�u�W�F�N�g�B
 * �\�[�X��ł��̃I�u�W�F�N�g�̏����l�����������ăJ�X�^�}�C�Y�\�B
 */
var settings = {
	/**
	 * ���j���[���ږ��B���̃��j���[��I�����邱�Ƃŋ@�\�̗L��������Jane���s���ɐ؂�ւ�����B
	 * @type String
	 */
	title: "headline�X������ΏۃX���������ŊJ��",
	/**
	 * �N�����ɋ@�\���L���ɂȂ��Ă��邩�ۂ��B
	 * @type Boolean
	 */
	enabled: true,
	/**
	 * �ΏۃX���b�h���J���Ƃ��Ƀo�b�N�O���E���h�ŊJ�����ۂ��B
	 * Jane�̐ݒ�̊�{�A����A�X���𗠂ŊJ���̐ݒ�Ƃ��킹�Ă����Ƃ悢�B
	 * @type Boolean
	 */
	background: true,
	/**
	 * headline�X������邩�ۂ��B
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
	// ���ݐݒ�̃`�F�b�N
	if(!settings.enabled) return;
	// �ʏ�̃X���r���[�ł̂�
	if(sessionType !== "ThreadView") return;
	// �w�b�h���C�����̔���
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
		JaneScript.Log("�w�b�h���C���X���Ɣ��f���ꂽ�����X����2�ł͂Ȃ������B");
		return;
	}
	var res2 = sessionObject.thread.GetRes(2);
	var uris = res2.Msg.match(regexThreadUri);
	if(!uris){
		JaneScript.Log("2���X�ڂ���X��URL��������Ȃ������B");
		return;
	}
	if(uris.length >= 2){
		JaneScript.Log("2���X�ڂ��畡���̃X��URL�������Ă��܂����B");
		return;
	}
	var uri = uris[0];
	var tf = JaneScript.CategoryList.CreateThreadFinder();
	if(0 === tf.Find(uri)){
		JaneScript.Log("2���X�ڂɂ���URI��Jane�ŏ����ł��Ȃ��݂����B");
		return;
	}
	
	// JaneScript.Open �� Action �ł� LateCall �ł��ĂׂȂ��̂ŃR�}���h���C�������ŃX�����J��
	if(!shell){
		shell = new ActiveXObject("WScript.Shell");
	}
	shell.Run("\"" + JaneScript.ExeName() + "\" " + uri + (settings.background ? " -b": ""));
	
	if(settings.closeHeadline){
		// JaneScript.Close �� Action �ł͎g���Ȃ��̂� LateCall
		JaneScript.LateCall(function(){
			JaneScript.Close(thread);
		}, null);
	}
}
