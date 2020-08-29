(function($){


    // 로딩페이지-----------------------------------------
    $(window).load(function(){
        $('.waiting-box').delay(3800).fadeOut()
    })
    
    // 첫번째 미역 클릭하면 about me 오픈이벤트
    $('.article1 .seaweed1 > a').on('click', function(){
        $('.about-me').addClass('on')
    })

    $('.article1 .close').on('click', function(){
        $('.about-me').removeClass('on')
    })







    // about me 페이지 클릭이벤트
    $('.article1 .career .month').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on')
    })




}) (jQuery)