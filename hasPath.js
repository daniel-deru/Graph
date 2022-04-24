import graph from "./Graph.js"

// This is the itertive solution
function hasPath(graph, nodeA, nodeB){
    let queue = [ nodeA ]

    while(queue.length > 0){
        let current = queue.pop()

        if(current === nodeB) return true
        for(let neighbor of graph[current]){
            queue.unshift(neighbor)
        }
    }

    return false
}

function hasPath2(graph, nodeA, nodeB){
    if(nodeA === nodeB) return true
    for(let neighbor of graph[nodeA]){
        return hasPath2(graph, neighbor, nodeB)
    }
    return false
}

console.log(hasPath2(graph, 'a', 'g'))
// console.log(hasPath(graph, 'a', 'e'))