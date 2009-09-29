using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// スレの情報を参照するオブジェクト。レス内容、タイトルやレス数などの情報取得と一部変更が可能。
	/// </summary>
	[JaneScriptApi]
	public sealed class ThreadItem : ComWrapperBase {
		internal ThreadItem(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// オブジェクトが参照するスレが属する板のBoardオブジェクト
		/// </summary>
		[JaneScriptApi]
		public Board Board {
			get {
				return new Board(base.InvokeGet("Board"));
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// ThreadItemが参照するスレの実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可
		/// </summary>
		/// <remarks>スレはスクリプトからThreadItemオブジェクトに参照されることで参照カウントが加算されるため、
		/// 現在の実装ではThreadItemへの参照がある限りConnectedがfalseになることはない。</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレのログ(datファイル)が存在するか
		/// true  存在する
		/// false 存在しない
		/// </summary>
		[JaneScriptApi]
		public bool DatExist {
			get {
				return (bool)base.InvokeGet("DatExist");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// dat名(datファイルのファイル名から拡張子を取り除いたもの)
		/// </summary>
		[JaneScriptApi]
		public string DatName {
			get {
				return (string)base.InvokeGet("DatName");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 取得済みのdatファイルの大きさ(単位:byte)
		/// </summary>
		[JaneScriptApi]
		public int DatSize {
			get {
				return (int)base.InvokeGet("DatSize");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// datファイル全体の文字列
		/// </summary>
		[JaneScriptApi]
		public string DatText {
			get {
				return (string)base.InvokeGet("DatText");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレのΔレス値
		/// </summary>
		[JaneScriptApi]
		public int DeltaRes {
			get {
				return (int)base.InvokeGet("DeltaRes");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの最終レスの時刻値
		/// 最終レスが未定義値の場合は0。
		/// </summary>
		[JaneScriptApi(Modified = true)]
		public DateTime? FinalRes {
			get {
				return base.ConvertUtcToDateTime(base.InvokeGet("FinalRes"));
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// レスのあぼーん状態を取得する
		/// </summary>
		/// <param name="Index">あぼーんの状態を取得するレスのレス番号</param>
		/// <returns>レスのあぼーん状態</returns>
		[JaneScriptApi(Modified = true)]
		public AboneType GetAbone(int Index) {
			return (AboneType)(int)base.InvokeMethod("GetAbone", Index);
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// レスに含まれた>>1などのレス番リンクの参照先一覧を保持したRangeListオブジェクトを取得する。
		/// </summary>
		/// <example>
		/// // >>4 >>1-2 >>6-8　というリンクを持ったレスでは、次の内容のRangeListが戻り値として得られる。
		/// RangeList.Count == 3
		/// RangeList.RangeBegin(0) == 1,　RangeList.RangeEnd(0) == 2
		/// RangeList.RangeBegin(1) == 4,　RangeList.RangeEnd(1) == 4
		/// RangeList.RangeBegin(2) == 6,　RangeList.RangeEnd(2) == 8
		/// RangeList.WholeRangeWidth == 6
		/// </example>
		/// <remarks>
		/// ただし、得られたRangeはソートされ、参照先の範囲が連続したものは結合、重複は削除されるので、
		/// 元のレス番参照が例えば>>1,2 >>4 >>6-7 >>7-8であっても同じ結果になり、区別できない
		/// </remarks>
		/// <param name="Index">レス番リンク参照一覧を取得するレスのレス番号</param>
		/// <param name="IncludeName"></param>
		/// <returns>レス番リンク参照一覧を保持したRangeList</returns>
		[JaneScriptApi]
		public RangeList GetNumberLinks(int Index, bool IncludeName) {
			return new RangeList(base.InvokeMethod("GetNumberLinks", Index, IncludeName));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの全レスについて、>>1などのレス番リンクでそのレスを参照した元スレの一覧を保持した
		/// ReferredListオブジェクトを取得する。
		/// </summary>
		/// <returns>そのスレのレス番リンク情報を保持したReferredListオブジェクト</returns>
		[JaneScriptApi]
		public ReferredList GetReferredList() {
			return new ReferredList(base.InvokeMethod("GetReferredList"));
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// レスの内容を保持したResItemオブジェクトを取得する
		/// </summary>
		/// <param name="Index">内容を取得するレスのレス番</param>
		/// <returns>レス内容を保持したResItemオブジェクト</returns>
		[JaneScriptApi]
		public ResItem GetRes(int Index) {
			return new ResItem(base.InvokeMethod("GetRes", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// レスに含まれるURLの一覧を取得する
		/// </summary>
		/// <param name="Index">URL一覧を取得するレスのレス番</param>
		/// <returns>URL一覧を保持したStringsオブジェクト</returns>
		[JaneScriptApi]
		public Strings GetUrlList(int Index) {
			return new Strings(base.InvokeMethod("GetUrlList", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// Subject.txtから取得したレス数(スレ一覧の「レス」)
		/// </summary>
		[JaneScriptApi]
		public int ItemCount {
			get {
				return (int)base.InvokeGet("ItemCount");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの勢いΔの値
		/// </summary>
		[JaneScriptApi]
		public int ItemDelta {
			get {
				return (int)base.InvokeGet("ItemDelta");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの最終取得の時刻値
		/// 最終レスが未定義値の場合は0。
		/// </summary>
		[JaneScriptApi(Modified = true)]
		public DateTime? LastGot {
			get {
				return base.ConvertUtcToDateTime(base.InvokeGet("LastGot"));
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// datの最終更新時刻(httpレスポンスヘッダから取得した文字列)</summary>
		/// <remarks>
		/// 参考：javascriptの日付オブジェクトに変換する方法
		/// var lastModified = new Date(thread.lastModified);</remarks>
		[JaneScriptApi]
		public string LastModified {
			get {
				return (string)base.InvokeGet("LastModified");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの最終書き込みの時刻値。未定義値の場合は0。
		/// </summary>
		[JaneScriptApi(Modified = true)]
		public DateTime? LastWrote {
			get {
				return base.ConvertUtcToDateTime(base.InvokeGet("LastWrote"));
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 取得済みのレス数
		/// </summary>
		[JaneScriptApi]
		public int Lines {
			get{
				return (int)base.InvokeGet("Lines");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 該当のスレを表示しているスレビューがある場合はそのスレを再読込する。
		/// SetAbone()であぼーん状態を設定したり、NGを新規追加した後に表示にそれらを反映するのに使用する
		/// </summary>
		[JaneScriptApi]
		public void LocalReload() {
			base.InvokeMethod("LocalReload");
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレの印の状態
		/// 1: 印あり
		/// 0: 印なし
		/// </summary>
		[JaneScriptApi]
		public int Mark {
			get {
				return (int)base.InvokeGet("Mark");
			}
			set {
				base.InvokeSet("Mark", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 板一覧上でのスレの番号。過去ログの場合は0
		/// </summary>
		[JaneScriptApi]
		public int Number {
			get {
				return (int)base.InvokeGet("Number");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// システムでは使用/制御しない。
		/// スクリプトがスレごとに固有の情報を保持させたい場合に情報をこのプロパティに代入する。
		/// スクリプトごとに保存領域が分けられているので、同じThreadItemに対してA.jsとB.jsが別々に
		/// ThreadItem.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
		/// スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能。
		/// ただし、スレは板の更新時に参照がなければ削除→再作成されるので、ThreadItemオブジェクトから
		/// 参照されていないスレが保持するObjはそのスレが所属する板の更新により高い確率で失われる。
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
		/// 読み込み済みのスレのうち、既読になっているレスの番号
		/// 閉じた状態のスレにこの値を設定してから開くことで「この先を未読で閉じる」が設定してあるのと
		/// 同等の効果が得られる。
		/// </summary>
		[JaneScriptApi]
		public int OldLines {
			get{
				return (int)base.InvokeGet("OldLines");
			}
			set {
				base.InvokeSet("OldLines", value);
			}
		}
		/// <summary>
		/// レスのあぼーん状態を設定する。SetAboneを行ってもスレビューの表示には反映されない。
		/// 表示に反映させるには、必要なあぼーんを設定した後にThreadItem.LocalReload()を呼び出して
		/// 再読込を行う。
		/// </summary>
		/// <param name="Index">あぼーんの状態を取得するレスのレス番号</param>
		/// <param name="Value">レスに設定するあぼーん状態</param>
		[JaneScriptApi(Modified = true)]
		public void SetAbone(int Index, AboneType Value) {
			base.InvokeMethod("SetAbone", Index, (int)Value);
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレのタイトル。変更すると.idxファイルに変更が保存され、以後はそのスレタイで表示される。
		/// </summary>
		[JaneScriptApi]
		public string Title {
			get {
				return (string)base.InvokeGet("Title");
			}
			set {
				base.InvokeSet("Title", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレのURL。レス数指定などは付かない。
		/// </summary>
		[JaneScriptApi]
		public Uri URL {
			get {
				return new Uri((string)base.InvokeGet("URL"));
			}
		}
		/// <summary>
		/// スレに記憶させたコテメールアドレス
		/// </summary>
		[JaneScriptApi]
		public string UsedWriteMail {
			get {
				return (string)base.InvokeGet("UsedWriteMail");
			}
			set {
				base.InvokeSet("UsedWriteMail", value);
			}
		}
		/// <summary>
		/// スレに記憶させたコテ名
		/// </summary>
		[JaneScriptApi]
		public string UsedWriteName {
			get {
				return (string)base.InvokeGet("UsedWriteName");
			}
			set {
				base.InvokeSet("UsedWriteName", value);
			}
		}
	}
}
