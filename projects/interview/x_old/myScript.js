$(function () {
    var body = document.body,
    html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    var factor = height / 48;
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < factor) {
            document.getElementById("letter").innerHTML = "ક";
        } 
        if (scroll >= factor) {
            document.getElementById("letter").innerHTML = "ખ";
            document.getElementById("letter").style.opacity = 0;
        } 
        if (scroll >= factor*2) { document.getElementById("letter").innerHTML = "ગ";} 
        if (scroll >= factor*3) { document.getElementById("letter").innerHTML = "ઘ";} 
        if (scroll >= factor*4) { document.getElementById("letter").innerHTML = "ચ";} 
        if (scroll >= factor*5) { document.getElementById("letter").innerHTML = "છ";} 
        if (scroll >= factor*6) { document.getElementById("letter").innerHTML = "જ";} 
        if (scroll >= factor*7) { document.getElementById("letter").innerHTML = "ઝ";} 
        if (scroll >= factor*8) { document.getElementById("letter").innerHTML = "ટ";} 
        if (scroll >= factor*9) { document.getElementById("letter").innerHTML = "ઠ";} 
        if (scroll >= factor*10) { document.getElementById("letter").innerHTML = "ડ";} 
        if (scroll >= factor*11) { document.getElementById("letter").innerHTML = "ઢ";} 
        if (scroll >= factor*12) { document.getElementById("letter").innerHTML = "ણ";} 
        if (scroll >= factor*13) { document.getElementById("letter").innerHTML = "ત";} 
        if (scroll >= factor*14) { document.getElementById("letter").innerHTML = "થ";} 
        if (scroll >= factor*15) { document.getElementById("letter").innerHTML = "દ";} 
        if (scroll >= factor*16) { document.getElementById("letter").innerHTML = "ધ";} 
        if (scroll >= factor*17) { document.getElementById("letter").innerHTML = "ન";} 
        if (scroll >= factor*18) { document.getElementById("letter").innerHTML = "પ";} 
        if (scroll >= factor*19) { document.getElementById("letter").innerHTML = "ફ";} 
        if (scroll >= factor*20) { document.getElementById("letter").innerHTML = "બ";} 
        if (scroll >= factor*21) { document.getElementById("letter").innerHTML = "ભ";} 
        if (scroll >= factor*22) { document.getElementById("letter").innerHTML = "મ";} 
        if (scroll >= factor*23) { document.getElementById("letter").innerHTML = "ય";} 
        if (scroll >= factor*24) { document.getElementById("letter").innerHTML = "ર";} 
        if (scroll >= factor*25) { document.getElementById("letter").innerHTML = "લ";} 
        if (scroll >= factor*26) { document.getElementById("letter").innerHTML = "વ";} 
        if (scroll >= factor*27) { document.getElementById("letter").innerHTML = "શ";} 
        if (scroll >= factor*28) { document.getElementById("letter").innerHTML = "ષ";} 
        if (scroll >= factor*29) { document.getElementById("letter").innerHTML = "સ";} 
        if (scroll >= factor*30) { document.getElementById("letter").innerHTML = "હ";} 
        if (scroll >= factor*31) { document.getElementById("letter").innerHTML = "ળ";} 
        if (scroll >= factor*34) { document.getElementById("letter").innerHTML = "અ";} 
        if (scroll >= factor*35) { document.getElementById("letter").innerHTML = "આ";} 
        if (scroll >= factor*36) { document.getElementById("letter").innerHTML = "ઇ";} 
        if (scroll >= factor*37) { document.getElementById("letter").innerHTML = "ઈ";} 
        if (scroll >= factor*38) { document.getElementById("letter").innerHTML = "ઉ";} 
        if (scroll >= factor*39) { document.getElementById("letter").innerHTML = "ઊ";} 
        if (scroll >= factor*40) { document.getElementById("letter").innerHTML = "એ";} 
        if (scroll >= factor*41) { document.getElementById("letter").innerHTML = "ઐ";} 
        if (scroll >= factor*42) { document.getElementById("letter").innerHTML = "ઓ";} 
        if (scroll >= factor*43) { document.getElementById("letter").innerHTML = "ઔ";} 
        if (scroll >= factor*44) { document.getElementById("letter").innerHTML = "અં";} 
        if (scroll >= factor*45) { document.getElementById("letter").innerHTML = "અઃ";}        
    });

});