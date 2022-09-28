/* 概要:
 *  対象の座標に近づくと、このオブジェクトが追う、または離れようとします。
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
      return '対象の座標に近づくと、このオブジェクトが追う、または離れようとします。';
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
          {id: 0, name: locales.common.namae0, type: 'Embedded'},
          {id: 53, name: locales.common.namae8, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 54, name: locales.common.namae13, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae3, type: 'Embedded'},
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
          {id: 0, name: locales.common.namae4, type: 'Embedded'},
          {id: 56, name: locales.common.namae6, type: 'CustomId', customParam: [
                   {id: 0, name: "逃げる"},{id: 1, name: "追う"}], defaultValue: 0},
          {id: 55, name: locales.common.namae5, type: 'Number', minimumValue: 1, maximumValue: 1000000, defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 57, name: locales.common.namae38, type: 'Number', minimumValue: 0, maximumValue: 1000000, defaultValue: 100},
          {id: 58, name: locales.common.namae39, type: 'Number', minimumValue: 0, maximumValue: 1000000, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 47, name: locales.common.namae10, type: 'CustomId', customParam: [
                   {id: 0, name: "自身のオブジェクトの基本移動に依存(%)"},{id: 1, name: "目的にかかる時間(？)"}], defaultValue: 0},
          {id: 48, name: locales.common.namae11, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, decimals: 2, defaultValue: 100},
          {id: 49, name: locales.common.namae12, type: 'Number', minimumValue: 0, maximumValue: 1000000, decimals: 2, defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 52, name: locales.common.namae9, type: 'Number', minimumValue: 0.01, maximumValue: 10, decimals: 2, defaultValue: 0.1},
          {id: 0, name: locales.common.namae37, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae17, type: 'Embedded'},
          {id: 38, name: locales.common.namae25, type: 'Number', minimumValue: 0, maximumValue: 3600000, decimals: 2, defaultValue: 3600000},
          {id: 10, name: locales.common.namae14, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 110, name: '', type: 'VariableId', referenceId: 10, defaultValue: -1},
          {id: 11, name: locales.common.namae16, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 111, name: '', type: 'VariableId', referenceId: 11, defaultValue: -1},
          {id: 0, name: locales.common.namae15, type: 'Embedded'},
          {id: 0, name: locales.common.namae40, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae29, type: 'Embedded'},
          {id: 27, name: locales.common.namae31, type: 'CustomId', customParam: [
                   {id: 0, name: "使用しない"},{id: 1, name: "使用する"}], defaultValue: 0},
          {id: 39, name: locales.common.namae32, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 139, name: locales.common.namae30, type: 'VariableId', referenceId: 39, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
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
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[逃げる/追う]',
          desc: '対象の座標に近づくと、このオブジェクトが追う、または離れようとします。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[逃げる/追う]',
            desc: '対象の座標に近づくと、このオブジェクトが追う、または離れようとします。★付きの設定項目は変数の値を最新のものに更新し続けます。'
          }
        },
        common: {
          selectObject: '変数の格納場所:',
          namae0: '------------------自身の座標から位置をずらす------------------',
          namae1: '"変数で決める"選択時のみ',
          namae2: '(値が0に近いほど遅い)',
          namae3: '-----------------対象オブジェクトの座標を指定-----------------',
          namae4: '-------------------オブジェクトの挙動を設定-------------------,',
          namae5: '[更新頻度ごとの移動力]',
          namae6: '[逃げる/追う]',
          namae7: '位置をずらす:',
          namae8: '位置をずらす X:',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '自身の基本移動依存(%)',
          namae12: '目的にかかる時間(？)',
          namae13: '位置をずらす Y:',
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
          namae34: '[対象の位置を指定 X ] ★',
          namae35: '[対象の位置を指定 Y ] ★',
          namae36: '------------------------円移動の設定------------------------',
          namae37: '※ 更新頻度が早いほど動きが「なめらか」になりますが、メモリに負荷がかかります。',
          namae38: '[移動範囲 (最大)]',
          namae39: '[移動範囲 (最小)]',
          namae40: '※ シーンが変わると自動的に削除します。'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[逃げる/追う]',
          desc: '対象の座標に近づくと、このオブジェクトが追う、または離れようとします。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[逃げる/追う]',
            desc: '対象の座標に近づくと、このオブジェクトが追う、または離れようとします。★付きの設定項目は変数の値を最新のものに更新し続けます。'
          }
        },
        common: {
          selectObject: '変数の格納場所:',
          namae0: '------------------自身の座標から位置をずらす------------------',
          namae1: '"変数で決める"選択時のみ',
          namae2: '(値が0に近いほど遅い)',
          namae3: '-------------------追われる/追う 座標を指定-------------------',
          namae4: '-------------------オブジェクトの挙動を設定-------------------,',
          namae5: '[更新頻度ごとの移動力]',
          namae6: '[逃げる/追う]',
          namae7: '位置をずらす:',
          namae8: '位置をずらす X:',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '自身の基本移動依存(%)',
          namae12: '目的にかかる時間(？)',
          namae13: '位置をずらす Y:',
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
          namae34: '[対象の位置を指定 X ] ★',
          namae35: '[対象の位置を指定 Y ] ★',
          namae36: '------------------------円移動の設定------------------------',
          namae37: '※ 更新頻度が早いほど動きが「なめらか」になりますが、メモリに負荷がかかります。',
          namae38: '[移動範囲 (最大)]',
          namae39: '[移動範囲 (最小)]',
          namae40: '※ シーンが変わると自動的に削除します。'
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
        var settings7 = obj.getValueJson(valueJson, 27);

        var inputSwitch = obj.getValueJson(valueJson, 10);
        var inputSwitch2 = obj.getValueJson(valueJson, 11);
        var inputSwitch3 = obj.getValueJson(valueJson, 38);

        var inputSwitch4 = obj.getValueJson(valueJson, 39);

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

        var inputObject14 = obj.getValueJson(valueJson, 53);
        var inputObject15 = obj.getValueJson(valueJson, 54);
        var inputObject16 = obj.getValueJson(valueJson, 55);
        var inputObject17 = obj.getValueJson(valueJson, 56);
        var inputObject18 = obj.getValueJson(valueJson, 57);
        var inputObject19 = obj.getValueJson(valueJson, 58);

        // アクションコマンドの設定したパラメータを代入(unko2～unko5はID値じゃない方の変数の値)
        var objHensuu = {
          xxxx1: obj.getVariable(inputSwitch, obj.getValueJson(valueJson, 110), instanceId),
          xxxx2: obj.getVariable(inputSwitch2, obj.getValueJson(valueJson, 111), instanceId),
          stopW1: obj.getVariable(inputSwitch4, obj.getValueJson(valueJson, 139), instanceId),
          objVar1: obj.getVariable(inputObject4, obj.getValueJson(valueJson, 143), instanceId),
          objVar2: obj.getVariable(inputObject7, obj.getValueJson(valueJson, 146), instanceId)
        };

        // シーンIDをゲット
        var sceneId = Agtk.sceneInstances.getCurrent().sceneId;
        var sceneIdxxx = sceneId;

        var totaltimeAxx = 0;
        var timeAxx = inputObject13 * 1000;

         // 逃げる追う
        if(inputObject17 == 0){
          var nigeruOrOu = 180;
        }else if(inputObject17 == 1){
           var nigeruOrOu = 0;
        }

         // 移動タイプ選択
        if(inputObject8 == 0){
          var selectMoveType = true;
        }else if(inputObject8 == 1){
           var selectMoveType = false;
        }

        var objSpeedTime = inputObject10 * 300;



       function wavesignal(){

        // シーンIDをゲット
        var sceneId = Agtk.sceneInstances.getCurrent().sceneId;
        // シーンIDが違うと削除
        if(sceneIdxxx != sceneId){
           clearInterval(tim);

        }

        totaltimeAxx += inputObject13;

        // このオブジェクトの座標位置を取得
        var instance2 = Agtk.objectInstances.get(instanceId);
        var gentenObjectId = instance2.variables.get(instance2.variables.ObjectIDId).getValue();
        var gentenObjectX = instance2.variables.get(instance2.variables.XId).getValue();
        var gentenObjectY = instance2.variables.get(instance2.variables.YId).getValue();

                 var xx1 = gentenObjectX + inputObject14 * -1;
                 var yy1 = gentenObjectY + inputObject15 * -1;


        // 「値の指定方法」の値で条件分岐させる

        // 座標B、X軸
              if(inputObject2 == 0){
                 var xx2 = inputObject3;
        }else if(inputObject2 == 1){
                 var xx2 = inputObject11 + objHensuu.objVar1.getValue();
        }else{
                 var xx2 = 0;
      }
        // 座標B、Y軸
              if(inputObject5 == 0){
                 var yy2 = inputObject6;
        }else if(inputObject5 == 1){
                 var yy2 = inputObject12 + objHensuu.objVar2.getValue();
        }else{
                 var yy2 = 0;
      }

        // 2点の座標で方角を求める
        var radian = Math.atan2( xx2 - xx1, yy1 - yy2 );
        var radian2 = Math.atan2( xx1 - xx2, yy2 - yy1 );
        var degree = radian * (180 / Math.PI);
        var degree2 = radian2 * (180 / Math.PI);


        // 座標AとBの位置が同じ場合、180を加算しない
              if(xx1 == xx2){
                 var ichiX = 10;
        }else{
                 var ichiX = 1;
      }
              if(yy1 == yy2){
                 var ichiY = 10;
        }else{
                 var ichiY = 2;
      }
              if(ichiX == ichiY){
                 var onajiZahyouichi = 0;
        }else{
                 var onajiZahyouichi = 180;
      }

        // できあがった方角の値
        var addition180 = degree2 + onajiZahyouichi;
        var outputAngle = Math.max(degree, addition180);


        // 360度ちょうどの場合、値を0にする
              if(outputAngle == 360){
                 var outputAngle = 0;
        }

        // A,B間の距離
        var kyoriObjX = Math.abs(xx1 - xx2);
        var kyoriObjY = Math.abs(yy1 - yy2);
        var kyoriObjAB = Math.abs(kyoriObjX + kyoriObjY);

        var kyoriObj1 = inputObject16;

         // 移動範囲
        if(kyoriObjAB <= inputObject18){
                         if(kyoriObjAB <= inputObject19){
                            var kyoriObj1 = 0;
                         }
        }else{
           var kyoriObj1 = 0;
        }



         // 一時停止
        if(settings7 == 1){
         var waveStopMode = objHensuu.stopW1.getValue();
        }
        if(waveStopMode == -1){
         var kyoriObj1 = 0;
        }

        // 削除する
         var actionStop1 = objHensuu.xxxx1.getValue();
         var actionStop2 = objHensuu.xxxx2.getValue();
        if(actionStop1 == -1){
           clearInterval(tim);
        }
        if(actionStop2 == -1){
           clearInterval(tim);
        }
        if(inputSwitch3 <= totaltimeAxx){
           clearInterval(tim);
        }


        var inputObjectMove = {

          moveType: 0,
          angle: outputAngle + nigeruOrOu,
          moveDistance: kyoriObj1,

          useObjectParameter: selectMoveType,
          changeMoveSpeed: inputObject9,
          moveDuration300: objSpeedTime,

          targettingType: 1,
          targetObjectId: gentenObjectId,
      };

          Agtk.objectInstances.get(instanceId).execCommandObjectMove(inputObjectMove);

    }

          var tim = setInterval(wavesignal,timeAxx);




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