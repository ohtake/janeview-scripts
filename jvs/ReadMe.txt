JaneScript の開発を行うための Eclipse プロジェクトです。

■ 利用手順

1. Java 6 のインストール
JDK でも JRE でもお好きなのをどうぞ。
http://java.sun.com/javase/ja/6/download.html

2. Eclipse のインストール
おすすめは IDE for Java EE Developers です。
http://www.eclipse.org/downloads/

3. Spket プラグインのインストール
Eclipse を立ち上げ、メニューから Help, Install New Software とし
Add ボタンを押して Location に http://www.spket.com/update/ を指定します。
ツリーで Spket IDE 全体をチェックして Next で素直に従ってください。

4. エディタの関連付け
プラグインのインストールが終わり Eclipse が再起動したら
js ファイルの関連付けをします。
Window, Preferences から General, Editors, File Associations と辿り、
上にある一覧で *.js を選び下の一覧で Spket JavaScript Editor を選んで
Default ボタンを押します。
Spket JavaScript Editor が default 担ったのを確認して OK。

5. プロジェクト読み込み

左側の Project Explorer で右クリックして New, Project とし
ツリーで General, Project で Next、好きなプロジェクト名を入力し Finish です。
Project Explore に作成されたプロジェクトを右クリックして Import を選び、
ツリーで General, File System を選んで Next とします。
この文書のあるディレクトリを指定しツリーで全部チェックして Finish します。
.project ファイルを上書きするか確認されたら Yes と答えます。

■ ファイル構成

・janescript ディレクトリ
JaneView が公開しているオブジェクトのスケルトンをおいてあります。
JaneView でスクリプトを実行するときにはこれらのファイルは不要ですが、
本 Eclipse プロジェクトで開発する際にこれらのファイルを include すると
入力補完が効くようになるので便利です。

・Script ディレクトリ
JaneView のためのスクリプト群です。

・Obsolete ディレクトリ
.NET に移植したために使わなくなったスクリプト群です。

・run-jsdoc.cmd ファイル
jsdoc-toolkit を実行するときに便利なバッチファイルです。

