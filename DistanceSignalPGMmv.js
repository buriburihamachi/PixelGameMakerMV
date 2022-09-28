/* 概要:
 *  2点の座標位置から距離を取得し、指定の変数に格納します。
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
      return '2点の座標位置から距離を取得し、指定の変数に格納します。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 1, name: locales.common.selectObject, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 101, name: '', type: 'VariableId', referenceId: 1, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 21, name: locales.common.namae4, type: 'CustomId', customParam: [{id: 0, name: "距離"},{id: 1, name: "強度% (近いほど 大)"},{id: 2, name: "強度% (近いほど 小)"}], defaultValue: 0},
          {id: 22, name: locales.common.namae8, type: 'Number', minimumValue: 0, maximumValue: 1000000, defaultValue: 100},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae1, type: 'Embedded'},
          {id: 2, name: locales.common.namae2, type: 'CustomId', customParam: [{id: 0, name: "定数"},{id: 1, name: "変数"}], defaultValue: 0},
          {id: 4, name: locales.common.namae6, type: 'Number', minimumValue: -100000, maximumValue: 1000000, defaultValue: 0},
          {id: 5, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 105, name: '', type: 'VariableId', referenceId: 5, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 3, name: locales.common.namae3, type: 'CustomId', customParam: [{id: 0, name: "定数"},{id: 1, name: "変数"}], defaultValue: 0},
          {id: 6, name: locales.common.namae6, type: 'Number', minimumValue: -100000, maximumValue: 1000000, defaultValue: 0},
          {id: 7, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 107, name: '', type: 'VariableId', referenceId: 7, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae10, type: 'Embedded'},
          {id: 12, name: locales.common.namae2, type: 'CustomId', customParam: [{id: 0, name: "定数"},{id: 1, name: "変数"}], defaultValue: 0},
          {id: 14, name: locales.common.namae6, type: 'Number', minimumValue: -100000, maximumValue: 1000000, defaultValue: 0},
          {id: 15, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 115, name: '', type: 'VariableId', referenceId: 15, defaultValue: -1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 13, name: locales.common.namae3, type: 'CustomId', customParam: [{id: 0, name: "定数"},{id: 1, name: "変数"}], defaultValue: 0},
          {id: 16, name: locales.common.namae6, type: 'Number', minimumValue: -100000, maximumValue: 1000000, defaultValue: 0},
          {id: 17, name: locales.common.namae7, type: 'SwitchVariableObjectId', option: ['SelfObject'], defaultValue: -1},
          {id: 117, name: '', type: 'VariableId', referenceId: 17, defaultValue: -1},
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
          name: '距離を取得',
          desc: '2点の座標位置から距離を取得ます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '距離を取得',
            desc: 'このアクションを実行すると、2点の座標位置から距離を取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          selectObject: '変数の格納場所:',
          namae1: '--------------------座標Aを設定(原点)--------------------',
          namae2: '[値の指定方法 X軸]:',
          namae3: '[値の指定方法 Y軸]:',
          namae4: '出力の値:',
          namae6: '定数を選択時のみ:',
          namae7: '変数を選択時のみ:',
          namae8: '強度% の距離範囲:',
          namae9: '変数を選択時のみ:',
          namae10: '-----------------------座標Bを設定-----------------------'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '距離を取得',
          desc: '2点の座標位置から距離を取得ます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '距離を取得',
            desc: 'このアクションを実行すると、2点の座標位置から距離を取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          selectObject: '変数の格納場所:',
          namae1: '--------------------座標Aを設定(原点)--------------------',
          namae2: '[値の指定方法 X軸]:',
          namae3: '[値の指定方法 Y軸]:',
          namae4: '出力の値:',
          namae6: '定数を選択時のみ:',
          namae7: '変数を選択時のみ:',
          namae8: '強度% の距離範囲:',
          namae9: '変数を選択時のみ:',
          namae10: '-----------------------座標Bを設定-----------------------'
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
        var objId = obj.getValueJson(valueJson, 1);
        var gentenVarShiteiX = obj.getValueJson(valueJson, 2);
        var gentenVarShiteiY = obj.getValueJson(valueJson, 3);
        var gentenTeisuuX = obj.getValueJson(valueJson, 4);
        var gentenVariableX = obj.getValueJson(valueJson, 5);
        var gentenTeisuuY = obj.getValueJson(valueJson, 6);
        var gentenVariableY = obj.getValueJson(valueJson, 7);
        var sayotenVarShiteiX = obj.getValueJson(valueJson, 12);
        var sayotenVarShiteiY = obj.getValueJson(valueJson, 13);
        var sayotenTeisuuX = obj.getValueJson(valueJson, 14);
        var sayotenVariableX = obj.getValueJson(valueJson, 15);
        var sayotenTeisuuY = obj.getValueJson(valueJson, 16);
        var sayotenVariableY = obj.getValueJson(valueJson, 17);

        var outputV1 = obj.getValueJson(valueJson, 21);
        var outputV2 = obj.getValueJson(valueJson, 22);

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          input1: obj.getVariable(objId, obj.getValueJson(valueJson, 101), instanceId),
          input2: obj.getVariable(gentenVariableX, obj.getValueJson(valueJson, 105), instanceId),
          input3: obj.getVariable(gentenVariableY, obj.getValueJson(valueJson, 107), instanceId),
          input4: obj.getVariable(sayotenVariableX, obj.getValueJson(valueJson, 115), instanceId),
          input5: obj.getVariable(sayotenVariableY, obj.getValueJson(valueJson, 117), instanceId)
        };


        // このオブジェクトの座標位置を取得
        var instance2 = Agtk.objectInstances.get(instanceId);
        var gentenObjectX = instance2.variables.get(instance2.variables.XId).getValue();
        var gentenObjectY = instance2.variables.get(instance2.variables.YId).getValue();


        // 「値の指定方法」の値で条件分岐させる
        // 座標A、X軸
              if(gentenVarShiteiX == 0){
                 var xx1 = gentenTeisuuX;
        }else if(gentenVarShiteiX == 1){
                 var gentenHensuuNameX = objHensuu.input2.getValue();
                 var xx1 = gentenHensuuNameX;
        }else{
                 var xx1 = 0;
      }
        // 座標A、Y軸
              if(gentenVarShiteiY == 0){
                 var yy1 = gentenTeisuuY;
        }else if(gentenVarShiteiY == 1){
                 var gentenHensuuNameY = objHensuu.input3.getValue();
                 var yy1 = gentenHensuuNameY;
        }else{
                 var yy1 = 0;
      }
        // 座標B、X軸
              if(sayotenVarShiteiX == 0){
                 var xx2 = sayotenTeisuuX;
        }else if(sayotenVarShiteiX == 1){
                 var sayotenHensuuNameX = objHensuu.input4.getValue();
                 var xx2 = sayotenHensuuNameX;
        }else{
                 var xx2 = 0;
      }
        // 座標B、Y軸
              if(sayotenVarShiteiY == 0){
                 var yy2 = sayotenTeisuuY;
        }else if(sayotenVarShiteiY == 1){
                 var sayotenHensuuNameY = objHensuu.input5.getValue();
                 var yy2 = sayotenHensuuNameY;
        }else{
                 var yy2 = 0;
      }


        // A,B間の距離
        var kyoriObjX = Math.abs(xx1 - xx2);
        var kyoriObjY = Math.abs(yy1 - yy2);
        var kyoriObjAB = Math.abs(kyoriObjX + kyoriObjY);

        // 出力の種類
              if(outputV1 == 0){
        }else if(outputV1 == 1){
                 kyoriObjAB1 = kyoriObjAB / outputV2 * 100;
                 kyoriObjAB2 = 100 - kyoriObjAB1;
                              if(0 >= kyoriObjAB2){
                                 kyoriObjAB = 0;
                              }else{
                                 kyoriObjAB = kyoriObjAB2;
                              }

        }else if(outputV1 == 2){
                 kyoriObjAB = kyoriObjAB / outputV2 * 100;
                              if(kyoriObjAB >= 100){
                                 kyoriObjAB = 100;
                              }
        }







        // 指定した変数に格納
        if(objHensuu.input1){objHensuu.input1.setValue((kyoriObjAB));}

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