let values = [{ v: 60, w:10 }, { v: 100, w:20 }, { v: 120, w:30 }]
let W = 50

function greedyKnapSack(){
    values = values.sort((a,b)=>{
        return (b.v/b.w) - (a.v/a.w) 
    })

    let knapsack = 0;

    let i = 0
    while(W > 0 && i < values.length){
        if(W - values[i].w > 0){
            knapsack += values[i].v
            W -= values[i].w
        } else {
            let ratio = W/values[i].w

            knapsack += values[i].v*ratio
            W -= values[i].w
        }
        i++
    }

    return knapsack
}

console.log(greedyKnapSack())

// 40, 20, 