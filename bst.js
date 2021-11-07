class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}


//         root(10)
//         /      \
//      n1(2)    n2(10)
//      /  \         \
// n3(20)  n4(1)     n5(-25)
//                   /     \  
//                n6(3)   n7(4)

class Tree{
    constructor(){
        this.root = new Node(10);

        this.n1 = this.root.left =  new Node(2)
        this.n2 = this.root.right =  new Node(10)

        this.n3 = this.n1.left =  new Node(20)
        this.n4 = this.n1.right =  new Node(1)

        this.n5 = this.n2.right =  new Node(-25)
        
        this.n6 = this.n5.left =  new Node(3)
        this.n7 = this.n5.right =  new Node(4)
        
    }

    inorderPrint(root){
        if(root){
            console.log(root.value)
            inorderPrint(root.left)
            inorderPrint(root.right)
        }
    }
    
    preOrderPrint(root){
        if(root){
            preOrderPrint(root.left)
            console.log(root.value)
            preOrderPrint(root.right)
        }
    }
}

module.exports = Tree;


// var tree = new Tree()

// inorderPrint("Inorder");
// inorderPrint(tree.root);

// preOrderPrint("Preorder");
// preOrderPrint(tree.root);