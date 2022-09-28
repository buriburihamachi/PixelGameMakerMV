/* 概要:
 *  変数で指定した位置にオブジェクトを移動させます。
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
      return '変数で指定した位置にオブジェクトを移動させます。';
    } else if(category == 'parameter'){
      return [];
    } else if(category == 'internal'){
      return obj.internal;
    } else if(category == 'actionCommand'){
      return [
        {id: 1, name: locales.actionCommand.getCurrentTime.name, description: locales.actionCommand.getCurrentTime.desc, parameter: [
          {id: 0, name: '', type: 'Embedded'},
          {id: 21, name: locales.common.namae33, type: 'CustomId', customParam: [
                   {id: 0, name: "自身のオブジェクト"},{id: 1, name: "下から選ぶ"}], defaultValue: 0},
          {id: 40, name: locales.common.namae13, type: 'ObjectId', option: ['SelfObject'], defaultValue: -1},
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
                   {id: 0, name: "対象オブジェクトの基本移動に依存(%)"},{id: 1, name: "目的にかかる時間(秒)"}], defaultValue: 0},
          {id: 48, name: locales.common.namae11, type: 'Number', minimumValue: -1000000, maximumValue: 1000000, decimals: 2, defaultValue: 100},
          {id: 49, name: locales.common.namae12, type: 'Number', minimumValue: 0, maximumValue: 1000000, decimals: 2, defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 0, name: locales.common.namae36, type: 'Embedded'},
          {id: 31, name: locales.common.namae0, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 32, name: locales.common.namae2, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 0, name: '', type: 'Embedded'},
          {id: 33, name: locales.common.namae3, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 34, name: locales.common.namae4, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 35, name: locales.common.namae5, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 36, name: locales.common.namae6, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
          {id: 37, name: locales.common.namae8, type: 'CustomId', customParam: [
                   {id: 0, name: "はい"},{id: 1, name: "いいえ"}], defaultValue: 1},
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
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[変数]',
          desc: '変数で指定した位置にオブジェクトを移動させます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[変数]',
            desc: '変数で指定した位置にオブジェクトを移動させます。'
          }
        },
        common: {
          namae0: 'ゲーム画面に対しての移動',
          namae1: '"変数で決める"選択時のみ',
          namae2: 'スクロールの影響を受ける',
          namae3: '表示方向を移動に合わせる',
          namae4: '移動中オブジェクト非表示',
          namae5: '移動中アクションを停止',
          namae6: '移動中アニメーション停止',
          namae7: '位置をずらす:',
          namae8: '移動完了後グリッドに吸着',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '対象の基本移動依存(%)',
          namae12: '目的にかかる時間(秒)',
          namae13: '"下から選ぶ"選択時のみ',
          namae26: '"定数で決める"選択時のみ',
          namae30: '-1 で停止、再生はそれ以外',
          namae31: '[一時停止を使用する？]',
          namae32: '"使用する"選択時のみ',
          namae33: '[動かすオブジェクト]',
          namae34: '[位置を指定 X ]',
          namae35: '[位置を指定 Y ]',
          namae36: '------------------------その他の設定------------------------'
        }
      };
    }else{ // 英語
      locales = {
        plugIn: {
          name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[変数]',
          desc: '変数で指定した位置にオブジェクトを移動させます。'
        },
        actionCommand: {
          getCurrentTime: {
            name: 'ｵﾌﾞｼﾞｪｸﾄﾑｰﾊﾞｰ[変数]',
            desc: '変数で指定した位置にオブジェクトを移動させます。'
          }
        },
        common: {
          namae0: 'ゲーム画面に対しての移動',
          namae1: '"変数で決める"選択時のみ',
          namae2: 'スクロールの影響を受ける',
          namae3: '表示方向を移動に合わせる',
          namae4: '移動中オブジェクト非表示',
          namae5: '移動中アクションを停止',
          namae6: '移動中アニメーション停止',
          namae7: '位置をずらす:',
          namae8: '移動完了後グリッドに吸着',
          namae9: '[移動場所の更新頻度(秒)]',
          namae10: '[移動タイプを選択]',
          namae11: '対象の基本移動依存(%)',
          namae12: '目的にかかる時間(秒)',
          namae13: '"下から選ぶ"選択時のみ',
          namae26: '"定数で決める"選択時のみ',
          namae30: '-1 で停止、再生はそれ以外',
          namae31: '[一時停止を使用する？]',
          namae32: '"使用する"選択時のみ',
          namae33: '[動かすオブジェクト]',
          namae34: '[位置を指定 X ] ',
          namae35: '[位置を指定 Y ] ',
          namae36: '------------------------その他の設定------------------------'
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
        var konoObj1 = obj.getValueJson(valueJson, 21);

        var inputHoka1 = obj.getValueJson(valueJson, 31);
        var inputHoka2 = obj.getValueJson(valueJson, 32);
        var inputHoka3 = obj.getValueJson(valueJson, 33);
        var inputHoka4 = obj.getValueJson(valueJson, 34);
        var inputHoka5 = obj.getValueJson(valueJson, 35);
        var inputHoka6 = obj.getValueJson(valueJson, 36);
        var inputHoka7 = obj.getValueJson(valueJson, 37);

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

        // アクションコマンドの設定したパラメータを代入
        var objHensuu = {
          objVar1: obj.getVariable(inputObject4, obj.getValueJson(valueJson, 143), instanceId),
          objVar2: obj.getVariable(inputObject7, obj.getValueJson(valueJson, 146), instanceId)

        };

        var instance2 = Agtk.objectInstances.get(instanceId);
        var gentenObjectId = instance2.variables.get(instance2.variables.ObjectIDId).getValue();

        // オブジェクトid
              if(konoObj1 == 0){
                 var objectIdididid = gentenObjectId;

        }else if(konoObj1 == 1){
                 var objectIdididid = inputObject1;
        }

         // 移動タイプ選択
        if(inputObject8 == 0){
          var selectMoveType = true;
        }else if(inputObject8 == 1){
           var selectMoveType = false;
        }

        var objSpeedTime = inputObject10 * 300;




            // 位置X
           if(inputObject2 == 0){
              var objPosX = inputObject3;
           }else if(inputObject2 == 1){
              var objPosX = objHensuu.objVar1.getValue();
           }

            // 位置Y
           if(inputObject5 == 0){
              var objPosY = inputObject6;
           }else if(inputObject5 == 1){
              var objPosY = objHensuu.objVar2.getValue();
           }



        if(inputHoka1 == 0){
          var hoka1 = true;
        }else if(inputHoka1 == 1){
           var hoka1 = false;
        }
 
        if(inputHoka2 == 0){
          var hoka2 = true;
        }else if(inputHoka2 == 1){
           var hoka2 = false;
        }

        if(inputHoka3 == 0){
          var hoka3 = true;
        }else if(inputHoka3 == 1){
           var hoka3 = false;
        }

        if(inputHoka4 == 0){
          var hoka4 = false;
        }else if(inputHoka4 == 1){
           var hoka4 = true;
        }

        if(inputHoka5 == 0){
          var hoka5 = true;
        }else if(inputHoka5 == 1){
           var hoka5 = false;
        }

        if(inputHoka6 == 0){
          var hoka6 = true;
        }else if(inputHoka6 == 1){
           var hoka6 = false;
        }

        if(inputHoka7 == 0){
          var hoka7 = true;
        }else if(inputHoka7 == 1){
           var hoka7 = false;
        }
      
      var inputObjectMove = {

          moveType: 1,
          posX: objPosX + inputObject11,
          posY: objPosY + inputObject12,
          moveInDisplayCoordinates: hoka1,
          followCameraMoving: hoka2,

          useObjectParameter: selectMoveType,
          changeMoveSpeed: inputObject9,
          moveDuration300: objSpeedTime,

          targettingType: 1,
          targetObjectId: objectIdididid,

          fitDispDirToMoveDir: hoka3,
          dispWhileMoving: hoka4,
          stopActionWhileMoving: hoka5,
          stopAnimWhileMoving: hoka6,
          finalGridMagnet: hoka7
      };

          Agtk.objectInstances.get(instanceId).execCommandObjectMove(inputObjectMove);



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