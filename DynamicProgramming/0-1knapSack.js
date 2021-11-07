let val = [ 60, 100, 120 ];
let wt = [ 10, 20, 30 ];
let W = 50;
let n = val.length;

function max(a,b){ return a > b ? a : b }

// Memoization
function knapSackRecur(w, n){
    if(n == 0 || w == 0){
        return 0
    }

    if(wt[n] > W){
        return knapSackRecur(w, n-1)
    }

    return max(
        val[n-1] + knapSackRecur(w - wt[n-1], n-1),
        knapSackRecur(w, n-1)
    )
}

// Tabulation
function knapSackIttr(){
    
    let K = new Array(n + 1)

    for(let i = 0; i <= n; i++){

        K[i] = new Array(W + 1)

        for(let w = 0; w <= W; w++){

            if(i == 0 || w == 0){
                K[i][w] = 0;
            } else if(wt[i - 1] <= w){
                K[i][w] = max(
                    val[i-1] + K[i-1][w - wt[i-1]],
                    K[i-1][w]
                );
            }else{
                K[i][w] = K[i-1][w];
            }

        }
    }
    return K[n][W]
}

let res1 = knapSackRecur(W, n)
let res2 = knapSackIttr(W, n)

console.log("knapSack",res1);
console.log("RES2",res2);