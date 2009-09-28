/*!
 * @include "_InternalClasses.js"
 */

/**
 * �Q�Ɛ��viewList�̎��̂����݂��Ă��邩�ǂ���
 * 
 * true  ���݂��Ă���A�A�N�Z�X�\
 * false �폜����Ă���A�A�N�Z�X�s��
 * �����݂̎����ł́AviewList.Connected��false�ɂȂ邱�Ƃ͂Ȃ�
 * 
 * Action�F���@LateCall:���@Command:��
 * 
 * @type bool
 */
_JVS.ViewList.prototype.Connected = true;

/**
 * ���݊J����Ă���X���r���[�̐�
 * 
 * Action�F���@LateCall:���@Command:��
 * 
 * @type int
 */
_JVS.ViewList.prototype.Count = 1;

/**
 * ���݊J����Ă���X���r���[���Q�Ƃ���
 * 
 * Action�F���@LateCall:���@Command:��
 * 
 * @param {int} Index �Q�Ƃ���X���r���[�̔ԍ�(���[��0�A�E�[��Count-1)
 * @return {_JVS.ViewItem} �ΏۂƂȂ�X���r���[���Q�Ƃ���ViewItem�I�u�W�F�N�g
 */
_JVS.ViewList.prototype.Items = function(Index){return new _JVS.ViewItem();};

/**
 * �V�K�ɃX���^�u���쐬����BIE�łł͂��̊֐��̓��b�Z�[�W�����𔺂��̂ŁA�J�����X���^�u��
 * ���̊֐��̏I���O�Ƀ��[�U�[�ɂ������Ă��܂��\���������킸���Ȃ��炠��B���̏ꍇ��
 * �߂�l��Connected��false�ɂȂ�̂ŁA������m�F���邩�A�������͖߂�l�ɃA�N�Z�X�����Ƃ���
 * ���������O��catch���Ă��̌�̏���������߁A�K�؂ɏI��������
 * 
 * Action�F�~�@LateCall:���@Command:��
 * 
 * @param {bool} Relative �^�u��ǉ�����ʒu�̐ݒ�
 * true  �ݒ�-�^�u����-�u�^�u��ǉ�����ʒu�v�́u�^�u����J�����v�ɏ]��
 * false �ݒ�-�^�u����-�u�^�u��ǉ�����ʒu�v�́u�ʏ�v�ɏ]��
 * @param {bool} BackGround 
 * true  �쐬�����^�u���A�N�e�B�u�ɂ���
 * false �A�N�e�B�u�^�u��ύX���Ȃ�
 * @return {_JVS.ViewItem} �쐬�����X���r���[���Q�Ƃ���ViewItem�I�u�W�F�N�g
 */
_JVS.ViewList.prototype.NewView = function(Relative, Background){return new _JVS.ViewItem();};

