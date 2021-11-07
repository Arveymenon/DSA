class Node{
    value = null;

    next = null;
    down = null;
    right = null;

    constructor(val){
        this.value = val;
    }
}

class NestedNodes{
    n1 = new Node(5);
    n2 = new Node(10);
    n3 = new Node(19);
    n4 = new Node(28);
    
    // n1 = new Node(1);
    // n1 = new Node(1);
    
    
    constructor(){
        this.n1.down = new Node(7)
        this.n1.down.down = new Node(8)
        this.n1.down.down.down = new Node(30)
        
        this.n1.right = this.n2
        this.n2.down = new Node(20)
        
        
        this.n2.right = this.n3
        this.n3.down = new Node(22)
        this.n3.down.down = new Node(50)
        
        this.n3.right = this.n4
        this.n4.down = new Node(35)
        this.n4.down.down = new Node(40)
        this.n4.down.down.down = new Node(45)
    }
}

class LinkedList{
    
    constructor(){
        this.root = new Node(1)
        let n2 = this.root.next = new Node(2);
        let n3 = n2.next = new Node(3);
        let n4 = n3.next = new Node(4);
        n4.next = new Node(6);
        
    }
    
    printSinglyList(root){
        let head = root;
        while(head){
            console.log(head.value)
            head = head.next
        }
    }
}

module.exports = { LinkedList, NestedNodes, Node };