function back2lastdoc (href){
    if (history.length > 1) window.history.go(-1);
    else window.location.href = "https://iamyukino.github.io/rec/" + href + "/";
}
function loadmd (name){
    let modulesPath = "../../index/wp-content/rec/live2d/models/"
	let modelNames = [name]
	loadModel(modulesPath, modelNames);
}
function copy_code(){
    live2d-source.select();
    document.execCommand("copy")
}
function loading_live2d_before() {
    document.getElementById("live2d").style.backgroundImage="none";
    console.log ('live2d canvas update completed.')
}
