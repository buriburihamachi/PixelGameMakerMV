/* 概要:
 *  オブジェクトを円移動させます。
 * 
 * 
 * このアクション実行に関する注意点 (必読):
 * 
 *  注意点.1 - このアクションの設定にある 【削除する (設定必須！)】 の [個別で削除する用] と [他もまとめて削除する用] の変数は必ず指定してください。
 *            指定しないと、このアクションは格納する変数を更新しません。
 *  注意点.2 - これらのアクションを実行すると削除させるまで永久に残り続けます。(オブジェクト消滅や無効にしても残り続けます。)
 *            アクション実行をするたびににどんどん重複するため、ゲームが重くなる原因になります。増え続けないように使わなくなったものは削除してください。
 *            削除させる方法は、[個別で削除する用] と [他もまとめて削除する用]で変数を設定し、値が -1 になると削除します。
 *  注意点.3 - ゲームスピードを 0% に変更やウェイトを入れてもこのアクションは実行をし続けます。
 *            もし挙動を一時停止させたい場合は【一時停止させる】 の変数を指定し、値が -1 で停止します。再生する場合は値を -1 以外にします。
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
      return 'オブジェクトを円移動させます。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae18, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae19, type: 'Embedded'},
          {id: 0, name: locales.common.namae20, type: 'Embedded'},
          {id: 0, name: locales.common.namae21, type: 'Embedded'},
          {id: 0, name: locales.common.namae22, type: 'Embedded'},
          {id: 0, name: locales.common.namae23, type: 'Embedded'},
          {id: 0, name: locales.common.namae27, type: 'Embedded'},
          {id: 0, name: locales.common.namae28, type: 'Embedded'},
          {id: 0, name: locales.common.namae24, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 40, name: locales.common.namae33, type: 'ObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 41, name: locales.common.namae34, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 42, name: locales.common.namae26, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 43, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 143, name: '', type: 'VariableId', referenceId: 43, defaultValue: -1},
          {id: 50, name: locales.common.namae7, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 44, name: locales.common.namae35, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 45, name: locales.common.namae26, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 46, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 146, name: '', type: 'VariableId', referenceId: 46, defaultValue: -1},
          {id: 51, name: locales.common.namae7, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 47, name: locales.common.namae10, type: 'CustomId', customParam: [
                   {id: 0, name: "対象オブジェクトの基本移動に依存(%)"},{id: 1, name: "目的にかかる時間(？)"}], defaultValue: 0},
          {id: 48, name: locales.common.namae11, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, decimals: 2, defaultValue: 100},
          {id: 49, name: locales.common.namae12, type: 'Number', minimumValue: 0, maximumValue: 1000000, decimals: 2, defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 52, name: locales.common.namae9, type: 'Number', minimumValue: 0.01, maximumValue: 10, decimals: 2, defaultValue: 0.1},
          {id: 0, name: locales.common.namae37, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae36, type: 'Embedded'},
          {id: 21, name: locales.common.namae0, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"},{id: 2, name: "0.5秒"},{id: 3, name: "1.0秒"},{id: 4, name: "2.0秒"},{id: 5, name: "4.0秒"},{id: 6, name: "8.0秒"}], defaultValue: 3},
          {id: 31, name: locales.common.namae26, type: 'Number', minimumValue: -20, maximumValue: 20, decimals: 2, defaultValue: 1},
          {id: 1, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 101, name: locales.common.namae2, type: 'VariableId', referenceId: 1, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 22, name: locales.common.namae3, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 32, name: locales.common.namae26, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, decimals: 2, defaultValue: 1},
          {id: 2, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 102, name: '', type: 'VariableId', referenceId: 2, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 23, name: locales.common.namae4, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 33, name: locales.common.namae26, type: 'Number', minimumValue: 0, maximumValue: 1000000, decimals: 2, defaultValue: 0},
          {id: 3, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 103, name: locales.common.namae6, type: 'VariableId', referenceId: 3, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 24, name: locales.common.namae5, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 34, name: locales.common.namae26, type: 'Number', minimumValue: 0, maximumValue: 1000000, decimals: 2, defaultValue: 0},
          {id: 4, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 104, name: locales.common.namae6, type: 'VariableId', referenceId: 4, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 26, name: locales.common.namae8, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 36, name: locales.common.namae26, type: 'Number', minimumValue: -3600000, maximumValue: 3600000, decimals: 2, defaultValue: 0},
          {id: 6, name: locales.common.namae1, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 106, name: '', type: 'VariableId', referenceId: 6, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae17, type: 'Embedded'},
          {id: 12, name: locales.common.namae25, type: 'Number', minimumValue: 0, maximumValue: 3600000, decimals: 2, defaultValue: 3600000},
          {id: 10, name: locales.common.namae14, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 110, name: '', type: 'VariableId', referenceId: 10, defaultValue: -1},
          {id: 11, name: locales.common.namae16, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 111, name: '', type: 'VariableId', referenceId: 11, defaultValue: -1},
          {id: 0, name: locales.common.namae15, type: 'Embedded'},
          {id: 0, name: locales.common.namae38, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae29, type: 'Embedded'},
          {id: 27, name: locales.common.namae31, type: 'CustomId', customParam: [
                   {id: 0, name: "使用しない"},{id: 1, name: "使用する"}], defaultValue: 0},
          {id: 13, name: locales.common.namae32, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 113, name: locales.common.namae30, type: 'VariableId', referenceId: 13, defaultValue: -1},

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
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[円移動]',
          desc: 'オブジェクトを円移動させます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[円移動]',
            desc: 'オブジェクトを円移動させます。★付きの設定項目は変数の値を最新のものに更新し続けます。'
          }
        },
        common: {
          namae0: '[波長速度]',
          namae1: '"変数で決める"選択時のみ',
          namae2: '(値が0に近いほど遅い)',
          namae3: '[長さ(直径)] ★',
          namae4: '[ポーズ時間]A地点 (秒)',
          namae5: '[ポーズ時間]B地点 (秒)',
          namae6: '(単位; ミリ秒)',
          namae7: '細かい位置調整:',
          namae8: '[スタート位置]',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '対象の基本移動依存(%)',
          namae12: '目的にかかる時間(？)',
          namae13: 'フェーズのオフセット',
          namae14: '[個別で削除する用]',
          namae15: '※変数の値は -1で 削除します。',
          namae16: '[他もまとめて削除する用]',
          namae17: '------------------【削除する (設定必須！)】------------------',
          namae18: '---------------------[このアクション実行に関する注意点 (必読)]---------------------',
          namae19: '注意点.1 - このアクションの設定にある 【削除する (設定必須！)】 の [個別で削除する用] と [他もまとめて削除する用] の変数は必ず指定してください。',
          namae20: '           指定しないと、このアクションは格納する変数を更新しません。',
          namae21: '注意点.2 - このアクションを実行すると削除させるまで永久に残り続けます。(オブジェクト消滅や無効にしても残り続けます。)',
          namae22: '           アクション実行をするたびににどんどん重複するため、ゲームが重くなる原因になります。増え続けないように使わなくなったものは削除してください。',
          namae23: '           削除させる方法は、[個別で削除する用] と [他もまとめて削除する用]で変数を設定し、値が -1 になると削除します。',
          namae24: '-----------------------------------------------------------------------------------',
          namae25: '時間経過で削除 (秒)',
          namae26: '"定数で決める"選択時のみ',
          namae27: '注意点.3 - ゲームスピードを 0% に変更やウェイトを入れてもこのアクションは実行をし続けます。',
          namae28: '           もし挙動を一時停止させたい場合は【一時停止させる】 の変数を指定し、値が -1 で停止します。再生する場合は値を -1 以外にします。',
          namae29: '---------------------【一時停止させる】---------------------',
          namae30: '-1 で停止、再生はそれ以外',
          namae31: '[一時停止を使用する？]',
          namae32: '"使用する"選択時のみ',
          namae33: '[動かすオブジェクト]',
          namae34: '[円の中心位置を指定 X ] ★',
          namae35: '[円の中心位置を指定 Y ] ★',
          namae36: '------------------------円移動の設定------------------------',
          namae37: '※ 更新頻度が早いほど動きが「なめらか」になりますが、メモリに負荷がかかります。',
          namae38: '※ シーンが変わると自動的に削除します。'
        }
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[円移動]',
          desc: 'オブジェクトを円移動させます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[円移動]',
            desc: 'オブジェクトを円移動させます。★付きの設定項目は変数の値を最新のものに更新し続けます。'
          }
        },
        common: {
          namae0: '[波長速度]',
          namae1: '"変数で決める"選択時のみ',
          namae2: '(値が0に近いほど遅い)',
          namae3: '[長さ(直径)] ★',
          namae4: '[ポーズ時間]A地点 (秒)',
          namae5: '[ポーズ時間]B地点 (秒)',
          namae6: '(単位; ミリ秒)',
          namae7: '細かい位置調整;',
          namae8: '[スタート位置]',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '対象の基本移動依存(%)',
          namae12: '目的にかかる時間(？)',
          namae13: 'フェーズのオフセット',
          namae14: '[個別で削除する用]',
          namae15: '※変数の値は -1で 削除します。',
          namae16: '[他もまとめて削除する用]',
          namae17: '------------------【削除する (設定必須！)】------------------',
          namae18: '---------------------[このアクション実行に関する注意点 (必読)]---------------------',
          namae19: '注意点.1 - このアクションの設定にある 【削除する (設定必須！)】 の [個別で削除する用] と [他もまとめて削除する用] の変数は必ず指定してください。',
          namae20: '           指定しないとこのアクションは動作しません。',
          namae21: '注意点.2 - このアクションを実行すると削除させるまで永久に残り続けます。(オブジェクト消滅や無効にしても残り続けます。)',
          namae22: '           アクション実行をするたびににどんどん重複するため、ゲームが重くなる原因になります。増え続けないように使わなくなったものは削除してください。',
          namae23: '           削除させる方法は、[個別で削除する用] と [他もまとめて削除する用]で変数を設定し、値が -1 になると削除します。',
          namae24: '-----------------------------------------------------------------------------------',
          namae25: '時間経過で削除 (秒)',
          namae26: '"定数で決める"選択時のみ',
          namae27: '注意点.3 - ゲームスピードを 0% に変更やウェイトを入れてもこのアクションは実行をし続けます。',
          namae28: '           もし挙動を一時停止させたい場合は【一時停止させる】 の変数を指定し、値が -1 で停止します。再生する場合は値を -1 以外にします。',
          namae29: '---------------------【一時停止させる】---------------------',
          namae30: '-1 で停止、再生はそれ以外',
          namae31: '[一時停止を使用する？]',
          namae32: '"使用する"選択時のみ',
          namae33: '[動かすオブジェクト]',
          namae34: '[円の中心位置を指定 X ] ★',
          namae35: '[円の中心位置を指定 Y ] ★',
          namae36: '------------------------円移動の設定------------------------',
          namae37: '※ 更新頻度が早いほど動きが「なめらか」になりますが、メモリに負荷がかかります。',
          namae38: '※ シーンが変わると自動的に削除します。'
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
        var inputwave1 = obj.getValueJson(valueJson, 1);
        var inputwave2 = obj.getValueJson(valueJson, 2);
        var inputwave3 = obj.getValueJson(valueJson, 3);
        var inputwave4 = obj.getValueJson(valueJson, 4);

        var inputwave6 = obj.getValueJson(valueJson, 6);

        var inputSwitch = obj.getValueJson(valueJson, 10);
        var inputSwitch2 = obj.getValueJson(valueJson, 11);

        var inputSwitch3 = obj.getValueJson(valueJson, 12);

        var inputSwitch4 = obj.getValueJson(valueJson, 13);

        var settings1 = obj.getValueJson(valueJson, 21);
        var settings2 = obj.getValueJson(valueJson, 22);
        var settings3 = obj.getValueJson(valueJson, 23);
        var settings4 = obj.getValueJson(valueJson, 24);

        var settings6 = obj.getValueJson(valueJson, 26);
        var settings7 = obj.getValueJson(valueJson, 27);

        var inputNum1 = obj.getValueJson(valueJson, 31);
        var inputNum2 = obj.getValueJson(valueJson, 32);
        var inputNum3 = obj.getValueJson(valueJson, 33);
        var inputNum4 = obj.getValueJson(valueJson, 34);

        var inputNum6 = obj.getValueJson(valueJson, 36);

        var inputObject1 = obj.getValueJson(valueJson, 40);
        var inputObject2 = obj.getValueJson(valueJson, 41);
        var inputObject3 = obj.getValueJson(valueJson, 42);
        var inputObject4 = obj.getValueJson(valueJson, 43);
        var inputObject5 = obj.getValueJson(valueJson, 44);
        var inputObject6 = obj.getValueJson(valueJson, 45);
        var inputObject7 = obj.getValueJson(valueJson, 46);
        var inputObject8 = obj.getValueJson(valueJson, 47);
        var inputObject9 = obj.getValueJson(valueJson, 48);
        var inputObject10 = obj.getValueJson(valueJson, 49);
        var inputObject11 = obj.getValueJson(valueJson, 50);
        var inputObject12 = obj.getValueJson(valueJson, 51);
        var inputObject13 = obj.getValueJson(valueJson, 52);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          wave1: obj.getVariable(inputwave1, obj.getValueJson(valueJson, 101), instanceId),
          wave2: obj.getVariable(inputwave2, obj.getValueJson(valueJson, 102), instanceId),
          wave3: obj.getVariable(inputwave3, obj.getValueJson(valueJson, 103), instanceId),
          wave4: obj.getVariable(inputwave4, obj.getValueJson(valueJson, 104), instanceId),

          wave6: obj.getVariable(inputwave6, obj.getValueJson(valueJson, 106), instanceId),

          xxxx1: obj.getVariable(inputSwitch, obj.getValueJson(valueJson, 110), instanceId),
          xxxx2: obj.getVariable(inputSwitch2, obj.getValueJson(valueJson, 111), instanceId),
          stopW1: obj.getVariable(inputSwitch4, obj.getValueJson(valueJson, 113), instanceId),
          objVar1: obj.getVariable(inputObject4, obj.getValueJson(valueJson, 143), instanceId),
          objVar2: obj.getVariable(inputObject7, obj.getValueJson(valueJson, 146), instanceId)

        };

        // シーンIDをゲット
        var sceneId = Agtk.sceneInstances.getCurrent().sceneId;
        var sceneIdxxx = sceneId;

        // 更新頻度
        var koushinHindo = inputObject13 * 1000;
        var koushinHindo2 = koushinHindo * 10;
        var koushinHindo3 = inputObject13 * 100;


         // 波長速度
        if(settings1 == 0){
          var waveSpeed = inputNum1;
        }else if(settings1 == 1){
           var waveSpeed = objHensuu.wave1.getValue();
        }else if(settings1 == 2){
           var waveSpeed = 1;
        }else if(settings1 == 3){
           var waveSpeed = 0.5;
        }else if(settings1 == 4){
           var waveSpeed = 0.25;
        }else if(settings1 == 5){
           var waveSpeed = 0.125;
        }else if(settings1 == 6){
           var waveSpeed = 0.0625;
        }

         // 移動タイプ選択
        if(inputObject8 == 0){
          var selectMoveType = true;
        }else if(inputObject8 == 1){
           var selectMoveType = false;
        }

        var objSpeedTime = inputObject10 * 300;



         var countTime1 = waveSpeed * koushinHindo3 * 3.6;
         var eee = countTime1;


         var outputX = 0;
         var outputY = 0;

         var outputX2 = 0;
         var outputY2 = 0;



         // ポーズ時間A
        if(settings3 == 0){
           var waveStopTimeA = inputNum3 * 1000;
        }else if(settings3 == 1){
           var waveStopTimeA = objHensuu.wave3.getValue();
        }

         // ポーズ時間B
        if(settings4 == 0){
           var waveStopTimeB = inputNum4 * 1000;
        }else if(settings4 == 1){
           var waveStopTimeB = objHensuu.wave4.getValue();
        }

         // スタート位置
        if(settings6 == 0){
           var degree = inputNum6;
        }else if(settings6 == 1){
           var degree = objHensuu.wave6.getValue();
        }

         var radian = 0;

         var outP1 = degree / 360;
         var timeStop1 = Math.abs(Math.floor(0.5 + outP1));
         var xxxxxx = timeStop1;

         var outP2 = degree / 360;
         var timeStop2 = Math.abs(Math.floor(outP2));
         var xxxxxx2 = timeStop2;


         var uuu = 0;
         var ggg = 0;

         var kkv = 0;
         var vvk22 = 0;

         var zzv = 0;
         var vvz44 = 0;

         var totaltimeAxx = 0;




         // ポーズ時間を計測
      function stopwave(){

        // シーンIDをゲット
        var sceneId = Agtk.sceneInstances.getCurrent().sceneId;
        // シーンIDが違うと削除
        if(sceneIdxxx != sceneId){
           clearInterval(tim);
        }


         // 一時停止
        if(settings7 == 1){
         var waveStopMode = objHensuu.stopW1.getValue();
        }

    if(waveStopMode != -1){

                 vvk22 += kkv;
                 vvz44 += zzv;

        if(vvk22 >= waveStopTimeA){
                 xxxxxx = timeStop1;
                 kkv = 0;
                 vvk22 = 0;
                 countTime1 = eee;
        }

        if(vvz44 >= waveStopTimeB){
                 xxxxxx2 = timeStop2;
                 zzv = 0;
                 vvz44 = 0;
                 countTime1 = eee;
        }
      }
    }




       function wavesignal(){

            // 円の中心位置X
           if(inputObject2 == 0){
              var objPosX = inputObject3;
           }else if(inputObject2 == 1){
              var objPosX = objHensuu.objVar1.getValue();
           }

            // 円の中心位置Y
           if(inputObject5 == 0){
              var objPosY = inputObject6;
           }else if(inputObject5 == 1){
              var objPosY = objHensuu.objVar2.getValue();
           }

            // 長さ
           if(settings2 == 0){
           var waveRange = inputNum2;
           }else if(settings2 == 1){
              var waveRange = objHensuu.wave2.getValue();
           }
              var rrr = waveRange * 0.5;


            // 一時停止
           if(settings7 == 1){
            var waveStopMode = objHensuu.stopW1.getValue();
           }

    if(waveStopMode != -1){

             totaltimeAxx += koushinHindo2;

             if(kkv || zzv >= 1){
                      countTime1 = 0;
             }else{
                      degree += countTime1;
           }

             radian = degree * (Math.PI / 180);

             outputX = rrr * Math.cos(radian);
             outputY = rrr * Math.sin(radian);

             outputX2 = outputX + objPosX + inputObject11;
             outputY2 = outputY + objPosY + inputObject12;

             outP1 = degree / 360;
             timeStop1 = Math.abs(Math.floor(0.5 + outP1));

             outP2 = degree / 360;
             timeStop2 = Math.abs(Math.floor(outP2));

               // フェーズのオフセット
             uuu = -360 * timeStop2;
             ggg = degree + uuu;

             // ポーズ開始
           if (timeStop1 != xxxxxx){
              kkv = koushinHindo;
              if(waveStopTimeA != 0){
                    countTime1 = 0;
              }
           }

           if (timeStop2 != xxxxxx2){
              zzv = koushinHindo;
              if(waveStopTimeB != 0){
                    countTime1 = 0;
              }
           }

        if(degree >= 36000000){
           degree = 0;
        }
        if(degree <= -36000000){
           degree = 0;
        }

      }

        // 停止する
         var actionStop1 = objHensuu.xxxx1.getValue();
         var actionStop2 = objHensuu.xxxx2.getValue();
        if(actionStop1 == -1){
           clearInterval(tim);
           clearInterval(tim2);
        }
        if(actionStop2 == -1){
           clearInterval(tim);
           clearInterval(tim2);
        }
        if(inputSwitch3 <= totaltimeAxx){
           clearInterval(tim);
           clearInterval(tim2);
        }
      
      var inputObjectMove = {

          moveType: 1,
          posX: outputX2,
          posY: outputY2,
          moveInDisplayCoordinates: false,
          followCameraMoving: false,

          useObjectParameter: selectMoveType,
          changeMoveSpeed: inputObject9,
          moveDuration300: objSpeedTime,

          targettingType: 1,
          targetObjectId: inputObject1,
      };

          Agtk.objectInstances.get(instanceId).execCommandObjectMove(inputObjectMove);

    }

          var tim = setInterval(wavesignal,koushinHindo);
          var tim2 = setInterval(stopwave,koushinHindo);


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