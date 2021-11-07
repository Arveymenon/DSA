function Node(name, frequency, left = null, right = null){
    this.name = name
    this.frequency =frequency

    this.left = left
    this.right = right
}

class Queue{
    constructor(){
        this.nodes = []
    }

    isEmpty(){
        return this.nodes.length === 0
    }
    
    isSizeOne(){
        return this.nodes.length == 1
    }

    getNodes(){
        return this.nodes
    }

    enqueue(node){
        this.nodes.push(node)
    }

    dequeue(){
        return this.nodes.shift()
    }
}

function createHuffmanCode(input_nodes){
    let q1 = new Queue()
    let q2 = new Queue()
    
    for(let node of input_nodes)
        q1.enqueue(node)

    while(!
        (q1.isEmpty() && q2.isSizeOne())
    ){

        let left = findMin(q1,q2)
        let right = findMin(q1,q2)

        let root = new Node("-", left.frequency + right.frequency, left, right)
        
        q2.enqueue(root)
    }

    return q2.dequeue()
}

function findMin(q1,q2){

    if(q2.isEmpty()){
        return q1.dequeue()
    }

    if(q1.isEmpty()){
        return q2.dequeue()
    }
        
    if(q1.nodes[0].frequency < q2.nodes[0].frequency)
        return q1.dequeue()

    return q2.dequeue()

}

function printHuffManCode(node, c = ""){

    if(node.left)
        printHuffManCode(node.left,c+"0")
    if(node.right)
        printHuffManCode(node.right,c+"1")

    if(node.name != "-")
        console.log(node.name, ":", c)
    
}



let nodes = [
    new Node('a', 5),
    new Node('b', 9),
    new Node('c', 12),
    new Node('d', 13),
    new Node('e', 16),
    new Node('f', 45),
]

let root = createHuffmanCode(nodes)
printHuffManCode(root)