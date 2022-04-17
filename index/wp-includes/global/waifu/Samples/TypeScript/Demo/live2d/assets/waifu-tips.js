String.prototype.render = function (context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return this.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {  
            return word.replace('\\', '');
        }

        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;

        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
};


//live2dLoader对象
var loader = live2dLoader;
var re = /x/;
console.log(re);
re.toString = function() {
    showMessage('你不可以打开<span style="color:#66AAFF;font-weight:bold;">乃梨</span>的工作台!', 5000, true);
    return '';
};

$(document).on('copy', function (){
    showMessage('<span style="color:#66AAFF;font-weight:bold;">乃梨</span>把内容记好啦，等你ctrl+V！', 5000, true);
});

$('.waifu-tool .fui-home').click(function (){
   //返回主页
    window.location = window.location.protocol+'//'+window.location.hostname+'/'
});

$('.waifu-tool .fui-eye').click(function () {
    //加载其他mod
    showMessage('请稍等，<span style="color:#66AAFF;font-weight:bold;">乃梨</span>马上就来~~~',1000, true);
    loadOtherModel();
});

$('.waifu-tool .fui-user').click(function () {
    //加载随机mod
    showMessage('请稍等，<span style="color:#66AAFF;font-weight:bold;">乃梨</span>马上就来~~~',1000, true);
    loadRandModel();
});

$('.waifu-tool .fui-info-circle').click(function (){
    //window.open('https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02');
    window.open('https://www.live2d.com/download/cubism-sdk/');
});

$('.waifu-tool .fui-cross').click(function (){
    sessionStorage.setItem('waifu-dsiplay', 'none');
    showMessage('希望有一天，你也能像<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>一样相爱！', 4000, true);
    window.setTimeout(function() {$('.waifu').hide();}, 1300);
});

$('.waifu-tool .fui-chat').click(function (){
    showHitokoto();
});

$('.waifu-tool .fui-photo').click(function (){
    showMessage('咔嚓~<span style="color:#66AAFF;font-weight:bold;">乃梨</span>与<span style="color:#FF66AA;font-weight:bold;">雨宫</span>陷入了记忆中！', 5000, true);
    html2canvas(document.body, {
        onrendered: (canvas) => {
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = document.title + ".png";
            a.click();
        }
    })
    
});

(function (){
    var text;
    var SiteIndexUrl = window.location.protocol+'//'+window.location.hostname+'/';  // 自动获取主页
    
    if (window.location.href == SiteIndexUrl) {      // 如果是主页
        var now = (new Date()).getHours();
        if (now > 23 || now <= 5) {
            text = '<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>已经睡啦！告诉你个秘密，<span style="color:#FF66AA;font-weight:bold;">雨宫</span>是<span style="color:#66AAFF;font-weight:bold;">乃梨</span>的氧气哦~';
        } else if (now > 5 && now <= 8) {
            text = '早上好！<span style="color:#66AAFF;font-weight:bold;">乃梨</span>主人还在睡觉呢！';
        } else if (now > 8 && now <= 11) {
            text = '上午好！要像<span style="color:#FF66AA;font-weight:bold;">雨宫</span>一样勤勤劳劳的！';
        } else if (now > 11 && now <= 13) {
            text = '中午了，快和<span style="color:#66AAFF;font-weight:bold;">乃梨</span><span style="color:#FF66AA;font-weight:bold;">雨宫</span>她们吃午饭吧！';
        } else if (now > 13 && now <= 17) {
            text = '午后啦，同<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>一起加油干活吧！';
        } else if (now > 17 && now <= 19) {
            text = '傍晚啦~<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>在回家享受晚餐呢！';
        } else if (now > 19 && now <= 21) {
            text = '晚上好，<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>的休闲时间到啦！';
        } else if (now > 21 && now <= 23) {
            text = '<span style="color:#66AAFF;font-weight:bold;">乃梨</span>我正在监督<span style="color:#FF66AA;font-weight:bold;">雨宫</span>睡觉呢！';
        } else {
            text = '嗨~ 快来逗我玩吧！';
        }
    } else {
        if(document.referrer !== ''){
            var referrer = document.createElement('a');
            referrer.href = document.referrer;
            var domain = referrer.hostname.split('.')[1];
            if (window.location.hostname == referrer.hostname) {
                text = '欢迎来到<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            } else if (domain == 'baidu') {
                text = 'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
            } else if (domain == 'so') {
                text = 'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
            } else if (domain == 'google') {
                text = 'Hello! 来自 谷歌搜索 的朋友<br>欢迎来到<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            } else {
                text = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友';
            }
        } else {
            text = '欢迎来到<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
        }
    }
    showMessage(text, 6000);
})();

