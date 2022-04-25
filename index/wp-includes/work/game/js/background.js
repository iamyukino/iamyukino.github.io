  const html = document.querySelector('html');
  const fullScreenBtn = document.getElementById('fullscreen');
  var bFullScreen = false;
  
  function exitHandler() {
    document.getElementById('fullscreen').innerText = 
      document.fullscreenElement || document.webkitFullscreenElement ||
      document.mozFullScreenElement || document.msFullscreenElement ?
      "退出全屏" : "全屏显示";
  }

  document.addEventListener('fullscreenchange', exitHandler);
  document.addEventListener('webkitfullscreenchange', exitHandler);
  document.addEventListener('mozfullscreenchange', exitHandler);
  document.addEventListener('MSFullscreenChange', exitHandler);

  fullScreenBtn.onclick = () => {
    if ( document.fullscreenElement || document.webkitFullscreenElement ||
      document.mozFullScreenElement || document.msFullscreenElement
    ){
        if(document.exitFullscreen) document.exitFullscreen().then();
        else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
    } else {
        if (document.body.webkitRequestFullScreen) document.body.webkitRequestFullScreen();
        else if (document.body.mozRequestFullScreen) document.body.mozRequestFullScreen();
        else if (document.body.msRequestFullscreen) document.body.msRequestFullscreen()
        else if (document.body.requestFullScreen) document.body.requestFullScreen();
    }
  }

  function back2lastdoc (){
    if (history.length > 1) window.history.go(-1);
    else window.location.href = 'https://iamyukino.github.io/';
}