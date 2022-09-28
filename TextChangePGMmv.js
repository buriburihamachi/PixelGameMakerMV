/* 概要:
 *  条件を満たすと初期設定のテキストではなく、指定した別のテキストに変更します。
 * 
 * 
 * 利用規約:
 *  非商用、商用ゲームを問わずにご利用いただけます。
 *  無断で改変したものを再配布することも許可します。
 *  使用にあたって18禁などの年齢制限もありません。
 */

(function(){
  var obj = {};
  obj.locale = null;
  obj.internal = {};
  var locales;

  obj.getInfo = function(category){
    if(category == 'name'){
      return locales.plugIn.name;
    } else if(category == 'description'){
      return locales.plugIn.desc;
    } else if(category == 'author'){
      return 'ぶりぶりはまち';
    } else if(category == 'help'){
      return '条件を満たすと指定したテキストを表示します。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 20, name: locales.common.namae0, type: 'TextId', defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 1, name: locales.common.namae2, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 101, name: '', type: 'VariableId', referenceId: 1, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 21, name: locales.common.namae3, type: 'TextId', defaultValue: -1},
          {id: 11, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 31, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 22, name: locales.common.namae5, type: 'TextId', defaultValue: -1},
          {id: 12, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 32, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 2},
          {id: 0, name: '', type: 'Embedded'},
          {id: 23, name: locales.common.namae6, type: 'TextId', defaultValue: -1},
          {id: 13, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 33, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 3},
          {id: 0, name: '', type: 'Embedded'},
          {id: 24, name: locales.common.namae7, type: 'TextId', defaultValue: -1},
          {id: 14, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 34, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 4},
          {id: 0, name: '', type: 'Embedded'},
          {id: 25, name: locales.common.namae8, type: 'TextId', defaultValue: -1},
          {id: 15, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 35, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 5},
          {id: 0, name: '', type: 'Embedded'},
          {id: 26, name: locales.common.namae41, type: 'TextId', defaultValue: -1},
          {id: 16, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 36, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 6},
          {id: 0, name: '', type: 'Embedded'},
          {id: 27, name: locales.common.namae42, type: 'TextId', defaultValue: -1},
          {id: 17, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 37, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 7},
          {id: 0, name: '', type: 'Embedded'},
          {id: 28, name: locales.common.namae43, type: 'TextId', defaultValue: -1},
          {id: 18, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "＝ (同等)"},{id: 1, name: "＜ (より小さい)"},{id: 2, name: "≦ (以下)"},{id: 3, name: "＞ (より大きい)"},
                   {id: 4, name: "≧ (以上)"}], defaultValue: 0},
          {id: 38, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 8},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae11, type: 'Embedded'},
          {id: 67, name: locales.common.namae39, type: 'Number', minimumValue: 0, decimals: 2, defaultValue: 1},
          {id: 68, name: locales.common.namae40, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 41, name: locales.common.namae12, type: 'Number', minimumValue: 0, maximumValue: 255, defaultValue: 255},
          {id: 42, name: locales.common.namae13, type: 'Number', minimumValue: 0, maximumValue: 255, defaultValue: 255},
          {id: 43, name: locales.common.namae14, type: 'Number', minimumValue: 0, maximumValue: 255, defaultValue: 255},
          {id: 44, name: locales.common.namae15, type: 'Number', minimumValue: 0, maximumValue: 255, defaultValue: 255},
          {id: 45, name: locales.common.namae16, type: 'Number', minimumValue: 0, defaultValue: 160},
          {id: 46, name: locales.common.namae17, type: 'Number', minimumValue: 0, defaultValue: 40},
          {id: 47, name: locales.common.namae18, type: 'CustomId', customParam: [
                   {id: -1, name: "なし"},{id: 0, name: "テンプレートから選択"},{id: 1, name: "画像から選択"}], defaultValue: 0},
          {id: 48, name: locales.common.namae19, type: 'CustomId', customParam: [
                   {id: 0, name: "白枠"},{id: 1, name: "黒"},{id: 2, name: "白"}], defaultValue: 0},
          {id: 49, name: locales.common.namae20, type: 'ImageId', defaultValue: -1},
          {id: 50, name: locales.common.namae21, type: 'Number', minimumValue: 0, maximumValue: 100, defaultValue: 0},
          {id: 51, name: locales.common.namae22, type: 'Number', defaultValue: 10},
          {id: 52, name: locales.common.namae23, type: 'Number', defaultValue: 10},
          {id: 53, name: locales.common.namae24, type: 'CustomId', customParam: [
                   {id: 0, name: "左寄せ"},{id: 1, name: "中央"},{id: 2, name: "右寄せ"}], defaultValue: 0},
          {id: 54, name: locales.common.namae25, type: 'CustomId', customParam: [
                   {id: 0, name: "上段"},{id: 1, name: "中央"},{id: 2, name: "下段"}], defaultValue: 0},
          {id: 55, name: locales.common.namae26, type: 'CustomId', customParam: [
                   {id: 0, name: "このオブジェクトの中心"},{id: 1, name: "このオブジェクトがロックしたオブジェクトの中心"},{id: 2, name: "シーンを基準"}], defaultValue: 0},
          {id: 56, name: locales.common.namae27, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 57, name: locales.common.namae28, type: 'Number', minimumValue: -1, defaultValue: -1},
          {id: 58, name: locales.common.namae29, type: 'Number', defaultValue: 0},
          {id: 59, name: locales.common.namae30, type: 'Number', defaultValue: 0},
          {id: 0, name: locales.common.namae38, type: 'Embedded'},
          {id: 60, name: locales.common.namae31, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 61, name: locales.common.namae32, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 62, name: locales.common.namae33, type: 'CustomId', customParam: [
                   {id: -1, name: "設定なし"},{id: 1, name: "A"},{id: 2, name: "B"},{id: 3, name: "X"},
                   {id: 4, name: "Y"},{id: 5, name: "R1"},{id: 6, name: "R2"},{id: 7, name: "L1"},
                   {id: 8, name: "L2"},{id: 9, name: "↑"},{id: 10, name: "↓"},{id: 11, name: "←"},
                   {id: 12, name: "→"},{id: 13, name: "左スティック ↑"},{id: 14, name: "左スティック ↓"},{id: 15, name: "左スティック ←"},
                   {id: 16, name: "左スティック →"},{id: 17, name: "右スティック ↑"},{id: 18, name: "右スティック ↓"},{id: 19, name: "右スティック ←"},
                   {id: 20, name: "右スティック →"},{id: 26, name: "OK"},{id: 27, name: "CANCEL"}], defaultValue: -1},
          {id: 63, name: locales.common.namae34, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 64, name: locales.common.namae35, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 65, name: locales.common.namae36, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 66, name: locales.common.namae37, type: 'CustomId', customParam: [
                   {id: 0, name: "背景"},{id: 1, name: "最前面"},{id: 2, name: "最前面 + メニューシーン"}], defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'}
        ]}
      ];
    } else if(category == 'linkCondition'){
      return [];
    }
    return null;
  };
  obj.initialize = function(settings){
  };
  obj.finalize = function(){
  };
  obj.setLocale = function(_locale){
    obj.locale = _locale;
    if(_locale.substr(0, 2) == 'ja'){ // 日本語
      locales = {
        plugIn: {
          name: '表示テキストを条件で表示',
          desc: '条件を満たすと指定したテキストを表示します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '表示テキストを条件で表示',
            desc: '条件を満たすと初期設定のテキストではなく、指定した別のテキストに変更します。\n表示優先度は ....テキスト8 > テキスト7 > .....テキスト3 > 2 > 1'
          }
        },
        common: {
          namae0: '初期テキストを指定:',
          namae1: '----------------------条件で表示するテキストを指定----------------------',
          namae2: '条件の変数を指定 (値A)',
          namae3: 'テキスト1:',
          namae5: 'テキスト2:',
          namae6: 'テキスト3:',
          namae7: 'テキスト4:',
          namae8: 'テキスト5:',
          namae9: '条件を指定:',
          namae10: '指定値を指定 (値B)',
          namae11: '-----------------------テキストのレイアウトと動作-----------------------',
          namae12: 'テキストの色 [不透明度]',
          namae13: 'テキストの色 [ R ]',
          namae14: 'テキストの色 [ G ]',
          namae15: 'テキストの色 [ B ]',
          namae16: '表示スケール X:',
          namae17: '表示スケール Y:',
          namae18: '表示ウィンドウ:',
          namae19: 'テンプレート:',
          namae20: '画像を選択:',
          namae21: '背景を透過',
          namae22: 'テキストの余白 [上下]',
          namae23: 'テキストの余白 [左右]',
          namae24: 'メッセージ水平方向揃え:',
          namae25: 'メッセージ垂直方向揃え:',
          namae26: '表示位置:',
          namae27: '接続点を使用:',
          namae28: '接続点ID:',
          namae29: '位置を調整 X:',
          namae30: '位置を調整 Y:',
          namae31: 'アクション切替で表示を終了:',
          namae32: 'キー入力でテキスト非表示:',
          namae33: 'キーを指定:',
          namae34: '表示中は全オブジェクト停止:',
          namae35: '表示中はゲーム動作を一時停止:',
          namae36: '表示位置:',
          namae37: '表示タイプ:',
          namae38: '-------------------------------オプション-------------------------------',
          namae39: '表示時間 (秒):',
          namae40: '制限時間なし:',
          namae41: 'テキスト6:',
          namae42: 'テキスト7:',
          namae43: 'テキスト8:'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '表示テキストを条件で表示',
          desc: '条件を満たすと指定したテキストを表示します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '表示テキストを条件で表示',
            desc: '条件を満たすと初期設定のテキストではなく、指定した別のテキストに変更します。\n表示優先度は ....テキスト8 > テキスト7 > .....テキスト3 > 2 > 1'
          }
        },
        common: {
          namae0: '初期テキストを指定:',
          namae1: '----------------------条件で表示するテキストを指定----------------------',
          namae2: '条件の変数を指定 (値A)',
          namae3: 'テキスト1:',
          namae5: 'テキスト2:',
          namae6: 'テキスト3:',
          namae7: 'テキスト4:',
          namae8: 'テキスト5:',
          namae9: '条件を指定:',
          namae10: '指定値を指定 (値B)'
        }
      };
    }
  };
  obj.setInternal = function(settings){
  };
  obj.update = function(dt){
  };
  obj.call = function(name, param1, param2){
  };
  obj.execActionCommand = function(index, valueJson, objectId, instanceId, actionId, commandId){
    var EXEC_TYPE = 'actionCommand';
    valueJson = obj.completeValueJson(index, valueJson, EXEC_TYPE);
    var paramId = obj.getInfo(EXEC_TYPE)[index].id;
    switch(paramId){
      case 1:

        // アクションコマンドの設定したパラメータを代入
        var inputSignal1 = obj.getValueJson(valueJson, 1);

        var inputSignal11 = obj.getValueJson(valueJson, 11);
        var inputSignal12 = obj.getValueJson(valueJson, 12);
        var inputSignal13 = obj.getValueJson(valueJson, 13);
        var inputSignal14 = obj.getValueJson(valueJson, 14);
        var inputSignal15 = obj.getValueJson(valueJson, 15);
        var inputSignal16 = obj.getValueJson(valueJson, 16);
        var inputSignal17 = obj.getValueJson(valueJson, 17);
        var inputSignal18 = obj.getValueJson(valueJson, 18);

        var inputText0 = obj.getValueJson(valueJson, 20);
        var inputText1 = obj.getValueJson(valueJson, 21);
        var inputText2 = obj.getValueJson(valueJson, 22);
        var inputText3 = obj.getValueJson(valueJson, 23);
        var inputText4 = obj.getValueJson(valueJson, 24);
        var inputText5 = obj.getValueJson(valueJson, 25);
        var inputText6 = obj.getValueJson(valueJson, 26);
        var inputText7 = obj.getValueJson(valueJson, 27);
        var inputText8 = obj.getValueJson(valueJson, 28);

        var inputSignal31 = obj.getValueJson(valueJson, 31);
        var inputSignal32 = obj.getValueJson(valueJson, 32);
        var inputSignal33 = obj.getValueJson(valueJson, 33);
        var inputSignal34 = obj.getValueJson(valueJson, 34);
        var inputSignal35 = obj.getValueJson(valueJson, 35);
        var inputSignal36 = obj.getValueJson(valueJson, 36);
        var inputSignal37 = obj.getValueJson(valueJson, 37);
        var inputSignal38 = obj.getValueJson(valueJson, 38);

        var inputSignal41 = obj.getValueJson(valueJson, 41);
        var inputSignal42 = obj.getValueJson(valueJson, 42);
        var inputSignal43 = obj.getValueJson(valueJson, 43);
        var inputSignal44 = obj.getValueJson(valueJson, 44);
        var inputSignal45 = obj.getValueJson(valueJson, 45);
        var inputSignal46 = obj.getValueJson(valueJson, 46);
        var inputSignal47 = obj.getValueJson(valueJson, 47);
        var inputSignal48 = obj.getValueJson(valueJson, 48);
        var inputSignal49 = obj.getValueJson(valueJson, 49);
        var inputSignal50 = obj.getValueJson(valueJson, 50);
        var inputSignal51 = obj.getValueJson(valueJson, 51);
        var inputSignal52 = obj.getValueJson(valueJson, 52);
        var inputSignal53 = obj.getValueJson(valueJson, 53);
        var inputSignal54 = obj.getValueJson(valueJson, 54);
        var inputSignal55 = obj.getValueJson(valueJson, 55);
        var inputSignal56 = obj.getValueJson(valueJson, 56);
        var inputSignal57 = obj.getValueJson(valueJson, 57);
        var inputSignal58 = obj.getValueJson(valueJson, 58);
        var inputSignal59 = obj.getValueJson(valueJson, 59);
        var inputSignal60 = obj.getValueJson(valueJson, 60);
        var inputSignal61 = obj.getValueJson(valueJson, 61);
        var inputSignal62 = obj.getValueJson(valueJson, 62);
        var inputSignal63 = obj.getValueJson(valueJson, 63);
        var inputSignal64 = obj.getValueJson(valueJson, 64);
        var inputSignal65 = obj.getValueJson(valueJson, 65);
        var inputSignal66 = obj.getValueJson(valueJson, 66);
        var inputSignal67 = obj.getValueJson(valueJson, 67);
        var inputSignal68 = obj.getValueJson(valueJson, 68);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          inputV1: obj.getVariable(inputSignal1, obj.getValueJson(valueJson, 101), instanceId)

        };

        if(inputSignal56 == 0){
           var useConnectPos = false;
        }else if(inputSignal56 == 1){
           var useConnectPos = true;
        }

        if(inputSignal60 == 0){
           var boolSet1 = false;
        }else if(inputSignal60 == 1){
           var boolSet1 = true;
        }

        if(inputSignal61 == 0){
           var boolSet2 = false;
        }else if(inputSignal61 == 1){
           var boolSet2 = true;
        }

        if(inputSignal63 == 0){
           var boolSet3 = false;
        }else if(inputSignal63 == 1){
           var boolSet3 = true;
        }

        if(inputSignal64 == 0){
           var boolSet4 = false;
        }else if(inputSignal64 == 1){
           var boolSet4 = true;
        }

        if(inputSignal65 == 0){
           var boolSet5 = false;
        }else if(inputSignal65 == 1){
           var boolSet5 = true;
        }

        if(inputSignal68 == 0){
           var boolSet6 = false;
        }else if(inputSignal68 == 1){
           var boolSet6 = true;
        }





        // 値をゲット
        var hensuu1 = objHensuu.inputV1.getValue();


        var outputxxx = hensuu1 + 7;

        // 処理
        var outputText = inputText0;

        // テキスト1
        if(inputSignal11 == 0){
             if(hensuu1 == inputSignal31){
                var outputText = inputText1;
             }
        }else if(inputSignal11 == 1){
             if(hensuu1 < inputSignal31){
                var outputText = inputText1;
             }
        }else if(inputSignal11 == 2){
             if(hensuu1 <= inputSignal31){
                var outputText = inputText1;
             }
        }else if(inputSignal11 == 3){
             if(hensuu1 > inputSignal31){
                var outputText = inputText1;
             }
        }else if(inputSignal11 == 4){
             if(hensuu1 >= inputSignal31){
                var outputText = inputText1;
             }
        }

        // テキスト2
        if(inputSignal12 == 0){
             if(hensuu1 == inputSignal32){
                var outputText = inputText2;
             }
        }else if(inputSignal12 == 1){
             if(hensuu1 < inputSignal32){
                var outputText = inputText2;
             }
        }else if(inputSignal12 == 2){
             if(hensuu1 <= inputSignal32){
                var outputText = inputText2;
             }
        }else if(inputSignal12 == 3){
             if(hensuu1 > inputSignal32){
                var outputText = inputText2;
             }
        }else if(inputSignal12 == 4){
             if(hensuu1 >= inputSignal32){
                var outputText = inputText2;
             }
        }

        // テキスト3
        if(inputSignal13 == 0){
             if(hensuu1 == inputSignal33){
                var outputText = inputText3;
             }
        }else if(inputSignal13 == 1){
             if(hensuu1 < inputSignal33){
                var outputText = inputText3;
             }
        }else if(inputSignal13 == 2){
             if(hensuu1 <= inputSignal33){
                var outputText = inputText3;
             }
        }else if(inputSignal13 == 3){
             if(hensuu1 > inputSignal33){
                var outputText = inputText3;
             }
        }else if(inputSignal13 == 4){
             if(hensuu1 >= inputSignal33){
                var outputText = inputText3;
             }
        }

        // テキスト4
        if(inputSignal14 == 0){
             if(hensuu1 == inputSignal34){
                var outputText = inputText4;
             }
        }else if(inputSignal14 == 1){
             if(hensuu1 < inputSignal34){
                var outputText = inputText4;
             }
        }else if(inputSignal14 == 2){
             if(hensuu1 <= inputSignal34){
                var outputText = inputText4;
             }
        }else if(inputSignal14 == 3){
             if(hensuu1 > inputSignal34){
                var outputText = inputText4;
             }
        }else if(inputSignal14 == 4){
             if(hensuu1 >= inputSignal34){
                var outputText = inputText4;
             }
        }

        // テキスト5
        if(inputSignal15 == 0){
             if(hensuu1 == inputSignal35){
                var outputText = inputText5;
             }
        }else if(inputSignal15 == 1){
             if(hensuu1 < inputSignal35){
                var outputText = inputText5;
             }
        }else if(inputSignal15 == 2){
             if(hensuu1 <= inputSignal35){
                var outputText = inputText5;
             }
        }else if(inputSignal15 == 3){
             if(hensuu1 > inputSignal35){
                var outputText = inputText5;
             }
        }else if(inputSignal15 == 4){
             if(hensuu1 >= inputSignal35){
                var outputText = inputText5;
             }
        }

        // テキスト6
        if(inputSignal16 == 0){
             if(hensuu1 == inputSignal36){
                var outputText = inputText6;
             }
        }else if(inputSignal16 == 1){
             if(hensuu1 < inputSignal36){
                var outputText = inputText6;
             }
        }else if(inputSignal16 == 2){
             if(hensuu1 <= inputSignal36){
                var outputText = inputText6;
             }
        }else if(inputSignal16 == 3){
             if(hensuu1 > inputSignal36){
                var outputText = inputText6;
             }
        }else if(inputSignal16 == 4){
             if(hensuu1 >= inputSignal36){
                var outputText = inputText6;
             }
        }

        // テキスト7
        if(inputSignal17 == 0){
             if(hensuu1 == inputSignal37){
                var outputText = inputText7;
             }
        }else if(inputSignal17 == 1){
             if(hensuu1 < inputSignal37){
                var outputText = inputText7;
             }
        }else if(inputSignal17 == 2){
             if(hensuu1 <= inputSignal37){
                var outputText = inputText7;
             }
        }else if(inputSignal17 == 3){
             if(hensuu1 > inputSignal37){
                var outputText = inputText7;
             }
        }else if(inputSignal17 == 4){
             if(hensuu1 >= inputSignal37){
                var outputText = inputText7;
             }
        }

        // テキスト8
        if(inputSignal18 == 0){
             if(hensuu1 == inputSignal38){
                var outputText = inputText8;
             }
        }else if(inputSignal18 == 1){
             if(hensuu1 < inputSignal38){
                var outputText = inputText8;
             }
        }else if(inputSignal18 == 2){
             if(hensuu1 <= inputSignal38){
                var outputText = inputText8;
             }
        }else if(inputSignal18 == 3){
             if(hensuu1 > inputSignal38){
                var outputText = inputText8;
             }
        }else if(inputSignal18 == 4){
             if(hensuu1 >= inputSignal38){
                var outputText = inputText8;
             }
        }


        var showText1 = {

            textFlag: true,
            textId: outputText,
            variableObjectId: -1,
            variableQualifierId: -1,
            variableId: -1,
            fontId: -1,
            digitFlag: false,
            digits: 0,
            zeroPadding: false,
            comma: false,
            withoutDecimalPlaces: false,

            duration300: inputSignal67 * 300,
            durationUnlimited: boolSet6,

            colorA: inputSignal41,
            colorR: inputSignal42,
            colorG: inputSignal43,
            colorB: inputSignal44,
            windowWidth: inputSignal45,
            windowHeight: inputSignal46,
            windowType: inputSignal47,
            templateId: inputSignal48,
            imageId: inputSignal49,
            windowTransparency: inputSignal50,

            topBottomMargin: inputSignal51,
            leftRightMargin: inputSignal52,
            horzAlign: inputSignal53,
            vertAlign: inputSignal54,

            positionType: inputSignal55,
            useConnect: useConnectPos,
            connectId: inputSignal57,
            adjustX: inputSignal58,
            adjustY: inputSignal59,

            actionChangeHide: boolSet1,
            closeByKey: boolSet2,
            keyId: inputSignal62,
            objectStop: boolSet3,
            gameStop: boolSet4,
            priority: boolSet5,
            priorityType: inputSignal66
        }

        Agtk.objectInstances.get(instanceId).execCommandMessageShow(showText1);


      break;
    }



    return Agtk.constants.actionCommands.commandBehavior.CommandBehaviorNext;
  };
  obj.execLinkCondition = function(index, valueJson, objectId, instanceId, actionLinkId){
  };

  obj.getVariable = function(objectId, variableId, instanceId){
      if(objectId == 0){
          return Agtk.variables.get(variableId);
      }else if(objectId == -2){
          var selfObj = Agtk.objectInstances.get(instanceId);
          return selfObj.variables.get(variableId);
      }else if(objectId != -1){
          var refObj = Agtk.objects.get(objectId);
          var refInsId = Agtk.objectInstances.getIdByName(objectId, refObj.name);
          var refIns = Agtk.objectInstances.get(refInsId);
          return refIns.variables.get(variableId);
      }else{
          return null;
      }
  };
  obj.completeValueJson = function(index, valueJson, type){
    var vj = obj.getInfo(type)[index];
    var parameter = vj.parameter;
    if(!!parameter){
      for(var i=0; i < parameter.length|0; i++){
        var id = parameter[i].id;
        var found = false;
        for(var j=0; j < valueJson.length|0; j++){
          if(valueJson[j].id == id){
            found = true;
            break;
          }
        }
        if(!found){
            valueJson.push({id: id, value: parameter[i].defaultValue});
        }
      }
    }
    return valueJson;
  };
  obj.getValueJson = function(valueJson, id){
    for(var i=0; i < valueJson.length|0; i++){
      if(valueJson[i].id == id){
        return valueJson[i].value;
      }
    }
    return null;
  };

  return obj;
}())