/**
 * @namespace _JVS
 */
var _JVS = {};

/**
 * �ꗗ�̌ʂ̔��Q�Ƃ���I�u�W�F�N�g�ŁA�ɂ���X����ThreadItem�I�u�W�F�N�g��ێ�����B
 * �܂��A�ɌŗL�̏��ւ̎Q�Ƃɂ��g�p����
 * @class _JVS.Board
 */
_JVS.Board = function(){};

/**
 * �ꗗ�̃J�e�S���ɑΉ�����I�u�W�F�N�g�ŁA�J�e�S�����̔ɑΉ�����Board�I�u�W�F�N�g��ێ�����B
 * �������ɂ����̌������\
 * @class _JVS.Category
 */
_JVS.Category = function(){};

/**
 * �ꗗ�̊��I�u�W�F�N�g�ŁA�e�J�e�S���ɑΉ�����Category�I�u�W�F�N�g��ێ����Ă���B
 * �܂��AURL����Ή������(board�I�u�W�F�N�g)��X��(threadItem�I�u�W�F�N�g)���擾����̂ɗp����
 * ThreadFinder�I�u�W�F�N�g��CategoryList����擾����
 * @class _JVS.CategoryList
 */
_JVS.CategoryList = function(){};

/**
 * ������̗ގ��x�𒲂ׂ邽�߂̃I�u�W�F�N�g
 * 
 * Subject�Ɋ������������AEvaluete(Str)��Subject��Str�̗ގ��x���擾����B
 * �ގ��x��tri-gram��Cosine Similarity�ɂ��Z�o����A0�`1�̕��������_�l�Ƃ��ē�����B
 * (1�����S�ɓ���̕�����A0���ގ����Ȃ�)
 * �����ɂ͏d�ݕt��������A�����A�L�����܂ޕ����͏d�ݕt�������������肷��B
 * �I�[�g�q�X�g���Ŏg�p���Ă���̂Ɗ�{�I�ɂ͓���̏����B
 * @class _JVS.CosSim
 */
_JVS.CosSim = function(){};

/**
 * �X���r���[�ɕ�������������ނ��߂̃I�u�W�F�N�g�B�������ޑΏۂƂȂ�ViewItem�I�u�W�F�N�g����A
 * ViewItem.QueryDatOut�Ŏ擾����
 * DatOut�̏����̓��b�Z�[�W�����𔺂��̂ŁA�������ɑΏۂ̃X���r���[����������\�����l������
 * �v���O���~���O���s���K�v������
 * (�X���r���[���������Ă��܂����ꍇ�A�Ώۂ�ViewItem��DatOut��Connected��false�ɂȂ邱�Ƃ�
 * �m�F�ł���j
 * @class _JVS.DatOut
 */
_JVS.DatOut = function(){};

/**
 * Jane�̃E�B���h�E��ɂ���G�f�B�b�g�{�b�N�X��R���{�{�b�N�X�̕�������Q�Ƃ��邽�߂̃I�u�W�F�N�g
 * ������̎Q�Ƃ�ύX���\
 * 
 * @class _JVS.Edit
 */
_JVS.Edit = function(){};

/**
 * ���[�U�[��`�̃��j���[��ێ�����I�u�W�F�N�g�BJaneScript.InsertMenu�⑼��MenuItem��
 * Add,Inert�ɂ��擾����BOnClick�Ɋ֐��������Ă������ƂŃ��j���[���N���b�N�����Ƃ���
 * ���̊֐����Ăяo�����Ƃ��ł���B�L���v�V�����A�V���[�g�J�b�g�̐ݒ������A�`�F�b�N��
 * �L����ݒ�\�B
 * 
 * �p�r��A��ʓI�ɂ̓O���[�o���I�u�W�F�N�g�Ƃ��ĕێ����Ă����K�v������
 * @class _JVS.MenuItem
 */
_JVS.MenuItem = function(){};

/**
 * �C�ӂ̖��O�̃v���p�e�B���쐬���ăf�[�^��ێ�����@�\�����I�u�W�F�N�g�B
 * �����̒l��Ԃ��K�v������֐��Ŗ߂�l�Ƃ��Ďg�p����B
 * 
 * @class _JVS.NamedVariant
 * 
 * @example
 * JaneScript.CursorPos�� X,Y�̓�̃v���p�e�B�ϐ��Ƀ}�E�X�J�[�\����X���W��Y���W��������
 * NamedVariant��߂�l�Ƃ��ĕԂ��B
 * var pos = JaneScript.CursorPos();
 * JaneScript.Log("���݂̃}�E�X�̈ʒu��(X:" + pos.X + ",Y:" + pos.Y + ")");
 */
_JVS.NamedVariant = function(){};

