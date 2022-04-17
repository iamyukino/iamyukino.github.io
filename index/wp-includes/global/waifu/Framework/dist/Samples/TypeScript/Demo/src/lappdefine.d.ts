/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { LogLevel } from '@framework/live2dcubismframework';
/**
 * Sample Appで使用する定数
 */
export declare const CanvasSize: {
    width: number;
    height: number;
} | 'auto';
export declare const ViewScale = 2;
export declare const ViewMaxScale = 4;
export declare const ViewMinScale = 0.4;
export declare const ViewLogicalLeft = -1;
export declare const ViewLogicalRight = 1;
export declare const ViewLogicalBottom = -1;
export declare const ViewLogicalTop = 1;
export declare const ViewLogicalMaxLeft = -2;
export declare const ViewLogicalMaxRight = 2;
export declare const ViewLogicalMaxBottom = -2;
export declare const ViewLogicalMaxTop = 2;
declare class ResourceConfig {
    resourcesPath: string;
    modelNames: string[];
    modelSize: number;
    canvasId: string;
    x_scale: number;
    y_scale: number;
    model_scale: number;
    constructor();
    setResourcesPath(path: string): void;
    setCanvasId(canvasId: string): void;
    setModelScale(scale: number): void;
    getModelScale(): number;
    setModelNames(models: string[]): void;
    setModelSize(): void;
    getResourcesPath(): string;
    getModelNames(): string[];
    getModelSize(): number;
    getCanvasId(): string;
    setXscale(scale: number): void;
    setYscale(scale: number): void;
    getXscale(): number;
    getYscale(): number;
}
export declare const resourcesConfig: ResourceConfig;
export declare const BackImageName = "";
export declare const GearImageName = "";
export declare const PowerImageName = "";
export declare const MotionGroupIdle = "Idle";
export declare const MotionGroupTapBody = "TapBody";
export declare const HitAreaNameHead = "Head";
export declare const HitAreaNameBody = "Body";
export declare const PriorityNone = 0;
export declare const PriorityIdle = 1;
export declare const PriorityNormal = 2;
export declare const PriorityForce = 3;
export declare const DebugLogEnable = true;
export declare const DebugTouchLogEnable = false;
export declare const CubismLoggingLevel: LogLevel;
export declare const RenderTargetWidth = 1900;
export declare const RenderTargetHeight = 1000;
export {};
//# sourceMappingURL=lappdefine.d.ts.map