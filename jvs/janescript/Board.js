/*!
 * @include "_InternalClasses.js"
 */

/**
 * Boardオブジェクトが参照する板が属するカテゴリのCategoryオブジェクト
 * Action：○　LateCall:○　Command:○
 * @type _JVS.Category
 */
_JVS.Board.prototype.Category = new _JVS.Category();

/**
 * 参照先のBoardの実体が存在しているかどうか
 * true  存在しており、アクセス可能
 * false 削除されており、アクセス不可
 * 
 * ※板は板一覧の更新を行ったときに参照がなければ再作成されるため、Boardオブジェクトの取得後に
 * 板一覧が更新されると高率でConnectedはfalseになり、その後のそのBoardオブジェクトに
 * アクセスするとエラーになる。
 * （Boardオブジェクトへの参照があっても、実体の板が開いていなければ再作成の対象になる)
 * その場合は改めてBoardオブジェクトを取得する必要がある。
 * 
 * BoardオブジェクトのLoadを実行すると板がBoardオブジェクトから内部的にオープンされた状態に
 * なるため、Boardオブジェクトが参照されている間の再作成を防ぐことができる
 * 
 * Action：○　LateCall:○　Command:○
 * @type bool
 */
_JVS.Board.prototype.Connected = true;

/**
 * 板が現在保持しているスレの数
 * 
 * 板は開かれていなければ全てのレスを読み込んでいるのではなく、参照のあるスレだけを保持している。
 * この状態でCountを取得すると、そのとき保持しているスレの数が帰る。板に属する全てのスレの数を
 * 知りたい場合は、Board.Loadを実行してからCountを取得する必要がある。
 * Actionの中からはBoard.Loadが実行できず、またBoardAnalysisActionの場合ステージによってはスレを
 * 別な場所に一時的に移すことがあり、Board.Countは取得できるが正しい値にならない場合がある。
 * 
 * Action：△　LateCall:○　Command:○
 * @type int
 */
_JVS.Board.prototype.Count = 1;

/**
 * その板でのスレ容量警告の設定値。該当の板に属するスレがこの容量を超えると板一覧のアイコンと
 * スレタブの着色による警告表示が行われる。この値はBoardCustomize.iniにより設定される。単位はbyte。
 * @type int
 */
_JVS.Board.prototype.DatSizeAlert = 400 * 1024;

/**
 * 板の中からdat名を元にスレを検索し、ThreadItemオブジェクトを返す
 * 板が開かれていない場合は処理の中でBoard.Loadが呼び出される
 * このため、板が開かれていない場合はActionからの呼び出しはエラーになる。
 * また、BoardAnalysisActionからの呼び出しは解析のステージによっては正しい結果が得られない）
 * Action：△　LateCall:○　Command:○
 * @param {String} datName 検索するスレのdat名(datファイルのファイル名から拡張子(.dat)を取り除いたもの)
 * @return {_JVS.ThreadItem} 検索で見つかったスレのThreadItemオブジェクト。該当するスレがなかった場合はundefined
 */
_JVS.Board.prototype.FindThread = function(datName){return new _JVS.ThreadItem();};

/**
 * 板が現在保持しているスレのThreadItemオブジェクトを取得する
 * 
 * 板は開かれていなければ全てのレスを読み込んでいるのではなく、参照のあるスレだけを保持している。
 * 板に属する全てのスレを参照したいときは、あらかじめBoard.Loadを実行し、その後でindex=0～Count-1
 * のThreadItemを取得する必要がある。
 * Actionの中からはBoard.Loadが実行できないのでその時点で読み込まれているスレの取得しかできない。
 * 
 * Action：△　LateCall:○　Command:○
 * @param {int} Index 取得するスレの現時点での板の中でのインデックス
 * @return {_JVS.ThreadItem} 該当のスレを参照したThreadItemオブジェクト
 */
_JVS.Board.prototype.GetThread = function(Index){return new _JVS.ThreadItem();};

/**
 * 板のSubject.txtのGMTでの最終更新時刻(httpレスポンスヘッダから取得したもの)
 * Action：○{BoardAnalysisAction：×}　LateCall:○　Command:○
 * @type String
 */
_JVS.Board.prototype.LastModified = "Thu, 01 Jan 1970 00:00:00 GMT";

/**
 * 板を内部的にオープン状態にして、ログフォルダのSubject.txtおよびスレの情報を読み込む。
 * 内部的なオープン状態はBoardオブジェクトへの全ての参照がなくなるまで継続される。
 * Action：×　LateCall:○　Command:○
 */
_JVS.Board.prototype.Load = function(){};

/**
 * 板のディレクトリ。ここにsubject.txtやスレのidx、datが置かれている。
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.Board.prototype.LogDir = "C:\\Jane\\Logs\\Category\\Board\\";

/**
 * 該当の板にあるスレの最大レス数の設定値。取得レス数がこの値を超えたスレはdat落ちと見なされる。
 * この値はBoardCustomize.iniにより設定される。
 * Action：○　LateCall:○　Command:○
 * @type int
 */
_JVS.Board.prototype.MaxResNum = 1000;

/**
 * 板の名称(例: Win板ならば"Windows")
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.Board.prototype.Name = "Windows";

/**
 * システムでは使用/制御しない。
 * スクリプトが板に固有の情報を保持させたい場合にこのプロパティに代入しておく。
 * スクリプトごとに保存領域が分けられているので、同じBoardに対してA.jsとB.jsが別々に
 * Board.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
 * スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能
 * ただし、板一覧の更新などによりBoardが参照する板の実体が再作成された場合はObjも失われる。
 * @type Object
 */
_JVS.Board.prototype.Obj = null;

/**
 * 板のURL(例: Win板ならば"http://pc12.2ch.net/win/")
 * Action：○　LateCall:○　Command:○
 * @type String
 */
_JVS.Board.prototype.Url = "http://pc12.2ch.net/win/";
