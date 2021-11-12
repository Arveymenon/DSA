var arr = [ 5, 12, 11, 13, 4, 6, 7 ];

function heapify(arr, n, i) {
    if(!n)
        n = arr.length
    let largest = i,
        l = (2 * i) + 1,
        r = (2 * i) + 2

    if(l < n && arr[largest] < arr[l])
        largest = l

    if(r < n && arr[largest] < arr[r])
        largest = r

    if(largest != i){
        arr[i] = [arr[largest], arr[largest] = arr[i]][0]
        heapify(arr, false, largest)
    }
}

var arr = [ 5, 12, 11, 13, 4, 6, 7 ];
var n = arr.length;

// Build heap (rearrange array)
for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

console.log(arr)
    
// One by one extract an element from heap
for (var i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
}

console.log(arr)