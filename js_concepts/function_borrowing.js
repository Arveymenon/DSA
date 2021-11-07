a = 3
b = 4

// let b1 = {
//     a: 10,
//     b: 20,
//     c: ()=>{
//         a = 100
//         b = 200
//         c1 = () => {
//             console.log(this.a+" + "+this.b+" = "+ (this.a + this.b))
//         }
//         return c1
//     }
// }

function b1() {
    // a = 10
    // b = 20
    c = ()=>{
        console.log(this.a+" + "+this.b+" = "+ (this.a + this.b))
    }
    return c
}

function b2() {
    a = 30
    b = 40
    // b1().call(this)
    c1 = b1().bind(null)
    c1()
}

b2()
// b1().call(new b2())