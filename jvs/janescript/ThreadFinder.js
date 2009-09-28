/*!
 * @include "_InternalClasses.js"
 */

/**
 * 作成元のCategoryListから、URLが示す板、スレを検索する。検索対象は、取得済みの板一覧の現行スレ
 * および取得済みの過去ログで、正しいスレURLであっても該当のスレの情報をJaneが持っていなければ
 * 検索では板のみ該当となり、スレの該当は無しとなる
 * (スレURLを元に中身が空の新規ThreadItemオブジェクトを作る動作は行わない)
 * Action：○ {BoardAnalysisAction：×}　LateCall:○　Command:○
 * 
 * @param {String} URL スレまたは板のURL
 * @return {int} 
 * 0: 該当する板やスレが見つからなかった
 * 1: URIに該当する板がある
 * 2: URIに該当するスレッドがある
 */
_JVS.ThreadFinder.prototype.Find = function(URL){return 0;};

/**
 * 直前のFind()でURLから検索した板のBoardオブジェクト。Find()の戻り値が1または2の場合に取得でき、
 * Find()の戻り値が0の場合にはundefined。
 * Action：○　LateCall:○　Command:○
 * @type _JVS.Board
 */
_JVS.ThreadFinder.prototype.Board = new _JVS.Board();

/**
 * 直前のFind()でURLから検索したスレのdat名(datファイル名から拡張子を除いたもの)。
 * Find()の戻り値に関わらず、Findで指定されたURLを2chURLとして解釈したときにdat名と見なせる
 * 部分を出力する。
 * @type String
 */
_JVS.ThreadFinder.prototype.DatName = "1234567890";


/**
 * 直前のFind()でURLから検索したスレのレス番指定部分をRangeList形式で保持する
 * Action：○　LateCall:○　Command:○
 * @example
 * ThreadFinder.Find("http://pc12.2ch.net/test/read.cgi/win/1250004718/1-5,5,4-5");
 * の実行後のThreadFinder.Rangesの内容は、以下のようになる(重複削除や連結、並べ替えはされない)
 * RangeCount == 3
 * RangeBegin(0) == 1, RangeEnd(0) == 5
 * RangeBegin(1) == 5, RangeEnd(1) == 5
 * RangeBegin(2) == 4, RangeEnd(2) == 5
 * WholeRangeWidth == 8
 * @type _JVS.RangeList
 */
_JVS.ThreadFinder.prototype.Ranges = new _JVS.RangeList();

/**
 * 直前のFind()でURLから検索したスレのThreadItemオブジェクト。Find()の戻り値が2の場合に取得でき、
 * Find()の戻り値が0または1の場合にはundefined。
 * Action：○　LateCall:○　Command:○
 * @type _JVS.ThreadItem
 */
_JVS.ThreadFinder.prototype.Thread = new _JVS.ThreadItem();
