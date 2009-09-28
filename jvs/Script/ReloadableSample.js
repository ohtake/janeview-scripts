/*!
 * 自動再読み込みのサンプルスクリプト。
 * 本スクリプトファイルは ReloadableScripts.js から読み込まれるので ScriptIndex.txt には記述しない。
 * 
 * 外部コマンド的に使うスクリプトでは一般にメニューの登録を行うが、
 * ReloadableScripts.js でメニューの登録を行うので本スクリプト側では登録しない。
 * ReloadableScripts.js が作成したメニューをクリックすると
 * 本スクリプトの Reloadable_OnExec が呼ばれるのでそこに処理を実装する。
 * 
 * 自動再読み込みが発生する直前および
 * ReloadableScripts.js で Finalize 関数が呼ばれたときに
 * 本スクリプトの Reloadable_OnUnload が呼ばれる。
 * Jane 側からこのスクリプトのオブジェクトに参照を持たせていたら参照を切っておくこと。
 * 
 * ReloadableScripts.js から読み込んだときには Finalize 関数が呼ばれないので、
 * Finalize関数があるのならば Reloadable_OnUnload 関数内で 
 * 明示的に Finalize 関数を呼び出すのがパターンである。
 * 
 * 開発が終わって本番用のスクリプトに移行するには、
 * メニューの追加処理を追加し、そのメニュー選択時に
 * Reloadable_OnExec の内容が実行されるようにすればいい。
 * Reloadable_OnUnload は削除か放置で大丈夫のはず。
 * 
 * @include "../janescript/JaneScript.js"
 */

JaneScript.Log("JS OnLoad");

function Reloadable_OnExec(){
	JaneScript.Log("JS OnExec");
}
function Reloadable_OnUnload(){
	JaneScript.Log("JS OnUnload");
}
