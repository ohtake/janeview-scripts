/*!
 * @include "_InternalClasses.js"
 */

/**
 * ResItemが参照するレス情報の実体が存在しているかどうか
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.ResItem.prototype.Connected = true;

/**
 * 保持しているレスの日付欄の文字列(日付の他にID、BE情報などを含む)
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Date = "";

/**
 * 保持しているレスの投稿時刻
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ResItem.prototype.DateValue = 0;

/**
 * 保持しているレスのID文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Id = "";

/**
 * 保持しているレスのメール欄の文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Mail = "sage";

/**
 * 保持しているレスの本文文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Msg = "";

/**
 * 保持しているレスの名前欄の文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Name = "";

/**
 * 保持しているレスのレス番
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ResItem.prototype.Number = 1;

/**
 * 保持しているレスが属するスレのタイトル
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.Title = "";

/**
 * 保持しているレスが属するスレのURL(レス番は付かない)
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ResItem.prototype.URL = "";
