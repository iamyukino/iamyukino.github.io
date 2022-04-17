//live2dLoader对象
var loader = live2dLoader;

/**
 * 
 * @param {} waifuPath 存放所有live2d模型的目录 url
 * @param {} waifuTipsPath waifu_tips.json文件的 url
 * @param {数组} waifuNames 存放所有看板娘的名字
 */

function loadModel(resourcePath, modelNames){
    live2dLoader.resourcesConfig.setResourcesPath(resourcePath)
    live2dLoader.resourcesConfig.setModelNames(modelNames)
    live2dLoader.start();
}