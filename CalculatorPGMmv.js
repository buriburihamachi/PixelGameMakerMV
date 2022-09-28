/* 概要:
 *  値の計算をし、指定の変数に格納します。
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
      return '値の計算をします。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 0, name: '', type: 'Embedded'},
          {id: 21, name: locales.common.namae2, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 22, name: locales.common.namae0, type: 'Number', decimals: 2, defaultValue: 0},
          {id: 1, name: locales.common.namae6, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 101, name: '', type: 'VariableId', referenceId: 1, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 23, name: locales.common.namae3, type: 'CustomId', customParam: [
                   {id: 0, name: "定数で決める"},{id: 1, name: "変数で決める"}], defaultValue: 0},
          {id: 24, name: locales.common.namae0, type: 'Number', decimals: 2, defaultValue: 0},
          {id: 2, name: locales.common.namae6, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 102, name: '', type: 'VariableId', referenceId: 2, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 61, name: locales.common.namae5, type: 'CustomId', customParam: [
                   {id: 0, name: "＋ (足し算)"},{id: 1, name: "－ (引き算)"},{id: 2, name: "× (掛け算)"},{id: 3, name: "÷ (割り算)"},
                   {id: 4, name: "％ (剰余)"},{id: 5, name: "n^x (累乗)"},{id: 6, name: "最大値を返す"},{id: 7, name: "最小値を返す"},
                   {id: 8, name: "＝ (同等)"}], defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 64, name: locales.common.namae10, type: 'Number', decimals: 2, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 62, name: locales.common.namae8, type: 'CustomId', customParam: [
                   {id: 0, name: "なし"},{id: 1, name: "切り捨て"},{id: 2, name: "四捨五入"},{id: 3, name: "切り上げ"}], defaultValue: 0},
          {id: 63, name: locales.common.namae9, type: 'CustomId', customParam: [
                   {id: 0, name: "いいえ"},{id: 1, name: "はい"}], defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 11, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 111, name: '', type: 'VariableId', referenceId: 11, defaultValue: -1},
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
          name: '計算機',
          desc: '値の計算をします。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '計算機',
            desc: '値の計算をします。'
          }
        },
        common: {
          namae0: '"定数で決める"選択時のみ:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '[値 A] を指定:',
          namae3: '[値 B] を指定:',
          namae5: '[演算子]',
          namae6: '"変数で決める"選択時のみ:',
          namae7: '変数を選択:',
          namae8: '小数点を切り捨て:',
          namae9: '絶対値に変換:',
          namae10: '演算子 ＝ 選択時で返す値:'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '計算機',
          desc: '値の計算をします。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '計算機',
            desc: '値の計算をします。'
          }
        },
        common: {
          namae0: '"定数で決める"選択時のみ:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '[値 A] を指定:',
          namae3: '[値 B] を指定:',
          namae5: '[演算子]',
          namae6: '"変数で決める"選択時のみ:',
          namae7: '変数を選択:',
          namae8: '小数点を切り捨て:',
          namae9: '絶対値に変換:',
          namae10: '演算子 ＝ 選択時で返す値:'
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
        var inputSignal2 = obj.getValueJson(valueJson, 2);

        var inputSignal11 = obj.getValueJson(valueJson, 11);

        var inputSignal21 = obj.getValueJson(valueJson, 21);
        var inputSignal22 = obj.getValueJson(valueJson, 22);
        var inputSignal23 = obj.getValueJson(valueJson, 23);
        var inputSignal24 = obj.getValueJson(valueJson, 24);

        var inputSignal61 = obj.getValueJson(valueJson, 61);
        var inputSignal62 = obj.getValueJson(valueJson, 62);
        var inputSignal63 = obj.getValueJson(valueJson, 63);

        var inputSignal64 = obj.getValueJson(valueJson, 64);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          inputV1: obj.getVariable(inputSignal1, obj.getValueJson(valueJson, 101), instanceId),
          inputV2: obj.getVariable(inputSignal2, obj.getValueJson(valueJson, 102), instanceId),

          inputV11: obj.getVariable(inputSignal11, obj.getValueJson(valueJson, 111), instanceId)
        };


        // 値をゲット
        if(inputSignal21 == 0){
           var hensuu1 = inputSignal22;

        }else if(inputSignal21 == 1){
           var hensuu1 = objHensuu.inputV1.getValue();
        }

        if(inputSignal23 == 0){
           var hensuu2 = inputSignal24;

        }else if(inputSignal23 == 1){
           var hensuu2 = objHensuu.inputV2.getValue();
        }


        // 処理
        if(inputSignal61 == 0){
           var output1 = hensuu1 + hensuu2;

        }else if(inputSignal61 == 1){
           var output1 = hensuu1 - hensuu2;

        }else if(inputSignal61 == 2){
           var output1 = hensuu1 * hensuu2;

        }else if(inputSignal61 == 3){
           var output1 = hensuu1 / hensuu2;

        }else if(inputSignal61 == 4){
           var output1 = hensuu1 % hensuu2;

        }else if(inputSignal61 == 5){
           var output1 = Math.pow(hensuu1, hensuu2);

        }else if(inputSignal61 == 6){
           var output1 = Math.max(hensuu1, hensuu2);

        }else if(inputSignal61 == 7){
           var output1 = Math.min(hensuu1, hensuu2);

        }else if(inputSignal61 == 8){
           if(hensuu1 == hensuu2){
              var output3 = inputSignal64;
           }
        }



        if(inputSignal61 != 8){

           // 小数点
                 if(inputSignal62 == 0){
                    var output2 = output1;
           }else if(inputSignal62 == 1){
                    var output2 = Math.floor(output1);
           }else if(inputSignal62 == 2){
                    var output2 = Math.round(output1);
           }else if(inputSignal62 == 3){
                    var output2 = Math.ceil(output1);
           }

           // 絶対値
                 if(inputSignal63 == 0){
                    var output3 = output2;
           }else if(inputSignal63 == 1){
                    var output3 = Math.abs(output2);
           }
        }




        // 指定した変数に格納
        if(objHensuu.inputV11){objHensuu.inputV11.setValue((output3));}

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