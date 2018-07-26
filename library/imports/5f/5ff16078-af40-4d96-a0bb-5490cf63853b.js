"use strict";
cc._RF.push(module, '5ff16B4r0BNlqC7VJDPY4U7', 'buttonContorl');
// Script/buttonContorl.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var xxx = 0;
cc.Class({
    extends: cc.Component,

    properties: {
        buttonLogin: {
            default: null,
            type: cc.Button
        },
        buttonLogout: {
            default: null,
            type: cc.Button
            // foo: {
            //     // ATTRIBUTES:
            //     default: null,        // The default value will be used only when the component attaching
            //                           // to a node for the first time
            //     type: cc.SpriteFrame, // optional, default is typeof default
            //     serializable: true,   // optional, default is true
            // },
            // bar: {
            //     get () {
            //         return this._bar;
            //     },
            //     set (value) {
            //         this._bar = value;
            //     }
            // },
        } },

    onLoginBtnClicked: function onLoginBtnClicked() {
        cc.log("xxxxxx" + xxx);
        xxx++;
    },
    onLogoutBtnClicked: function onLogoutBtnClicked() {
        cc.log("bbbbbb");
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();