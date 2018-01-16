jQuery.fn.fernInputFormat = function(options) {
    var elm = this;
    var formatLeng = options.format.length;

    if(options.type === 'time'){
        elm.keypress(function(e){
            var code = e.keyCode || e.which;
            var excludeCode = [8,37,38,39,40,13,16];
            if(excludeCode.includes(code) === false){
                if((formatLeng-1) < elm.val().length){return false;}
                if(elm.val().length == 2){elm.val(elm.val()+':')}
                if(elm.val().length == 5){elm.val(elm.val()+':')}
            }
        });
    }
};