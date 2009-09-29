using System;

namespace NJaneScript.Wrapper {
	/// <summary>
	/// JaneScriptのAPIにつけておく属性。
	/// </summary>
	[AttributeUsage(AttributeTargets.All, AllowMultiple = false, Inherited = false)]
	public class JaneScriptApiAttribute : Attribute {
		/// <summary>
		/// オリジナルのJaneScriptとは仕様を一部変更しているAPIの場合に true とする。
		/// </summary>
		/// <remarks>
		/// <see cref="JaneScript.Close(Board)"/>のようにオーバーロードになっている場合、
		/// <see cref="JaneScript.AddNgName"/>のように引数が整数から列挙型になっている場合、
		/// <see cref="JaneScript.LateCall"/>のようにJScriptの関数を渡す代わりにデリゲートを渡す場合、
		/// <see cref="Board.Url"/>のように戻り値が<see cref="string"/>から<see cref="Uri"/>になっている場合、
		/// <see cref="ThreadItem.LastWrote"/>のように未定義値を含む戻り値の型がNullableになっている場合、などがある。
		/// </remarks>
		public bool Modified { get; set; }
		/// <summary>
		/// オリジナルのJaneScriptとは互換性がないAPIの場合に true とする。
		/// </summary>
		/// <remarks>
		/// <see cref="ViewItem.Obj"/>のようにスクリプトごとに独立した領域となるはずのものがプラグイン全体で共有となる場合、
		/// <see cref="MenuItem.OnClick"/>のゲッタのように呼び出しをサポートしていない場合、などがある。
		/// </remarks>
		public bool Incompatible { get; set; }
	}
}
