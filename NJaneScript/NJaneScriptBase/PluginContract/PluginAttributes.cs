using System;

namespace NJaneScript.PluginContract {
	/// <summary>
	/// プラグインのファクトリクラスにつける属性。
	/// この属性をつけられたクラスはプラグインのファクトリクラスとして使われる。
	/// <see cref="IPluginFactory"/>インタフェースを実装していることと、
	/// デフォルトのコンストラクタが公開されていることが必要。
	/// </summary>
	[AttributeUsage(AttributeTargets.Class)]
	public sealed class PluginFactoryClassAttribute : Attribute {
	}
}
