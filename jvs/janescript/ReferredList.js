/*!
 * @include "_InternalClasses.js"
 */

/**
 * ReferredListの取得元のスレのレス数
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ReferredList.prototype.Lines = 1;

/**
 * レス番Indexのレスを参照しているレスの数
 * （レス番着色が使用しているデータ）
 * Action：○　LateCall:○　Command:○
 * @param {int} Index
 * @return {int}
 */
_JVS.ReferredList.prototype.RefCount = function(Index){return 0;};

/**
 * レス番Indexのレスを参照しているRefIndex番目のレスのレス番
 * @param {int} Index
 * @param {int} RefIndex
 */
_JVS.ReferredList.prototype.ReferencedFrom = function(Index, RefIndex){return 1;};
