var a = 2
var b = 4

function scope1() {
    var x = 10
    var y = 20
    function regFunction(){
        console.log(this.a,b)
        console.log(x,this.y)
        console.log(this)
    }
    return regFunction
}

function scope2() {
    var x = 10
    var y = 20
    arrowfunction = () => {
        console.log(this.a,b)
        console.log(x,this.y)
        console.log(this)
    }

    return arrowfunction
}


scope1()()
scope2()()
