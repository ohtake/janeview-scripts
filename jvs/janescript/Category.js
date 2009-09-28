/*!
 * @include "_InternalClasses.js"
 */

/**
 * カテゴリの親になっているCategoryListオブジェクト。JaneViewはCategoryListを一つしか持たないので
 * 必ずJaneScript.CategoryListと同一になる
 * Action：○　LateCall:○　Command:○
 * @type _JVS.CategoryList
 */
_JVS.Category.prototype.CategoryList = new _JVS.CategoryList();

/**
 * 参照先のCategoryの実体が存在しているかどうか
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * ※カテゴリは保持する板がオープン中でなければ板一覧の更新で破棄→再作成されるため、
 * Categoryオブジェクトの取得後に板一覧が更新されると高率でConnectedはfalseになり、
 * その後のそのCategoryオブジェクトへのアクセスはエラーになる
 * @type bool
 */
_JVS.Category.prototype.Connected = true;

/**
 * カテゴリが保持する板(boardオブジェクト)の数
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.Category.prototype.Count = 1;

/**
 * 板名を元にカテゴリ内の板を検索し、その板のBoardオブジェクトを返す。
 * Action：○　LateCall:○　Command:○
 * @param {String} Name 板名(Win板なら"Windows")
 * @return {_JVS.Board} 板名に該当する板のBoardオブジェクト。該当する板がない場合はundefined
 */
_JVS.Category.prototype.FindBoard = function(Name){return new _JVS.Board();};

/**
 * カテゴリが保持する板のBoardオブジェクトを取得する。インデックスが範囲外の場合はエラー。
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 取得する板の番号
 * @return {_JVS.Board} 該当する板のBoardオブジェクト
 */
_JVS.Category.prototype.Items = function(Index){return new _JVS.Board();};

/**
 * カテゴリのディレクトリ
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.Category.prototype.LogDir = "Logs";

/**
 * カテゴリの名称(例：Win板のカテゴリならば"ＰＣ")
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.Category.prototype.Name = "ＰＣ";

/**
 * システムでは使用/制御しない。
 * スクリプトが何かCategoryに固有の情報を保持させたい場合にこのプロパティに代入しておく。
 * スクリプトごとに保存領域が分けられているので、CategoryListに対してA.jsとB.jsが別々に
 * Category.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
 * スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能
 * ただし、板一覧の更新などによりCategoryの実体が再作成された場合はObjも失われる。
 * Action：○　LateCall:○　Command:○
 * @type Object
 */
_JVS.Category.prototype.Obj = null;
