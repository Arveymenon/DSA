class Edge {
    constructor(source, destination, cost) {
        this.source = source;
        this.destination = destination;
        this.cost = cost;
    }
}

function Graph(vertices) {
    this.vertices = vertices
    this.edges = []
}

function getMST() {
    let mst = []

    // 1. arrange the edges by cost
    this.edges = this.edges.sort((a,b)=>a.cost - b.cost) 
    // 2. For the number of vertices
    // i. check if a loop is created if the edge is pushed
    // IF true
    // skip and do not increment the for counter
    // else
    // push the edge to mst
    // 

    let i = 0
    let edge_index = 0
    while (i < this.vertices - 1) {
        if (!checkForLoop(mst, this.edges[edge_index])) {
            console.log("pushing")
            mst.push(this.edges[edge_index])
            i++  
        } 
        edge_index++
    }
    
    return mst.reduce((acc,curr)=> acc += curr.cost ,0)
}

function checkForLoop(mst, edge) {
    let source_set = false
    let destination_set = false

    for(let m_edge of mst){
        if(m_edge.source == edge.source || m_edge.destination == edge.source )
            source_set = true
        if(m_edge.source == edge.destination || m_edge.destination == edge.destination)
            destination_set = true
    
        if(source_set && destination_set){
            console.log("Not to be pushed")
            return true
        }
    }
    return false
}

let graph = new Graph(4)
graph.edges.push(
    new Edge(0, 1, 10),
    new Edge(0, 2, 6),
    new Edge(0, 3, 5),
    new Edge(1, 3, 15),
    new Edge(2, 3, 4),
)

console.log(getMST.call(graph))