/*!
 * @include "_InternalClasses.js"
 */

/**
 * Board�I�u�W�F�N�g���Q�Ƃ����������J�e�S����Category�I�u�W�F�N�g
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.Category
 */
_JVS.Board.prototype.Category = new _JVS.Category();

/**
 * �Q�Ɛ��Board�̎��̂����݂��Ă��邩�ǂ���
 * true  ���݂��Ă���A�A�N�Z�X�\
 * false �폜����Ă���A�A�N�Z�X�s��
 * 
 * ���͔ꗗ�̍X�V���s�����Ƃ��ɎQ�Ƃ��Ȃ���΍č쐬����邽�߁ABoard�I�u�W�F�N�g�̎擾���
 * �ꗗ���X�V�����ƍ�����Connected��false�ɂȂ�A���̌�̂���Board�I�u�W�F�N�g��
 * �A�N�Z�X����ƃG���[�ɂȂ�B
 * �iBoard�I�u�W�F�N�g�ւ̎Q�Ƃ������Ă��A���̂̔��J���Ă��Ȃ���΍č쐬�̑ΏۂɂȂ�)
 * ���̏ꍇ�͉��߂�Board�I�u�W�F�N�g���擾����K�v������B
 * 
 * Board�I�u�W�F�N�g��Load�����s����Ɣ�Board�I�u�W�F�N�g��������I�ɃI�[�v�����ꂽ��Ԃ�
 * �Ȃ邽�߁ABoard�I�u�W�F�N�g���Q�Ƃ���Ă���Ԃ̍č쐬��h�����Ƃ��ł���
 * 
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.Board.prototype.Connected = true;

/**
 * �����ݕێ����Ă���X���̐�
 * 
 * �͊J����Ă��Ȃ���ΑS�Ẵ��X��ǂݍ���ł���̂ł͂Ȃ��A�Q�Ƃ̂���X��������ێ����Ă���B
 * ���̏�Ԃ�Count���擾����ƁA���̂Ƃ��ێ����Ă���X���̐����A��B�ɑ�����S�ẴX���̐���
 * �m�肽���ꍇ�́ABoard.Load�����s���Ă���Count���擾����K�v������B
 * Action�̒������Board.Load�����s�ł����A�܂�BoardAnalysisAction�̏ꍇ�X�e�[�W�ɂ���Ă̓X����
 * �ʂȏꏊ�Ɉꎞ�I�Ɉڂ����Ƃ�����ABoard.Count�͎擾�ł��邪�������l�ɂȂ�Ȃ��ꍇ������B
 * 
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.Board.prototype.Count = 1;

/**
 * ���̔ł̃X���e�ʌx���̐ݒ�l�B�Y���̔ɑ�����X�������̗e�ʂ𒴂���Ɣꗗ�̃A�C�R����
 * �X���^�u�̒��F�ɂ��x���\�����s����B���̒l��BoardCustomize.ini�ɂ��ݒ肳���B�P�ʂ�byte�B
 * @type int
 */
_JVS.Board.prototype.DatSizeAlert = 400 * 1024;

/**
 * �̒�����dat�������ɃX�����������AThreadItem�I�u�W�F�N�g��Ԃ�
 * ���J����Ă��Ȃ��ꍇ�͏����̒���Board.Load���Ăяo�����
 * ���̂��߁A���J����Ă��Ȃ��ꍇ��Action����̌Ăяo���̓G���[�ɂȂ�B
 * �܂��ABoardAnalysisAction����̌Ăяo���͉�͂̃X�e�[�W�ɂ���Ă͐��������ʂ������Ȃ��j
 * Action�F���@LateCall:���@Command:��
 * @param {String} datName ��������X����dat��(dat�t�@�C���̃t�@�C��������g���q(.dat)����菜��������)
 * @return {_JVS.ThreadItem} �����Ō��������X����ThreadItem�I�u�W�F�N�g�B�Y������X�����Ȃ������ꍇ��undefined
 */
_JVS.Board.prototype.FindThread = function(datName){return new _JVS.ThreadItem();};

/**
 * �����ݕێ����Ă���X����ThreadItem�I�u�W�F�N�g���擾����
 * 
 * �͊J����Ă��Ȃ���ΑS�Ẵ��X��ǂݍ���ł���̂ł͂Ȃ��A�Q�Ƃ̂���X��������ێ����Ă���B
 * �ɑ�����S�ẴX�����Q�Ƃ������Ƃ��́A���炩����Board.Load�����s���A���̌��index=0�`Count-1
 * ��ThreadItem���擾����K�v������B
 * Action�̒������Board.Load�����s�ł��Ȃ��̂ł��̎��_�œǂݍ��܂�Ă���X���̎擾�����ł��Ȃ��B
 * 
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �擾����X���̌����_�ł̔̒��ł̃C���f�b�N�X
 * @return {_JVS.ThreadItem} �Y���̃X�����Q�Ƃ���ThreadItem�I�u�W�F�N�g
 */
_JVS.Board.prototype.GetThread = function(Index){return new _JVS.ThreadItem();};

/**
 * ��Subject.txt��GMT�ł̍ŏI�X�V����(http���X�|���X�w�b�_����擾��������)
 * Action�F��{BoardAnalysisAction�F�~}�@LateCall:���@Command:��
 * @type String
 */
_JVS.Board.prototype.LastModified = "Thu, 01 Jan 1970 00:00:00 GMT";

/**
 * ������I�ɃI�[�v����Ԃɂ��āA���O�t�H���_��Subject.txt����уX���̏���ǂݍ��ށB
 * �����I�ȃI�[�v����Ԃ�Board�I�u�W�F�N�g�ւ̑S�Ă̎Q�Ƃ��Ȃ��Ȃ�܂Ōp�������B
 * Action�F�~�@LateCall:���@Command:��
 */
_JVS.Board.prototype.Load = function(){};

/**
 * �̃f�B���N�g���B������subject.txt��X����idx�Adat���u����Ă���B
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.Board.prototype.LogDir = "C:\\Jane\\Logs\\Category\\Board\\";

/**
 * �Y���̔ɂ���X���̍ő僌�X���̐ݒ�l�B�擾���X�������̒l�𒴂����X����dat�����ƌ��Ȃ����B
 * ���̒l��BoardCustomize.ini�ɂ��ݒ肳���B
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.Board.prototype.MaxResNum = 1000;

/**
 * �̖���(��: Win�Ȃ��"Windows")
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.Board.prototype.Name = "Windows";

/**
 * �V�X�e���ł͎g�p/���䂵�Ȃ��B
 * �X�N���v�g���ɌŗL�̏���ێ����������ꍇ�ɂ��̃v���p�e�B�ɑ�����Ă����B
 * �X�N���v�g���Ƃɕۑ��̈悪�������Ă���̂ŁA����Board�ɑ΂���A.js��B.js���ʁX��
 * Board.Obj��ݒ�ł���B�t�ɁA���̃X�N���v�g���ݒ肵��Obj���Q�Ƃ��邱�Ƃ͂ł��Ȃ��B
 * �X�N���v�g����̎Q�Ƃ��Ȃ��Ȃ��Ă�Obj�͕ێ�����A�ēx�X�N���v�g����Q�Ƃ���Βl���擾�\
 * �������A�ꗗ�̍X�V�Ȃǂɂ��Board���Q�Ƃ���̎��̂��č쐬���ꂽ�ꍇ��Obj��������B
 * @type Object
 */
_JVS.Board.prototype.Obj = null;

/**
 * ��URL(��: Win�Ȃ��"http://pc12.2ch.net/win/")
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.Board.prototype.Url = "http://pc12.2ch.net/win/";
