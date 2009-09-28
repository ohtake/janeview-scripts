/*!
 * @include "_InternalClasses.js"
 */

/**
 * 類似度比較の基準となる文字列。Evaluateで、この文字列との類似度が得られる。
 * 
 * Action：○　LateCall:○　Command:○
 * 
 * @type String
 */
_JVS.CosSim.prototype.Subject = "";

/**
 * SubjectとStrの類似度を算出する
 * 
 * Action：○　LateCall:○　Command:○
 * 
 * @param {String} Str Subjectと比較する文字列
 * @return float SubjectとStrの類似度
 */
_JVS.CosSim.prototype.Evaluate = function(Str){return 0.5;};

