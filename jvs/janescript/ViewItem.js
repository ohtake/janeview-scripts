/*!
 * @include "_InternalClasses.js"
 */

/**
 * �Q�Ɛ��viewItem�̎��̂����݂��Ă��邩�ǂ����BviewItem�̓X�N���v�g���Q�Ƃ�ێ����Ă��Ă�
 * ���[�U�[����ŃX���r���[��|�b�v�A�b�v��������Ύ��̂��폜����Ă��܂��̂ŁA
 * ���̂悤�ȏꍇ�ɂ�Connected��false�ɂȂ�A�N�Z�X���s�\�ɂȂ�
 * 
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.ViewItem.prototype.Connected = true;

/**
 * QueryDatOut�Ŏ擾����DatOut�I�u�W�F�N�g��disconnect���A������̏����o�����I������
 * viewItem�I�u�W�F�N�g�͎Q�ƃJ�E���g���[���ɂȂ�ƃK�x�[�W�R���N�g�Ŏ����I��EndDatOut��
 * �Ăяo���̂Œʏ��EndDatOut�𖾎��I�ɌĂяo���K�v�͂Ȃ����AviewItem�I�u�W�F�N�g���p������
 * �O���[�o���ϐ��Ȃǂɕێ�����ꍇ�͕�����o�͂̏I�����EndDatOut���m���ɌĂяo���K�v������B
 * �v���O���~���O��AQueryDatOut�ȍ~�̐߂�try catch finally���Ŋ���Afinally�̒���EndDatOut��
 * �Ăяo���̂��D�܂���
 * 
 * Action�F�~�@LateCall:���@Command:��
 */
_JVS.ViewItem.prototype.EndDatOut = function(){};

/**
 * �X���\���p�ȊO�̒��o�Ȃǂ̃X���r���[�ŃX���^�C���ɕ\������镶������擾/�w�肷��
 * �X���\�����̃X���r���[�ł�����͉\�����A�X���^�C���ɂ͔��f����Ȃ�
 * viewItem���|�b�v�A�b�v�̏ꍇ�ɂ͑��삪��������A�擾����Ə�ɋ󔒕�����
 * 
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ViewItem.prototype.ExtraTitle = "";

/**
 * �L�����b�g��\�����Ă���ꍇ�́A���̃X���r���[�̃L�����b�g�̈ʒu�ɂ��郊���N��href�B
 * �L�����b�g��\����Ώۂ��|�b�v�A�b�v�̏ꍇ�́A���O�ɃN���b�N���������N�B
 * �����̈ʒu�������N�łȂ������ꍇ�͋󔒕�����
 * 
 * Action�F���@LateCall:���@Command:��
 */
_JVS.ViewItem.prototype.FocusedLink = "";

/**
 * �X���\���p�ȊO�̒��o�Ȃǂ̃X���r���[�ŃX���^�u�̃}�E�X�I�[�o�[�ɂ��\�������q���g�̕������
 * �擾/�w�肷��B
 * �X���\�����̃X���r���[�ł�����͉\�����A�q���g�ɂ͔��f����Ȃ�
 * viewItem���|�b�v�A�b�v�̏ꍇ�ɂ͑��삪��������A�擾����Ə�ɋ󔒕�����
 * 
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ViewItem.prototype.HintText = "";

/**
 * �V�X�e���ł͎g�p/���䂵�Ȃ��B
 * �X�N���v�g������viewItem�ɌŗL�̏���ێ����������ꍇ�ɂ��̃v���p�e�B�ɑ�����Ă����B
 * �X�N���v�g���Ƃɕۑ��̈悪�������Ă���̂ŁA����viewItem�ɑ΂���A.js��B.js���ʁX��
 * viewItem.Obj��ݒ�ł���B�t�ɁA���̃X�N���v�g���ݒ肵��Obj���Q�Ƃ��邱�Ƃ͂ł��Ȃ��B
 * �X�N���v�g����̎Q�Ƃ��Ȃ��Ȃ��Ă��A���̂̃X���r���[�������Ă��Ȃ����Obj�̓��e��
 * �ێ�����A�ēx�X�N���v�g����Q�Ƃ���Βl���擾�ł���
 * 
 * Action�F���@LateCall:���@Command:��
 * @type Object
 */
