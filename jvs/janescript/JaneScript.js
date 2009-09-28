/*!
 * @include "_InternalClasses.js"
 * @include "Board.js"
 * @include "Category.js"
 * @include "CategoryList.js"
 * @include "CosSim.js"
 * @include "DatOut.js"
 * @include "Edit.js"
 * @include "MenuItem.js"
 * @include "NamedVariant.js"
 * @include "PopupTargetInfo.js"
 * @include "RangeList.js"
 * @include "ReferredList.js"
 * @include "ResItem.js"
 * @include "Strings.js"
 * @include "ThreadFinder.js"
 * @include "ThreadItem.js"
 * @include "ViewItem.js"
 * @include "ViewList.js"
 */

/**
 * @static
 * @class JaneScript
 */
var JaneScript = {
	/**
	 * ���݃A�N�e�B�u�ȃX���r���[�̃A�C�e�����擾����
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @return {_JVS.ViewItem} �A�N�e�B�u��ViewItem�̃I�u�W�F�N�g(�I�u�W�F�N�g���t�@�����X�Q��)
	 */
	ActiveView: function(){return new _JVS.ViewItem();},
	
	/**
	 * NG�ɐV�����A�C�e����o�^����B
	 * 
	 * ���A�N�e�B�u�ȃX���r���[�̍ēǍ��ɂ��NG�̔��f�͎����ł͍s���Ȃ��B
	 * ���̂悤�ȓ�������������ꍇ�́A�����̊֐������s�������NG�𔽉f���������X���ɑ΂���
	 * �X�N���v�g��thread.LocalReload�����s����B
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @param {String} Item
	 * @param {int} AboneType �o�^����NG�̂��ځ[��̎��
	 * 0: �ʏ킠�ځ[��
	 * 2: �������ځ[��
	 * 4: �d�v�L�[���[�h
	 * @param {int} LiffeSpan �A�C�e���̎���
	 * -1: �A�C�e���̎�ނ��Ƃ̐ݒ�l�ɏ]��
	 * 0: �������Ǘ����ꂸ�A�����ł͍폜����Ȃ�
	 * ���̑�: ���̓��������V���ȃ��X���Ȃ���Ύ�������
	 * @return {bool} ����ɓo�^���ꂽ�ꍇ��true
	 * ���łɓo�^����Ă�����A�󔒕������o�^���悤�Ƃ����ꍇ��false
	 */
	AddNgName: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NG�ɐV�����A�C�e����o�^����B
	 * 
	 * ���A�N�e�B�u�ȃX���r���[�̍ēǍ��ɂ��NG�̔��f�͎����ł͍s���Ȃ��B
	 * ���̂悤�ȓ�������������ꍇ�́A�����̊֐������s�������NG�𔽉f���������X���ɑ΂���
	 * �X�N���v�g��thread.LocalReload�����s����B
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @param {String} Item
	 * @param {int} AboneType �o�^����NG�̂��ځ[��̎��
	 * 0: �ʏ킠�ځ[��
	 * 2: �������ځ[��
	 * 4: �d�v�L�[���[�h
	 * @param {int} LiffeSpan �A�C�e���̎���
	 * -1: �A�C�e���̎�ނ��Ƃ̐ݒ�l�ɏ]��
	 * 0: �������Ǘ����ꂸ�A�����ł͍폜����Ȃ�
	 * ���̑�: ���̓��������V���ȃ��X���Ȃ���Ύ�������
	 * @return {bool} ����ɓo�^���ꂽ�ꍇ��true
	 * ���łɓo�^����Ă�����A�󔒕������o�^���悤�Ƃ����ꍇ��false
	 */
	AddNgMail: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NG�ɐV�����A�C�e����o�^����B
	 * 
	 * ���A�N�e�B�u�ȃX���r���[�̍ēǍ��ɂ��NG�̔��f�͎����ł͍s���Ȃ��B
	 * ���̂悤�ȓ�������������ꍇ�́A�����̊֐������s�������NG�𔽉f���������X���ɑ΂���
	 * �X�N���v�g��thread.LocalReload�����s����B
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @param {String} Item
	 * @param {int} AboneType �o�^����NG�̂��ځ[��̎��
	 * 0: �ʏ킠�ځ[��
	 * 2: �������ځ[��
	 * 4: �d�v�L�[���[�h
	 * @param {int} LiffeSpan �A�C�e���̎���
	 * -1: �A�C�e���̎�ނ��Ƃ̐ݒ�l�ɏ]��
	 * 0: �������Ǘ����ꂸ�A�����ł͍폜����Ȃ�
	 * ���̑�: ���̓��������V���ȃ��X���Ȃ���Ύ�������
	 * @return {bool} ����ɓo�^���ꂽ�ꍇ��true
	 * ���łɓo�^����Ă�����A�󔒕������o�^���悤�Ƃ����ꍇ��false
	 */
	AddNgId: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * NG�ɐV�����A�C�e����o�^����B
	 * 
	 * ���A�N�e�B�u�ȃX���r���[�̍ēǍ��ɂ��NG�̔��f�͎����ł͍s���Ȃ��B
	 * ���̂悤�ȓ�������������ꍇ�́A�����̊֐������s�������NG�𔽉f���������X���ɑ΂���
	 * �X�N���v�g��thread.LocalReload�����s����B
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @param {String} Item
	 * @param {int} AboneType �o�^����NG�̂��ځ[��̎��
	 * 0: �ʏ킠�ځ[��
	 * 2: �������ځ[��
	 * 4: �d�v�L�[���[�h
	 * @param {int} LiffeSpan �A�C�e���̎���
	 * -1: �A�C�e���̎�ނ��Ƃ̐ݒ�l�ɏ]��
	 * 0: �������Ǘ����ꂸ�A�����ł͍폜����Ȃ�
	 * ���̑�: ���̓��������V���ȃ��X���Ȃ���Ύ�������
	 * @return {bool} ����ɓo�^���ꂽ�ꍇ��true
	 * ���łɓo�^����Ă�����A�󔒕������o�^���悤�Ƃ����ꍇ��false
	 */
	AddNgWord: function(Item, AboneType, LiffeSpan){return true;},
	
	/**
	 * �A�h���X�o�[���Q�Ƃ���Edit�I�u�W�F�N�g
	 * Action�F���@LateCall:���@Command:��
	 * @type _JVS.Edit
	 */
	AddressBar: new _JVS.Edit(),
	
	/**
	 * �ꗗ�����o�[���Q�Ƃ���Edit�I�u�W�F�N�g
	 * Action�F���@LateCall:���@Command:��
	 * @type _JVS.Edit
	 */
	BoardSearchBar: new _JVS.Edit(),
	
	/**
	 * Jane�̔ꗗ���i�[�����I�u�W�F�N�g���擾����B�擾����CategoryList�ɂ��A
	 * ���ׂĂ̔̗񋓂�URL����̔A�X���̌������\�B
	 * Action�F���@LateCall:���@Command:��
	 * ;
	 */
	CategoryList: new _JVS.CategoryList(),
	
	/**
	 * �܂��̓X�������
	 * Action�F�~�@LateCall:���@Command:��
	 * @param {_JVS.Board | _JVS.ThreadItem | _JVS.ViewItem} Item ����Ώۂ̔�(Board�I�u�W�F�N�g)�܂��̓X��(ThreadItem�I�u�W�F�N�g�܂���ViewItem�I�u�W�F�N�g)
	 */
	Close: function(Item){},
	
	/**
	 * �������Cosine Similarity�Ɋ�Â���r���s�����߂�CosSim�I�u�W�F�N�g���쐬����
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @return {_JVS.CosSim} �쐬���ꂽCosSim�I�u�W�F�N�g
	 */
	CreateCosSimObject: function(){return new _JVS.CosSim();},
	
	/**
	 * �O���[�o�����W�n�ł̃}�E�X�J�[�\���̈ʒu���擾����
	 * Action�F���@LateCall:���@Command:��
	 * @return {_JVS.NamedVariant} �J�[�\���ʒu�����i�[����NamedVariant
	 * NamedVariant.X �J�[�\����X���W
	 * NamedVariant.Y �J�[�\����Y���W
	 */
	CursorPos: function(){return new _JVS.NamedVariant();},
	
	/**
	 * JaneView�̎��s�t�@�C���p�X���擾����
	 * Action�F���@LateCall:���@Command:��
	 * @return {String} Jane2ch.exe�̃t���p�X��
	 */
	ExeName: function(){return "C:\\JaneDoeView\\Jane2ch.exe";},
	
	/**
	 * ���[�_���̓��̓_�C�A���O��\�����A���[�U�[�����͂����������Ԃ�
	 * Action�F�~�@LateCall:���@Command:��
	 * @param {String} Caption ���̓{�b�N�X�̃^�C�g���o�[�ɕ\�����镶����
	 * @param {String} InitialText �e�L�X�g�{�b�N�X�̕�����̏����l
	 * @return {_JVS.NamedVariant} ���[�U�[�̓��͌��ʂ�ێ�����NamedVariant
	 * �ENamedVariant.Canceled
	 * ���[�U�[��OK���N���b�N�����ꍇ��False, OK���Ȃ��Ń_�C�A���O������ꍇ��true
	 * �ENamedVariant.Text: String
	 * ���[�U�[�����͂���������
	 */
	InputBox: function(Caption, InitialText){return new _JVS.NamedVariant();},
	
	/**
	 * �����̃��j���[���ڂɃX�N���v�g�p���j���[��ǉ�����
	 * �ǉ��ł���ꏊ�̓��j���[�̃��[�g�܂��̓R���e�i(��ȏ�̃T�u���j���[������)�̍���
	 * Action�F���@LateCall:���@Command:��
	 * @param {String} MenuName �X�N���v�g�p�̃��j���[��ǉ����������j���[�̖��O
	 * (menuconf.ini�̃Z�N�V������) ��: "MainWnd.MainMenu"
	 * @param {String} ItenMane �X�N���v�g�p�̃��j���[��ǉ����������j���[�̐e�A�C�e����
	 * (menuconf.ini�̃��j���[��) ��: "MainWnd.MainMenu"
	 * �k���X�g�����O�̏ꍇ��MenuName�̃��[�g���e�A�C�e���ɂȂ�
	 * @param {int} Index �e�A�C�e���̒��ł̏��ԁBIndex=0���ŏ�ʁA�e�A�C�e���̍��ڐ�����
	 * �傫�Ȑ�����ݒ肵���ꍇ�͍ŉ��ʂɒǉ������
	 * @return {_JVS.MenuItem} �ǉ����ꂽMenuItem�I�u�W�F�N�g
	 */
	InsertMenu: function(MenuName, ItenMane, Index){return new _JVS.MenuItem();},
	
	/**
	 * URL���r���[�A���Ή�����`���̊g���q�������Ă��邩���m�F����
	 * (swf�͑ΏۊO)
	 * Action�F���@LateCall:���@Command:��
	 * @param {String} URL �摜���ǂ����𒲂ׂ���URL
	 * @return {Boolean} URL���r���[�A�őΉ������摜�̊g���q�������Ă����true�A�����łȂ����false
	 */
	IsImageURL: function(URL){return true;},
	
	/**
	 * �A�N�V�����̒�����Ăяo���Ȃ�����(���b�Z�[�W�{�b�N�X�̕\���Ȃ�)���A�N�V�����̃R���e�L�X�g�̊O��
	 * ���S�ɌĂяo�����߂Ɏg�p����
	 * Action�F���@LateCall:���@Command:��
	 * @param {Function} Func �Ăяo�������֐�
	 * Func�Ƃ��Đݒ�ł���̂́A���Variant�������Ƃ��Ď󂯎��֐��B
	 * ��: function CalleeFunction (funcObject) {};
	 * Func�̌Ăяo���̓A�C�h�����[�v�Ȃ�Jane�̃V�X�e�������b�Z�[�W����������^�C�~���O�ōs����
	 * @param {Object} funcParam Func�ɓn������
	 */
	LateCall: function(Func, funcParam){},
	
	/**
	 * �g���[�X�ɕ�������o�͂���
	 * Action�F���@LateCall:���@Command:��
	 * @param {} Text
	 */
	Log: function(Text){},
	
	/**
	 * �����̃��j���[���ڂ̐e�A�C�e����ł̈ʒu�𒲂ׂ�B
	 * ����̈ʒu�Ƀ��j���[��}������ꍇ�A���̊֐��̌��ʂ�����InsertMenu��Index�����߂�
	 * Action�F���@LateCall:���@Command:��
	 * @param {String} MenuName �e�A�C�e����ł̈ʒu�𒲂ׂ������j���[���ڂ������郁�j���[�̖��O
	 * (menuconf.ini�̃Z�N�V������) ��: "MainWnd.MainMenu"
	 * @param {String} ItemName �e�A�C�e����ł̈ʒu�𒲂ׂ������j���[���ڂ̖��O
	 * (menuconf.ini�̃��j���[��) ��: "MainWnd.MainMenu"
	 * @return {Number} �w�肵�����j���[���ڂ́A�e�A�C�e����ł̏���(0���ŏ��)
	 */
	MenuIndex: function(MenuName, ItemName){return 0;},
	
	/**
	 * URL�܂��̓X���A���J���B
	 * ���Ώۂ��r���[�A�ŊJ�����URL�������ꍇ�ANumber�ȍ~�̃p�����[�^�͖��������
	 * Action�F�~�@LateCall:���@Command:��
	 * @param {String|ThreadItem|Board} target URL/Thread/Board
	 * �J�������Ώۂ�URL(������)�܂��̓X��(ThreadItem�I�u�W�F�N�g)�܂��͔�(Board�I�u�W�F�N�g)��
	 * �����ꂩ���w�肷��
	 * @param {int} Number �Ώۂ��X���̏ꍇ�A�J���Ă���Number���������X�ԂɃW�����v����B����ȊO�ł͖��������
	 * @param {int} Operation �J���Ƃ��ɃT�[�o����̃f�[�^�擾���s�����A���[�J�������Ŏ擾���s��Ȃ�����ݒ肷��
	 * 0: �Ȃɂ����Ȃ��@���܂��������Ӗ������A����������K�v�Ȃ��߂ɑ���
	 * 1: ���[�J��
	 * 2: �K�X�擾
	 * 3:�X�V�`�F�b�N
	 * 4: ���Ԃɉ�����
	 * @param {bool} NewTab true�Ȃ�ΐV�����^�u�ŊJ�����Ƃ���������
	 * false�Ȃ�΁A���݃A�N�e�B�u�ȃX���^�u���X���\���p�̃r���[�Ȃ�΃A�N�e�B�u�^�u�ŁA
	 * �����łȂ���ΐV�����^�u�ŊJ��
	 * @param {bool} Relative �V�K�^�u�ŊJ���ꍇ�ARelative��true�Ȃ�Ό��݂̃A�N�e�B�u�^�u�ׂ̗ɊJ�����
	 * @param {bool} BackGround �J�����^�u��I����Ԃɂ��Ȃ�
	 */
	Open: function(target, Number, Operation, NewTab, Relative, BackGround){},
	
	/**
	 * Windows API��PeekMessage�֐����Ăяo���A�o�b�t�@��Windows Message����������B
	 * �������Ԃ������鏈���̓r���ɋ��ނ��Ƃ�UI���t���[�Y����̂�h�����Ƃ��ł��邪�A
	 * ���̒��Ŏ󂯕t�������[�U�[����ɂ��g�p���̃I�u�W�F�N�g�̏�Ԃ��ω�������
	 * �j�������\��������A�g�p�ɂ͍אS�̒��ӂƓK�؂ȏ�����v����
	 */
	ProcessMessages: function(){},
	
	/**
	 * ���b�Z�[�W�_�C�A���O��\������BWSH��WScript.Echo�ɑΉ�����B
	 * Action�F�~�@LateCall:���@Command:��
	 * @param {String} Text ���b�Z�[�W�{�b�N�X�ɕ\�����镶����
	 */
	ShowMessage: function(Text){},
	
	/**
	 * Windows API��Sleep�֐����Ăяo���A��莞�Ԃ���������~����
	 * Action�F���@LateCall:���@Command:��
	 * @param {int} millisec ��~���鎞�ԁA�P�ʂ̓~���b
	 */
	Sleep: function(millisec){},
	
	/**
	 * �X���r���[�����o�[���Q�Ƃ���Edit�I�u�W�F�N�g
	 * Action�F���@LateCall:���@Command:��
	 * @type _JVS.Edit
	 */
	ThreadSearchBar: new _JVS.Edit(),
	
	/**
	 * Windows API��timeGetTime�̒l���擾����B
	 * Action�F���@LateCall:���@Command:��
	 * @return {int} timeGetTime API�֐��ɂ��V�X�e������
	 */
	TimeGetTime: function(){return 0;},
	
	/**
	 * �X���r���[�̈ꗗ��ێ�����ViewList�I�u�W�F�N�g���擾����
	 * ViewList����A�e�X���r���[�ւ̃A�N�Z�X�⃆�[�U�[��`�̐V�K�X���r���[�쐬���\
	 * 
	 * Action�F���@LateCall:���@Command:��
	 * 
	 * @return {_JVS.ViewList} �X���r���[�ꗗ���Q�Ƃ���ViewList�I�u�W�F�N�g
	 */
	ViewList: function(){return new _JVS.ViewList();}
};

