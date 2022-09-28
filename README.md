# PixelGameMakerMV
アクションゲームツクールMV用プラグイン

# 概要

アクションゲームツクールMV用のプラグインです。  
(JavaScript)  
  
ほとんどアクションコマンドです。  
 
## 一覧

[AngleSignalPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/AngleSignalPGMmv.js)  
2点の座標位置から方角を取得し、指定の変数に格納します。  
0～359までの値を出力します。  
  
[DistanceSignalPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/DistanceSignalPGMmv.js)  
2点の座標位置から距離を取得し、指定の変数に格納します。  
  
[SceneIdPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/SceneIdPGMmv.js)  
現在のシーンIDを取得し、指定の変数に格納します。  

[TimeSpanPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/TimeSpanPGMmv.js)  
ひとつの値で秒、分、時間などの値に分離し、それぞれを指定の変数に格納します。  
値をくり上げる進数も変更可能です。  
  
[ExpStatusPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ExpStatusPGMmv.js)  
簡易的な経験値テーブルです。  
ひとつの値で現在のレベルや次のレベルに必要な経験値の値をなどを取得し、指定場所の変数に格納します。  
  
[SignalComparisonPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/SignalComparisonPGMmv.js)  
指定値に近い値か遠い値を返して指定場所の変数に格納します。  
  
[CalculatorPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/CalculatorPGMmv.js)  
シンプルな計算機で値の計算をします。  
公式コマンドでは変数の値が上書きされてしまう問題がありましたが、これは値の上書きはされません。  
累乗計算や四捨五入、絶対値に変換することもできます。  
  
[TextChangePGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/TextChangePGMmv.js)  
条件を満たすと初期設定のテキストではなく、指定した別のテキストに変更します。  
たとえばで言うと、ゲーム進行に応じて会話などのセリフが変わるようなシステムです。  
コマンドまみれにならないようにする系です。  
  
[WaveGeneratorPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/WaveGeneratorPGMmv.js)  
波のように変動する値を取得し、指定場所の変数に格納します。  
※ 一度にいっぱい実行するするとメモリに負荷がかかるので要注意。  
詳しくは下の『扱い注意が必要のプラグインについて』を参照。  
  
[ObjectMoverSimplePGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ObjectMoverSimplePGMmv.js)  
変数で指定した位置にオブジェクトを移動させます。  
  
[AdvanceObjectMoverPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/AdvanceObjectMoverPGMmv.js)  
このオブジェクトが指定に応じてに進行方向に移動します。  
例えば、[移動速度 X ]のパラメータを負の数にすると左へ、正の数にすると右へ移動します。  
値が 0 の場合は動きません。  
斜め移動したい場合、[移動速度 X ]と[移動速度 Y ]に値をいれます。  
また、[移動速度 X ]または[移動速度 Y ]の値が大きいほど移動速度も速くなります。  
※ 一度にいっぱい実行するするとメモリに負荷がかかるので要注意。  
詳しくは下の『扱い注意が必要のプラグインについて』を参照。  
  
  
[ObjectMoverRunAwayPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ObjectMoverRunAwayPGMmv.js)  
対象の座標に近づくと、このオブジェクトが追う、または離れようとします。  
※ 一度にいっぱい実行するするとメモリに負荷がかかるので要注意。  
詳しくは下の『扱い注意が必要のプラグインについて』を参照。  
  
[ObjectMoverCirclePGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ObjectMoverCirclePGMmv.js)  
指定座標を原点にオブジェクトが円をかくように移動します。  
※ 一度にいっぱい実行するするとメモリに負荷がかかるので要注意。  
詳しくは下の『扱い注意が必要のプラグインについて』を参照。  
  
  
## 扱い注意が必要のプラグインについて

以下のプラグイン  
  
[WaveGeneratorPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/WaveGeneratorPGMmv.js)  
[AdvanceObjectMoverPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/AdvanceObjectMoverPGMmv.js)  
[ObjectMoverRunAwayPGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ObjectMoverRunAwayPGMmv.js)  
[ObjectMoverCirclePGMmv.js](https://github.com/buriburihamachi/PixelGameMakerMV/blob/main/ObjectMoverCirclePGMmv.js)  
  
は扱いに注意が必要です。  
  
【注意点.1 】- これらのアクションを実行すると削除させるまでアクションが永久に残り続けます。(アクションコマンドのオブジェクト消滅や無効にしても残り続けます。)  
           アクション実行をするたびににどんどん重複するため、ゲームが重くなる原因になります。増え続けないように使わなくなったものは削除してください。  
           削除させる方法は、[個別で削除する用] と [他もまとめて削除する用]で変数を設定し、値が -1 になると削除します。
  
【注意点.2 】- ゲームスピードを 0% に変更やウェイトを入れてもこのアクションは実行をし続けます。  
           もし挙動を一時停止させたい場合は【一時停止させる】 の変数を指定し、値が -1 で停止します。再生する場合は値を -1 以外にします。  
  
## 利用規約

MITライセンスです。
非商用、商用ゲームを問わずにご利用いただけます。  
無断で改変したものを再配布することも許可します。  
使用にあたって18禁などの年齢制限もありません。  
