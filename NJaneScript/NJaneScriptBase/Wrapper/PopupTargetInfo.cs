using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// スクリプトが作成したメニュー(MenuItem)が選択された時の状況に関する情報を保持するオブジェクト。
	/// プロパティの情報の意味はMenuItemが登録されたメニューの場所により異なる。
	/// </summary>
	/// <remarks>
	/// メニュー登録場所とプロパティの内容の関係
	/// ・MainWnd.PopupViewMenu
	/// 　　PopupObject = 右クリックしたビューのViewItemオブジェクト
	/// 　　Number = レス番
	/// 　　InfoText = 空白文字列
	/// ・MainWnd.PopupTextMenu
	/// 　　PopupObject = 右クリックしたビューのViewItemオブジェクト
	/// 　　Number = 0
	/// 　　InfoText = 空白文字列
	/// ・MainWnd.PopupIdMenu
	/// 　　PopupObject = 右クリックしたビューのViewItemオブジェクト
	/// 　　A.日付中IDを右クリックした場合
	/// 　　　　Number = レス番
	/// 　　　　InfoText = 空白文字列
	/// 　　B.本文中IDを右クリックした場合
	/// 　　　　Number = -1
	/// 　　　　InfoText = ID
	/// ・MainWnd.ThreadPopupMenu
	/// 　　PopupObject = 右クリックしたタブのViewItemオブジェクト
	/// 　　Number = クリックしたタブのインデックス
	/// ・MainWnd.PopupTree
	/// 　　PopupObject = 右クリックした板タブまたは板一覧アイコンの板のBoardオブジェクト
	/// 　　　　A.板一覧アイコンを右クリックした場合
	/// 　　　　　　Number = -1
	/// 　　　　B.板タブを右クリックした場合
	/// 　　　　　　Number =  右クリックした板タブのインデックス
	/// 　　　　　　InfoText = 空白文字列
	/// ・その他
	/// 　　PopupObject = undefined
	/// 　　Number = 0
	/// 　　InfoText = 空白文字列
	/// </remarks>
	[JaneScriptApi]
	public sealed class PopupTargetInfo : ComWrapperBase {
		internal PopupTargetInfo(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューをクリックした場所に関連する文字情報を保持する
		/// </summary>
		[JaneScriptApi]
		public string InfoText {
			get {
				return (string)base.InvokeGet("InfoText");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューをクリックした場所に関連する数値情報を保持する
		/// </summary>
		[JaneScriptApi]
		public int Number {
			get {
				return (int)base.InvokeGet("Number");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// PopupObjectの種類を示す文字列を保持する。"ViewItem", "Board"など。
		/// </summary>
		[JaneScriptApi]
		public string ObjectName {
			get {
				return (string)base.InvokeGet("ObjectName");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// メニューをクリックした場所に関連するオブジェクトを保持する
		/// </summary>
		[JaneScriptApi]
		public ComWrapperBase PopupObject {
			get {
				object ret = base.InvokeGet("PopupObject");
				if (null == ret) return null;
				return new ComWrapperBase(ret);
			}
		}
	}
}
