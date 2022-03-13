$('#myRange').change(function() {

    var size = $(this).val();
    var gradient = "conic-gradient(hsl(" + size + ", 100%, 50%), hsl(" + (size+45) + ", 100%, 50%), hsl(" + (size+45*2) + ", 100%, 50%), hsl(" + (size+45*3) + ", 100%, 50%), hsl(" + (size+45*4) + ", 100%, 50%), hsl(" + (size+45*5) + ", 100%, 50%), hsl(" + (size+45*6) + ", 100%, 50%), hsl(" + (size+45*7) + ", 100%, 50%), hsl(" + (size) + ", 100%, 50%))";
    $('body').css('background', gradient);

});