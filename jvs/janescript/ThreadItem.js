/*!
 * @include "_InternalClasses.js"
 */

/**
 * �I�u�W�F�N�g���Q�Ƃ���X�����������Board�I�u�W�F�N�g
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.Board
 */
_JVS.ThreadItem.prototype.Board = new _JVS.Board();

/**
 * ThreadItem���Q�Ƃ���X���̎��̂����݂��Ă��邩�ǂ���
 * true  ���݂��Ă���A�A�N�Z�X�\
 * false �폜����Ă���A�A�N�Z�X�s��
 * 
 * ���X���̓X�N���v�g����ThreadItem�I�u�W�F�N�g�ɎQ�Ƃ���邱�ƂŎQ�ƃJ�E���g�����Z����邽�߁A
 * ���݂̎����ł�ThreadItem�ւ̎Q�Ƃ��������Connected��false�ɂȂ邱�Ƃ͂Ȃ��B
 * 
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.ThreadItem.prototype.Connected = true;

/**
 * �X���̃��O(dat�t�@�C��)�����݂��邩
 * true  ���݂���
 * false ���݂��Ȃ�
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.ThreadItem.prototype.DatExist = true;

/**
 * dat��(dat�t�@�C���̃t�@�C��������g���q����菜��������)
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ThreadItem.prototype.DatName = "1234567890";

/**
 * �擾�ς݂�dat�t�@�C���̑傫��(�P��:byte)
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.DatSize = 100*1024;

/**
 * dat�t�@�C���S�̂̕�����
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ThreadItem.prototype.DatText = "name<>mail<>date<>message<>thread\n";

/**
 * �X���̃����X�l
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.DeltaRes = 1;

/**
 * �X���̍ŏI���X�̎����l
 * �ŏI���X������`�l�̏ꍇ��0�B
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.FinalRes = 0;

/**
 * ���X�̂��ځ[���Ԃ��擾����
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index ���ځ[��̏�Ԃ��擾���郌�X�̃��X�ԍ�
 * @return {int} ���X�̂��ځ[����
 * 0: �ʏ�
 * 1: ���ځ[��
 * 2: �������ځ[��
 * 4: ���X�`�F�b�N
 */
_JVS.ThreadItem.prototype.GetAbone = function(Index){return 0;};

/**
 * ���X�Ɋ܂܂ꂽ>>1�Ȃǂ̃��X�ԃ����N�̎Q�Ɛ�ꗗ��ێ�����RangeList�I�u�W�F�N�g���擾����B
 * Action�F���@LateCall:���@Command:��
 * 
 * @example
 * >>4 >>1-2 >>6-8�@�Ƃ��������N�����������X�ł́A���̓��e��RangeList���߂�l�Ƃ��ē�����B
 * 
 * RangeList.Count == 3
 * RangeList.RangeBegin(0) == 1,�@RangeList.RangeEnd(0) == 2
 * RangeList.RangeBegin(1) == 4,�@RangeList.RangeEnd(1) == 4
 * RangeList.RangeBegin(2) == 6,�@RangeList.RangeEnd(2) == 8
 * RangeList.WholeRangeWidth == 6
 * 
 * �������A����ꂽRange�̓\�[�g����A�Q�Ɛ�͈̔͂��A���������̂͌����A�d���͍폜�����̂ŁA
 * ���̃��X�ԎQ�Ƃ��Ⴆ��>>1,2 >>4 >>6-7 >>7-8�ł����Ă��������ʂɂȂ�A��ʂł��Ȃ�
 * 
 * @param {int} Index ���X�ԃ����N�Q�ƈꗗ���擾���郌�X�̃��X�ԍ�
 * @param {int} IncludeName
 * @return {_JVS.RangeList} ���X�ԃ����N�Q�ƈꗗ��ێ�����RangeList
 */
_JVS.ThreadItem.prototype.GetNumberLinks = function(Index, IncludeName){return new _JVS.RangeList();};

/**
 * �X���̑S���X�ɂ��āA>>1�Ȃǂ̃��X�ԃ����N�ł��̃��X���Q�Ƃ������X���̈ꗗ��ێ�����
 * ReferredList�I�u�W�F�N�g���擾����B
 * Action�F���@LateCall:���@Command:��
 * @return {_JVS.ReferredList} ���̃X���̃��X�ԃ����N����ێ�����ReferredList�I�u�W�F�N�g
 */
_JVS.ThreadItem.prototype.GetReferredList = function(){return new _JVS.ReferredList();};

/**
 * ���X�̓��e��ێ�����ResItem�I�u�W�F�N�g���擾����
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index ���e���擾���郌�X�̃��X��
 * @return {_JVS.ResItem} ���X���e��ێ�����ResItem�I�u�W�F�N�g
 */
_JVS.ThreadItem.prototype.GetRes = function(Index){return new _JVS.ResItem();};

/**
 * ���X�Ɋ܂܂��URL�̈ꗗ���擾����
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index URL�ꗗ���擾���郌�X�̃��X��
 * @return {_JVS.Strings} URL�ꗗ��ێ�����Strings�I�u�W�F�N�g
 */
