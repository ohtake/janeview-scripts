using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// スレタブの一覧を保持するオブジェクト。このオブジェクトから個別のスレタブにアクセス可能。
	/// スクリプト用の新規スレビューの作成もこのオブジェクトから行う。
	/// </summary>
	[JaneScriptApi]
	public sealed class ViewList : ComWrapperBase, IItemizable<ViewItem> {
		internal ViewList(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 参照先のviewListの実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可</summary>
		/// <remarks>現在の実装では、viewList.Connectedがfalseになることはない</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 現在開かれているスレビューの数
		/// </summary>
		[JaneScriptApi]
		public int Count {
			get {
				return (int)base.InvokeGet("Count");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 現在開かれているスレビューを参照する
		/// </summary>
		/// <param name="Index">参照するスレビューの番号(左端が0、右端がCount-1)</param>
		/// <returns>対象となるスレビューを参照するViewItemオブジェクト</returns>
		[JaneScriptApi]
		public ViewItem Items(int Index) {
			return new ViewItem(base.InvokeMethod("Items", Index));
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// 新規にスレタブを作成する。IE版ではこの関数はメッセージ処理を伴うので、開いたスレタブが
		/// この関数の終了前にユーザーにより閉じられてしまう可能性がごくわずかながらある。その場合は
		/// 戻り値のConnectedがfalseになるので、それを確認するか、もしくは戻り値にアクセスしたときに
		/// 発生する例外をcatchしてその後の処理を取りやめ、適切に終了させる
		/// </summary>
		/// <param name="Relative">タブを追加する位置の設定
		/// true  設定-タブ操作-「タブを追加する位置」の「タブから開く時」に従う
		/// false 設定-タブ操作-「タブを追加する位置」の「通常」に従う</param>
		/// <param name="BackGround">
		/// true  作成したタブをアクティブにする
		/// false アクティブタブを変更しない</param>
		/// <returns>作成したスレビューを参照するViewItemオブジェクト</returns>
		[JaneScriptApi]
		public ViewItem NewView(bool Relative, bool BackGround) {
			return new ViewItem(base.InvokeMethod("NewView", Relative, BackGround));
		}
	}
}
