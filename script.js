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

    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


});

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
    var hsh = location.hash.replace('#', '');
    if ($('.popup-' + hsh).length > 0) {
        popupOpen(hsh);
    } else if ($('div.' + hsh).length > 0) {
        $('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
    }
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
    var act = "touchstart";
}

let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle("active");
        body.classList.toggle("lock");
        html.classList.toggle("lock");
        menuBody.classList.toggle("active");
    });
}


//POPUP
$('.pl').click(function (event) {
    var pl = $(this).attr('href').replace('#', '');
    var v = $(this).data('vid');
    popupOpen(pl, v);
    return false;
});
function popupOpen(pl, v) {
    $('.popup').removeClass('active').hide();
    if (!$('.menu__body').hasClass('active')) {
        //$('body').data('scroll',$(window).scrollTop());
    }
    if (!isMobile.any()) {
        $('html').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
        $('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
    } else {
        setTimeout(function () {
            $('html').addClass('lock');
        }, 300);
    }
    history.pushState('', '', '#' + pl);
    if (v != '' && v != null) {
        $('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    }
    $('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

    if ($('.popup-' + pl).find('.slick-slider').length > 0) {
        $('.popup-' + pl).find('.slick-slider').slick('setPosition');
    }
}
function openPopupById(popup_id) {
    $('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
    $('.popup').removeClass('active').fadeOut(300);
    if (!$('.menu__body').hasClass('active')) {
        if (!isMobile.any()) {
            setTimeout(function () {
                $('body').css({ paddingRight: 0 });
                $('.pdb').css({ paddingRight: 0 });
            }, 200);
            setTimeout(function () {
                $('html').removeClass('lock');
                //$('body,html').scrollTop(parseInt($('body').data('scroll')));
            }, 200);
        } else {
            $('html').removeClass('lock');
            //$('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    }
    $('.popup-video__value').html('');

    history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
    popupClose();
    return false;
});
$('.popup').click(function (e) {
    if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
        popupClose();
        return false;
    }
});
$(document).on('keydown', function (e) {
    if (e.which == 27) {
        popupClose();
    }
});

$('.goto').click(function () {
    var el = $(this).attr('href').replace('#', '');
    var offset = 0;
    $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

    if ($('.menu__body').hasClass('active')) {
        $('.menu__body,.icon-menu').removeClass('active');
        $('html').removeClass('lock');
    }
    return false;
});




//Клик вне области
$(document).on('click touchstart', function (e) {
    if (!$(e.target).is(".select *")) {
        $('.select').removeClass('active');
    };
});



function scrolloptions() {
    var scs = 100;
    var mss = 50;
    var bns = false;
    if (isMobile.any()) {
        scs = 10;
        mss = 1;
        bns = true;
    }
    var opt = {
        cursorcolor: "#fff",
        cursorwidth: "4px",
        background: "",
        autohidemode: true,
        cursoropacitymax: 0.4,
        bouncescroll: bns,
        cursorborderradius: "0px",
        scrollspeed: scs,
        mousescrollstep: mss,
        directionlockdeadzone: 0,
        cursorborder: "0px solid #fff",
    };
    return opt;
}
function scroll() {
    $('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
    if ($('.scroll-body').length > 0) { scroll(); }
}

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

