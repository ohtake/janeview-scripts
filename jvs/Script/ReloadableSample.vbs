' 自動再読み込みのサンプルスクリプト。
' 本スクリプトファイルは ReloadableScripts.js から読み込まれるので ScriptIndex.txt には記述しない。
' 詳しくは ReloadableSample.js を参照のこと。

JaneScript.Log "VBS OnLoad"

Sub Reloadable_OnExec
	JaneScript.Log "VBS OnExec"
End Sub

Sub Reloadable_OnUnload
	JaneScript.Log "VBS OnUnload"
End Sub
