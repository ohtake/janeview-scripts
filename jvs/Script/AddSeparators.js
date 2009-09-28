/*!
 * メニューにセパレータを追加するだけ。
 * 
 * @include "../janescript/JaneScript.js"
 */

//検索メニューの一番下にメニューアイテムを追加
var menu1 = JaneScript.InsertMenu("MainWnd.MainMenu", "Find1", 1000);
menu1.Caption = "-";

//スレタブ右クリックメニューの一番下にメニューアイテムを追加
var menu2 = JaneScript.InsertMenu("MainWnd.ThreadPopupMenu", "", 1000);
menu2.Caption = "-";
