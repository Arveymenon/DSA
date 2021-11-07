const val = [60, 100, 120];
const wt = [10, 20, 30];
const W = 50;
const n = val.length;

function memoizationKnapSack(w, index){
    if(w <= 0 || index == 0){
        return 0
    }

    if(w < wt[index-1]){
        return memoizationKnapSack(w, index-1)
    }


    return max(
        val[index-1] + memoizationKnapSack(w - wt[index-1], index-1),
        memoizationKnapSack(w, index-1)
    )
}

function tabulationKnapSack() {
    let K = new Array(n + 1)

    for (let i = 0; i <= n; i++) {
        K[i] = new Array(W + 1)

        for (let w = 0; w <= W; w++) {
            if (w == 0 || i == 0) {
                K[i][w] = 0

            } else if (wt[i - 1] <= w) {
                K[i][w] =
                    max(
                        val[i - 1] + K[i - 1][w - wt[i - 1]],
                        K[i - 1][w]
                    )
            } else {
                K[i][w] = K[i - 1][w]
            }
        }
    }
    console.table(K)
    return K[n][W]
}

function max(a, b) { return a > b ? a : b }

// let res = tabulationKnapSack()
let res = memoizationKnapSack(W, n)

console.log(res)