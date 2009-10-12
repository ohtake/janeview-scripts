JaneScript を .NET で書くためのソリューションです。

■ 利用に必要なコンポーネント

.NET Framework 3.5 以上が必要です。

■ 利用方法

NJaneScript.js を Script ディレクトリに置き、ScriptIndex.txt に追記する。
NJaneScriptBase.dll, NJaneScriptPluginManager.dll, NJSP_CN.dll を
jane2ch.exe と同じディレクトリに置く。

■ プラグインの開発者向け情報

NJaneScriptBase プロジェクトの NJaneScript.PluginContract ネームスペースにしたがって
プラグインを実装する。
実装したプラグインのアセンブリを jane2ch.exe と同じディレクトリに置き
NJaneScript.js で読み込むアセンブリを指定する。

プラグインとして実装せずに独自に実装するには
NJaneScript.js や NJaneScriptPluginManager をまねして何とかしてください。

■ 開発上のTips

・COMとの相互運用
JaneScript のオブジェクトのメソッド呼び出し等は JScript に比べると遅いはずです。
なるべく JaneScript オブジェクトのメソッド呼び出し回数を減らしましょう。
リソース開放を確実に行うために using を使いましょう。

・デバッグ
デバッグビルドのアセンブリとpdbファイルを jane2ch.exe と同じディレクトリに置く。
jane2ch.exe を起動して Visual Studio から jane2ch.exe プロセスにアタッチ。
ソースコード上でブレークポイントを設置すればそこでブレークする。

