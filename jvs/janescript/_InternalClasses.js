/**
 * @namespace _JVS
 */
var _JVS = {};

/**
 * 板一覧の個別の板を参照するオブジェクトで、板にあるスレのThreadItemオブジェクトを保持する。
 * また、板に固有の情報への参照にも使用する
 * @class _JVS.Board
 */
_JVS.Board = function(){};

/**
 * 板一覧のカテゴリに対応するオブジェクトで、カテゴリ内の板に対応するBoardオブジェクトを保持する。
 * 板名を元にした板の検索が可能
 * @class _JVS.Category
 */
_JVS.Category = function(){};

/**
 * 板一覧の基底オブジェクトで、各カテゴリに対応したCategoryオブジェクトを保持している。
 * また、URLから対応する板(boardオブジェクト)やスレ(threadItemオブジェクト)を取得するのに用いる
 * ThreadFinderオブジェクトもCategoryListから取得する
 * @class _JVS.CategoryList
 */
_JVS.CategoryList = function(){};

/**
 * 文字列の類似度を調べるためのオブジェクト
 * 
 * Subjectに基準文字列を代入し、Evaluete(Str)でSubjectとStrの類似度を取得する。
 * 類似度はtri-gramのCosine Similarityにより算出され、0～1の浮動小数点値として得られる。
 * (1が完全に同一の文字列、0が類似性なし)
 * 文字には重み付けがあり、数字、記号を含む部分は重み付けを小さく判定する。
 * オートヒストリで使用しているのと基本的には同一の処理。
 * @class _JVS.CosSim
 */
_JVS.CosSim = function(){};

/**
 * スレビューに文字列を書き込むためのオブジェクト。書き込む対象となるViewItemオブジェクトから、
 * ViewItem.QueryDatOutで取得する
 * DatOutの処理はメッセージ処理を伴うので、処理中に対象のスレビューが解放される可能性を考慮して
 * プログラミングを行う必要がある
 * (スレビューが解放されてしまった場合、対象のViewItemとDatOutのConnectedがfalseになることで
 * 確認できる）
 * @class _JVS.DatOut
 */
_JVS.DatOut = function(){};

/**
 * Janeのウィンドウ上にあるエディットボックスやコンボボックスの文字列を参照するためのオブジェクト
 * 文字列の参照や変更が可能
 * 
 * @class _JVS.Edit
 */
_JVS.Edit = function(){};

/**
 * ユーザー定義のメニューを保持するオブジェクト。JaneScript.InsertMenuや他のMenuItemの
 * Add,Inertにより取得する。OnClickに関数を代入しておくことでメニューをクリックしたときに
 * その関数を呼び出すことができる。キャプション、ショートカットの設定や可視性、チェックの
 * 有無を設定可能。
 * 
 * 用途上、一般的にはグローバルオブジェクトとして保持しておく必要がある
 * @class _JVS.MenuItem
 */
_JVS.MenuItem = function(){};

/**
 * 任意の名前のプロパティを作成してデータを保持する機能を持つオブジェクト。
 * 複数の値を返す必要がある関数で戻り値として使用する。
 * 
 * @class _JVS.NamedVariant
 * 
 * @example
 * JaneScript.CursorPosは X,Yの二つのプロパティ変数にマウスカーソルのX座標とY座標を代入した
 * NamedVariantを戻り値として返す。
 * var pos = JaneScript.CursorPos();
 * JaneScript.Log("現在のマウスの位置は(X:" + pos.X + ",Y:" + pos.Y + ")");
 */
_JVS.NamedVariant = function(){};

