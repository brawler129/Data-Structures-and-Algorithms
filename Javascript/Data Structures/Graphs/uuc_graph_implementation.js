// Here I have implemented a Undirected, Unweighted and Cyclic graph to better understand and study Graphs.


class Graph{

    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }

    addVertex(node){
        if (node in this.adjacentList){
            console.log('Node with value already exists');
            return false;
        }
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        console.log(`Added node ${node}`);
        return true;
    }

    addEdge(node1, node2){
        if (!this.adjacentList.hasOwnProperty(node1)){
            console.log(`Node with value ${node1} does not exist`);
            return false;
        }
        if (!this.adjacentList.hasOwnProperty(node2)){
            console.log(`Node with value ${node2} does not exist`);
            return false;
        }

        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return true;
    }

    showConnections(){
        for (let node in this.adjacentList){
            console.log(`${node} ---> ${this.adjacentList[node].join(', ')}`);
        }
    }
}


let myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');

myGraph.addVertex('3');

myGraph.addEdge('0', '3');
myGraph.addEdge('0', '1');
myGraph.addEdge('1', '3')

myGraph.showConnections()