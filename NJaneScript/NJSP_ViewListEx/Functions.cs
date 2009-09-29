using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NJaneScript.Wrapper;

namespace NJSP_ViewListEx {
	public static class ViewPredicates {
		public static bool Tautology(ViewItem v) {
			return true;
		}
		public static bool IsThreadView(ViewItem v) {
			return "ThreadView" == v.ViewType;
		}
	}

	public static class ThreadPredicates {
		public static readonly TimeZoneInfo TZInfo;
		static ThreadPredicates() {
			ThreadPredicates.TZInfo = ThreadPredicates.GetTimeZoneInfoTokyo();
		}
		private static TimeZoneInfo GetTimeZoneInfoTokyo() {
			try {
				return TimeZoneInfo.FindSystemTimeZoneById("Tokyo Standard Time");
			} catch (TimeZoneNotFoundException) {
				return TimeZoneInfo.Local;
			} catch (InvalidTimeZoneException) {
				return TimeZoneInfo.Local;
			}
		}

		public static bool Tautology(ThreadItem t) {
			return true;
		}
		public static bool IsMarked(ThreadItem t) {
			return 1 == t.Mark;
		}
		public static bool HasUsedWriteMailOrName(ThreadItem t) {
			return !string.IsNullOrEmpty(t.UsedWriteMail) || !string.IsNullOrEmpty(t.UsedWriteName);
		}
		public static bool HasWrote(ThreadItem t) {
			return t.LastWrote.HasValue;
		}
		public static bool IsLastWroteToday(ThreadItem t) {
			DateTime? lastWroteUtc = t.LastWrote;
			if (!lastWroteUtc.HasValue) return false;
			DateTime today = TimeZoneInfo.ConvertTime(DateTime.UtcNow, ThreadPredicates.TZInfo).Date;
			DateTime lastWroteDate = TimeZoneInfo.ConvertTime(lastWroteUtc.Value, ThreadPredicates.TZInfo).Date;
			return today == lastWroteDate;
		}
		public static bool IsLastWroteYesterday(ThreadItem t) {
			DateTime? lastWroteUtc = t.LastWrote;
			if (!lastWroteUtc.HasValue) return false;
			DateTime yesterday = TimeZoneInfo.ConvertTime(DateTime.UtcNow.AddDays(-1), ThreadPredicates.TZInfo).Date;
			DateTime lastWroteDate = TimeZoneInfo.ConvertTime(lastWroteUtc.Value, ThreadPredicates.TZInfo).Date;
			return yesterday == lastWroteDate;
		}
		public static bool ExistsInSubjectTxt(ThreadItem t) {
			return t.Number > 0;
		}
	}
	public static class ThreadComparableSelectors {
		public static int SinceEpoch(ThreadItem t) {
			return int.Parse(t.DatName);
		}
		public static int DatSize(ThreadItem t) {
			return t.DatSize;
		}
		public static int DeltaRes(ThreadItem t) {
			return t.DeltaRes;
		}
		public static DateTime? FinalRes(ThreadItem t) {
			return t.FinalRes;
		}
		public static int ItemCount(ThreadItem t) {
			return t.ItemCount;
		}
		public static int ItemDelta(ThreadItem t) {
			return t.ItemDelta;
		}
		public static DateTime? LastGot(ThreadItem t) {
			return t.LastGot;
		}
		public static DateTime? LastWrote(ThreadItem t) {
			return t.LastWrote;
		}
		public static int Lines(ThreadItem t) {
			return t.Lines;
		}
		public static int Mark(ThreadItem t) {
			return t.Mark;
		}
		public static int Number(ThreadItem t) {
			return t.Number;
		}
		public static string Title(ThreadItem t) {
			return t.Title;
		}
		public static Uri URL(ThreadItem t) {
			return t.URL;
		}
	}
	
