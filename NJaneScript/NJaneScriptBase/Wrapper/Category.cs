using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 板一覧のカテゴリに対応するオブジェクトで、カテゴリ内の板に対応するBoardオブジェクトを保持する。
	/// 板名を元にした板の検索が可能
	/// </summary>
	[JaneScriptApi]
	public sealed class Category : ComWrapperBase, IItemizable<Board> {
		internal Category(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// カテゴリの親になっているCategoryListオブジェクト。JaneViewはCategoryListを一つしか持たないので
		/// 必ず<c>JaneScript.CategoryList</c>と同一になる
		/// </summary>
		[JaneScriptApi]
		public CategoryList CategoryList {
			get {
				return new CategoryList(base.InvokeGet("CategoryList"));
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 参照先のCategoryの実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可</summary>
		/// <remarks>
		/// ※カテゴリは保持する板がオープン中でなければ板一覧の更新で破棄→再作成されるため、
		/// Categoryオブジェクトの取得後に板一覧が更新されると高率でConnectedはfalseになり、
		/// その後のそのCategoryオブジェクトへのアクセスはエラーになる</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// カテゴリが保持する板(boardオブジェクト)の数
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 板名を元にカテゴリ内の板を検索し、その板のBoardオブジェクトを返す。
		/// </summary>
		/// <param name="Name">板名(Win板なら"Windows")</param>
		/// <returns>板名に該当する板のBoardオブジェクト。該当する板がない場合はundefined</returns>
		[JaneScriptApi]
		public Board FindBoard(string Name) {
			object ret = base.InvokeMethod("FindBoard", Name);
			if (null == ret) return null;
			return new Board(ret);
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// カテゴリが保持する板のBoardオブジェクトを取得する。インデックスが範囲外の場合はエラー。
		/// </summary>
		/// <param name="Index">取得する板の番号</param>
		/// <returns>該当する板のBoardオブジェクト</returns>
		[JaneScriptApi]
		public Board Items(int Index) {
			return new Board(base.InvokeMethod("Items", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// カテゴリのディレクトリ
		/// </summary>
		[JaneScriptApi]
		public string LogDir {
			get {
				return (string)base.InvokeGet("LogDir");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// カテゴリの名称(例：Win板のカテゴリならば"ＰＣ")
		/// </summary>
		[JaneScriptApi]
		public string Name {
			get {
				return (string)base.InvokeGet("Name");
			}
		}

		/// <summary>
		/// システムでは使用/制御しない。
		/// スクリプトが何かCategoryに固有の情報を保持させたい場合にこのプロパティに代入しておく。
		/// スクリプトごとに保存領域が分けられているので、CategoryListに対してA.jsとB.jsが別々に
		/// Category.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
		/// スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能
		/// ただし、板一覧の更新などによりCategoryの実体が再作成された場合はObjも失われる。
		/// </summary>
		[WrapperNotRecommendedJaneScriptApi]
		[JaneScriptApi]
		public object Obj {
			get {
				return base.InvokeGet("Obj");
			}
			set {
				base.InvokeSet("Obj", value);
			}
		}
	}
}
