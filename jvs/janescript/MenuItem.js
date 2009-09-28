/*!
 * @include "_InternalClasses.js"
 */

/**
 * MenuItem�̃T�u���j���[�̐擪�ɐV���ȃT�u���j���[��ǉ�����
 * Insert(0)�Ɠ����̏���
 * Action�F���@LateCall:���@Command:��
 * @return {_JVS.MenuItem} �V���ɍ쐬�������j���[��MenuItem
 */
_JVS.MenuItem.prototype.Add = function(){return new _JVS.MenuItem();};

/**
 * ���j���[�ɕ\������镶����
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.MenuItem.prototype.Caption = "";

/**
 * ���j���[�̍��[�̃`�F�b�N�̗L��
 * true  �`�F�b�N����
 * false �`�F�b�N�Ȃ�
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.MenuItem.prototype.Checked = false;

/**
 * MenuItem�̎Q�Ɛ�̃��j���[�����݂��Ă��邩
 * true  �Q�Ɛ�̃��j���[�͑��݂��Ă���
 * false �Q�Ɛ�̃��j���[��Disconnect�ɂ��X�N���v�g����폜���ꂽ���A�V�X�e���ɍ폜���ꂽ
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.MenuItem.prototype.Connected = true;

/**
 * ����MenuItem�Ɋ܂܂��T�u���j���[�̐�
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.MenuItem.prototype.Count = 1;

/**
 * MenuItem���ێ����Ă��郁�j���[���폜����B���̊֐��̎��s��A���s�����I�u�W�F�N�g��
 * Connected�v���p�e�B��false�ɂȂ�
 * Action�F���@LateCall:���@Command:��
 */
_JVS.MenuItem.prototype.Disconnect = function(){};

/**
 * ���j���[���L�����ǂ����̐ݒ�
 * true  ���j���[�͗L��
 * false ���j���[�͖����i�O���[�A�E�g��ԁj
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.MenuItem.prototype.Enabled = true;

/**
 * �W�F�X�`���[�o�^�̎���Jane�����Ŕ���Ɏg�p���镶����B
 * ���ꂪ�󔒕�����̏ꍇ�A�W�F�X�`���[�o�^�̃��j���[�ꗗ�ɕ\������Ȃ��B
 * GestureName�����̃��j���[�Əd������ƃG���[�ɂȂ�̂ŁAGestureName�̐ݒ�͕K�v�ŏ����ɗ}����
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.MenuItem.prototype.GetGestureName = "";

/**
 * MenuItem�̐V���ȃT�u���j���[���쐬���AIndex�̈ʒu�ɑ}������
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �V���ȃ��j���[��}������ʒu
 * @return {_JVS.MenuItem} �V�K�ɍ쐬�������j���[��MenuItem�I�u�W�F�N�g
 */
_JVS.MenuItem.prototype.Insert = function(Index){return new _JVS.MenuItem();};

/**
 * MenuItem���ێ����Ă��郁�j���[�̃T�u���j���[���擾����
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �擾����T�u���j���[��MenuItem�̒��ł̏���
 * @return {_JVS.MenuItem} �Ώۃ��j���[��MenuItem�I�u�W�F�N�g
 */
_JVS.MenuItem.prototype.Items = function(Index){return new _JVS.MenuItem();};

/**
 * MenuItem�́A�e���j���[�̒��ł̈ʒu
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.MenuItem.prototype.MenuIndex = 0;

/**
 * MenuItem�����[�U�[�ɑI�����ꂽ�ꍇ�Ɏ��s�����֐����w�肷��B
 * MenuItem���T�u���j���[�����R���e�i���ڂ̏ꍇ�A�T�u���j���[��W�J����O��OnClick���Ă΂��̂�
 * �󋵂ɍ��킹�ăT�u���j���[��Enabled, Visible�AChecked��ݒ肷��̂ɗ��p�\�B
 * 
 * OnClick�ɑ���ł���֐��̌^�͈ȉ��̒ʂ�
 * function MenuClick(menuObject: MenuItem, targetInfo: PopupTargetInfo) {};
 * �EMenuObject �N���b�N���ꂽMenuItem (�����֐��𕡐���MenuItem����Ăяo���ꍇ�̋�ʂɎg�p)
 * �EtargetObject ���j���[���|�b�v�A�b�v�����󋵂Ɋւ������ێ�����PopupTargetInfo�I�u�W�F�N�g
 * �ڍׂ�PopupTargetInfo�̃��t�@�����X���Q��
 * 
 * Action�F���@LateCall:���@Command:��
 * @type Function
 */
_JVS.MenuItem.prototype.OnClick = function(menuObject, targetInfo){};

/**
 * MenuItem�̐e���j���[���Q�Ƃ���MenuItem�I�u�W�F�N�g�B
 * �e���j���[���X�N���v�g�ō쐬�������̂łȂ��ꍇ��undefined
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.MenuItem
 */
_JVS.MenuItem.prototype.ParentMenu = new _JVS.MenuItem();

/**
 * MenuItem�̃V���[�g�J�b�g��ݒ肷��
 * ��FMenuItem.ShortCut = "Shift+Ctrl+A";
 * 
 * �����j���[��������|�b�v�A�b�v�ɂɂ���Ă�ShortCut�ŃV���[�g�J�b�g��ݒ肵�Ă�
 * ���ʂ��Ȃ��ꍇ����
 * 
 * Action�F���@LateCall:���@Command:��
 * @type String
 */
_JVS.MenuItem.prototype.ShortCut = "";

/**
 * ���j���[��\�����邩��ݒ肷��
 * true  �\������
 * false �\�����Ȃ�
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.MenuItem.prototype.Visible = true;
