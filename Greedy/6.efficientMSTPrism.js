class Node{
    constructor(dest, weight){
        this.dest = dest
        this.weight = weight
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
    let n1 = new Node(src, weight)
    let n2 = new Node(dest, weight)

    graph.adj[src].push(n2)
    graph.adj[dest].push(n1)
}

function prims_mst(graph){
    // let min_heap = 
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

graph.adj.forEach(element => {
    console.log(element)
});
// Method invoked
prims_mst(graph);