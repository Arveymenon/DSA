var maxArea = function (num) {
    var i = 1;
    var op = '';

    while (Math.floor(num / i) > 0) {
        let temp_num = num/i

        let val = Math.floor(temp_num % 10);
        let pos = val * (i);

        var c1 = '',
            c2 = '',
            c3 = ''

        if (pos < 10) {
            c1 = 'I'; c2 = 'V'; c3 = 'X'
        } else if (pos < 100) {
            c1 = 'X'; c2 = 'L'; c3 = 'C'
        } else if (pos < 1000) {
            c1 = 'C'; c2 = 'D'; c3 = 'M'
        } else {
            num = pos/i;
            let j = 0
            while(j < pos/i){
                op = 'M'+op
                j = j+1
            }
        }

        if(val < 4){
            while (val > 0){op = c1+op; val = val-1}

        } else if(val == 4){
            op = c1 + c2 + op            

        } else if(val < 9){
            val = val - 5;
            while (val > 0){op = c1+op; val = val-1}
            op = c2 + op;

        }else{
            op = c1 +c3 + op;
        }
        
        i = i * 10
    }

    return op
};

val = maxArea(1994)
console.log(val)