/*!
 * @include "_InternalClasses.js"
 */

/**
 * オブジェクトが参照するスレが属する板のBoardオブジェクト
 * Action：○　LateCall:○　Command:○
 * @type _JVS.Board
 */
_JVS.ThreadItem.prototype.Board = new _JVS.Board();

/**
 * ThreadItemが参照するスレの実体が存在しているかどうか
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * 
 * ※スレはスクリプトからThreadItemオブジェクトに参照されることで参照カウントが加算されるため、
 * 現在の実装ではThreadItemへの参照がある限りConnectedがfalseになることはない。
 * 
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.ThreadItem.prototype.Connected = true;

/**
 * スレのログ(datファイル)が存在するか
 * true  存在する
 * false 存在しない
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.ThreadItem.prototype.DatExist = true;

/**
 * dat名(datファイルのファイル名から拡張子を取り除いたもの)
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ThreadItem.prototype.DatName = "1234567890";

/**
 * 取得済みのdatファイルの大きさ(単位:byte)
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.DatSize = 100*1024;

/**
 * datファイル全体の文字列
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ThreadItem.prototype.DatText = "name<>mail<>date<>message<>thread\n";

/**
 * スレのΔレス値
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.DeltaRes = 1;

/**
 * スレの最終レスの時刻値
 * 最終レスが未定義値の場合は0。
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.FinalRes = 0;

/**
 * レスのあぼーん状態を取得する
 * Action：○　LateCall:○　Command:○
 * @param {int} Index あぼーんの状態を取得するレスのレス番号
 * @return {int} レスのあぼーん状態
 * 0: 通常
 * 1: あぼーん
 * 2: 透明あぼーん
 * 4: レスチェック
 */
_JVS.ThreadItem.prototype.GetAbone = function(Index){return 0;};

/**
 * レスに含まれた>>1などのレス番リンクの参照先一覧を保持したRangeListオブジェクトを取得する。
 * Action：○　LateCall:○　Command:○
 * 
 * @example
 * >>4 >>1-2 >>6-8　というリンクを持ったレスでは、次の内容のRangeListが戻り値として得られる。
 * 
 * RangeList.Count == 3
 * RangeList.RangeBegin(0) == 1,　RangeList.RangeEnd(0) == 2
 * RangeList.RangeBegin(1) == 4,　RangeList.RangeEnd(1) == 4
 * RangeList.RangeBegin(2) == 6,　RangeList.RangeEnd(2) == 8
 * RangeList.WholeRangeWidth == 6
 * 
 * ただし、得られたRangeはソートされ、参照先の範囲が連続したものは結合、重複は削除されるので、
 * 元のレス番参照が例えば>>1,2 >>4 >>6-7 >>7-8であっても同じ結果になり、区別できない
 * 
 * @param {int} Index レス番リンク参照一覧を取得するレスのレス番号
 * @param {int} IncludeName
 * @return {_JVS.RangeList} レス番リンク参照一覧を保持したRangeList
 */
_JVS.ThreadItem.prototype.GetNumberLinks = function(Index, IncludeName){return new _JVS.RangeList();};

/**
 * スレの全レスについて、>>1などのレス番リンクでそのレスを参照した元スレの一覧を保持した
 * ReferredListオブジェクトを取得する。
 * Action：○　LateCall:○　Command:○
 * @return {_JVS.ReferredList} そのスレのレス番リンク情報を保持したReferredListオブジェクト
 */
_JVS.ThreadItem.prototype.GetReferredList = function(){return new _JVS.ReferredList();};

/**
 * レスの内容を保持したResItemオブジェクトを取得する
 * Action：○　LateCall:○　Command:○
 * @param {int} Index 内容を取得するレスのレス番
 * @return {_JVS.ResItem} レス内容を保持したResItemオブジェクト
 */
_JVS.ThreadItem.prototype.GetRes = function(Index){return new _JVS.ResItem();};

