/*!
 * @include "_InternalClasses.js"
 */


/**
 * 保持している名前付き変数を全て消去する
 * 
 * Action：○　LateCall:○　Command:○
 */
_JVS.NamedVariant.prototype.Clear = function(){};


/**
 * 文字列を使ってプロパティにアクセスする。
 * NamedVariant.HogeHoge と NamedVariant.Items("HogeHoge") は同じ。
 * Action：○　LateCall:○　Command:○
 * @param {String} Name
 * @return {Object}
 */
_JVS.NamedVariant.prototype.Items = function(Name){return {};};

