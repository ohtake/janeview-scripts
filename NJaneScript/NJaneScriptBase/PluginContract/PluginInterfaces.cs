using System;
using System.Collections.Generic;
using NJaneScript.Wrapper;

namespace NJaneScript.PluginContract {
	/// <summary>
	/// プラグインマネージャのインタフェース。
	/// </summary>
	public interface IHost {
		JaneScript JaneScript { get; }
	}
	
	/// <summary>
	/// プラグインマネージャーがプラグインを利用するときのインタフェース。
	/// </summary>
	public interface IPlugin {
		/// <summary>
		/// プラグインの初期化の時に呼び出さされる。
		/// </summary>
		/// <param name="host">ホストオブジェクト。</param>
		void Initialize(IHost host);
		/// <summary>
		/// プラグインを終了させるときに呼び出される。
		/// </summary>
		/// <param name="host">ホストオブジェクト。</param>
		void Quit(IHost host);
	}
}
