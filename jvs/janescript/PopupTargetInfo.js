/*!
 * @include "_InternalClasses.js"
 */

/**
 * メニューをクリックした場所に関連する文字情報を保持する
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.PopupTargetInfo.prototype.InfoText = "";

/**
 * メニューをクリックした場所に関連する数値情報を保持する
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.PopupTargetInfo.prototype.Number = 0;

/**
 * PopupObjectの種類を示す文字列を保持する。"ViewItem", "Board"など。
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.PopupTargetInfo.prototype.ObjectName = "ViewItem";

/**
 * メニューをクリックした場所に関連するオブジェクトを保持する
 * Action：○　LateCall:○　Command:○
 * @type Object
 */
_JVS.PopupTargetInfo.prototype.PopupObject = {};