_JVS.ThreadItem.prototype.GetUrlList = function(Index){return new _JVS.Strings();};

/**
 * Subject.txt����擾�������X��(�X���ꗗ�́u���X�v)
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.ItemCount = 1;

/**
 * �X���̐������̒l
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.ItemDelta = 1;

/**
 * �X���̍ŏI�擾�̎����l
 * �ŏI���X������`�l�̏ꍇ��0�B
 * @type int
 */
_JVS.ThreadItem.prototype.LastGot = 0;

/**
 * dat�̍ŏI�X�V����(http���X�|���X�w�b�_����擾����������)
 * 
 * �Q�l�Fjavascript�̓��t�I�u�W�F�N�g�ɕϊ�������@
 * var lastModified = new Date(thread.lastModified);
 * 
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ThreadItem.prototype.LastModified = "Thu, 01 Jan 1970 00:00:00 GMT";;

/**
 * �X���̍ŏI�������݂̎����l�B����`�l�̏ꍇ��0�B
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.LastWrote = 0;

/**
 * �擾�ς݂̃��X��
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.Lines = 1;

/**
 * �Y���̃X����\�����Ă���X���r���[������ꍇ�͂��̃X�����ēǍ�����B
 * SetAbone()�ł��ځ[���Ԃ�ݒ肵����ANG��V�K�ǉ�������ɕ\���ɂ����𔽉f����̂Ɏg�p����
 * Action�F���@LateCall:���@Command:��
 */
_JVS.ThreadItem.prototype.LocalReload = function(){};

/**
 * �X���̈�̏��
 * 1: �󂠂�
 * 0: ��Ȃ�
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.Mark = 0;

/**
 * �ꗗ��ł̃X���̔ԍ��B�ߋ����O�̏ꍇ��0
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ThreadItem.prototype.Number = 1;

/**
 * �V�X�e���ł͎g�p/���䂵�Ȃ��B
 * �X�N���v�g���X�����ƂɌŗL�̏���ێ����������ꍇ�ɏ������̃v���p�e�B�ɑ������B
 * �X�N���v�g���Ƃɕۑ��̈悪�������Ă���̂ŁA����ThreadItem�ɑ΂���A.js��B.js���ʁX��
 * ThreadItem.Obj��ݒ�ł���B�t�ɁA���̃X�N���v�g���ݒ肵��Obj���Q�Ƃ��邱�Ƃ͂ł��Ȃ��B
 * �X�N���v�g����̎Q�Ƃ��Ȃ��Ȃ��Ă�Obj�͕ێ�����A�ēx�X�N���v�g����Q�Ƃ���Βl���擾�\�B
 * �������A�X���͔̍X�V���ɎQ�Ƃ��Ȃ���΍폜���č쐬�����̂ŁAThreadItem�I�u�W�F�N�g����
 * �Q�Ƃ���Ă��Ȃ��X�����ێ�����Obj�͂��̃X������������̍X�V�ɂ�荂���m���Ŏ�����B
 * 
 * Action�F���@LateCall:���@Command:��
 * @type Object
 */
_JVS.ThreadItem.prototype.Obj = null;

/**
 * �ǂݍ��ݍς݂̃X���̂����A���ǂɂȂ��Ă��郌�X�̔ԍ�
 * ������Ԃ̃X���ɂ��̒l��ݒ肵�Ă���J�����ƂŁu���̐�𖢓ǂŕ���v���ݒ肵�Ă���̂�
 * �����̌��ʂ�������B
 * Action�F���@LateCall:���@Command:��
 * @type int 
 */
_JVS.ThreadItem.prototype.OldLines = 1;

/**
 * ���X�̂��ځ[���Ԃ�ݒ肷��BSetAbone���s���Ă��X���r���[�̕\���ɂ͔��f����Ȃ��B
 * �\���ɔ��f������ɂ́A�K�v�Ȃ��ځ[���ݒ肵�����ThreadItem.LocalReload()���Ăяo����
 * �ēǍ����s���B
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index ���ځ[��̏�Ԃ��擾���郌�X�̃��X�ԍ�
 * @param {int} Value ���X�ɐݒ肷�邠�ځ[����
 * 0: �ʏ�
 * 1: ���ځ[��
 * 2: �������ځ[��
 * 4: ���X�`�F�b�N
 */
_JVS.ThreadItem.prototype.SetAbone = function(Index, Value){};

/**
 * �X���̃^�C�g���B�ύX�����.idx�t�@�C���ɕύX���ۑ�����A�Ȍ�͂��̃X���^�C�ŕ\�������B
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ThreadItem.prototype.Title = "";

/**
 * �X����URL�B���X���w��Ȃǂ͕t���Ȃ��B
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.ThreadItem.prototype.URL = "";

/**
 * �X���ɋL���������R�e���[���A�h���X
 * @type String
 */
_JVS.ThreadItem.prototype.UserdWriteMail = "";

/**
 * �X���ɋL���������R�e��
 * @type String
 */
_JVS.ThreadItem.prototype.UserdWriteName = "";

