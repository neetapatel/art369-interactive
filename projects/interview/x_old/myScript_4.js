// after document loads
$(function () {

    // determine scroll-height and divide 
    // need to solve why scroll height is seemingly longer than it is? first letter sticks longer.
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    var count = 44;
    // factor is a slice of the scroll-height
    var factor = height / (count+3); // lmao what is this int ?
    
    // vertical positioning of buttons
    var btnFactor = html.scrollHeight / 45;
    $(".btn-1").css({top: btnFactor*2});
    $(".btn-2").css({top: btnFactor*4});
    $(".btn-3").css({top: btnFactor*6});
    $(".btn-4").css({top: btnFactor*8});
    $(".btn-5").css({top: btnFactor*10});
    $(".btn-6").css({top: btnFactor*12});
    $(".btn-7").css({top: btnFactor*14});
    $(".btn-8").css({top: btnFactor*16});
    $(".btn-9").css({top: btnFactor*18});
    $(".btn-10").css({top: btnFactor*20});
    $(".btn-11").css({top: btnFactor*22});
    $(".btn-12").css({top: btnFactor*24});
    $(".btn-13").css({top: btnFactor*26});
    $(".btn-14").css({top: btnFactor*28});
    $(".btn-15").css({top: btnFactor*30});
    $(".btn-16").css({top: btnFactor*32});
    $(".btn-17").css({top: btnFactor*34.5});
    $(".btn-18").css({top: btnFactor*37});
    $(".btn-19").css({top: btnFactor*40});
    $(".btn-20").css({top: btnFactor*42.5});
    $(".btn-21").css({top: btnFactor*45});
    $(".btn-22").css({top: btnFactor*47.5});

    // makes buttons visible after positioning
    $(".btn-0").css({opacity: 0.7});
    $(".btn-1").css({opacity: 0.7});
    $(".btn-2").css({opacity: 0.7});
    $(".btn-3").css({opacity: 0.7});
    $(".btn-4").css({opacity: 0.7});
    $(".btn-5").css({opacity: 0.7});
    $(".btn-6").css({opacity: 0.7});
    $(".btn-7").css({opacity: 0.7});
    $(".btn-8").css({opacity: 0.7});
    $(".btn-9").css({opacity: 0.7});
    $(".btn-10").css({opacity: 0.7});
    $(".btn-11").css({opacity: 0.7});
    $(".btn-12").css({opacity: 0.7});
    $(".btn-13").css({opacity: 0.7});
    $(".btn-14").css({opacity: 0.7});
    $(".btn-15").css({opacity: 0.7});
    $(".btn-16").css({opacity: 0.7});
    $(".btn-17").css({opacity: 0.7});
    $(".btn-18").css({opacity: 0.7});
    $(".btn-19").css({opacity: 0.7});
    $(".btn-20").css({opacity: 0.7});
    $(".btn-21").css({opacity: 0.7});
    $(".btn-22").css({opacity: 0.7});

    // on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var letterforms = document.getElementsByClassName("letter");
        var o = 0.7;

        for (let i = 2; i <= count+3; i++) {
            // start-of-scroll case
            if (scroll < factor) {
                letterforms[1].style.opacity = o;
                for (let j = 1; j <= count; j++) {
                    letterforms[j].style.opacity = 0;
                }
            }
            if (scroll >= factor*(i-1) && scroll < factor*i) {
                letterforms[i-1].style.opacity = o;
                for (let j = 0; j <= count; j++) {
                    if (j != i-1) {
                        letterforms[j].style.opacity = 0;
                    }
                }               
            }
        }




    });
});