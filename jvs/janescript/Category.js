/*!
 * @include "_InternalClasses.js"
 */

/**
 * �J�e�S���̐e�ɂȂ��Ă���CategoryList�I�u�W�F�N�g�BJaneView��CategoryList������������Ȃ��̂�
 * �K��JaneScript.CategoryList�Ɠ���ɂȂ�
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.CategoryList
 */
_JVS.Category.prototype.CategoryList = new _JVS.CategoryList();

/**
 * �Q�Ɛ��Category�̎��̂����݂��Ă��邩�ǂ���
 * true  ���݂��Ă���A�A�N�Z�X�\
 * false �폜����Ă���A�A�N�Z�X�s��
 * ���J�e�S���͕ێ�������I�[�v�����łȂ���Δꗗ�̍X�V�Ŕj�����č쐬����邽�߁A
 * Category�I�u�W�F�N�g�̎擾��ɔꗗ���X�V�����ƍ�����Connected��false�ɂȂ�A
 * ���̌�̂���Category�I�u�W�F�N�g�ւ̃A�N�Z�X�̓G���[�ɂȂ�
 * @type bool
 */
_JVS.Category.prototype.Connected = true;

/**
 * �J�e�S�����ێ������(board�I�u�W�F�N�g)�̐�
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.Category.prototype.Count = 1;

/**
 * �������ɃJ�e�S�����̔��������A���̔�Board�I�u�W�F�N�g��Ԃ��B
 * Action�F���@LateCall:���@Command:��
 * @param {String} Name ��(Win�Ȃ�"Windows")
 * @return {_JVS.Board} ���ɊY�������Board�I�u�W�F�N�g�B�Y��������Ȃ��ꍇ��undefined
 */
_JVS.Category.prototype.FindBoard = function(Name){return new _JVS.Board();};

/**
 * �J�e�S�����ێ������Board�I�u�W�F�N�g���擾����B�C���f�b�N�X���͈͊O�̏ꍇ�̓G���[�B
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �擾����̔ԍ�
 * @return {_JVS.Board} �Y�������Board�I�u�W�F�N�g
 */
_JVS.Category.prototype.Items = function(Index){return new _JVS.Board();};

/**
 * �J�e�S���̃f�B���N�g��
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.Category.prototype.LogDir = "Logs";

/**
 * �J�e�S���̖���(��FWin�̃J�e�S���Ȃ��"�o�b")
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.Category.prototype.Name = "�o�b";

/**
 * �V�X�e���ł͎g�p/���䂵�Ȃ��B
 * �X�N���v�g������Category�ɌŗL�̏���ێ����������ꍇ�ɂ��̃v���p�e�B�ɑ�����Ă����B
 * �X�N���v�g���Ƃɕۑ��̈悪�������Ă���̂ŁACategoryList�ɑ΂���A.js��B.js���ʁX��
 * Category.Obj��ݒ�ł���B�t�ɁA���̃X�N���v�g���ݒ肵��Obj���Q�Ƃ��邱�Ƃ͂ł��Ȃ��B
 * �X�N���v�g����̎Q�Ƃ��Ȃ��Ȃ��Ă�Obj�͕ێ�����A�ēx�X�N���v�g����Q�Ƃ���Βl���擾�\
 * �������A�ꗗ�̍X�V�Ȃǂɂ��Category�̎��̂��č쐬���ꂽ�ꍇ��Obj��������B
 * Action�F���@LateCall:���@Command:��
 * @type Object
 */
_JVS.Category.prototype.Obj = null;
