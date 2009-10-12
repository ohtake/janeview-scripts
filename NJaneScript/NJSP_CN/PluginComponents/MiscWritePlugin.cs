using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Text;
using NJaneScript.Wrapper;
using Clipboard = System.Windows.Forms.Clipboard;

namespace NJSP_CN {
	public sealed class MiscWritePlugin : PluginComponentBase {
		private static readonly Encoding encShiftJis = Encoding.GetEncoding("Shift_JIS");

		public override void Initialize() {
			JaneScript js = base.Host.JaneScript;
			MenuItem menu = js.InsertMenu(MenuNames.MainWnd_MainMenu, "Find1", 1000);
			menu.Caption = Util.GetPrefixedMenuCaption("スレビューへのその他書き出し");
			base.PersistMenuItem(menu);
			base.PersistMenuItem(this.AppendSubmenuItem(menu, this.WriteLastDat, "last.dat を書き出す"));
			base.PersistMenuItem(this.AppendSeparator(menu));
			base.PersistMenuItem(this.AppendSubmenuItem(menu, this.WriteDraftsTitle, "草稿一覧を書き出す"));
			base.PersistMenuItem(this.AppendSubmenuItem(menu, this.WriteDraftsContents, "草稿一覧と内容を書き出す"));
			base.PersistMenuItem(this.AppendSeparator(menu));
			base.PersistMenuItem(this.AppendSubmenuItem(menu, this.WriteClipboardTextAsText, "クリップボードをテキストとして書き出す"));
			base.PersistMenuItem(this.AppendSubmenuItem(menu, this.WriteClipboardTextAsHtml, "クリップボードをHTMLとして書き出す"));
		}
		private MenuItem AppendSubmenuItem(MenuItem parent, Action<MenuItem, PopupTargetInfo> action, string caption) {
			MenuItem menu = parent.Insert(parent.Count);
			menu.Caption = caption;
			menu.OnClick = action;
			return menu;
		}
		private MenuItem AppendSeparator(MenuItem parent) {
			MenuItem menu = parent.Insert(parent.Count);
			menu.Caption = "-";
			return menu;
		}

