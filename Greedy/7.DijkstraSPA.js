
class Graph{
    constructor(V){
        this.number_of_nodes = V
        this.graph = new Array(this.number_of_nodes)
    }

    dijkstra(source){
        let spt = new SPT(this.number_of_nodes)

        let index = source;
        spt.nodes[index] = {weight: 0}

        for(let i = 0; i < this.number_of_nodes; i++){
            
            let neighbours = this.neighboursNotInMST(index,spt);

            spt.nodes[index] = {...spt.nodes[index], included: true}

            for (let neigh of neighbours) {
                spt.nodes[neigh] = {
                            ...spt.nodes[neigh], 
                            weight: Math.min( this.graph[neigh][index] + spt.nodes[index].weight,
                            (spt.nodes[neigh] && spt.nodes[neigh].weight) ? spt.nodes[neigh].weight : Number.MAX_SAFE_INTEGER)
                        }
            }
            index = this.getIndexToUse(spt)
        }
        console.log(spt)
    }

    getIndexToUse(spt){
        let min;

        spt.nodes
        .forEach((o, index)=>{
            if(o && !o.included){
                if (!spt.nodes[min])
                    min = index

                if (spt.nodes[min].weight > o.weight)
                    min = index
            }
        })
        return min
    }

    neighboursNotInMST(index, spt){
        return this.graph[index].map((o, n_index)=> ( o && (!spt.nodes[n_index] || !spt.nodes[n_index].includes) ? n_index : null )).filter(o=>o)
    }
}

class SPT{
    constructor(no_of_nodes){
        this.nodes = new Array(no_of_nodes)
    }

    length() {
        return this.nodes.filter(o=>o).length
    }
}


let g = new Graph(9)
g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
        [4, 0, 8, 0, 0, 0, 0, 11, 0],
        [0, 8, 0, 7, 0, 4, 0, 0, 2],
        [0, 0, 7, 0, 9, 14, 0, 0, 0],
        [0, 0, 0, 9, 0, 10, 0, 0, 0],
        [0, 0, 4, 14, 10, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 1, 6],
        [8, 11, 0, 0, 0, 0, 1, 0, 7],
        [0, 0, 2, 0, 0, 0, 6, 7, 0]
        ];
 
g.dijkstra(0);