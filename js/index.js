(function($){

    // 다른 페이지에서 새로고침 하면 0px 페이지로 0.8초에 걸쳐 이동하기
    // $('html, body').animate({   
    //     scrollLeft: '0'
    // }, 800)


    // 로딩페이지-----------------------------------------
    $(window).load(function(){
        $('.waiting-box').delay(3800).fadeOut()
    })

    // 튜토리얼의 게임시작 버튼을 누르면 게임시작페이지로 이동
    $('#header .start').on('click', function(){
        $('body, html').stop().animate({
            scrollLeft: $(window).width()
        }, 500)
        $('.article1 .img-box img:nth-child(2)').addClass('on')
    })


    // 가로스크롤 휠 이벤트

    // 조금씩 이동하는 가로스크롤 이벤트    
    // $('html, body').on('mousewheel',function(e){
	// 	var wheelDelta = e.originalEvent.wheelDelta;
	// 	if(wheelDelta < 0){
    //         $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
	// 	} else {
	// 		$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
	// 	}
    // });


    

    // 섹션별로 이동하는 가로스크롤 휠 이벤트
    var secIndex;
    $('.float').on('mousewheel', function(e, wh){
        if (wh > 0) {
            secIndex = $(this).prev().index()
            if (secIndex < 0) {
                secindex = 0
            }
        } else if (wh < 0) {
            secIndex = $(this).next().index()
            if (secIndex < 0) {
                secIndex = 5
            }
        }
        $('html, body').stop().animate({
            scrollLeft : secIndex * $(window).width()
        }, 1000)
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