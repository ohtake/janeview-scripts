using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// レスの情報を保持するオブジェクト。
	/// </summary>
	/// <remarks>
	/// プロパティで左辺代入可能となっているものでも、取得元によっては書き換えが禁止の場合あり。
	/// </remarks>
	[JaneScriptApi]
	public sealed class ResItem : ComWrapperBase {
		internal ResItem(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// ResItemが参照するレス情報の実体が存在しているかどうか
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可
		/// </summary>
		/// <remarks>現在の実装ではResItem.Connectedがfalseになることはない。</remarks>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスの日付欄の文字列(日付の他にID、BE情報などを含む)
		/// </summary>
		[JaneScriptApi]
		public string Date {
			get {
				return (string)base.InvokeGet("Date");
			}
			set {
				base.InvokeSet("Date", value);
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスの投稿時刻
		/// </summary>
		[JaneScriptApi]
		public DateTime DateValue {
			get {
				return new DateTime((long)((double)base.InvokeGet("DateValue") / 10), DateTimeKind.Utc);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスのID文字列
		/// </summary>
		[JaneScriptApi]
		public string Id {
			get {
				return (string)base.InvokeGet("Id");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスのメール欄の文字列
		/// </summary>
		[JaneScriptApi]
		public string Mail {
			get {
				return (string)base.InvokeGet("Mail");
			}
			set {
				base.InvokeSet("Mail", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスの本文文字列
		/// </summary>
		[JaneScriptApi]
		public string Msg {
			get {
				return (string)base.InvokeGet("Msg");
			}
			set {
				base.InvokeSet("Msg", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスの名前欄の文字列
		/// </summary>
		[JaneScriptApi]
		public string Name {
			get {
				return (string)base.InvokeGet("Name");
			}
			set {
				base.InvokeSet("Name", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスのレス番
		/// </summary>
		[JaneScriptApi]
		public int Number {
			get {
				return (int)base.InvokeGet("Number");
			}
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスが属するスレのタイトル
		/// </summary>
		[JaneScriptApi]
		public string Title {
			get {
				return (string)base.InvokeGet("Title");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 保持しているレスが属するスレのURL(レス番は付かない)
		/// </summary>
		[JaneScriptApi]
		public string URL {
			get {
				return (string)base.InvokeGet("URL");
			}
		}
	}
}