_JVS.ViewItem.prototype.Obj;

/**
 * �X���r���[�ɏ������ނ��߂�DatOut�I�u�W�F�N�g�𐶐����A�X���r���[���������ݑҋ@��Ԃɂ���
 * ���̊֐��̑Ώۂɂł���viewItem�͂��̃X�N���v�g��viewList.NewView�Ő����������̂Ɍ����A
 * Jane�̕W���g�ݍ��݃R�}���h�ɂ��X���r���[�⒊�o�r���[�A���̃X�N���v�g�����������X���r���[��
 * �΂��Ă��̊֐������s����ƃG���[�ɂȂ�B
 * QueryDatOut���Ăяo���ď������ݏ������I��������AEndDatOut���Ăяo���K�v������
 * 
 * @return {_JVS.DatOut} �X���r���[�ɏ������ނ��߂�DatOut�I�u�W�F�N�g
 */
_JVS.ViewItem.prototype.QueryDatOut = function(){return new _JVS.DatOut();};

/**
 * �X���r���[/�|�b�v�A�b�v�Ŕ͈͑I�����Ă��镶����B�͈͑I�����Ă��Ȃ��ꍇ�͋󔒕�����B
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ViewItem.prototype.Selection = "";

/**
 * �X���\���p�ȊO�̒��o�Ȃǂ̃X���r���[�ŃX���^�u�ɕ\������镶������擾/�w�肷��B
 * �X���\�����̃X���r���[�ł�����͉\�����A�q���g�ɂ͔��f����Ȃ�
 * viewItem���|�b�v�A�b�v�̏ꍇ�ɂ͑��삪��������A�擾����Ə�ɋ󔒕�����
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ViewItem.prototype.TabText = "";

/**
 * �X���r���[/�|�b�v�A�b�v�ŊJ����Ă���X����ThreadItem�I�u�W�F�N�g�B���o�⃍�O���猟�����A
 * �X�N���v�g���쐬�����X���r���[/�|�b�v�A�b�v�ȂǁA�X����ێ����Ă��Ȃ��r���[�ł�undefined�B
 * Action�F���@LateCall:���@Command:��
 * @return {_JVS.ThreadItem} �Ώۂ̃r���[�ŊJ���Ă���X����ThreadItem�I�u�W�F�N�g�B�X����ێ����Ă��Ȃ��r���[�ł�undefined
 */
_JVS.ViewItem.prototype.Thread = function(){return new _JVS.ThreadItem();};

/**
 * viewItem�I�u�W�F�N�g���Q�Ƃ���Ώۂ̎�ʂ�����������B
 * Action�F���@LateCall:���@Command:��
 * "PopupView"      �|�b�v�A�b�v
 * "ViewerView"     �r���[�A�̊Ȉ�HTML�\��
 * "ThreadView"     �X���\�����̃X���r���[
 * "FunctionalView" ���o�ȂǁA�X���\���ȊO�̃X���r���[
 * "FunctionalView" ���o�ȂǁA�X���\���ȊO�̃X���r���[
 * "FlexView"       ��L�ȊO��HTML�\��(�������݃v���r���[�Ȃ�)
 * "Undefined"      ��L�ȊO
 * @type String
 */
_JVS.ViewItem.prototype.ViewType = "Undefined";

/**
 * �X�L����������������ށB���̃r���[��QueryDatOut�ɂ��DatOut�I�u�W�F�N�g���쐬����A�L����
 * �ێ�����Ă���󋵂łȂ���Ύ��s�ł��Ȃ��B
 * Doe�Ńt�H���g��ύX���邽�߂ɂ�WriteSkin��Body�^�O�ɂ��t�H���g�ݒ肷��K�v������B
 * Skin������ɋ󔒕�������w�肵���ꍇ�AJane���Őݒ肳�ꂽ�ʏ�X�L�����g�p�����B
 * (�����ƕς��������Ȃǂ̔ʐݒ�͎g���Ȃ�)
 * Action�F�~�@LateCall:���@Command:��
 * @param {String} Skin
 */
_JVS.ViewItem.prototype.WriteSkin = function(Skin){};
