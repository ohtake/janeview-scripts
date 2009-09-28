/*!
 * �O���̃X�N���v�g�t�@�C���̃^�C���X�^���v���ύX���ꂽ��A����������[�h���Ă�����s����B
 * �X�N���v�g�̊J������ Jane �̍ċN��������̂��ʓ|�ȂƂ��ɗ��p����Ƃ悢�B
 * ResAction �n�ɂ͖��Ή��B
 * 
 * �O���X�N���v�g���ǂݍ��܂��^�C�~���O�F
 * �EJane���N������ ReloadableScripts.js ���ǂݍ��܂ꂽ�Ƃ�
 * �E���j���[����O���X�N���v�g��I�񂾂Ƃ��ɂ��̃t�@�C���̃^�C���X�^���v���X�V����Ă����Ƃ�
 * 
 * �O���X�N���v�g�Œ�`���Ă����Ȃ���΂����Ȃ��֐��F
 * �EReloadable_OnExec
 *   �E���j���[����O���X�N���v�g��I�񂾂Ƃ� (�ēǂݍ��݂��N����Ƃ��͍ēǂݍ��݂���)
 * �EReloadable_OnUnload
 *   �E�ēǂݍ��݂��������钼�O (���s�������e�͍ēǂݍ��ݑO�̃X�N���v�g)
 *   �E���� ReloadableScripts.js �� Finalize ���Ă΂��Ƃ�
 * 
 * ScriptIndex.txt �ɋL�q������e�́A���� ReloadableScripts.js �����ł悢�B
 * �{�X�N���v�g����ǂݍ��܂��X�N���v�g�� ScriptIndex.txt �ɏ����K�v�͂Ȃ��B
 * �����ēǂݍ��݂̑ΏۂƂȂ�X�N���v�g��ύX����ɂ� scripts �O���[�o���ϐ������������Ă������ƁB
 * 
 * ThreadItem#Obj �Ȃǂ̂悤�ɃX�N���v�g���ƂɓƗ������̈悪�^�����Ă��Ă��A
 * ReloadableScripts.js ����ǂݍ��񂾃X�N���v�g�ł͋��ʂ̗̈�ƂȂ�B
 * ThreadItem#Obj �Ȃǂ��g���X�N���v�g�𓯎��� ReloadableScripts.js ����ǂݍ��܂��Ȃ��ق��������B
 * 
 * ReloadableSample.js �� ReloadableSample.vbs ���Q�Ƃ̂��ƁB
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
 * �����ēǂݍ��݂̑ΏۂƂȂ�X�N���v�g�̔z��B
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
	JaneScript.Log(title + ": �O���X�N���v�g�̃��[�h�J�n " + scriptInfo.filepath);
	var file = fso.GetFile(scriptInfo.filepath);
	scriptInfo.lastModified = "" + file.DateLastModified;//HACK �C���X�^���X�Œ��ڔ�r������@���킩��Ȃ��̂ŕ������
	var body;
	var stream = file.OpenAsTextStream(1,0); //���[�h���[�h��ASCII
	try{
		body = stream.ReadAll();
	}finally{
		stream.close();
	}
	scriptInfo.scriptControl = new ActiveXObject("ScriptControl");
	scriptInfo.scriptControl.Language = scriptInfo.language;
	scriptInfo.scriptControl.AddObject("JaneScript", JaneScript, false);
	scriptInfo.scriptControl.AddCode(body);
	JaneScript.Log(title + ": �O���X�N���v�g�̃��[�h�I�� " + scriptInfo.filepath);
}
/**
 * 
 * @param {ReloadableScriptInfo} scriptInfo
 */
function UnloadScript(scriptInfo){
	JaneScript.Log(title + ": �O���X�N���v�g�̃A�����[�h�J�n " + scriptInfo.filepath);
	scriptInfo.scriptControl.Run("Reloadable_OnUnload");
	scriptInfo.scriptControl.Reset(); // THINK �s�v����
	scriptInfo.scriptControl = null; // THINK �s�v����
	JaneScript.Log(title + ": �O���X�N���v�g�̃A�����[�h�I�� " + scriptInfo.filepath);
}
/**
 * ���j���[���N���b�N���ꂽ�Ƃ��̃C�x���g�n���h�����쐬����B
 * @param {ReloadableScriptInfo} scriptInfo
 * @return {Function}
 */
function CreateHandler(scriptInfo){
	return function(menuObject, targetInfo){
		var file = fso.GetFile(scriptInfo.filepath);
		if(scriptInfo.lastModified != "" + file.DateLastModified){
			// �^�C���X�^���v���ς���Ă����̂ōēǂݍ���
			UnloadScript(scriptInfo);
			LoadScript(scriptInfo);
		}
		scriptInfo.scriptControl.Run("Reloadable_OnExec");
	};
}

//���C�����j���[�̍Ō�Ƀ��j���[�A�C�e����ǉ�
var menu = JaneScript.InsertMenu("MainWnd.MainMenu", "", 1000);
menu.Caption = title;

var submenus = [];

for(var i=0; i<scripts.length; i++){
	var si = scripts[i];
	LoadScript(si);
	var submenu = menu.Insert(menu.Count);
	submenu.Caption = si.filepath;
	submenu.OnClick = CreateHandler(si);
	submenus.push(submenu); // �O���[�o���ϐ��Ŏ����Ă����Ȃǂ��Ă����Ȃ��ƃ��j���[����������Ⴄ
}

function Finalize(){
	for(var i=0; i<scripts.length; i++){
		UnloadScript(scripts[i]);
	}
}
