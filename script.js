'use strict';

$(document).ready(function () {

    $('#call').click(function (e) { 
        $('.alert__wrapper__call').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
     $('.call').click(function (e) { 
        $('.alert__wrapper__call').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
    $('.phone').click(function (e) { 
$('.alert__wrapper__call').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
    $('.foot__btn').click(function (e) { 
$('.alert__wrapper__call').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
    $('.aboutus-alert').click(function (e) { 
        $('.alert__wrapper__aboutus').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
   
    $('.works-alert').click(function (e) { 
        $('.alert__wrapper__works').css({display : `flex`});
        $("html").css({"overflow":"hidden"});
    });
    $('.aboutus__menu').click(function (e) { 
        console.log('alert')
        $('.wrapper__menu').css({"display" : "flex"});
        $('body').css({"overflow":"hidden"});
        $("html").css({"overflow":"hidden"});
    });
    $('.language__active').click(function (e) { 
        $('.language__items').css({display : `flex`});
        $('.language__items').fadeIn();
     $(document).click( function(e){
    if ( $(e.target).closest('.language__active').length ) {
        return
        
    }
   else{
   
    $('.language__items').fadeOut();
   }
   
});
    });
    $('.btn__close').click(function (e) { 
        console.log('close')
        $('.alert').css({display : `none`});
        $('.wrapper__menu').css({display : `none`});
        $('body').css({"overflow":"scroll"});
        $("html").css({"overflow":"scroll"});
    });
     $('.links1').click(function (e) { 
        $('.wrapper__menu').css({display : `none`});
       $('body').css({"overflow":"hidden"});
        $("html").css({"overflow":"hidden"});
    });
    $('.link').click(function (e) { 
        $('.wrapper__menu').css({display : `none`});
        $('body').css({"overflow":"scroll"});
        $('html').css({"overflow":"scroll"});
    });
   
    $('.menulogo').click(function (e) { 
        $('.wrapper__menu').css({display : `none`});
        $('body').css({"overflow":"scroll"});
        $("html").css({"overflow":"scroll"});
    });

    if(document.documentElement.scroll>1100){
        $('.wrapper__aside').css({display : `none`});
    }


$(window).scroll(function(){
    if ($(window).scrollTop() > 3000) {
        $('.wrapper__aside').css({display : `none`});
    }
    else {
        $('.wrapper__aside').css({display : `flex`});
    };
});

var isResizeble = false;
function isiPhone(){
    return (
        //Пользователь использует iPhone
        (navigator.platform.indexOf("iPhone") != -1)
    );
}

    if($(window).innerWidth() <= 980){
         $(document).scroll(function () {
            var y = $(this).scrollTop();
            var x = $(".jumbotron__content").position();
            if (y>50) {
                $('.aboutus__nav-wrapper').fadeIn().css({"position":"fixed", "background" : "#fff", "z-index" : "200", "width" : "100%"});
                
            } else {
                $('.aboutus__nav-wrapper').css({"position" : "static", "background" : "none"});
            }
        });
        $('a').click(function (e) { 
            if(!isiPhone){
               
                
            }else{
               
                $('.wrapper__menu').css({display : `none`});
                $('body').css({"overflow":"scroll"});
            }
        });
    }

    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    if(isSafari){
        $('.container').css({zoom : '1.2'});
        $('.wrapper__aside').css({height : '100vh'});
    }

});
/*const anchors = document.querySelectorAll('a[href^="#"]');
// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}*/

