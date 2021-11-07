// Graph node
class Node1{
    constructor(dest, weight){
        this.dest = dest
        this.weight = weight
    }
}

// mst or queue node
class Node{
    constructor(key, vertex){
        this.key = key
        this.vertex = vertex
    }
}

class Graph{
    constructor(e){
        this.V = e
        this.adj = new Array(e)
        for(let v = 0; v < e; v++)
            this.adj[v] = []
    }
}

function addEdge(graph, src, dest, weight){
    let n1 = new Node1(src, weight)
    graph.adj[dest].push(n1)

    let n2 = new Node1(dest, weight)
    graph.adj[src].push(n2)
}

function prims_mst(graph){
    let mst = new Array(V)
    let e = new Array(V)
    let parent = new Array(V)

    for(let o = 0; o < V; o++){
        mst[o] = false
        e[o] = new Node(Number.MAX_SAFE_INTEGER, o)
        parent[o] = -1
    }
    
    let queue = [...e]

    mst[0] = true
    e[0].key = 0

    while(queue.length != 0){
        let n0 = queue.shift()

        mst[n0.vertex] = true

        // neighbours of queue[0]
        for(let neighbour of graph.adj[n0.vertex].values()){

            if(mst[neighbour.dest] == false){

                if(e[neighbour.dest].key > neighbour.weight){
    
                    e[neighbour.dest].key = neighbour.weight
                    
                    queue.splice(queue.indexOf(neighbour.dest),1)
                    queue.push(e[neighbour.dest])
    
                    queue.sort((a,b)=>(a.key - b.key))
    
                    parent[neighbour.dest] = n0.vertex
                }
            }
        }
    }

    console.log(parent)
}

let V = 9;
let graph = new Graph(V);
addEdge(graph, 0, 1, 4);
addEdge(graph, 0, 7, 8);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 7, 11);
addEdge(graph, 2, 3, 7);
addEdge(graph, 2, 8, 2);
addEdge(graph, 2, 5, 4);
addEdge(graph, 3, 4, 9);
addEdge(graph, 3, 5, 14);
addEdge(graph, 4, 5, 10);
addEdge(graph, 5, 6, 2);
addEdge(graph, 6, 7, 1);
addEdge(graph, 6, 8, 6);
addEdge(graph, 7, 8, 7);
// Method invoked
prims_mst(graph);