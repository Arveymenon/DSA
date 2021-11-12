function Node (value, next) {
    this.value = value
    this.next = next
}

module.exports.Node = Node

function LinkedList (length = 10) {
    let pre = false;
    
    for(let i = 0; i < length; i++){
        let node = new Node(i, null)
        
        if(pre)
        pre.next = node
        
        pre = node
        
        if(i == 0)
        this.head = node
    }

    this.print = function (node){
        while(node){
            console.log(node);
            node = node.next
        }
    }
}

module.exports.LinkedList = LinkedList