/*!
 * @include "_InternalClasses.js"
 */

/**
 * ReferredList�̎擾���̃X���̃��X��
 * Action�F���@LateCall:���@Command:��
 * @type int
 */
_JVS.ReferredList.prototype.Lines = 1;

/**
 * ���X��Index�̃��X���Q�Ƃ��Ă��郌�X�̐�
 * �i���X�Ԓ��F���g�p���Ă���f�[�^�j
 * Action�F���@LateCall:���@Command:��
 * @param {int} Index
 * @return {int}
 */
_JVS.ReferredList.prototype.RefCount = function(Index){return 0;};

/**
 * ���X��Index�̃��X���Q�Ƃ��Ă���RefIndex�Ԗڂ̃��X�̃��X��
 * @param {int} Index
 * @param {int} RefIndex
 */
_JVS.ReferredList.prototype.ReferencedFrom = function(Index, RefIndex){return 1;};
