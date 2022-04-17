"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderTargetHeight = exports.RenderTargetWidth = exports.CubismLoggingLevel = exports.DebugTouchLogEnable = exports.DebugLogEnable = exports.PriorityForce = exports.PriorityNormal = exports.PriorityIdle = exports.PriorityNone = exports.HitAreaNameBody = exports.HitAreaNameHead = exports.MotionGroupTapBody = exports.MotionGroupIdle = exports.PowerImageName = exports.GearImageName = exports.BackImageName = exports.resourcesConfig = exports.ViewLogicalMaxTop = exports.ViewLogicalMaxBottom = exports.ViewLogicalMaxRight = exports.ViewLogicalMaxLeft = exports.ViewLogicalTop = exports.ViewLogicalBottom = exports.ViewLogicalRight = exports.ViewLogicalLeft = exports.ViewMinScale = exports.ViewMaxScale = exports.ViewScale = exports.CanvasSize = void 0;
var live2dcubismframework_1 = require("@framework/live2dcubismframework");
/**
 * Sample Appで使用する定数
 */
// Canvas width and height pixel values, or dynamic screen size ('auto').
exports.CanvasSize = 'auto';
// 画面
exports.ViewScale = 2;
exports.ViewMaxScale = 4.0;
exports.ViewMinScale = 0.4;
exports.ViewLogicalLeft = -1.0;
exports.ViewLogicalRight = 1.0;
exports.ViewLogicalBottom = -1.0;
exports.ViewLogicalTop = 1.0;
exports.ViewLogicalMaxLeft = -2.0;
exports.ViewLogicalMaxRight = 2.0;
exports.ViewLogicalMaxBottom = -2.0;
exports.ViewLogicalMaxTop = 2.0;
var ResourceConfig = /** @class */ (function () {
    function ResourceConfig() {
        //显示live2d模型的canvas的id
        this.canvasId = 'live2d';
        this.x_scale = 2;
        this.y_scale = 1;
        //模型的缩放比例
        this.model_scale = 1;
        this.resourcesPath = '../../Resources/';
        this.modelNames = ['mia1', 'live2d_free1.1', 'Orangesweet2.1'];
        this.modelSize = this.modelNames.length;
    }
    ResourceConfig.prototype.setResourcesPath = function (path) {
        this.resourcesPath = path;
    };
    ResourceConfig.prototype.setCanvasId = function (canvasId) {
        this.canvasId = canvasId;
    };
    ResourceConfig.prototype.setModelScale = function (scale) {
        this.model_scale = scale;
    };
    ResourceConfig.prototype.getModelScale = function () {
        return this.model_scale;
    };
    ResourceConfig.prototype.setModelNames = function (models) {
        this.modelNames = models;
        this.setModelSize();
    };
    ResourceConfig.prototype.setModelSize = function () {
        this.modelSize = this.modelNames.length;
    };
    ResourceConfig.prototype.getResourcesPath = function () {
        return this.resourcesPath;
    };
    ResourceConfig.prototype.getModelNames = function () {
        return this.modelNames;
    };
    ResourceConfig.prototype.getModelSize = function () { return this.modelSize; };
    ResourceConfig.prototype.getCanvasId = function () {
        return this.canvasId;
    };
    ResourceConfig.prototype.setXscale = function (scale) { this.x_scale = scale; };
    ResourceConfig.prototype.setYscale = function (scale) { this.y_scale = scale; };
    ResourceConfig.prototype.getXscale = function () { return this.x_scale; };
    ResourceConfig.prototype.getYscale = function () { return this.y_scale; };
    return ResourceConfig;
}());
exports.resourcesConfig = new ResourceConfig();
// 相対パス
//export const ResourcesPath = '../../Resources/';
// モデルの後ろにある背景の画像ファイル
exports.BackImageName = '';
// 歯車
exports.GearImageName = '';
// 終了ボタン
exports.PowerImageName = '';
// 外部定義ファイル（json）と合わせる
exports.MotionGroupIdle = 'Idle'; // アイドリング
exports.MotionGroupTapBody = 'TapBody'; // 体をタップしたとき
// 外部定義ファイル（json）と合わせる
exports.HitAreaNameHead = 'Head';
exports.HitAreaNameBody = 'Body';
// モーションの優先度定数
exports.PriorityNone = 0;
exports.PriorityIdle = 1;
exports.PriorityNormal = 2;
exports.PriorityForce = 3;
// デバッグ用ログの表示オプション
exports.DebugLogEnable = true;
exports.DebugTouchLogEnable = false;
// Frameworkから出力するログのレベル設定
exports.CubismLoggingLevel = live2dcubismframework_1.LogLevel.LogLevel_Verbose;
// デフォルトのレンダーターゲットサイズ
exports.RenderTargetWidth = 1900;
exports.RenderTargetHeight = 1000;
//# sourceMappingURL=lappdefine.js.map