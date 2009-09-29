using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// スレビューやポップアップを参照するオブジェクト
	/// このオブジェクトから、スレビューが参照しているスレのThreadItemオブジェクトの取得、スレビューに
	/// テキストを書き込むためのDatOutオブジェクトを取得、スレタブに関する情報の設定参照、選択テキストや
	/// フォーカスされたリンクの取得などが可能
	/// </summary>
	[JaneScriptApi]
	public sealed class ViewItem : ComWrapperBase {
		internal ViewItem(object comobj) : base(comobj) {
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// 参照先のviewItemの実体が存在しているかどうか。viewItemはスクリプトが参照を保持していても
		/// ユーザー操作でスレビューやポップアップが閉じられれば実体が削除されてしまうので、
		/// そのような場合にはConnectedがfalseになりアクセスが不能になる
		/// true  存在しており、アクセス可能
		/// false 削除されており、アクセス不可
		/// </summary>
		[JaneScriptApi]
		public bool Connected {
			get {
				return (bool)base.InvokeGet("Connected");
			}
		}

		/// <summary>
		/// Action：×　LateCall:○　Command:○
		/// QueryDatOutで取得したDatOutオブジェクトをdisconnectし、文字列の書き出しを終了する
		/// viewItemオブジェクトは参照カウントがゼロになるとガベージコレクトで自動的にEndDatOutを
		/// 呼び出すので通常はEndDatOutを明示的に呼び出す必要はないが、viewItemオブジェクトを継続して
		/// グローバル変数などに保持する場合は文字列出力の終了後にEndDatOutを確実に呼び出す必要がある。
		/// プログラミング上、QueryDatOut以降の節はtry catch finally文で括り、finallyの中でEndDatOutを
		/// 呼び出すのが好ましい
		/// </summary>
		[JaneScriptApi]
		public void EndDatOut() {
			base.InvokeMethod("EndDatOut");
		}

		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレ表示用以外の抽出などのスレビューでスレタイ欄に表示される文字列を取得/指定する
		/// スレ表示中のスレビューでも操作は可能だが、スレタイ欄には反映されない
		/// viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
		/// </summary>
		[JaneScriptApi]
		public string ExtraTitle {
			get {
				return (string)base.InvokeGet("ExtraTitle");
			}
			set {
				base.InvokeSet("ExtraTitle", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// キャレットを表示している場合は、そのスレビューのキャレットの位置にあるリンクのhref。
		/// キャレット非表示や対象がポップアップの場合は、直前にクリックしたリンク。
		/// それらの位置がリンクでなかった場合は空白文字列
		/// </summary>
		[JaneScriptApi]
		public string FocusedLink {
			get {
				return (string)base.InvokeGet("FocusedLink");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレ表示用以外の抽出などのスレビューでスレタブのマウスオーバーにより表示されるヒントの文字列を
		/// 取得/指定する。
		/// スレ表示中のスレビューでも操作は可能だが、ヒントには反映されない
		/// viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
		/// </summary>
		[JaneScriptApi]
		public string HintText {
			get {
				return (string)base.InvokeGet("HintText");
			}
			set {
				base.InvokeSet("HintText", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// システムでは使用/制御しない。
		/// スクリプトが何かviewItemに固有の情報を保持させたい場合にこのプロパティに代入しておく。
		/// スクリプトごとに保存領域が分けられているので、あるviewItemに対してA.jsとB.jsが別々に
		/// viewItem.Objを設定できる。逆に、他のスクリプトが設定したObjを参照することはできない。
		/// スクリプトからの参照がなくなっても、実体のスレビューが閉じられていなければObjの内容は
		/// 保持され、再度スクリプトから参照すれば値を取得できる
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
		/// スレビューに書き込むためのDatOutオブジェクトを生成し、スレビューを書き込み待機状態にする
		/// この関数の対象にできるviewItemはそのスクリプトがviewList.NewViewで生成したものに限られ、
		/// Janeの標準組み込みコマンドによるスレビューや抽出ビュー、他のスクリプトが生成したスレビューに
		/// 対してこの関数を実行するとエラーになる。
		/// QueryDatOutを呼び出して書き込み処理が終了したら、EndDatOutを呼び出す必要がある
		/// </summary>
		/// <returns>スレビューに書き込むためのDatOutオブジェクト</returns>
		[JaneScriptApi]
		public DatOut QueryDatOut() {
			return new DatOut(base.InvokeMethod("QueryDatOut"));
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレビュー/ポップアップで範囲選択している文字列。範囲選択していない場合は空白文字列。
		/// </summary>
		[JaneScriptApi]
		public string Selection {
			get {
				return (string)base.InvokeGet("Selection");
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレ表示用以外の抽出などのスレビューでスレタブに表示される文字列を取得/指定する。
		/// スレ表示中のスレビューでも操作は可能だが、ヒントには反映されない
		/// viewItemがポップアップの場合には操作が無視され、取得すると常に空白文字列
		/// </summary>
		[JaneScriptApi]
		public string TabText {
			get {
				return (string)base.InvokeGet("TabText");
			}
			set {
				base.InvokeSet("TabText", value);
			}
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// スレビュー/ポップアップで開かれているスレのThreadItemオブジェクト。抽出やログから検索β、
		/// スクリプトが作成したスレビュー/ポップアップなど、スレを保持していないビューではundefined。
		/// </summary>
		/// <returns>対象のビューで開いているスレのThreadItemオブジェクト。スレを保持していないビューではundefined</returns>
		[JaneScriptApi]
		public ThreadItem Thread() {
			object ret = base.InvokeMethod("Thread");
			if (null == ret) return null;
			return new ThreadItem(ret);
		}
		/// <summary>
		/// Action：○　LateCall:○　Command:○
		/// viewItemオブジェクトが参照する対象の種別を示す文字列。
		/// "PopupView"      ポップアップ
		/// "ViewerView"     ビューアの簡易HTML表示
		/// "ThreadView"     スレ表示中のスレビュー
		/// "FunctionalView" 抽出など、スレ表示以外のスレビュー
		/// "FlexView"       上記以外のHTML表示(書き込みプレビューなど)
		/// "Undefined"      上記以外
		/// </summary>
		[JaneScriptApi]
		public string ViewType {
			get {
				return (string)base.InvokeGet("ViewType");
			}
		}
		/// <summary>
		/// スキン文字列を書き込む。そのビューでQueryDatOutによりDatOutオブジェクトが作成され、有効に
		/// 保持されている状況でなければ実行できない。
		/// Doeでフォントを変更するためにはWriteSkinでBodyタグによりフォント設定する必要がある。
		/// Skin文字列に空白文字列を指定した場合、Jane側で設定された通常スキンが使用される。
		/// (もっと変えたいβなどの板別設定は使われない)
		/// </summary>
		/// <param name="Skin"></param>
		[JaneScriptApi]
		public void WriteSkin(string Skin) {
			base.InvokeMethod("WriteSkin", Skin);
		}
	}
}
