var CIYANG
(function($){  
    $.fn.snow = function(options){  
    var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px', 'cursor': 'pointer'}).html('❄'),  
    documentHeight  = $(document).height(),  
    documentWidth   = $(document).width(),  
    defaults = {  
        minSize     : 10,  
        maxSize     : 20,  
        newOn       : 1000,  
        flakeColor  : "#69cfffa1" 
    },  
    options = $.extend({}, defaults, options);  
    var interval= setInterval( function(){  
    var startPositionLeft = Math.random() * documentWidth - 100,  
    startOpacity = 0.5 + Math.random(),  
    sizeFlake = options.minSize + Math.random() * options.maxSize,  
    endPositionTop = documentHeight - 200,  
    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,  
    durationFall = documentHeight * 10 + Math.random() * 5000;  
    $flake.clone().appendTo('body').css({  
        left: startPositionLeft,  
        opacity: startOpacity,  
        'font-size': sizeFlake,  
        color: options.flakeColor  
    }).animate({  
        top: endPositionTop,  
        left: endPositionLeft,  
        opacity: 0.3
    },durationFall,'linear',function(){  
        $(this).remove()  
    });  
    }, options.newOn);  
	CIYANG = interval;
    };  
})(jQuery);  
$(function(){  
    $.fn.snow({   
        minSize: 10, /* 定义雪花最小尺寸 */  
        maxSize: 50,/* 定义雪花最大尺寸 */  
        newOn: 500  /* 定义密集程度，数字越小越密集 */  
    });  
});  