	// TODO ジェネリクスの co/contra-variance が使えるようになったらリファクタリング
	public static class FunctionMenuUtil {
		public static List<MenuItem> AppendSubmenuItems(MenuItem parentMenu, Action<Predicate<ViewItem>, MenuItem, PopupTargetInfo> action, bool includeFunctionalView) {
			List<MenuItem> menus = new List<MenuItem>();
			if (includeFunctionalView) {
				// menus.Add(AppendSubmenu(parentMenu, action, "全て", ViewPredicates.Tautology));
				menus.Add(AppendSubmenu(parentMenu, action, "スレッド以外全て", CreateNotOf<ViewItem>(ViewPredicates.IsThreadView)));
				menus.Add(AppendSubmenu(parentMenu, action, "スレッド全て", ViewPredicates.IsThreadView));
			} else {
				menus.Add(AppendSubmenu(parentMenu, action, "全て", ThreadPredicates.Tautology));
			}
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu(parentMenu, action, "印あり", ThreadPredicates.IsMarked));
			menus.Add(AppendSubmenu(parentMenu, action, "印なし", CreateNotOf<ThreadItem>(ThreadPredicates.IsMarked)));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu(parentMenu, action, "Subject.txt に存在する", ThreadPredicates.ExistsInSubjectTxt));
			menus.Add(AppendSubmenu(parentMenu, action, "Subject.txt に存在しない", CreateNotOf<ThreadItem>(ThreadPredicates.ExistsInSubjectTxt)));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu(parentMenu, action, string.Format("最終書き込みが今日({0})", ThreadPredicates.TZInfo.DisplayName), ThreadPredicates.IsLastWroteToday));
			menus.Add(AppendSubmenu(parentMenu, action, string.Format("最終書き込みが昨日({0})", ThreadPredicates.TZInfo.DisplayName), ThreadPredicates.IsLastWroteYesterday));
			menus.Add(AppendSubmenu(parentMenu, action, "書き込んだことあり", ThreadPredicates.HasWrote));
			menus.Add(AppendSubmenu(parentMenu, action, "書き込んだことなし", CreateNotOf<ThreadItem>(ThreadPredicates.HasWrote)));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu(parentMenu, action, "コテハン・コテメールあり", ThreadPredicates.HasUsedWriteMailOrName));
			menus.Add(AppendSubmenu(parentMenu, action, "コテハン・コテメールなし", CreateNotOf<ThreadItem>(ThreadPredicates.HasUsedWriteMailOrName)));
			return menus;
		}
		public static List<MenuItem> AppendSubmenuItems(MenuItem parentMenu, Action<Converter<ThreadItem, object>, MenuItem, PopupTargetInfo> action) {
			List<MenuItem> menus = new List<MenuItem>();
			menus.Add(AppendSubmenu<int>(parentMenu, action, "Since", ThreadComparableSelectors.SinceEpoch));
			menus.Add(AppendSubmenu<DateTime?>(parentMenu, action, "最終取得", ThreadComparableSelectors.LastGot));
			menus.Add(AppendSubmenu<DateTime?>(parentMenu, action, "最終レス", ThreadComparableSelectors.FinalRes));
			menus.Add(AppendSubmenu<DateTime?>(parentMenu, action, "最終書き込み", ThreadComparableSelectors.LastWrote));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "スレ一覧のレス数", ThreadComparableSelectors.ItemCount));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "取得レス数", ThreadComparableSelectors.Lines));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "Δレス", ThreadComparableSelectors.DeltaRes));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "勢いΔ", ThreadComparableSelectors.ItemDelta));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu<string>(parentMenu, action, "スレタイ", ThreadComparableSelectors.Title));
			menus.Add(AppendSubmenu<Uri>(parentMenu, action, "URI", ThreadComparableSelectors.URL));
			menus.Add(AppendSeparator(parentMenu));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "印", ThreadComparableSelectors.Mark));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "板一覧での番号", ThreadComparableSelectors.Number));
			menus.Add(AppendSubmenu<int>(parentMenu, action, "datサイズ", ThreadComparableSelectors.DatSize));
			return menus;
		}
		private static MenuItem AppendSubmenu(MenuItem parentMenu, Action<Predicate<ViewItem>, MenuItem, PopupTargetInfo> action, string caption, Predicate<ViewItem> p) {
			MenuItem menu = parentMenu.Insert(parentMenu.Count);
			menu.Caption = caption;
			menu.OnClick = delegate(MenuItem m, PopupTargetInfo pti) {
				action(p, m, pti);
			};
			return menu;
		}
		private static MenuItem AppendSubmenu(MenuItem parentMenu, Action<Predicate<ViewItem>, MenuItem, PopupTargetInfo> action, string caption, Predicate<ThreadItem> p) {
			return AppendSubmenu(parentMenu, action, caption, WrapPredicate(p));
		}
		private static MenuItem AppendSubmenu<T>(MenuItem parentMenu, Action<Converter<ThreadItem, object>, MenuItem, PopupTargetInfo> action, string caption, Converter<ThreadItem, T> conv) {
			MenuItem menu = parentMenu.Insert(parentMenu.Count);
			menu.Caption = caption;
			menu.OnClick = delegate(MenuItem m, PopupTargetInfo pti) {
				action(WrapConverter(conv), m, pti);
			};
			return menu;
		}
		private static MenuItem AppendSeparator(MenuItem parentMenu) {
			MenuItem menu = parentMenu.Insert(parentMenu.Count);
			menu.Caption = "-";
			return menu;
		}
		private static Predicate<ViewItem> WrapPredicate(Predicate<ThreadItem> p) {
			return v => {
				if(!ViewPredicates.IsThreadView(v)) return false;
				using(ThreadItem t = v.Thread()){
					return p(t);
				}
			};
		}
		private static Converter<ThreadItem, object> WrapConverter<T>(Converter<ThreadItem, T> conv) {
			return t => conv(t);
		}
		private static Predicate<T> CreateNotOf<T>(Predicate<T> p) {
			return (T x) => !p(x);
		}
	}
}
