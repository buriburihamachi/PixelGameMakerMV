/* 概要:
 *  指定値に近い値か遠い値を返して指定場所の変数に格納します。A.Bの差が同等の場合、[出力 A]は指定値を返します。
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
      return '指定値に近い値か遠い値を返します。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 1, name: locales.common.namae2, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 101, name: '', type: 'VariableId', referenceId: 1, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 2, name: locales.common.namae3, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 102, name: '', type: 'VariableId', referenceId: 2, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 3, name: locales.common.namae6, type: 'Number', decimals: 2, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 4, name: locales.common.namae5, type: 'CustomId', customParam: [
                   {id: 0, name: "指定値から近い値"},{id: 1, name: "指定値から遠い値"}], defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 5, name: locales.common.namae0, type: 'CustomId', customParam: [
                   {id: 0, name: "値A が返された"},{id: 1, name: "値B が返された"},{id: 2, name: "同等だった"}], defaultValue: 0},
          {id: 6, name: locales.common.namae9, type: 'Number', decimals: 2, defaultValue: 0},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 11, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 111, name: '', type: 'VariableId', referenceId: 11, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 12, name: locales.common.namae8, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 112, name: '', type: 'VariableId', referenceId: 12, defaultValue: -1},
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
          name: '指定値に近い値か遠い値を返す',
          desc: '指定値に近い値か遠い値を返して指定場所の変数に格納します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '指定値に近い値か遠い値を返す',
            desc: '指定値に近い値か遠い値を返して指定場所の変数に格納します。A.Bの差が同等の場合、[出力 A]は指定値を返します。'
          }
        },
        common: {
          namae0: '[出力 B ]の出力条件を指定:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '値A を指定:',
          namae3: '値B を指定:',
          namae5: '[出力 A ]にセットする値:',
          namae6: '指定値:',
          namae7: '[出力 A ]',
          namae8: '[出力 B ]',
          namae9: '[出力 B ]にセットする値:'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '指定値に近い値か遠い値を返す',
          desc: '指定値に近い値か遠い値を返して指定場所の変数に格納します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '指定値に近い値か遠い値を返す',
            desc: '指定値に近い値か遠い値を返して指定場所の変数に格納します。A.Bの差が同等の場合、[出力 A]は指定値を返します。'
          }
        },
        common: {
          namae0: '[出力 B ]の出力条件を指定:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '値A を指定:',
          namae3: '値B を指定:',
          namae5: '[出力 A ]にセットする値:',
          namae6: '指定値:',
          namae7: '[出力 A ]',
          namae8: '[出力 B ]',
          namae9: '[出力 B ]にセットする値:'
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

        var inputSignal3 = obj.getValueJson(valueJson, 3);
        var inputSignal4 = obj.getValueJson(valueJson, 4);
        var inputSignal5 = obj.getValueJson(valueJson, 5);
        var inputSignal6 = obj.getValueJson(valueJson, 6);

        var inputSignal11 = obj.getValueJson(valueJson, 11);
        var inputSignal12 = obj.getValueJson(valueJson, 12);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          inputV1: obj.getVariable(inputSignal1, obj.getValueJson(valueJson, 101), instanceId),
          inputV2: obj.getVariable(inputSignal2, obj.getValueJson(valueJson, 102), instanceId),

          inputV11: obj.getVariable(inputSignal11, obj.getValueJson(valueJson, 111), instanceId),
          inputV12: obj.getVariable(inputSignal12, obj.getValueJson(valueJson, 112), instanceId)
        };


        // 値をゲット
        var hensuu1 = objHensuu.inputV1.getValue();
        var hensuu2 = objHensuu.inputV2.getValue();


        // 処理
        var shori1 = Math.abs(inputSignal3 - hensuu1);
        var shori2 = Math.abs(inputSignal3 - hensuu2);

        var shori3 = Math.min(shori1, shori2);



        if(inputSignal4 == 0){

             if(shori1 == shori3){
                var output1 =  hensuu1;
                var outputB = 0;
             }else if(shori2 == shori3){
                var output1 =  hensuu2;
                var outputB = 1;
             }

             if(shori1 == shori2){
                var output1 =  inputSignal3;
                var outputB = 2;
             }
        }


        if(inputSignal4 == 1){

             if(shori1 == shori3){
                var output1 =  hensuu2;
                var outputB = 1;
             }else if(shori2 == shori3){
                var output1 =  hensuu1;
                var outputB = 0;
             }

             if(shori1 == shori2){
                var output1 =  inputSignal3;
                var outputB = 2;
             }
        }


        if(inputSignal5 == outputB){

                var output2 =  inputSignal6;
                if(objHensuu.inputV12){objHensuu.inputV12.setValue((output2));}

        }else if(inputSignal5 == outputB){

                var output2 =  inputSignal6;
                if(objHensuu.inputV12){objHensuu.inputV12.setValue((output2));}

        }else if(inputSignal5 == outputB){
                var output2 =  inputSignal6;
                if(objHensuu.inputV12){objHensuu.inputV12.setValue((output2));}
        }

        // 指定した変数に格納
        if(objHensuu.inputV11){objHensuu.inputV11.setValue((output1));}

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