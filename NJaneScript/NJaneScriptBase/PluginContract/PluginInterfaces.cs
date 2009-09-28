using System;
using System.Collections.Generic;
using NJaneScript.Wrapper;

namespace NJaneScript.PluginContract {
	/// <summary>
	/// プラグインファクトリーとして利用するときのインタフェース。
	/// </summary>
	/// <seealso cref="PluginFactoryClassAttribute"/>
	public interface IPluginFactory {
		IPlugin[] CreatePlugins();
	}

	/// <summary>
	/// プラグインマネージャーがプラグインを利用するときのインタフェース。
	/// </summary>
	public interface IPlugin {
		/// <summary>
		/// プラグインの初期化の時に呼び出さされる。
		/// </summary>
		/// <param name="js">JaneScriptのラッパオブジェクト。</param>
		void Initialize(JaneScript js);
		/// <summary>
		/// プラグインを終了させるときに呼び出される。
		/// </summary>
		/// <param name="js">JaneScriptのラッパオブジェクト。</param>
		void Quit(JaneScript js);
	}
}