/**
 * レスに含まれるURLの一覧を取得する
 * Action：○　LateCall:○　Command:○
 * @param {int} Index URL一覧を取得するレスのレス番
 * @return {_JVS.Strings} URL一覧を保持したStringsオブジェクト
 */
_JVS.ThreadItem.prototype.GetUrlList = function(Index){return new _JVS.Strings();};

/**
 * Subject.txtから取得したレス数(スレ一覧の「レス」)
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.ItemCount = 1;

/**
 * スレの勢いΔの値
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.ItemDelta = 1;

/**
 * スレの最終取得の時刻値
 * 最終レスが未定義値の場合は0。
 * @type int
 */
_JVS.ThreadItem.prototype.LastGot = 0;

/**
 * datの最終更新時刻(httpレスポンスヘッダから取得した文字列)
 * 
 * 参考：javascriptの日付オブジェクトに変換する方法
 * var lastModified = new Date(thread.lastModified);
 * 
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ThreadItem.prototype.LastModified = "Thu, 01 Jan 1970 00:00:00 GMT";;

/**
 * スレの最終書き込みの時刻値。未定義値の場合は0。
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.LastWrote = 0;

/**
 * 取得済みのレス数
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.Lines = 1;

/**
 * 該当のスレを表示しているスレビューがある場合はそのスレを再読込する。
 * SetAbone()であぼーん状態を設定したり、NGを新規追加した後に表示にそれらを反映するのに使用する
 * Action：○　LateCall:○　Command:○
 */
_JVS.ThreadItem.prototype.LocalReload = function(){};

/**
 * スレの印の状態
 * 1: 印あり
 * 0: 印なし
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.Mark = 0;

/**
 * 板一覧上でのスレの番号。過去ログの場合は0
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.ThreadItem.prototype.Number = 1;

/**
 * システムでは使用/制御しない。
 * スクリプトがスレごとに固有の情報を保持させたい場合に情報をこのプロパティに代入する。
 * スクリプトごとに保存領域が分けられているので、同じThreadItemに対してA.jsとB.jsが別々に
 * ThreadItem.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
 * スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能。
 * ただし、スレは板の更新時に参照がなければ削除→再作成されるので、ThreadItemオブジェクトから
 * 参照されていないスレが保持するObjはそのスレが所属する板の更新により高い確率で失われる。
 * 
 * Action：○　LateCall:○　Command:○
 * @type Object
 */
_JVS.ThreadItem.prototype.Obj = null;

/**
 * 読み込み済みのスレのうち、既読になっているレスの番号
 * 閉じた状態のスレにこの値を設定してから開くことで「この先を未読で閉じる」が設定してあるのと
 * 同等の効果が得られる。
 * Action：○　LateCall:○　Command:○
 * @type int 
 */
_JVS.ThreadItem.prototype.OldLines = 1;

/**
 * レスのあぼーん状態を設定する。SetAboneを行ってもスレビューの表示には反映されない。
 * 表示に反映させるには、必要なあぼーんを設定した後にThreadItem.LocalReload()を呼び出して
 * 再読込を行う。
 * Action：○　LateCall:○　Command:○
 * @param {int} Index あぼーんの状態を取得するレスのレス番号
 * @param {int} Value レスに設定するあぼーん状態
 * 0: 通常
 * 1: あぼーん
 * 2: 透明あぼーん
 * 4: レスチェック
 */
_JVS.ThreadItem.prototype.SetAbone = function(Index, Value){};

/**
 * スレのタイトル。変更すると.idxファイルに変更が保存され、以後はそのスレタイで表示される。
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ThreadItem.prototype.Title = "";

/**
 * スレのURL。レス数指定などは付かない。
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.ThreadItem.prototype.URL = "";

/**
 * スレに記憶させたコテメールアドレス
 * @type String
 */
_JVS.ThreadItem.prototype.UserdWriteMail = "";

/**
 * スレに記憶させたコテ名
 * @type String
 */
_JVS.ThreadItem.prototype.UserdWriteName = "";

