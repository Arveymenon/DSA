function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

module.exports.Node = Node

function RandomTree(length = 2, parent) {
    if(length > 0){
        if(!parent)
            parent = new Node(length * 10)

        parent.left = RandomTree(length - 1, new Node((length-1) * 10 + 1))
        parent.right = RandomTree(length - 1, new Node((length-1) * 10 + 2))

        return parent
    }
}

module.exports.RandomTree = RandomTree

function preOrderTraversal(root){
    if(root){
        console.log(root)
        console.log("________________________________")
        preOrderTraversal(root.left)
        preOrderTraversal(root.right)
    }
}
module.exports.preOrderTraversal = preOrderTraversal

function inOrderTraversal(root){
    if(root){
        inOrderTraversal(root.left)
        console.log(root)
        inOrderTraversal(root.right)
    }
}
module.exports.inOrderTraversal = inOrderTraversal

function postOrderTraversal(root){
    if(root){
        postOrderTraversal(root.left)
        postOrderTraversal(root.right)
        console.log(root.value)
    }
}
module.exports.postOrderTraversal = postOrderTraversal

var bfs = []

function displayTheTree(root){

    // BFS traversal
    getLevelOrderTraversal(root, 0)
    
    console.log(bfs)
    let height = bfs.length

    for (let level = 0; level < height; level++) {

        
        let level_print = ""

        // no of elements/partiion in the that level
        let divs = 2 ** level
        
        for(let div = 0; div < divs; div++){
            // for spaces
            for(let s = 0; s < (height - level); s++){
                level_print += "  "
            }
            level_print += bfs[level][div]
        }
        console.log(level_print)
        
        
        level_print = ""
        for(let div = 0; div < divs; div++){

            // for spaces
            for(let s = 0; s < (height - level - 1); s++){
                level_print += "  "
            }
            level_print += "  / \\"
        }
        console.log(level_print)
    }
}
module.exports.displayTheTree = displayTheTree

function getLevelOrderTraversal(root, level){

    if(!root){
        return
    }

    if(!bfs[level]){
        bfs[level] = []
    }

    bfs[level].push(root.value)

    if(root.left)
        getLevelOrderTraversal(root.left, level + 1)
    if(root.right)
        getLevelOrderTraversal(root.right, level + 1)
}