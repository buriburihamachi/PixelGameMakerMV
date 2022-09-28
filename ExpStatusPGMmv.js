/* 概要:
 *  ひとつの値で現在のレベルや次のレベルに必要な経験値の値を取得し、指定場所の変数に格納します。
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
      return '変数で現在のレベルなどを取得します。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 7, name: locales.common.namae9, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 107, name: '', type: 'VariableId', referenceId: 7, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 4, name: locales.common.namae6, type: 'Number', minimumValue: 1, maximumValue: 100, decimals: 2, defaultValue: 2},
          {id: 0, name: locales.common.namae0, type: 'Embedded'},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 5, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 105, name: '', type: 'VariableId', referenceId: 5, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 15, name: locales.common.namae8, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 115, name: '', type: 'VariableId', referenceId: 15, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 17, name: locales.common.namae10, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 117, name: '', type: 'VariableId', referenceId: 17, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 18, name: locales.common.namae11, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 118, name: '', type: 'VariableId', referenceId: 18, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 19, name: locales.common.namae3, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 119, name: '', type: 'VariableId', referenceId: 19, defaultValue: -1},
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
          name: '簡易的な経験値テーブル',
          desc: '変数で現在のレベルなどを取得します。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '簡易的な経験値テーブル',
            desc: '獲得した経験値の値で現在のレベルや次のレベルに必要な経験値の値を取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          namae0: '※数値が高いほど次のレベルまでの必要量が増加します。',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '次のレベルまでの表示方法',
          namae3: '次のレベル(ゲージ表示用):',
          namae6: '経験値の必要度:',
          namae7: '現在レベル:',
          namae8: '現在の経験値(レベルごと):',
          namae9: '獲得した経験値を指定:',
          namae10: '次のレベル(累計):',
          namae11: '次のレベル(レベルごと):'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '簡易的な経験値テーブル',
          desc: '変数で現在のレベルなどを取得ます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '簡易的な経験値テーブル',
            desc: '獲得した経験値の値で現在のレベルや次のレベルに必要な経験値の値を取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          namae0: '※数値が高いほど次のレベルまでの必要量が増加します。',
          namae1: '----------------------変数の格納場所----------------------',
          namae2: '次のレベルまでの表示方法',
          namae3: '次のレベル(ゲージ表示用):',
          namae6: '経験値の必要度:',
          namae7: '現在レベル:',
          namae8: '現在の経験値(レベル1ごと):',
          namae9: '獲得した経験値を指定:',
          namae10: '次のレベル(累計):',
          namae11: '次のレベル(レベル1ごと):'
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
        var hitsuyouExp = obj.getValueJson(valueJson, 4);
        var nowLvl = obj.getValueJson(valueJson, 5);
        var kakutokushitaExp = obj.getValueJson(valueJson, 7);
        var nowExp1 = obj.getValueJson(valueJson, 15);
        var nextLvlTotal = obj.getValueJson(valueJson, 17);
        var nextLvl2 = obj.getValueJson(valueJson, 18);

        var nextLvl3 = obj.getValueJson(valueJson, 19);

        // アクションコマンドの設定したパラメータを代入(kakutokushitaExpはID値じゃない方の変数の値)
        var objHensuu = {
          inputV2: obj.getVariable(nowLvl, obj.getValueJson(valueJson, 105), instanceId),
          inputV3: obj.getVariable(kakutokushitaExp, obj.getValueJson(valueJson, 107), instanceId),
          inputV4: obj.getVariable(nowExp1, obj.getValueJson(valueJson, 115), instanceId),
          inputV5: obj.getVariable(nextLvlTotal, obj.getValueJson(valueJson, 117), instanceId),
          inputV6: obj.getVariable(nextLvl2, obj.getValueJson(valueJson, 118), instanceId),

          inputV7: obj.getVariable(nextLvl3, obj.getValueJson(valueJson, 119), instanceId)
        };


        // 値をゲット
        var genzainoExp = objHensuu.inputV3.getValue();


        // 処理
        var output1 = Math.pow(genzainoExp, 0.5);
        var output2 = output1 / hitsuyouExp;
        var output3 = Math.floor(output2);

        // 現在のレベル
        var output4 = output3 + 1;

        var output5 = hitsuyouExp * hitsuyouExp;
        var output6 = output5 * output3;
        var output7 = output6 * output3;

        // 現在の経験値、レベルごと
        var output8 = genzainoExp - output7;

        var output12 = output3 + 1;
        var output13 = output12 * output5;

        // 次のレベル、累計
        var output14 = output12 * output13;

        // 次のレベル、レベルごと
        var output15 =  output14 - output7;

        // 次のレベル、ゲージ表示用
        var output11 = output8 / output15 * 100;


        // 切り捨て Math.floor();
        // 切り上げ Math.ceil();
        // 四捨五入 Math.round();


        // 指定した変数に格納
        if(objHensuu.inputV2){objHensuu.inputV2.setValue((output4));}
        if(objHensuu.inputV4){objHensuu.inputV4.setValue((output8));}
        if(objHensuu.inputV5){objHensuu.inputV5.setValue((output14));}
        if(objHensuu.inputV6){objHensuu.inputV6.setValue((output15));}

        // 次のレベル、ゲージ表示用
        if(objHensuu.inputV7){objHensuu.inputV7.setValue((output11));}

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