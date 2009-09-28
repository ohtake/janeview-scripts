using System;
using NJaneScript.PluginContract;
using NJaneScript.Wrapper;

namespace NJSP_Test2 {
	[PluginFactoryClass]
	public sealed class PluginFactory : IPluginFactory {
		public PluginFactory() {
		}
		public IPlugin[] CreatePlugins() {
			return new IPlugin[]{
				new RefCountPlugin(),
				new IdPlugin(),
			};
		}
	}

	static class Util {
		public static void WriteToNewView(JaneScript js, string shortTitle, string longTitle, Action<DatOut> writeAction) {
			using (ViewList vl = js.ViewList())
			using (ViewItem nv = vl.NewView(true, false)) {
				nv.TabText = shortTitle;
				nv.ExtraTitle = longTitle;
				nv.HintText = longTitle;
				DatOut datout = nv.QueryDatOut();
				try {
					nv.WriteSkin("");
					writeAction(datout);
				} catch (Exception ex) {
					js.Log(ex.Message);
				} finally {
					nv.EndDatOut();
					datout.Dispose();
				}
			}
		}

	}
}
