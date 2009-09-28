using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// 板一覧の基底オブジェクトで、各カテゴリに対応したCategoryオブジェクトを保持している。
	/// また、URLから対応する板(boardオブジェクト)やスレ(threadItemオブジェクト)を取得するのに用いる
	/// ThreadFinderオブジェクトもCategoryListから取得する
	/// </summary>
	[JaneScriptApi]
	public sealed class CategoryList : ComWrapperBase, IItemizable<Category> {
		internal CategoryList(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// URL文字列から対応する板、スレを取得するのに使うThreadFinderオブジェクトを取得する
		/// </summary>
		/// <returns>CategoryListを参照先にしたThreadFinderオブジェクト</returns>
		[JaneScriptApi]
		public ThreadFinder CreateThreadFinder() {
			return new ThreadFinder(base.InvokeMethod("CreateThreadFinder"));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 参照先のCategoryListの実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可
		/// </summary>
		/// <remarks>現在の実装では、CategoryList.Connectedがfalseになることはない</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// CategoryListにあるカテゴリの数
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// CategoryListにあるカテゴリを参照するCategoryオブジェクトを取得する。
		/// インデックスが範囲外の場合はエラー。
		/// </summary>
		/// <param name="Index">取得するカテゴリの番号</param>
		/// <returns>対象のカテゴリを参照するCategoryオブジェクト</returns>
		[JaneScriptApi]
		public Category Items(int Index) {
			return new Category(base.InvokeMethod("Items", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// ログの保存ディレクトリ
		/// </summary>
		[JaneScriptApi]
		public string LogDir {
			get {
				return (string)base.InvokeGet("LogDir");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// <para>システムでは使用/制御しない。
		/// スクリプトが何かCategoryListに固有の情報を保持させたい場合にこのプロパティに代入しておく。
		/// スクリプトごとに保存領域が分けられているので、CategoryListに対してA.jsとB.jsが別々に
		/// CategoryList.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
		/// スクリプトからの参照がなくなってもObjは保持され、再度スクリプトから参照すれば値を取得可能</para>
		/// <para>ただし、現在のJaneViewでは複数のCategoryListが存在することはないので、実質的にはグローバル
		/// 変数に代入するのと変わらない。</para>
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
