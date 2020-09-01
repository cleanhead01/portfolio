(function($){


    // 로딩페이지-----------------------------------------
    $(window).load(function(){
        $('.waiting-box').delay(3800).fadeOut()
    })
    
    // 첫번째 미역 클릭하면 about me 오픈이벤트-----------------------------------------
    $('.article1 .seaweed1 > a').on('click', function(){
        $('.about-me').addClass('on')
    })
    // about me 페이지 나가기 버튼
    $('.article1 .close').on('click', function(){
        $('.about-me').removeClass('on')
    })
    // about me 페이지 클릭이벤트
    $('.article1 .career .month').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on')
    })




    // 네번째 미역 클릭하면 contact 오픈 이벤트------------------------------------------
    $('.article3 .seaweed2 > a').on('click', function(){
        $('.contact').addClass('on')
    })
    // contact 페이지 나가기 버튼
    $('.article3 .close').on('click', function(){
        $('.contact').removeClass('on')
    })
    




}) (jQuery)