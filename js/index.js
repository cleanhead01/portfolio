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
        $('.article1 .img-box .window-b .fish').addClass('on')
    })

    // 마우스를 따라다니는 html의 간단한 풀이방법
    // $(window).mousemove(function(e){
    //     var mouseX = e.pageX;
    //     var mouseY = e.pageY;

    //     $('.cursor').show().css({
    //         left: mouseX+'px',
    //         top: mouseY+'px',
    //         transition: 'all 0.1s'
    //     })
    // })


    // 마우스를 따라다니는 방울의 모든 함수 아직 완벽 분석이 안됐음
    var mousePos = {};
        
    function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function(e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
    });

    $(window).mouseleave(function(e) {
        mousePos.x = -1;
        mousePos.y = -1;
    });

    var draw = setInterval(function(){
        if(mousePos.x > 0 && mousePos.y > 0){

            var range = 15;

            // 랜덤으로 색을 불러내서 변수에 담기
            // var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","  +getRandomInt(0,255)+");";
            // 하늘색으로 지정해서 변수에 담기
            var color = "background: rgb(135,206,235);";


            var sizeInt = getRandomInt(5, 20);
            // 물방을의 사이즈를 5 ~ 20사이의 px값을 랜덤으로 불러내기
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

            var style = left+top+color+size;
            $("<div class='bubble' style='" + style + "'></div>").appendTo('.magic').one  ("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function (){$(this).remove();}); 
        }
    }, 50);


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


    // 개복치 호버했을 때 멘트 나타나고 사라지기
    $('.article1 .img-box .window-b .fish').hover(
        function(){
        $(this).find('p').stop().animate({
            opacity: '1'}, 300)
        },
        function(){
        $(this).find('p').stop().animate({
            opacity: '0'}, 300)
        }
    )


    

    // 섹션별로 이동하는 가로스크롤 휠 이벤트
    var secIndex;
    $('.float').on('mousewheel', function(e, wh){
        if (wh > 0) {
            secIndex = $(this).prev().index()
            if (secIndex < 0) {
                secindex = 0
                // 게임시작 페이지에서 휠을 위로 굴리면 재도전으로 넘어가지않게
            } else if (secIndex === 0) {
                secIndex = 1
                // 게임시작을 누르고 첫 페이지에서 휠을 위로 굴리면 게임시작페이지로 넘어가지 않게
            }
        } else if (wh < 0) {
            secIndex = $(this).next().index()
            if (secIndex < 0) {
                secIndex = 5
                // 재도전페이지에서 휠을 밑으로 굴렸을 때 게임시작으로 넘어가지 않게
            } else if (secIndex === 1) {
                secIndex = 0
                // 게임시작을 누르지 않고 휠을 내렸을 때 넘어가지 않게
            }
        } 
        // else if (wh = 0) {
        //     secIndex = $(this).next().index()
        //     if (secIndex = 1) {
        //         secIndex = 0
        //     }
        // }
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



    // 재도전 누르면 개복치가 다시 on이 빠지면서 맨처음으로
    $('.article4 .return .retu').on('click', function(){
        $('.article1 .img-box .window-b .fish').removeClass('on')
    })




}) (jQuery)