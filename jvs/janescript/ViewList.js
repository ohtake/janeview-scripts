/*!
 * @include "_InternalClasses.js"
 */

/**
 * 参照先のviewListの実体が存在しているかどうか
 * 
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * ※現在の実装では、viewList.Connectedがfalseになることはない
 * 
 * Action：○　LateCall:○　Command:○
 * 
 * @type bool
 */
_JVS.ViewList.prototype.Connected = true;

/**
 * 現在開かれているスレビューの数
 * 
 * Action：○　LateCall:○　Command:○
 * 
 * @type int
 */
_JVS.ViewList.prototype.Count = 1;

/**
 * 現在開かれているスレビューを参照する
 * 
 * Action：○　LateCall:○　Command:○
 * 
 * @param {int} Index 参照するスレビューの番号(左端が0、右端がCount-1)
 * @return {_JVS.ViewItem} 対象となるスレビューを参照するViewItemオブジェクト
 */
_JVS.ViewList.prototype.Items = function(Index){return new _JVS.ViewItem();};

/**
 * 新規にスレタブを作成する。IE版ではこの関数はメッセージ処理を伴うので、開いたスレタブが
 * この関数の終了前にユーザーにより閉じられてしまう可能性がごくわずかながらある。その場合は
 * 戻り値のConnectedがfalseになるので、それを確認するか、もしくは戻り値にアクセスしたときに
 * 発生する例外をcatchしてその後の処理を取りやめ、適切に終了させる
 * 
 * Action：×　LateCall:○　Command:○
 * 
 * @param {bool} Relative タブを追加する位置の設定
 * true  設定-タブ操作-「タブを追加する位置」の「タブから開く時」に従う
 * false 設定-タブ操作-「タブを追加する位置」の「通常」に従う
 * @param {bool} BackGround 
 * true  作成したタブをアクティブにする
 * false アクティブタブを変更しない
 * @return {_JVS.ViewItem} 作成したスレビューを参照するViewItemオブジェクト
 */
_JVS.ViewList.prototype.NewView = function(Relative, Background){return new _JVS.ViewItem();};

