/*!
 * @include "_InternalClasses.js"
 */

/**
 * URL文字列から対応する板、スレを取得するのに使うThreadFinderオブジェクトを取得する
 * 
 * @return {_JVS.ThreadFinder} CategoryListを参照先にしたThreadFinderオブジェクト
 */
_JVS.CategoryList.prototype.CreateThreadFinder = function(){ return new _JVS.ThreadFinder();};

/**
 * 参照先のCategoryListの実体が存在しているかどうか
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * ※現在の実装では、CategoryList.Connectedがfalseになることはない
 * @type bool
 */
_JVS.CategoryList.prototype.Connected = true;

/**
 * CategoryListにあるカテゴリの数
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.CategoryList.prototype.Count = 1;

/**
 * CategoryListにあるカテゴリを参照するCategoryオブジェクトを取得する。
 * インデックスが範囲外の場合はエラー。
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 取得するカテゴリの番号
 * @return {_JVS.Category} 対象のカテゴリを参照するCategoryオブジェクト
 */
_JVS.CategoryList.prototype.Items = function(Index){return new _JVS.Category();};

/**
 * ログの保存ディレクトリ
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.CategoryList.prototype.LogDir = "Logs";

/**
 * システムでは使用/制御しない。
 * スクリプトが何かCategoryListに固有の情報を保持させたい場合にこのプロパティに代入しておく。
 * スクリプトごとに保存領域が分けられているので、CategoryListに対してA.jsとB.jsが別々に
 * CategoryList.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
 * スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能
 * 
 * ただし、現在のJaneViewでは複数のCategoryListが存在することはないので、実質的にはグローバル
 * 変数に代入するのと変わらない。
 * @type Object
 */
_JVS.CategoryList.prototype.Obj = null;
