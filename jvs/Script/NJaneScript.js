/*!
 * NJaneScript
 * 
 * @include "../janescript/JaneScript.js"
 */

var janeDir = GetJaneDirPath();

/**
 * 読み込ませるプラグインのファイル名。
 */
var pluginFileNames = [
	janeDir + "NJSP_CN.dll"
];

/**
 * .NET と JScript のあいだで相互運用をするためのオブジェクト
 */
var proxy = {
	GetJaneScript: function(){
		return JaneScript;
	},
	CreateMenuClickHandler: function(handlerContainer){
		return function(mi, pti){
			handlerContainer.InvokeHandler(mi, pti);
		};
	},
	CreateLateCallCallback: function(callbackContainer){
		return function(arg){
			callbackContainer.InvokeCallback(arg);
		};
	}
};

var njs = CreateNJaneScriptPluginManager();
njs.OnInitialize(proxy);

for(var i = 0; i<pluginFileNames.length; i++){
	njs.LoadPlugin(pluginFileNames[i]);
}

function Finalize(){
	njs.OnFinalize();
}

function GetJaneDirPath(){
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var path = fso.GetFile(JaneScript.ExeName()).ParentFolder.Path + "\\";
	fso = null;
	return path;
}
function CreateNJaneScriptPluginManager(){
	var codebase = janeDir + "NJaneScriptPluginManager.dll";
	var assembly = "NJaneScriptPluginManager, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null";
	var progid = "NJaneScript.PluginManager";
	var guid = "{43696E6E-616D-6F72-6F6C-6C4E4A53504D}";
	var fqcn = "NJaneScript.PluginManager.PluginManagerClass";
	var shell = new ActiveXObject("WScript.Shell");
	var njs;
	try{
		RegisterAssembly(shell, "HKCU", progid, guid, codebase, assembly, fqcn);
		//RegisterAssembly(shell, "HKLM", progid, guid, codebase, assembly, fqcn);
		return new ActiveXObject(progid);
	}finally{
		UnregisterAssembly(shell, "HKCU", progid, guid);
		//UnregisterAssembly(shell, "HKLM", progid, guid);
	}
}
function RegisterAssembly(shell, root, progid, guid, codebase, assembly, fqcn){
	var classes = root + "\\SOFTWARE\\Classes\\";
	shell.RegWrite(classes + progid + "\\", fqcn);
	shell.RegWrite(classes + progid + "\\CLSID\\", guid);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\", progid);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\Implemented Categories\\{62C8FE65-4EBB-45E7-B440-6E39B2CDBF29}\\", "");
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\", "mscoree.dll");
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\Assembly", assembly);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\Class", fqcn);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\CodeBase", codebase);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\RuntimeVersion", "v2.0.50727");
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\ThreadingModel", "Both");
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\1.0.0.0\\Assembly", assembly);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\1.0.0.0\\Class", fqcn);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\1.0.0.0\\CodeBase", codebase);
	shell.RegWrite(classes + "CLSID\\" + guid + "\\InprocServer32\\1.0.0.0\\RuntimeVersion", "v2.0.50727");
	shell.RegWrite(classes + "CLSID\\" + guid + "\\ProgId\\", progid);
}
function UnregisterAssembly(shell, root, progid, guid){
	var classes = root + "\\SOFTWARE\\Classes\\";
	shell.RegDelete(classes + "CLSID\\" + guid + "\\ProgId\\");
	shell.RegDelete(classes + "CLSID\\" + guid + "\\InprocServer32\\1.0.0.0\\");
	shell.RegDelete(classes + "CLSID\\" + guid + "\\InprocServer32\\");
	shell.RegDelete(classes + "CLSID\\" + guid + "\\Implemented Categories\\{62C8FE65-4EBB-45E7-B440-6E39B2CDBF29}\\");
	shell.RegDelete(classes + "CLSID\\" + guid + "\\Implemented Categories\\");
	shell.RegDelete(classes + "CLSID\\" + guid + "\\");
	shell.RegDelete(classes + progid + "\\CLSID\\");
	shell.RegDelete(classes + progid + "\\");
}
