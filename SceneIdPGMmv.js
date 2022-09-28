/* 概要:
 *  現在のシーンIDを取得し、指定の変数に格納します。
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
      return '現在のシーンIDを取得し、指定の変数に格納します。';
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
          name: '現在のシーンIDを取得',
          desc: '現在のシーンIDを取得ます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '現在のシーンIDを取得',
            desc: '現在のシーンIDを取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          selectObject: '変数の格納場所:'
        },
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: '現在のシーンIDを取得',
          desc: '現在のシーンIDを取得ます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: '現在のシーンIDを取得',
            desc: '現在のシーンIDを取得し、指定場所の変数に格納します。'
          }
        },
        common: {
          selectObject: '変数の格納場所:'
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

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          input1: obj.getVariable(objId, obj.getValueJson(valueJson, 101), instanceId)
        };

        // シーンIDをゲット
        var sceneId = Agtk.sceneInstances.getCurrent().sceneId;


        // 指定した変数に格納
        if(objHensuu.input1){objHensuu.input1.setValue((sceneId));}

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