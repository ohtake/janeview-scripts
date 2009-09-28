/*!
 * @include "_InternalClasses.js"
 */

/**
 * URL�����񂩂�Ή�����A�X�����擾����̂Ɏg��ThreadFinder�I�u�W�F�N�g���擾����
 * 
 * @return {_JVS.ThreadFinder} CategoryList���Q�Ɛ�ɂ���ThreadFinder�I�u�W�F�N�g
 */
_JVS.CategoryList.prototype.CreateThreadFinder = function(){ return new _JVS.ThreadFinder();};

/**
 * �Q�Ɛ��CategoryList�̎��̂����݂��Ă��邩�ǂ���
 * true  ���݂��Ă���A�A�N�Z�X�\
 * false �폜����Ă���A�A�N�Z�X�s��
 * �����݂̎����ł́ACategoryList.Connected��false�ɂȂ邱�Ƃ͂Ȃ�
 * @type bool
 */
_JVS.CategoryList.prototype.Connected = true;

/**
 * CategoryList�ɂ���J�e�S���̐�
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.CategoryList.prototype.Count = 1;

/**
 * CategoryList�ɂ���J�e�S�����Q�Ƃ���Category�I�u�W�F�N�g���擾����B
 * �C���f�b�N�X���͈͊O�̏ꍇ�̓G���[�B
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �擾����J�e�S���̔ԍ�
 * @return {_JVS.Category} �Ώۂ̃J�e�S�����Q�Ƃ���Category�I�u�W�F�N�g
 */
_JVS.CategoryList.prototype.Items = function(Index){return new _JVS.Category();};

/**
 * ���O�̕ۑ��f�B���N�g��
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.CategoryList.prototype.LogDir = "Logs";

/**
 * �V�X�e���ł͎g�p/���䂵�Ȃ��B
 * �X�N���v�g������CategoryList�ɌŗL�̏���ێ����������ꍇ�ɂ��̃v���p�e�B�ɑ�����Ă����B
 * �X�N���v�g���Ƃɕۑ��̈悪�������Ă���̂ŁACategoryList�ɑ΂���A.js��B.js���ʁX��
 * CategoryList.Obj��ݒ�ł���B�t�ɁA���̃X�N���v�g���ݒ肵��Obj���Q�Ƃ��邱�Ƃ͂ł��Ȃ��B
 * �X�N���v�g����̎Q�Ƃ��Ȃ��Ȃ��Ă�Obj�͕ێ�����A�ēx�X�N���v�g����Q�Ƃ���Βl���擾�\
 * 
 * �������A���݂�JaneView�ł͕�����CategoryList�����݂��邱�Ƃ͂Ȃ��̂ŁA�����I�ɂ̓O���[�o��
 * �ϐ��ɑ������̂ƕς��Ȃ��B
 * @type Object
 */
_JVS.CategoryList.prototype.Obj = null;
