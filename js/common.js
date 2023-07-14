$(function(){
    $('.header').load('../inc/header.html')
    $('.header2').load('../inc/header2.html')
    $('.footer').load('../inc/footer.html')

    // best 사진 슬라이드
    var swiper = new Swiper(".bestSwiper", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        speed : 1000,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {   // 버튼
            nextEl: ".best_next",
            prevEl: ".best_pre",
        },
        breakpoints: {
        1920: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        375: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
    });

    $('.best_pre').click(function(){
        $('.best_next').removeClass('active')
        $(this).addClass('active')
    })

    $('.best_next').click(function(){
        $('.best_pre').removeClass('active')
        $(this).addClass('active')
    })


    // 광고
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
            if ($(this).scrollTop() > 200) {
                $('.sideMenu').addClass('fixed')
            } else {
                $('.sideMenu').removeClass('fixed')
            }
    })
})