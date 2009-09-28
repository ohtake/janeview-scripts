/*!
 * @include "_InternalClasses.js"
 */

/**
 * RangeListが保持したレスが参照するIndex番目の参照レス番範囲の開始番号を返す
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 参照レス番範囲のRangeList中での番号
 * @return {int} 参照レス番範囲の開始番号
 */
_JVS.RangeList.prototype.RangeBegin = function(Index){return 1;};

/**
 * RangeListが保持したレスが参照するIndex番目の参照レス番範囲の終了番号を返す
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 参照レス番範囲のRangeList中での番号
 * @return {int} 参照レス番範囲の終了番号
 */
_JVS.RangeList.prototype.RangeEnd = function(Index){return 1;};

/**
 * RangeListが保持した、レスが参照するレス番範囲の数を返す
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.RangeList.prototype.Count = 1;

/**
 * RangeListの参照先が存在しているか
 * true  参照先の実体は存在している
 * false 参照先の実体は削除された
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.RangeList.prototype.Connected = true;

/**
 * RangeListが保持する全てのRangeの幅(最大値-最小値)の合計を返す
 * @return {int} RangeListが保持する全てのRangeの幅の合計
 */
_JVS.RangeList.prototype.WholeRangeWidth = function(){return 1;};
