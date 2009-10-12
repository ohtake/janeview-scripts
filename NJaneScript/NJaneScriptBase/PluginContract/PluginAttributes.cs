using System;

namespace NJaneScript.PluginContract {
	/// <summary>
	/// 公開するプラグインにつける属性。
	/// この属性をつけられたクラスはプラグインとして使われる。
	/// <see cref="IPlugin"/>インタフェースを実装していることと、
	/// デフォルトのコンストラクタが公開されていることが必要。
	/// </summary>
	/// <remarks>
	/// やがては MEF に移行。
	/// </remarks>
	[AttributeUsage(AttributeTargets.Class)]
	public sealed class ExportPluginAttribute : Attribute {
	}
}
