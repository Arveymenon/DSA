function Node(name, frequency, left = null, right = null){
    this.name = name
    this.frequency =frequency

    this.left = left
    this.right = right
}

function getHuffmanTree(input){

    while(input.length > 1){
        input.sort((a,b)=> a.frequency - b.frequency)

        let x = input.shift()
        let y = input.shift()

        new_node = new Node("-", x.frequency + y.frequency, x, y)
        input.push(new_node)
        var root = new_node  
    }
    
    printHuffManCode(root,"")
}

function printHuffManCode(root,code){
    if(!root.left && !root.right){
        console.log(root.name, ":" , code)
    }

    if(root.left)
        printHuffManCode(root.left, code + "0")
    if(root.right)
        printHuffManCode(root.right, code +"1")
}


let input = [
    new Node('a', 5),
    new Node('b', 9),
    new Node('c', 12),
    new Node('d', 13),
    new Node('e', 16),
    new Node('f', 45),
]

getHuffmanTree(input)