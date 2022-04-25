import { cGraph } from "./Graph.js"


function findLargest(graph){
    let largest = 0
    let visited = new Set()

    for(let node in graph){
        let size = getLargest(graph, parseInt(node), visited)
        if(size > largest) largest = size
    }
    return largest
}

function getLargest(graph, current, visited){
    if(visited.has(current)) return 0
    visited.add(current)
    let size = 1
    for(let neighbor of graph[current]){
        size += getLargest(graph, neighbor, visited)
    }
    return size
}

console.log(findLargest(cGraph))