// window.hitokotoTimer = window.setInterval(showHitokoto,30000);
/* 检测用户活动状态，并在空闲时 定时显示一言 */
var getActed = false;
window.hitokotoTimer = 0;
var hitokotoInterval = false;

$(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
setInterval(function() { if (!getActed) ifActed(); else elseActed(); }, 1000);

function ifActed() {
    if (!hitokotoInterval) {
        hitokotoInterval = true;
        hitokotoTimer = window.setInterval(showHitokoto, 30000);
    }
}

function elseActed() {
    getActed = hitokotoInterval = false;
    window.clearInterval(hitokotoTimer);
}

function showHitokoto(){
	/* 增加 hitokoto.cn API */
    $.getJSON('https://v1.hitokoto.cn', function(result){
        var text = '<span style="color:#66AAFF;font-weight:bold;">乃梨</span>和<span style="color:#FF66AA;font-weight:bold;">雨宫</span>感谢<span style="font-weight:bold;">{creator}</span>网友的句子~';
        text = text.render({source: result.from, creator: result.creator});
        showMessage(result.hitokoto, 5000);
        window.setTimeout(function() {showMessage(text, 3000);}, 5000);
    });
}

function showMessage(text, timeout, flag){
    if(flag || sessionStorage.getItem('waifu-text') === '' || sessionStorage.getItem('waifu-text') === null){
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        if(flag) sessionStorage.setItem('waifu-text', text);
        
        $('.waifu-tips').stop();
        $('.waifu-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout){
    $('.waifu-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('waifu-text')}, timeout);
    $('.waifu-tips').delay(timeout).fadeTo(200, 0);
}

/**
 * 
 * @param {} waifuPath 存放所有live2d模型的目录 url
 * @param {} waifuTipsPath waifu_tips.json文件的 url
 * @param {数组} waifuNames 存放所有看板娘的名字
 */

function initModel(waifuPath,waifuNames,waifuTipsPath){
    
    if (waifuPath === undefined) {
        console.log("你没有输入那些看板娘们的地址，帮不了你！")
        return
    }
    if (waifuNames === undefined) {
        console.log("你连你二次元老婆的名字都不说，人家怎么帮你找嘛~~")
        return
    }
    loadModel(waifuPath, waifuNames);

    if (waifuTipsPath != undefined) {
        $.ajax({
            cache: true,
            url: waifuTipsPath,
            dataType: "json",
            success: function (result) {
                $.each(result.mouseover, function (index, tips) {
                    $(document).on("mouseover", tips.selector, function () {
                        var text = tips.text;
                        if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                        text = text.render({ text: $(this).text() });
                        showMessage(text, 3000);
                    });
                });
                $.each(result.click, function (index, tips) {
                    $(document).on("click", tips.selector, function () {
                        var text = tips.text;
                        if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                        text = text.render({ text: $(this).text() });
                        showMessage(text, 3000, true);
                    });
                });
                $.each(result.seasons, function (index, tips) {
                    var now = new Date();
                    var after = tips.date.split('-')[0];
                    var before = tips.date.split('-')[1] || after;
                
                    if ((after.split('/')[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split('/')[0]) &&
                        (after.split('/')[1] <= now.getDate() && now.getDate() <= before.split('/')[1])) {
                        var text = tips.text;
                        if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                        text = text.render({ year: now.getFullYear() });
                        showMessage(text, 6000, true);
                    }
                });
            }
        });
    }


}

function loadModel(resourcePath, modelNames){
    live2dLoader.resourcesConfig.setResourcesPath(resourcePath)
    live2dLoader.resourcesConfig.setModelNames(modelNames)
    live2dLoader.start();
}

function loadRandModel() {
    //随机加载mod
    live2dLoader.changeScene(-1);
}

function loadOtherModel() {
    live2dLoader.changeScene(0);
}