const LL = require('./linkedlist').LinkedList
const Node = require('./linkedlist').Node

const ll = new LL()

function insertNode(node, head){
    let root = head;

    while(head.next){
        if(node.value < head.next.value){
            temp_node = head.next
            
            node.next = temp_node
            head.next = node
            break;
        }
        head = head.next
    }
    ll.printSinglyList(root)
}

let node = new Node(5)
res = insertNode(node, ll.root)