$(document).ready(function () {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });


    // vegas slide
    $(function () {
        $('.header').vegas({
            init: function (globalSettings) {
                console.log("Init");
            },
            play: function (index, slideSettings) {
                console.log("Play");
            },
            walk: function (index, slideSettings) {
                console.log("Slide index " + index + " image " + slideSettings.src);
            },
            slides: [{
                    src: "../img/header_bg.png",
                    delay: 3800
                },
                {
                    src: "../img/header_bg2.png",
                    delay: 3800
                },
                {
                    src: "../img/header_bg3.png",
                    delay: 3800
                },
                {
                    src: "../img/header_bg5.png",
                    delay: 3800
                },

            ],
            transition: 'fade'
        })
    })



    // $(".roundstep").hover(function () {
    //     $(this).toggleClass("on");
    // });

    var swiper5 = new Swiper(".mySwiper.roundstep", {
        slidesPerView: 1,
        spaceBetween: 10,
        // allowTouchMove: false,
        // pagination: {
        //     el: ".swiper-pagination.roundstep",
        //     clickable: tru==
        // },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
                allowTouchMove: true,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
                allowTouchMove: false,
            },
        },
    });



    // 유투브 영상 자동 리사이즈
    // $(window).resize(function() {
    //     resizeYoutube();
    // });
    // $(function() {
    //     resizeYoutube();
    // });
    // function resizeYoutube() {
    //     $("iframe").each(function() {
    //         if (/^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src"))) {
    //             $(this).css("width", "100%");
    //             $(this).css("height", Math.ceil(parseInt($(this).css("width")) * 480 / 854) + "px");
    //         }
    //     });
    // }











    //-----------------------------모바일메뉴
    // 모바일메뉴 open/close
    $(".mMenuBt").click(function () {
        $("nav").addClass("open");
        // nav에 open클래스 추가/삭제
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass("open");
        // nav에 open클래스 추가/삭제
    });
    if ($(window).width() < 641) {
        // 모바일용 아코디언 메뉴
        $(".mSnb").hide();
        // .mSnb를 숨기고 시작
        $(".gnbMenu > .title").click(function () {
            $(this).next().slideToggle(300);
            //this 다음 요소를 슬라이드다운
            $(".gnbMenu > .title").not(this).next().slideUp(300);
            return false;
            // a href="#"일때 갈곳이 없으면 무조건 페이지 상단(처음)으로 이동하는데
            // 클릭한 다음 링크기능을 수행못하도록 return false;를 입력
        });
    }

    //-----------------------------스크롤버튼
    $(".scroll span").each(function () {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function () {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 1000);
            $(this).addClass('on');
        });
    });

});



// sec01 pagination 마을 소개 섹션 스슬

var swiper = new Swiper(".mySwiper.village", {
    slidesPerView: 1,
    spaceBetween: 100,
    pagination: {
        el: ".swiper-pagination.village",
        clickable: true,
    },
});


//Thumbs gallery loop swiper
var swiper3 = new Swiper(".thumbSlide", {
    direction: "vertical",
    // loop: true,
    slidesPerView: 1,
    allowTouchMove: false,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            allowTouchMove: false,
            // direction: "horizontal",
            //   spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            allowTouchMove: false,
            //   spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            allowTouchMove: true,
            //   spaceBetween: 50,
        },
    },
});

var swiper4 = new Swiper(".mainSlide", {
    // loop: true,
    thumbs: {
        swiper: swiper3,
    },
});

// var iw = window.innerWidth;
// if(iw < 641){
//     var swiper2 = new Swiper('.swiper-container .thumbslide'),
//     effect : 'flip'
//     grabcursor : true,
//     loop : true,

// }


//----------------------------------------------------


//섹션 2 탭



$(".tabV ul li").click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
});

//----------------------------------------------------



// //Javascript
// //최초 로드 시 iframe 높이값 비율에 맞게 세팅
// var $videoIframe = document.getElementById('video');
// var responsiveHeight = $videoIframe.offsetWidth * 0.5625;
// $videoIframe.setAttribute('height', responsiveHeight);

// // //브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
// window.addEventListener('resize', function(){
//     responsiveHeight = $videoIframe.offsetWidth * 0.5625;
//     $videoIframe.setAttribute('height', responsiveHeight);
// });


























//----------------------------섹션이동 시 리모콘에 하이라이트
// $(document).scroll(function () {
//     var scrolltop = $(window).scrollTop();
//     $("header, section, footer").each(function () {
//         if (scrolltop >= $(this).offset().top) {
//             $("span[data-id=" + $(this).attr('class') + "]").addClass('on').siblings().removeClass('on');
//         }
//         else if (scrolltop >= $(".section7").offset().top + 130) {
//             $("span[data-id=footer]").addClass('on').siblings().removeClass('on');
//         }
//     });
// });

//이페이지에 적용된 스크롤리모콘은 각영역의 top = $(window).scrollTop()일때를 구현, 미리 켜지는 경우는 따로따로 값을 입력해야한다.
