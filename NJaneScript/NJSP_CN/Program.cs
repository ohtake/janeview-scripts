using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;
using System.Xml.Serialization;
using System.Reflection;

namespace NJSP_CN {
	static class Program {
		/// <summary>
		/// The main entry point for the application.
		/// </summary>
		[STAThread]
		static void Main() {
			Application.EnableVisualStyles();
			Application.SetCompatibleTextRenderingDefault(false);
			// Application.Run(new Form1());
		}
	}
	
	[ExportPlugin]
	public sealed class PluginContainer : IPlugin {
		private List<PluginComponentBase> components = new List<PluginComponentBase>();

		public PluginContainer() {
			this.components.Add(new HelpComponent());
			this.components.Add(new RefCountComponent());
			this.components.Add(new IdComponent());
			this.components.Add(new ViewCloseComponent());
			this.components.Add(new ThreadListComponent());
			this.components.Add(new ThreadSortComponent());
			this.components.Add(new MiscWritePlugin());
		}

		public void Initialize(IHost host) {
			this.components.ForEach(c => c.Initialize(host));
		}
		
		public void Quit(IHost host) {
			this.components.ForEach(c => c.Quit());
		}
	}
}
