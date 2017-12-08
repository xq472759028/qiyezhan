$(function () {
    let i=0;
    let t;
    $(document).ready(function () {
        $('.main-left-box>a').eq(0).show().siblings('.main-left-box>a').hide();
        showtime();
        $('.main-left-fang>li').hover(function () {
            i=$(this).index();
            show();
            clearInterval(t)
        },function () {
            showtime();
        })
    })
    function showtime() {
        t=setInterval(function () {
            show();
            i++;
            if(i==4){
                i=0;
            }
        },2000)
    }
    function show() {
        $(".main-left-box>a").eq(i).fadeIn(300).siblings(".main-left-box>a").fadeOut(300);
    }
})