/**
 * �X�N���v�g���쐬�������j���[(MenuItem)���I�����ꂽ���̏󋵂Ɋւ������ێ�����I�u�W�F�N�g�B
 * �v���p�e�B�̏��̈Ӗ���MenuItem���o�^���ꂽ���j���[�̏ꏊ�ɂ��قȂ�B
 * 
 * ���j���[�o�^�ꏊ�ƃv���p�e�B�̓��e�̊֌W
 * �EMainWnd.PopupViewMenu
 * 	PopupObject = �E�N���b�N�����r���[��ViewItem�I�u�W�F�N�g
 * 	Number = ���X��
 * 	InfoText = �󔒕�����
 * �EMainWnd.PopupTextMenu
 * 	PopupObject = �E�N���b�N�����r���[��ViewItem�I�u�W�F�N�g
 * 	Number = 0
 * 	InfoText = �󔒕�����
 * �EMainWnd.PopupIdMenu
 * 	PopupObject = �E�N���b�N�����r���[��ViewItem�I�u�W�F�N�g
 * 		A.���t��ID���E�N���b�N�����ꍇ
 * 			Number = ���X��
 * 			InfoText = �󔒕�����
 * 		B.�{����ID���E�N���b�N�����ꍇ
 * 			Number = -1
 * 			InfoText = ID
 * �EMainWnd.ThreadPopupMenu
 * 	PopupObject = �E�N���b�N�����^�u��ViewItem�I�u�W�F�N�g
 * 	Number = �N���b�N�����^�u�̃C���f�b�N�X
 * �EMainWnd.PopupTree
 * 	PopupObject = �E�N���b�N�����^�u�܂��͔ꗗ�A�C�R���̔�Board�I�u�W�F�N�g
 * 		A.�ꗗ�A�C�R�����E�N���b�N�����ꍇ
 * 			Number = -1
 * 		B.�^�u���E�N���b�N�����ꍇ
 * 			Number =  �E�N���b�N�����^�u�̃C���f�b�N�X
 * 			InfoText = �󔒕�����
 * �E���̑�
 * 	PopupObject = undefined
 * 	Number = 0
 * 	InfoText = �󔒕�����
 * 
 * @class _JVS.PopupTargetInfo
 */
_JVS.PopupTargetInfo = function(){};

/**
 * �����̐��l�͈͂�ێ�����I�u�W�F�N�g�B
 * ���X�ԃ����N�̃����N��Ȃǂ��擾����֐��̖߂�l�ȂǂɎg����B
 * @class _JVS.RangeList
 */
_JVS.RangeList = function(){};

/**
 * ThreadItem.GetReferredList�ɂ��擾�����A�X���̊e���X���ǂ̃��X����Q�Ƃ���Ă��邩�̏���
 * �ێ�����I�u�W�F�N�g�B
 * ���X�Ԓ��F�̒��F�����쐬���邽�߂̃N���X�����b�v�������́B
 * �Q�Ƃ��ꂽ���Ƃǂ̃��X����Q�Ƃ��ꂽ�̂����m�F�ł���̂ŁA����̃��X����Q�Ƃ��ꂽ���X��
 * ���o����ꍇ�Ȃǂɗ��p�\�B
 * @class _JVS.ReferredList
 */
_JVS.ReferredList = function(){};

/**
 * ���X�̏���ێ�����I�u�W�F�N�g�B
 * ���v���p�e�B�ō��ӑ���\�ƂȂ��Ă�����̂ł��A�擾���ɂ���Ă͏����������֎~�̏ꍇ����B
 * @class _JVS.ResItem
 */
_JVS.ResItem = function(){};

/**
 * �����񃊃X�g��ێ�����I�u�W�F�N�g�BIEnumlator�Ȃǂ͎�������Ă��Ȃ��̂ŁA�񋓂���ꍇ��
 * �C���f�b�N�X�����Ɏw�肵�Ď擾���Ă����K�v����B
 * @class _JVS.Strings
 */
_JVS.Strings = function(){};

/**
 * URL�����ɁA�Y������X����̃I�u�W�F�N�g���擾���邽�߂̃I�u�W�F�N�g�B
 * �����Ώۂ́A�擾�ς݂̔ꗗ�̌��s�X������ю擾�ς݂̉ߋ����O�ŁA�������X��URL�ł����Ă�
 * �Y���̃X���̏���Jane�������Ă��Ȃ���Ό����ł͊Y���Ȃ��ƂȂ�(�X��URL�����ɒ��g�����
 * �V�KThreadItem�I�u�W�F�N�g����铮��͍s���Ȃ�)
 * @class _JVS.ThreadFinder
 */
_JVS.ThreadFinder = function() {};

/**
 * �X���̏����Q�Ƃ���I�u�W�F�N�g�B���X���e�A�^�C�g���⃌�X���Ȃǂ̏��擾�ƈꕔ�ύX���\�B
 * 
 * @class _JVS.ThreadItem
 */
_JVS.ThreadItem = function(){};

/**
 * �X���r���[��|�b�v�A�b�v���Q�Ƃ���I�u�W�F�N�g
 * ���̃I�u�W�F�N�g����A�X���r���[���Q�Ƃ��Ă���X����ThreadItem�I�u�W�F�N�g�̎擾�A�X���r���[��
 * �e�L�X�g���������ނ��߂�DatOut�I�u�W�F�N�g���擾�A�X���^�u�Ɋւ�����̐ݒ�Q�ƁA�I���e�L�X�g��
 * �t�H�[�J�X���ꂽ�����N�̎擾�Ȃǂ��\
 * @class _JVS.ViewItem
 */
_JVS.ViewItem = function(){};

/**
 * �X���^�u�̈ꗗ��ێ�����I�u�W�F�N�g�B���̃I�u�W�F�N�g����ʂ̃X���^�u�ɃA�N�Z�X�\�B
 * �X�N���v�g�p�̐V�K�X���r���[�̍쐬�����̃I�u�W�F�N�g����s���B
 * 
 * @class _JVS.ViewList
 */
_JVS.ViewList = function(){};
