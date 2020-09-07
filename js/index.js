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





    
    
    // 두번째 미역 클릭하면 contact 오픈 이벤트------------------------------------------
    $('.article2 .seaweed1 > a').on('click', function(){
        $('.portfolio').addClass('on')
    })
    // portfolio 페이지 나가기 버튼
    $('.article2 .close').on('click', function(){
        $('.portfolio').removeClass('on')
    })
    // portfolio 페이지 메뉴 클릭 이벤트
    $('.portfolio .title li').on('click', function(){
        var num = $(this).index()
        $(this).addClass('on')
        .siblings().removeClass('on')
        $('.portfolio .content ul').eq(num)
        .addClass('on')
        .siblings().removeClass('on')
        
    })




    // 세번째 미역 클릭하면 contact 오픈 이벤트------------------------------------------
    $('.article3 .seaweed1 > a').on('click', function(){
        $('.skills').addClass('on')
    })
    // skills 페이지 나가기 버튼
    $('.article3 .close').on('click', function(){
        $('.skills').removeClass('on')
    })




    // 네번째 미역 클릭하면 contact 오픈 이벤트------------------------------------------
    $('.article3 .seaweed2 > a').on('click', function(){
        $('.contact').addClass('on')
    })
    // contact 페이지 나가기 버튼
    $('.article3 .close').on('click', function(){
        $('.contact').removeClass('on')
    })
    // 이메일 도메인
    $('#mail-choice').on('change', function(){
        $('#mail-choice option:selected').each(function(){
            if ($(this).val() === 'choice') {
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if ($(this).val() === 'self') {
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val( $(this).val() )
                $('#domain').attr('disabled', true)
            }
        })
    })




    




}) (jQuery)