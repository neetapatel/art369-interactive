$(function () {

    // determine scroll-height and divide 
    // need to solve why scroll height is seemingly longer than it is? first letter sticks longer.
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    var count = 44;
    var factor = height / (count+3);
    
    // on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var letterforms = document.getElementsByClassName("letter");
        var o = 1;

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