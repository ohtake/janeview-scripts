using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 板一覧の個別の板を参照するオブジェクトで、板にあるスレのThreadItemオブジェクトを保持する。
	/// また、板に固有の情報への参照にも使用する
	/// </summary>
	[JaneScriptApi]
	public sealed class Board : ComWrapperBase {
		internal Board(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// Boardオブジェクトが参照する板が属するカテゴリのCategoryオブジェクト
		/// </summary>
		[JaneScriptApi]
		public Category Category {
			get {
				return new Category(base.InvokeGet("Category"));
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 参照先のBoardの実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可
		/// </summary>
		/// <remarks>
		/// <para>板は板一覧の更新を行ったときに参照がなければ再作成されるため、Boardオブジェクトの取得後に
		/// 板一覧が更新されると高率でConnectedはfalseになり、その後のそのBoardオブジェクトに
		/// アクセスするとエラーになる。
		/// Boardオブジェクトへの参照があっても、実体の板が開いていなければ再作成の対象になる)
		/// その場合は改めてBoardオブジェクトを取得する必要がある。</para>
		/// <para>BoardオブジェクトのLoadを実行すると板がBoardオブジェクトから内部的にオープンされた状態に
		/// なるため、Boardオブジェクトが参照されている間の再作成を防ぐことができる</para></remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}
		
		/// <summary>
		/// Action：△　LateCall:○　Command:○
		/// <para>板が現在保持しているスレの数</para>
		/// <para>板は開かれていなければ全てのレスを読み込んでいるのではなく、参照のあるスレだけを保持している。
		/// この状態でCountを取得すると、そのとき保持しているスレの数が帰る。板に属する全てのスレの数を
		/// 知りたい場合は、Board.Loadを実行してからCountを取得する必要がある。
		/// Actionの中からはBoard.Loadが実行できず、またBoardAnalysisActionの場合ステージによってはスレを
		/// 別な場所に一時的に移すことがあり、Board.Countは取得できるが正しい値にならない場合がある。</para>
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// その板でのスレ容量警告の設定値。該当の板に属するスレがこの容量を超えると板一覧のアイコンと
		/// スレタブの着色による警告表示が行われる。この値はBoardCustomize.iniにより設定される。単位はbyte。
		/// </summary>
		[JaneScriptApi]
		public int DatSizeAlert {
			get {
				return (int)base.InvokeGet("DatSizeAlert");
			}
		}

		/// <summary>
		/// Action：△　LateCall:○　Command:○
		/// 板の中からdat名を元にスレを検索し、ThreadItemオブジェクトを返す
		/// 板が開かれていない場合は処理の中でBoard.Loadが呼び出される
		/// このため、板が開かれていない場合はActionからの呼び出しはエラーになる。
		/// また、BoardAnalysisActionからの呼び出しは解析のステージによっては正しい結果が得られない）
		/// </summary>
		/// <param name="datName">検索するスレのdat名(datファイルのファイル名から拡張子(.dat)を取り除いたもの)</param>
		/// <returns>検索で見つかったスレのThreadItemオブジェクト。該当するスレがなかった場合はundefined</returns>
		[JaneScriptApi]
		public ThreadItem FindThread(string datName) {
			object ret = base.InvokeMethod("FindThread", datName);
			if (null == ret) return null;
			return new ThreadItem(ret);
		}

		/// <summary>
		/// Action：△　LateCall:○　Command:○
		/// <para>板が現在保持しているスレのThreadItemオブジェクトを取得する</para>
		/// <para>板は開かれていなければ全てのレスを読み込んでいるのではなく、参照のあるスレだけを保持している。
		/// 板に属する全てのスレを参照したいときは、あらかじめBoard.Loadを実行し、その後でindex=0～Count-1
		/// のThreadItemを取得する必要がある。
		/// Actionの中からはBoard.Loadが実行できないのでその時点で読み込まれているスレの取得しかできない。</para>
		/// </summary>
		/// <param name="Index">取得するスレの現時点での板の中でのインデックス</param>
		/// <returns>該当のスレを参照したThreadItemオブジェクト</returns>
		[JaneScriptApi]
		public ThreadItem GetThread(int Index) {
			return new ThreadItem(base.InvokeMethod("GetThread", Index));
		}

		/// <summary>
		/// Action：○{BoardAnalysisAction：×}　LateCall:○　Command:○
		/// 板のSubject.txtのGMTでの最終更新時刻(httpレスポンスヘッダから取得したもの)
		/// </summary>
		[JaneScriptApi]
		public string LastModified {
			get{
				return (string)base.InvokeGet("LastModified");
			}
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// 板を内部的にオープン状態にして、ログフォルダのSubject.txtおよびスレの情報を読み込む。
		/// 内部的なオープン状態はBoardオブジェクトへの全ての参照がなくなるまで継続される。
		/// </summary>
		[JaneScriptApi]
		public void Load() {
			base.InvokeMethod("Load");
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 板のディレクトリ。ここにsubject.txtやスレのidx、datが置かれている。
		/// </summary>
		[JaneScriptApi]
		public string LogDir {
			get {
				return (string)base.InvokeGet("LogDir");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 該当の板にあるスレの最大レス数の設定値。取得レス数がこの値を超えたスレはdat落ちと見なされる。
		/// この値はBoardCustomize.iniにより設定される。
		/// </summary>
		[JaneScriptApi]
		public int MaxResNum {
			get {
				return (int)base.InvokeGet("MaxResNum");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 該当の板にあるスレの最大レス数の設定値。取得レス数がこの値を超えたスレはdat落ちと見なされる。
		/// この値はBoardCustomize.iniにより設定される。
		/// </summary>
		[JaneScriptApi]
		public string Name {
			get {
				return (string)base.InvokeGet("Name");
			}
		}

		/// <summary>
		/// システムでは使用/制御しない。
		/// スクリプトが板に固有の情報を保持させたい場合にこのプロパティに代入しておく。
		/// スクリプトごとに保存領域が分けられているので、同じBoardに対してA.jsとB.jsが別々に
		/// Board.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
		/// スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能
		/// ただし、板一覧の更新などによりBoardが参照する板の実体が再作成された場合はObjも失われる。
		/// </summary>
		[JaneScriptApi(Incompatible=true)]
		public object Obj {
			get {
				return base.InvokeGet("Obj");
			}
			set {
				base.InvokeSet("Obj", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 板のURL(例: Win板ならば"http://pc12.2ch.net/win/")
		/// </summary>
		[JaneScriptApi(Modified=true)]
		public Uri Url {
			get {
				return new Uri((string)base.InvokeGet("Url"));
			}
		}
	}
}
