/*!
 * @include "_InternalClasses.js"
 */

/**
 * MenuItemのサブメニューの先頭に新たなサブメニューを追加する
 * Insert(0)と同等の処理
 * Action：○　LateCall:○　Command:○
 * @return {_JVS.MenuItem} 新たに作成したメニューのMenuItem
 */
_JVS.MenuItem.prototype.Add = function(){return new _JVS.MenuItem();};

/**
 * メニューに表示される文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.MenuItem.prototype.Caption = "";

/**
 * メニューの左端のチェックの有無
 * true  チェックあり
 * false チェックなし
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.MenuItem.prototype.Checked = false;

/**
 * MenuItemの参照先のメニューが存在しているか
 * true  参照先のメニューは存在している
 * false 参照先のメニューはDisconnectによりスクリプトから削除されたか、システムに削除された
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.MenuItem.prototype.Connected = true;

/**
 * そのMenuItemに含まれるサブメニューの数
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.MenuItem.prototype.Count = 1;

/**
 * MenuItemが保持しているメニューを削除する。この関数の実行後、実行したオブジェクトの
 * Connectedプロパティはfalseになる
 * Action：○　LateCall:○　Command:○
 */
_JVS.MenuItem.prototype.Disconnect = function(){};

/**
 * メニューが有効かどうかの設定
 * true  メニューは有効
 * false メニューは無効（グレーアウト状態）
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.MenuItem.prototype.Enabled = true;

/**
 * ジェスチャー登録の時にJane内部で判定に使用する文字列。
 * これが空白文字列の場合、ジェスチャー登録のメニュー一覧に表示されない。
 * GestureNameが他のメニューと重複するとエラーになるので、GestureNameの設定は必要最小限に抑える
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.MenuItem.prototype.GetGestureName = "";

/**
 * MenuItemの新たなサブメニューを作成し、Indexの位置に挿入する
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 新たなメニューを挿入する位置
 * @return {_JVS.MenuItem} 新規に作成したメニューのMenuItemオブジェクト
 */
_JVS.MenuItem.prototype.Insert = function(Index){return new _JVS.MenuItem();};

/**
 * MenuItemが保持しているメニューのサブメニューを取得する
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 取得するサブメニューのMenuItemの中での順番
 * @return {_JVS.MenuItem} 対象メニューのMenuItemオブジェクト
 */
_JVS.MenuItem.prototype.Items = function(Index){return new _JVS.MenuItem();};

/**
 * MenuItemの、親メニューの中での位置
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.MenuItem.prototype.MenuIndex = 0;

/**
 * MenuItemがユーザーに選択された場合に実行される関数を指定する。
 * MenuItemがサブメニューを持つコンテナ項目の場合、サブメニューを展開する前にOnClickが呼ばれるので
 * 状況に合わせてサブメニューのEnabled, Visible、Checkedを設定するのに利用可能。
 * 
 * OnClickに代入できる関数の型は以下の通り
 * function MenuClick(menuObject: MenuItem, targetInfo: PopupTargetInfo) {};
 * ・MenuObject クリックされたMenuItem (同じ関数を複数のMenuItemから呼び出す場合の区別に使用)
 * ・targetObject メニューがポップアップした状況に関する情報を保持したPopupTargetInfoオブジェクト
 * 詳細はPopupTargetInfoのリファレンスを参照
 * 
 * Action：○　LateCall:○　Command:○
 * @type Function
 */
_JVS.MenuItem.prototype.OnClick = function(menuObject, targetInfo){};

/**
 * MenuItemの親メニューを参照するMenuItemオブジェクト。
 * 親メニューがスクリプトで作成したものでない場合はundefined
 * Action：○　LateCall:○　Command:○
 * @type _JVS.MenuItem
 */
_JVS.MenuItem.prototype.ParentMenu = new _JVS.MenuItem();

/**
 * MenuItemのショートカットを設定する
 * 例：MenuItem.ShortCut = "Shift+Ctrl+A";
 * 
 * ※メニューを代入するポップアップにによってはShortCutでショートカットを設定しても
 * 効果がない場合あり
 * 
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.MenuItem.prototype.ShortCut = "";

/**
 * メニューを表示するかを設定する
 * true  表示する
 * false 表示しない
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.MenuItem.prototype.Visible = true;