/**
 * スクリプトが作成したメニュー(MenuItem)が選択された時の状況に関する情報を保持するオブジェクト。
 * プロパティの情報の意味はMenuItemが登録されたメニューの場所により異なる。
 * 
 * メニュー登録場所とプロパティの内容の関係
 * ・MainWnd.PopupViewMenu
 * 	PopupObject = 右クリックしたビューのViewItemオブジェクト
 * 	Number = レス番
 * 	InfoText = 空白文字列
 * ・MainWnd.PopupTextMenu
 * 	PopupObject = 右クリックしたビューのViewItemオブジェクト
 * 	Number = 0
 * 	InfoText = 空白文字列
 * ・MainWnd.PopupIdMenu
 * 	PopupObject = 右クリックしたビューのViewItemオブジェクト
 * 		A.日付中IDを右クリックした場合
 * 			Number = レス番
 * 			InfoText = 空白文字列
 * 		B.本文中IDを右クリックした場合
 * 			Number = -1
 * 			InfoText = ID
 * ・MainWnd.ThreadPopupMenu
 * 	PopupObject = 右クリックしたタブのViewItemオブジェクト
 * 	Number = クリックしたタブのインデックス
 * ・MainWnd.PopupTree
 * 	PopupObject = 右クリックした板タブまたは板一覧アイコンの板のBoardオブジェクト
 * 		A.板一覧アイコンを右クリックした場合
 * 			Number = -1
 * 		B.板タブを右クリックした場合
 * 			Number =  右クリックした板タブのインデックス
 * 			InfoText = 空白文字列
 * ・その他
 * 	PopupObject = undefined
 * 	Number = 0
 * 	InfoText = 空白文字列
 * 
 * @class _JVS.PopupTargetInfo
 */
_JVS.PopupTargetInfo = function(){};

/**
 * 複数の数値範囲を保持するオブジェクト。
 * レス番リンクのリンク先などを取得する関数の戻り値などに使われる。
 * @class _JVS.RangeList
 */
_JVS.RangeList = function(){};

/**
 * ThreadItem.GetReferredListにより取得される、スレの各レスがどのレスから参照されているかの情報を
 * 保持するオブジェクト。
 * レス番着色の着色情報を作成するためのクラスをラップしたもの。
 * 参照された数とどのレスから参照されたのかを確認できるので、特定のレスから参照されたレスを
 * 抽出する場合などに利用可能。
 * @class _JVS.ReferredList
 */
_JVS.ReferredList = function(){};

/**
 * レスの情報を保持するオブジェクト。
 * ※プロパティで左辺代入可能となっているものでも、取得元によっては書き換えが禁止の場合あり。
 * @class _JVS.ResItem
 */
_JVS.ResItem = function(){};

/**
 * 文字列リストを保持するオブジェクト。IEnumlatorなどは実装されていないので、列挙する場合も
 * インデックスを順に指定して取得していく必要あり。
 * @class _JVS.Strings
 */
_JVS.Strings = function(){};

/**
 * URLを元に、該当するスレや板のオブジェクトを取得するためのオブジェクト。
 * 検索対象は、取得済みの板一覧の現行スレおよび取得済みの過去ログで、正しいスレURLであっても
 * 該当のスレの情報をJaneが持っていなければ検索では該当なしとなる(スレURLを元に中身が空の
 * 新規ThreadItemオブジェクトを作る動作は行われない)
 * @class _JVS.ThreadFinder
 */
_JVS.ThreadFinder = function() {};

/**
 * スレの情報を参照するオブジェクト。レス内容、タイトルやレス数などの情報取得と一部変更が可能。
 * 
 * @class _JVS.ThreadItem
 */
_JVS.ThreadItem = function(){};

/**
 * スレビューやポップアップを参照するオブジェクト
 * このオブジェクトから、スレビューが参照しているスレのThreadItemオブジェクトの取得、スレビューに
 * テキストを書き込むためのDatOutオブジェクトを取得、スレタブに関する情報の設定参照、選択テキストや
 * フォーカスされたリンクの取得などが可能
 * @class _JVS.ViewItem
 */
_JVS.ViewItem = function(){};

/**
 * スレタブの一覧を保持するオブジェクト。このオブジェクトから個別のスレタブにアクセス可能。
 * スクリプト用の新規スレビューの作成もこのオブジェクトから行う。
 * 
 * @class _JVS.ViewList
 */
_JVS.ViewList = function(){};
