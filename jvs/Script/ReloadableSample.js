/*!
 * �����ēǂݍ��݂̃T���v���X�N���v�g�B
 * �{�X�N���v�g�t�@�C���� ReloadableScripts.js ����ǂݍ��܂��̂� ScriptIndex.txt �ɂ͋L�q���Ȃ��B
 * 
 * �O���R�}���h�I�Ɏg���X�N���v�g�ł͈�ʂɃ��j���[�̓o�^���s�����A
 * ReloadableScripts.js �Ń��j���[�̓o�^���s���̂Ŗ{�X�N���v�g���ł͓o�^���Ȃ��B
 * ReloadableScripts.js ���쐬�������j���[���N���b�N�����
 * �{�X�N���v�g�� Reloadable_OnExec ���Ă΂��̂ł����ɏ�������������B
 * 
 * �����ēǂݍ��݂��������钼�O�����
 * ReloadableScripts.js �� Finalize �֐����Ă΂ꂽ�Ƃ���
 * �{�X�N���v�g�� Reloadable_OnUnload ���Ă΂��B
 * Jane �����炱�̃X�N���v�g�̃I�u�W�F�N�g�ɎQ�Ƃ��������Ă�����Q�Ƃ�؂��Ă������ƁB
 * 
 * ReloadableScripts.js ����ǂݍ��񂾂Ƃ��ɂ� Finalize �֐����Ă΂�Ȃ��̂ŁA
 * Finalize�֐�������̂Ȃ�� Reloadable_OnUnload �֐����� 
 * �����I�� Finalize �֐����Ăяo���̂��p�^�[���ł���B
 * 
 * �J�����I����Ė{�ԗp�̃X�N���v�g�Ɉڍs����ɂ́A
 * ���j���[�̒ǉ�������ǉ����A���̃��j���[�I������
 * Reloadable_OnExec �̓��e�����s�����悤�ɂ���΂����B
 * Reloadable_OnUnload �͍폜�����u�ő��v�̂͂��B
 * 
 * @include "../janescript/JaneScript.js"
 */

JaneScript.Log("JS OnLoad");

function Reloadable_OnExec(){
	JaneScript.Log("JS OnExec");
}
function Reloadable_OnUnload(){
	JaneScript.Log("JS OnUnload");
}
