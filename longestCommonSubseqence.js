const str1 = "AGGTAB"
const str2 = "GXTXAYB"

function LCSMemoization(X, Y, i,j){
    if(i < 0 || j < 0)
        return 0

    if(X[i] == Y[j])
        return 1 + LCSMemoization(X, Y, i-1, j-1)
    else
        return Math.max(LCSMemoization(X, Y, i, j-1), LCSMemoization(X, Y, i-1, j))
}

let resMem = LCSMemoization(str1, str2, str1.length-1, str2.length-1)
console.log(resMem)

function LCSTabulation(){

    max_len = 0

    for(let i = 0; i < str1.length; i++){
        curr_len = 0

        for(let j of str2){
            if(str1[i] == j){
                curr_len+=1
                max_len = Math.max(curr_len, max_len)
                i++
            }

        }
    }
    return max_len
}

let resTab = LCSTabulation();
console.log(resTab)