/*!
 * @include "_InternalClasses.js"
 */

/**
 * 参照先のviewItemの実体が存在しているかどうか。viewItemはスクリプトが参照を保持していても
 * ユーザー操作でスレビューやポップアップが閉じられれば実体が削除されてしまうので、
 * そのような場合にはConnectedがfalseになりアクセスが不能になる
 * 
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.ViewItem.prototype.Connected = true;

/**
 * QueryDatOutで取得したDatOutオブジェクトをdisconnectし、文字列の書き出しを終了する
 * viewItemオブジェクトは参照カウントがゼロになるとガベージコレクトで自動的にEndDatOutを
 * 呼び出すので通常はEndDatOutを明示的に呼び出す必要はないが、viewItemオブジェクトを継続して
 * グローバル変数などに保持する場合は文字列出力の終了後にEndDatOutを確実に呼び出す必要がある。
 * プログラミング上、QueryDatOut以降の節はtry catch finally文で括り、finallyの中でEndDatOutを
 * 呼び出すのが好ましい
 * 
 * Action：×　LateCall:○　Command:○
 */
_JVS.ViewItem.prototype.EndDatOut = function(){};

/**
 * スレ表示用以外の抽出などのスレビューでスレタイ欄に表示される文字列を取得/指定する
 * スレ表示中のスレビューでも操作は可能だが、スレタイ欄には反映されない
 * viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
 * 
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ViewItem.prototype.ExtraTitle = "";

/**
 * キャレットを表示している場合は、そのスレビューのキャレットの位置にあるリンクのhref。
 * キャレット非表示や対象がポップアップの場合は、直前にクリックしたリンク。
 * それらの位置がリンクでなかった場合は空白文字列
 * 
 * Action：○　LateCall:○　Command:○
 */
_JVS.ViewItem.prototype.FocusedLink = "";

/**
 * スレ表示用以外の抽出などのスレビューでスレタブのマウスオーバーにより表示されるヒントの文字列を
 * 取得/指定する。
 * スレ表示中のスレビューでも操作は可能だが、ヒントには反映されない
 * viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
 * 
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ViewItem.prototype.HintText = "";

/**
 * システムでは使用/制御しない。
 * スクリプトが何かviewItemに固有の情報を保持させたい場合にこのプロパティに代入しておく。
 * スクリプトごとに保存領域が分けられているので、あるviewItemに対してA.jsとB.jsが別々に
 * viewItem.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
 * スクリプトからの参照がなくなっても、実体のスレビューが閉じられていなければObjの内容は
 * 保持され、再度スクリプトから参照すれば値を取得できる
 * 
 * Action：○　LateCall:○　Command:○
 * @type Object
 */
_JVS.ViewItem.prototype.Obj;

/**
 * スレビューに書き込むためのDatOutオブジェクトを生成し、スレビューを書き込み待機状態にする
 * この関数の対象にできるviewItemはそのスクリプトがviewList.NewViewで生成したものに限られ、
 * Janeの標準組み込みコマンドによるスレビューや抽出ビュー、他のスクリプトが生成したスレビューに
 * 対してこの関数を実行するとエラーになる。
 * QueryDatOutを呼び出して書き込み処理が終了したら、EndDatOutを呼び出す必要がある
 * 
 * @return {_JVS.DatOut} スレビューに書き込むためのDatOutオブジェクト
 */
_JVS.ViewItem.prototype.QueryDatOut = function(){return new _JVS.DatOut();};

/**
 * スレビュー/ポップアップで範囲選択している文字列。範囲選択していない場合は空白文字列。
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ViewItem.prototype.Selection = "";

/**
 * スレ表示用以外の抽出などのスレビューでスレタブに表示される文字列を取得/指定する。
 * スレ表示中のスレビューでも操作は可能だが、ヒントには反映されない
 * viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ViewItem.prototype.TabText = "";

/**
 * スレビュー/ポップアップで開かれているスレのThreadItemオブジェクト。抽出やログから検索β、
 * スクリプトが作成したスレビュー/ポップアップなど、スレを保持していないビューではundefined。
 * Action：○　LateCall:○　Command:○
 * @return {_JVS.ThreadItem} 対象のビューで開いているスレのThreadItemオブジェクト。スレを保持していないビューではundefined
 */
_JVS.ViewItem.prototype.Thread = function(){return new _JVS.ThreadItem();};

/**
 * viewItemオブジェクトが参照する対象の種別を示す文字列。
 * Action：○　LateCall:○　Command:○
 * "PopupView"      ポップアップ
 * "ViewerView"     ビューアの簡易HTML表示
 * "ThreadView"     スレ表示中のスレビュー
 * "FunctionalView" 抽出など、スレ表示以外のスレビュー
 * "FunctionalView" 抽出など、スレ表示以外のスレビュー
 * "FlexView"       上記以外のHTML表示(書き込みプレビューなど)
 * "Undefined"      上記以外
 * @type String
 */
_JVS.ViewItem.prototype.ViewType = "Undefined";

/**
 * スキン文字列を書き込む。そのビューでQueryDatOutによりDatOutオブジェクトが作成され、有効に
 * 保持されている状況でなければ実行できない。
 * Doeでフォントを変更するためにはWriteSkinでBodyタグによりフォント設定する必要がある。
 * Skin文字列に空白文字列を指定した場合、Jane側で設定された通常スキンが使用される。
 * (もっと変えたいβなどの板別設定は使われない)
 * Action：×　LateCall:○　Command:○
 * @param {String} Skin
 */
_JVS.ViewItem.prototype.WriteSkin = function(Skin){};
