/*!
 * @include "_InternalClasses.js"
 */

/**
 * バッファに残っている文字列をスレビューに表示する
 * 
 * DatOutは処理効率を上げるために入力された文字列をバッファし、改行などのタイミングでスレビューに
 * 出力する。このため、Write???の時点では文字列が表示されない場合がある。強制的にバッファの内容を
 * スレビューに出力させたい場合にFlushを使用する
 * 
 * Action：×　LateCall:○　Command:○
 */
_JVS.DatOut.prototype.Flush = function(){};

/**
 * スレビューに改行を書き込む。
 * 
 * Action：×　LateCall:○　Command:○
 */
_JVS.DatOut.prototype.WriteBR = function(){};

/**
 * スレビューにHTMLを書き込む(DoeではHTML風の簡易マークアップ)
 * HTML文字列をいくつかに分割してWriteHTMLする場合、タグの途中で分割してしまうと正しい結果が
 * 得られないので注意すること
 * 
 * Action：×　LateCall:○　Command:○
 * 
 * @param {String} Text 書き込むHTMLの文字列
 */
_JVS.DatOut.prototype.WriteHTML = function(Text){};

/**
 * スレビューに画像を書き込む(IE版のスレビューでは動作しない)
 * 
 * Action：×　LateCall:○　Command:○
 * 
 * @param {String} Src 画像ファイルのURL
 * @param {String} Href 画像のリンク先
 * @param {int} MaxWidth 画像の最大幅(サイズ固定の場合は画像枠の幅)
 * @param {int} MaxHeight 画像の最大高さ(サイズ固定の場合は画像枠の高さ)
 * @param {bool} SizeFixed 　　画像の表示サイズ固定の指定
 * true  画像の表示サイズをMaxWidth×MaxHeightに固定
 * false 画像の表示サイズをMaxWidth×MaxHeightの範囲内で調整
 */
_JVS.DatOut.prototype.WriteImage = function(Src, Href, MaxWidth, MaxHeight, SizeFixed){};

/**
 * ・Doeの場合
 * スレビューに文字列を書き込む。タグや文字参照もベタの文字列として出力される。
 * ・IE版の場合
 * スレビューではWriteHTMLと同じ動作
 * 
 * Action：×　LateCall:○　Command:○
 * 
 * @param {String} Text 書き込む文字列
 */
_JVS.DatOut.prototype.WriteText = function(Text){};

/**
 * 指定したレスをViewItemに表示する。WriteThrreadで表示したレスは、ログから検索βで表示された
 * レスとほぼ同等の扱いで、着色や範囲選択あぼーんは動作するがレス番やIDの右クリックが効かない
 * Action：×　LateCall:○　Command:○
 * 
 * @param {_JVS.ThreadItem} Thread 表示したいスレを参照したThreadItem
 * @param {int} StartLine 表示したいレス範囲の最初のレス番
 * @param {int} EndLine 表示したいレス範囲の最後のレス番(※レス番がEndLineのレスは表示対象に含む)
 * @param {int} AboneLevel 表示で使用するあぼーん表示形式を指定する。メニューのスレ→「ローカルあぼーん表示の変更」と
 * 同等の表示設定が可能
 * -1：とうめい
 * 0：ふつう
 * 1：ぽっぷあっぷ
 * 2：さぼり
 * 3：よりごのみ
 * 4：はきだめ
 * 255：ポップアップヒント用
 */
_JVS.DatOut.prototype.WriteThread = function(Thread, StartLine, EndLine, AboneLevel){};
