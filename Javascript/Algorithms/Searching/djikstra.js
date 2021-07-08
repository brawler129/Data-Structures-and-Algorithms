// Here I have implemented Dijkstras algorithm to better understand and study the algorithm




class Dijkstras {

    constructor(adjList){
        this.adjList = adjList;
        this.vertices = Object.keys(this.adjList);
        this.spg = {};
        this.unprocessedSet = [...this.vertices];
    }

    initializeSPG(initialVertex){ // O(v)
        // Initialize SPG with initial values
        // SPG is like { vertex1: [distance, previousVertex], vertex2: [distance, previousVertex]}
        let spg = {};
        for (let vertex of this.vertices){
            if (vertex === initialVertex){
                spg[vertex] = [0, null];
                continue;
            }
            spg[vertex] = [Infinity, null];
        }
        return spg;
    }

    findNextVertex(){ // O(v)
        // Find the next vertex to be processed
        let smallest = Infinity;
        let smallestIndex = null;
        for (let index in this.unprocessedSet){
            if (this.spg[this.unprocessedSet[index]][0] < smallest){
                smallest = this.unprocessedSet[index];
                smallestIndex = index;
            }
        }
        if (smallestIndex){
            this.unprocessedSet.splice(smallestIndex, 1);
            return smallest;
        }
        // if graph is disjoint then control reaches here
        return null;
        
    }



    findShortestPath(vertex){ // O (v^2 + v) => O(v^2)
        // Find shortest path from given vertex to all other vertices
        // Return the SPG for the vertex
        this.spg = this.initializeSPG(vertex); // Shortest Path Graph // O(v)
        while (this.unprocessedSet.length > 0){ // O(v(2v))  => O (v^2)
            let currentVertex = this.findNextVertex(); // O(v)
            if (!currentVertex){
                // If graph is disjoint at some point return spg built until now
                break;
            }
            let currentVertexDistance = this.spg[currentVertex][0];
            let adjVertices = Object.keys(this.adjList[currentVertex]);
            for (let adj of adjVertices){ // O(v)
                let distance = currentVertexDistance + this.adjList[currentVertex][adj];
                if (distance < this.spg[adj][0]){
                    this.spg[adj] = [distance, currentVertex]
                }
            }
        }
        return this.spg;
    }



}


const adjList = {
    0 : {
        1: 1,
        2: 4
    },
    1: {
        0: 1,
        2: 4,
        3: 2,
        4: 7
    },
    2 : {
        0: 4,
        1: 4,
        3: 3,
        4: 5
    },
    3 : {
        1: 2,
        2: 3,
        4: 4,
        5: 6
    },
    4: {
        1: 7,
        2: 5,
        3: 4,
        5: 7
    },
    5: {
        3: 6,
        4: 7
    }
}

// Disjoint Graph
// const adjList = {
//     0 : {
//         1: 1,
//         2: 4
//     },
//     1: {
//         0: 1,
//         2: 4,
//         3: 2,
//     },
//     2 : {
//         0: 4,
//         1: 4,
//         3: 3,
//     },
//     3 : {
//         1: 2,
//         2: 3,
//     },
//     4: {
//         5: 7
//     },
//     5: {
//         4: 7
//     }
// }


let dijkstra = new Dijkstras(adjList);
console.log(dijkstra.findShortestPath(String(4))); // O(v^2)
