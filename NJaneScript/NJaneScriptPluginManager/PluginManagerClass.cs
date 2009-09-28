using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.InteropServices;
using System.Reflection;
using NJaneScript.Wrapper;
using NJaneScript.PluginContract;

namespace NJaneScript.PluginManager {
	[ComVisible(true)]
	[ProgId("NJaneScript.PluginManager")]
	[Guid("43696E6E-616D-6F72-6F6C-6C4E4A53504D")]
	public sealed class PluginManagerClass {
		private JaneScript js;
		private List<IPlugin> plugins = new List<IPlugin>();
		
		public void OnInitialize(object comProxy) {
			WrapperManager.InitializeWrapper(comProxy);
			this.js = WrapperManager.GetJaneScript();
		}

		public void LoadPlugin(string pluginFileName) {
			Assembly asm = Assembly.LoadFile(pluginFileName);
			foreach (Type t in asm.GetTypes()) {
				PluginFactoryClassAttribute[] attribs = t.GetCustomAttributes(typeof(PluginFactoryClassAttribute), false) as PluginFactoryClassAttribute[];
				if (attribs.Length > 0) {
					IPluginFactory factory = Activator.CreateInstance(t) as IPluginFactory;
					foreach (IPlugin plugin in factory.CreatePlugins()) {
						plugin.Initialize(this.js);
						this.plugins.Add(plugin);
					}
				}
			}
		}
		
		public void OnFinalize() {
			this.plugins.ForEach(p => p.Quit(this.js));
			this.plugins.Clear();
			this.js.Dispose();
		}
	}
}
