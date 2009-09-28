/*!
 * レス数でグループ化して多い順に並べる。
 * 
 * @include "../janescript/JaneScript.js"
 */
var title = "レス数でグループ化";

/**
 * @param {_JVS.ThreadItem} thread
 */
function GroupByRefCount(thread){
	if (!thread) return;
	
	var refs = thread.GetReferredList();
	var groups = [];
	
	for(var i=1; i<= thread.Lines; i++){
		var refCount = refs.RefCount(i);
		var group;
		if(groups[refCount]){
			group = groups[refCount];
		}else{
			group = [];
			groups[refCount] = group;
		}
		group.push(i);
	}
	
	var nv = JaneScript.ViewList().NewView(false, false);
	try {
		nv.TabText = title;
		nv.ExtraTitle = title + ": " + thread.Title;
		var datout = nv.QueryDatOut();
		nv.WriteSkin("");
		for(var refCount = groups.length-1; refCount >= 0; refCount--){
			var group = groups[refCount];
			if(!group) continue;
			datout.WriteHTML("<dt>" + refCount + " (" + group.length + ")</dt>");
			//datout.WriteBR();
			var resLinks = [];
			for(var i=0; i<group.length; i++){
				var num = group[i];
				resLinks.push('<a href="' + thread.URL + num + '">' + num + '</a>');
			}
			datout.WriteHTML("<dd>" + resLinks.join(" ") + "<br></dd>");
		}
	} catch(e) {
		if ((e.number & 0xFFFF) != 0x8001){
			//0x8001は処理中にviewItemが閉じられると発生する
			throw e; //0x8001以外の場合は何か別のエラーなので例外を再生成
		}
	} finally {
		if (nv.Connected) nv.EndDatOut();
	}
}

//検索メニューの一番下にメニューアイテムを追加
var menu1 = JaneScript.InsertMenu("MainWnd.MainMenu", "Find1", 1000);
menu1.Caption = title;
menu1.OnClick = function(m, t){
	var activeView = JaneScript.ActiveView();
	if(activeView){
		GroupByRefCount(activeView.Thread());
	}
};

//スレタブ右クリックメニューの一番下にメニューアイテムを追加
var menu2 = JaneScript.InsertMenu("MainWnd.ThreadPopupMenu", "", 1000);
menu2.Caption = title;
menu2.OnClick = function(m, t){
	if("ViewItem" === t.ObjectName){
		var viewItem = t.PopupObject;
		if(viewItem){
			GroupByRefCount(viewItem.Thread());
		}
	}
};
