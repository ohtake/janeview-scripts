/*!
 * @include "_InternalClasses.js"
 */

/**
 * RangeList���ێ��������X���Q�Ƃ���Index�Ԗڂ̎Q�ƃ��X�Ԕ͈͂̊J�n�ԍ���Ԃ�
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �Q�ƃ��X�Ԕ͈͂�RangeList���ł̔ԍ�
 * @return {int} �Q�ƃ��X�Ԕ͈͂̊J�n�ԍ�
 */
_JVS.RangeList.prototype.RangeBegin = function(Index){return 1;};

/**
 * RangeList���ێ��������X���Q�Ƃ���Index�Ԗڂ̎Q�ƃ��X�Ԕ͈͂̏I���ԍ���Ԃ�
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index �Q�ƃ��X�Ԕ͈͂�RangeList���ł̔ԍ�
 * @return {int} �Q�ƃ��X�Ԕ͈͂̏I���ԍ�
 */
_JVS.RangeList.prototype.RangeEnd = function(Index){return 1;};

/**
 * RangeList���ێ������A���X���Q�Ƃ��郌�X�Ԕ͈͂̐���Ԃ�
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.RangeList.prototype.Count = 1;

/**
 * RangeList�̎Q�Ɛ悪���݂��Ă��邩
 * true  �Q�Ɛ�̎��̂͑��݂��Ă���
 * false �Q�Ɛ�̎��͍̂폜���ꂽ
 * Action�F���@LateCall:���@Command:��
 * @type bool
 */
_JVS.RangeList.prototype.Connected = true;

/**
 * RangeList���ێ�����S�Ă�Range�̕�(�ő�l-�ŏ��l)�̍��v��Ԃ�
 * @return {int} RangeList���ێ�����S�Ă�Range�̕��̍��v
 */
_JVS.RangeList.prototype.WholeRangeWidth = function(){return 1;};