		private void WriteLastDat(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				FileInfo fi = new FileInfo(Path.Combine(new FileInfo(js.ExeName()).Directory.FullName, "last.dat"));
				if (!fi.Exists) {
					js.Log("last.dat が見つかりませんでした");
					return;
				}
				List<string> lines = new List<string>();
				using (Stream stream = fi.OpenRead())
				using (StreamReader reader = new StreamReader(stream, MiscWritePlugin.encShiftJis)) {
					string line;
					while (null != (line = reader.ReadLine())) {
						lines.Add(line);
					}
				}
				Util.WriteToNewView(js, "last.dat", "last.dat の書き出し", "last.dat の書き出し", false, false, (datout) => {
					lines.ForEach(line => {
						datout.WriteHTML(string.Format("<a href=\"{0}\">{0}</a><br>", line));
					});
				});
			}
		}
		private void WriteClipboardTextAsText(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				if (!Clipboard.ContainsText()) {
					js.Log("クリップボードにテキストがありませんでした。");
				}
				string text = Clipboard.GetText();
				Util.WriteToNewView(js, "クリップボード", "クリップボードをテキストとして書き出し", "クリップボードをテキストとして書き出し", false, false, (datout) => {
					string[] lines = text.Split(new string[] { "\r\n", "\r", "\n" }, StringSplitOptions.None);
					foreach (string line in lines) {
						datout.WriteText(line);
						datout.WriteBR();
					}
				});
			}
		}
		private void WriteClipboardTextAsHtml(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				if (!Clipboard.ContainsText()) {
					js.Log("クリップボードにテキストがありませんでした。");
				}
				string text = Clipboard.GetText();
				Util.WriteToNewView(js, "last.dat", "クリップボードをHTMLとして書き出し", "クリップボードをHTMLとして書き出し", false, false, (datout) => {
					datout.WriteHTML(text);
				});
			}
		}
		private void WriteDraftsTitle(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				Util.WriteToNewView(js, "草稿一覧", "草稿一覧", "草稿一覧", false, false, (datout) => {
					this.FindAndWriteDrafts(js, datout, false);
				});
			}
		}
		private void WriteDraftsContents(MenuItem menu, PopupTargetInfo pti) {
			using (JaneScript js = WrapperManager.GetJaneScript()) {
				Util.WriteToNewView(js, "草稿一覧", "草稿一覧", "草稿一覧", false, false, (datout) => {
					this.FindAndWriteDrafts(js, datout, true);
				});
			}
		}
		private void FindAndWriteDrafts(JaneScript js, DatOut datout, bool readDraftContents) {
			datout.WriteText("草稿を検索しています。");
			datout.WriteBR();
			datout.WriteHTML("<hr>");
			using (CategoryList cl = js.CategoryList())
			using (DisposableList<Category> categories = new DisposableList<Category>(cl.GetEnumerable())) {
				foreach (Category category in categories) {
					DirectoryInfo diCate = new DirectoryInfo(category.LogDir);
					if (!diCate.Exists) continue;
					using (DisposableList<Board> boards = new DisposableList<Board>(category.GetEnumerable())) {
						foreach(Board board in boards){
							board.Load();
							// カテゴリディレクトリの草稿を探す
							FileInfo fi = new FileInfo(Path.Combine(category.LogDir, board.Name + "NewThread.mns"));
							if (fi.Exists) this.OutDraft(datout, category, board, fi, readDraftContents);
							// 板ディレクトリ内を探す
							DirectoryInfo di = new DirectoryInfo(board.LogDir);
							if (!di.Exists) continue;
							foreach (FileInfo fi2 in di.GetFiles("*.mns")) {
								if (fi2.Name == "NewThread.mns") {
									this.OutDraft(datout, category, board, fi2, readDraftContents);
								} else {
									using (ThreadItem thread = board.FindThread(Path.GetFileNameWithoutExtension(fi2.Name))) {
										this.OutDraft(datout, category, board, thread, fi2, readDraftContents);
									}
								}
							}
							js.ProcessMessages();
						}
					}
					js.ProcessMessages();
				}
			}
			datout.WriteBR();
			datout.WriteHTML("<hr>");
			datout.WriteText("検索が終了しました。");
		}
		private void OutDraft(DatOut datout, Category category, Board board, FileInfo fi, bool readDraftContents) {
			datout.WriteHTML(string.Format("<dt>{0} <a href=\"{1}\">{2}</a></dt>",
				HttpUtility.HtmlEncode(category.Name),
				board.Url.AbsoluteUri,
				HttpUtility.HtmlEncode(board.Name)));
			if (readDraftContents) {
				this.DatOut(datout, fi);
			}
			datout.WriteBR();
		}
		private void OutDraft(DatOut datout, Category category, Board board, ThreadItem thread, FileInfo fi, bool readDraftContents) {
			datout.WriteHTML(string.Format("<dt>{0} [<a href=\"{1}\">{2}</a>] <a href=\"{3}\">{4}</a></dt>",
				HttpUtility.HtmlEncode(category.Name),
				board.Url.AbsoluteUri,
				HttpUtility.HtmlEncode(board.Name),
				thread.URL.AbsoluteUri,
				HttpUtility.HtmlEncode(thread.Title)));
			if (readDraftContents) {
				this.DatOut(datout, fi);
			}
			datout.WriteBR();
		}
		private void DatOut(DatOut datout, FileInfo fi) {
			using (Stream stream = fi.OpenRead())
			using (StreamReader reader = new StreamReader(stream, MiscWritePlugin.encShiftJis)) {
				StringBuilder sb = new StringBuilder("<dd>");
				string line;
				while (null != (line = reader.ReadLine())) {
					sb.Append(HttpUtility.HtmlEncode(line));
					sb.Append("<br>");
				}
				sb.Append("</dd>");
				datout.WriteHTML(sb.ToString());
			}
		}
	}
}
