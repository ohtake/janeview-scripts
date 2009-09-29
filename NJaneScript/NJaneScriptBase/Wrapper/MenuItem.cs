using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// <para>ユーザー定義のメニューを保持するオブジェクト。JaneScript.InsertMenuや他のMenuItemの
	/// Add,Inertにより取得する。OnClickに関数を代入しておくことでメニューをクリックしたときに
	/// その関数を呼び出すことができる。キャプション、ショートカットの設定や可視性、チェックの
	/// 有無を設定可能。</para>
	/// <para>用途上、一般的にはグローバルオブジェクトとして保持しておく必要がある</para>
	/// </summary>
	[JaneScriptApi]
	public sealed class MenuItem : ComWrapperBase, IItemizable<MenuItem> {
		internal MenuItem(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemのサブメニューの先頭に新たなサブメニューを追加する
		/// <c>Insert(0)</c>と同等の処理
		/// </summary>
		/// <returns>新たに作成したメニューのMenuItem</returns>
		[JaneScriptApi]
		public MenuItem Add() {
			return new MenuItem(base.InvokeMethod("Add"));
		}
		
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューに表示される文字列
		/// </summary>
		[JaneScriptApi]
		public string Caption {
			get {
				return (string)base.InvokeGet("Caption");
			}
			set {
				base.InvokeSet("Caption", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューの左端のチェックの有無
		/// true  チェックあり
		/// false チェックなし
		/// </summary>
		[JaneScriptApi]
		public bool Checked {
			get {
				return (bool)base.InvokeGet("Checked");
			}
			set {
				base.InvokeSet("Checked", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemの参照先のメニューが存在しているか
		/// true  参照先のメニューは存在している
		/// false 参照先のメニューはDisconnectによりスクリプトから削除されたか、システムに削除された
		/// </summary>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// そのMenuItemに含まれるサブメニューの数
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemが保持しているメニューを削除する。この関数の実行後、実行したオブジェクトの
		/// Connectedプロパティはfalseになる
		/// </summary>
		[JaneScriptApi]
		public void Disconnect() {
			base.InvokeMethod("Disconnect");
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューが有効かどうかの設定
		/// true  メニューは有効
		/// false メニューは無効（グレーアウト状態）
		/// </summary>
		[JaneScriptApi]
		public bool Enabled {
			get {
				return (bool)base.InvokeGet("Enabled");
			}
			set {
				base.InvokeSet("Enabled", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// ジェスチャー登録の時にJane内部で判定に使用する文字列。
		/// これが空白文字列の場合、ジェスチャー登録のメニュー一覧に表示されない。
		/// GestureNameが他のメニューと重複するとエラーになるので、GestureNameの設定は必要最小限に抑える
		/// </summary>
		/// <remarks>MainWnd.MainMenu以外の場所に追加したMenuItemにもGestureNameは設定できるが、
		/// ジェスチャに登録できないため意味がない</remarks>
		[JaneScriptApi]
		public string GestureName {
			get {
				return (string)base.InvokeGet("GestureName");
			}
			set {
				base.InvokeSet("GestureName", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemの新たなサブメニューを作成し、Indexの位置に挿入する
		/// </summary>
		/// <param name="Index">新たなメニューを挿入する位置</param>
		/// <returns>新規に作成したメニューのMenuItemオブジェクト</returns>
		[JaneScriptApi]
		public MenuItem Insert(int Index) {
			return new MenuItem(base.InvokeMethod("Insert", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemが保持しているメニューのサブメニューを取得する
		/// </summary>
		/// <param name="Index">取得するサブメニューのMenuItemの中での順番</param>
		/// <returns>対象メニューのMenuItemオブジェクト</returns>
		[JaneScriptApi]
		public MenuItem Items(int Index) {
			return new MenuItem(base.InvokeMethod("Items", Index));
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemの、親メニューの中での位置
		/// </summary>
		[JaneScriptApi]
		public int MenuIndex {
			get {
				return (int)base.InvokeGet("MenuIndex");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemがユーザーに選択された場合に実行される関数を指定する。
		/// MenuItemがサブメニューを持つコンテナ項目の場合、サブメニューを展開する前にOnClickが呼ばれるので
		/// 状況に合わせてサブメニューのEnabled, Visible、Checkedを設定するのに利用可能。
		/// </summary>
		/// <remarks>
		/// OnClickに代入できる関数の型は以下の通り
		/// function MenuClick(menuObject: MenuItem, targetInfo: PopupTargetInfo) {};
		/// MenuObject クリックされたMenuItem (同じ関数を複数のMenuItemから呼び出す場合の区別に使用)
		/// targetObject メニューがポップアップした状況に関する情報を保持したPopupTargetInfoオブジェクト
		/// </remarks>
		/// <seealso cref="PopupTargetInfo"/>
		public Action<MenuItem, PopupTargetInfo> OnClick {
			[JaneScriptApi(Modified = true, Incompatible = true)]
			get {
				throw new NotImplementedException();
			}
			[JaneScriptApi(Modified=true)]
			set {
				MenuClickHandlerContainer container = new MenuClickHandlerContainer(value);
				base.InvokeSet("OnClick", WrapperManager.Proxy.CreateMenuClickHandler(container));
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemの親メニューを参照するMenuItemオブジェクト。
		/// 親メニューがスクリプトで作成したものでない場合はundefined
		/// </summary>
		[JaneScriptApi]
		public MenuItem ParentMenu {
			get {
				object ret = base.InvokeGet("ParentMenu");
				if (null == ret) return null;
				return new MenuItem(ret);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// MenuItemのショートカットを設定する
		/// 例：MenuItem.ShortCut = "Shift+Ctrl+A";
		/// </summary>
		/// <remarks>メニューを代入するポップアップによってはShortCutでショートカットを設定しても
		/// 効果がない場合あり</remarks>
		[JaneScriptApi]
		public string ShortCut {
			get {
				return (string)base.InvokeGet("ShortCut");
			}
			set {
				base.InvokeSet("ShortCut", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューを表示するかを設定する
		/// true  表示する
		/// false 表示しない
		/// </summary>
		[JaneScriptApi]
		public bool Visible {
			get {
				return (bool)base.InvokeGet("Visible");
			}
			set {
				base.InvokeSet("Visible", value);
			}
		}
	}
}
