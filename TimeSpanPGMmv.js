/* 概要:
 *  ひとつの値で秒、分、時間などの値を作成し、分離します。
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
      return 'ひとつの値で秒、分、時間などの値を作成し、分離します。';
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
          {id: 2, name: locales.common.namae5, type: 'Number', minimumValue: 1, defaultValue: 60},
          {id: 3, name: locales.common.namae6, type: 'Number', minimumValue: 1, defaultValue: 60},
          {id: 4, name: locales.common.namae12, type: 'Number', minimumValue: 1, defaultValue: 24},
          {id: 5, name: locales.common.namae13, type: 'Number', minimumValue: 1, defaultValue: 30},
          {id: 6, name: locales.common.namae14, type: 'Number', minimumValue: 1, defaultValue: 100},
          {id: 7, name: locales.common.namae15, type: 'Number', minimumValue: 1, defaultValue: 100},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 11, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 111, name: '', type: 'VariableId', referenceId: 11, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 12, name: locales.common.namae8, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 112, name: '', type: 'VariableId', referenceId: 12, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 13, name: locales.common.namae9, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 113, name: '', type: 'VariableId', referenceId: 13, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 14, name: locales.common.namae10, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 114, name: '', type: 'VariableId', referenceId: 14, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 15, name: locales.common.namae11, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 115, name: '', type: 'VariableId', referenceId: 15, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 16, name: locales.common.namae3, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 116, name: '', type: 'VariableId', referenceId: 16, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 17, name: locales.common.namae0, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 117, name: '', type: 'VariableId', referenceId: 17, defaultValue: -1},
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
          name: 'タイムスパン',
          desc: 'ひとつの値で秒、分、時間などの値を作成し、指定場所の変数に格納します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'タイムスパン',
            desc: 'ひとつの値で秒、分、時間などの値を作成し、指定場所の変数に格納します。'
          }
        },
        common: {
          namae0: '出力7:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '変数を指定:',
          namae3: '出力6:',
          namae5: '整数第一位の進数 (秒):',
          namae6: '整数第二位の進数 (分):',
          namae7: '出力1 (秒):',
          namae8: '出力2 (分):',
          namae9: '出力3 (時間):',
          namae10: '出力4 (日):',
          namae11: '出力5:',
          namae12: '整数第三位の進数 (時間):',
          namae13: '整数第四位の進数 (日):',
          namae14: '整数第五位の進数:',
          namae15: '整数第六位の進数:'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: 'タイムスパン',
          desc: 'ひとつの値で秒、分、時間などの値を作成し、指定場所の変数に格納します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'タイムスパン',
            desc: 'ひとつの値で秒、分、時間などの値を作成し、指定場所の変数に格納します。'
          }
        },
        common: {
          namae0: '出力7:',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '変数を指定:',
          namae3: '出力6:',
          namae5: '整数第一位の進数 (秒):',
          namae6: '整数第二位の進数 (分):',
          namae7: '出力1 (秒):',
          namae8: '出力2 (分):',
          namae9: '出力3 (時間):',
          namae10: '出力4 (日):',
          namae11: '出力5:',
          namae12: '整数第三位の進数 (時間):',
          namae13: '整数第四位の進数 (日):',
          namae14: '整数第五位の進数:',
          namae15: '整数第六位の進数:'
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
        var inputSignal7 = obj.getValueJson(valueJson, 7);

        var inputSignal11 = obj.getValueJson(valueJson, 11);
        var inputSignal12 = obj.getValueJson(valueJson, 12);
        var inputSignal13 = obj.getValueJson(valueJson, 13);
        var inputSignal14 = obj.getValueJson(valueJson, 14);
        var inputSignal15 = obj.getValueJson(valueJson, 15);
        var inputSignal16 = obj.getValueJson(valueJson, 16);
        var inputSignal17 = obj.getValueJson(valueJson, 17);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          inputV1: obj.getVariable(inputSignal1, obj.getValueJson(valueJson, 101), instanceId),

          inputV11: obj.getVariable(inputSignal11, obj.getValueJson(valueJson, 111), instanceId),
          inputV12: obj.getVariable(inputSignal12, obj.getValueJson(valueJson, 112), instanceId),
          inputV13: obj.getVariable(inputSignal13, obj.getValueJson(valueJson, 113), instanceId),
          inputV14: obj.getVariable(inputSignal14, obj.getValueJson(valueJson, 114), instanceId),
          inputV15: obj.getVariable(inputSignal15, obj.getValueJson(valueJson, 115), instanceId),
          inputV16: obj.getVariable(inputSignal16, obj.getValueJson(valueJson, 116), instanceId),
          inputV17: obj.getVariable(inputSignal17, obj.getValueJson(valueJson, 117), instanceId)
        };


        // 値をゲット
        var hensuu1 = objHensuu.inputV1.getValue();


        // 処理
        var shori1 = Math.floor(hensuu1 / inputSignal2);
        var output1 = hensuu1 + (shori1 * (inputSignal2 * -1));

        var shori2 = Math.floor(shori1 / inputSignal3);
        var output2 = shori1 + (shori2 * (inputSignal3 * -1));

        var shori3 = Math.floor(shori2 / inputSignal4);
        var output3 = shori2 + (shori3 * (inputSignal4 * -1));

        var shori4 = Math.floor(shori3 / inputSignal5);
        var output4 = shori3 + (shori4 * (inputSignal5 * -1));

        var shori5 = Math.floor(shori4 / inputSignal6);
        var output5 = shori4 + (shori5 * (inputSignal6 * -1));

        var shori6 = Math.floor(shori5 / inputSignal7);
        var output6 = shori5 + (shori6 * (inputSignal7 * -1));



        // 指定した変数に格納
        if(objHensuu.inputV11){objHensuu.inputV11.setValue((output1));}
        if(objHensuu.inputV12){objHensuu.inputV12.setValue((output2));}
        if(objHensuu.inputV13){objHensuu.inputV13.setValue((output3));}
        if(objHensuu.inputV14){objHensuu.inputV14.setValue((output4));}
        if(objHensuu.inputV15){objHensuu.inputV15.setValue((output5));}
        if(objHensuu.inputV16){objHensuu.inputV16.setValue((output6));}
        if(objHensuu.inputV17){objHensuu.inputV17.setValue((shori6));}

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