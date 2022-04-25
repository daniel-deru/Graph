import { cGraph } from "./Graph.js"


function islandCount(graph){
    let count = 0
    let visited = new Set()

    for(let node in graph){
        if(explore(graph, parseInt(node), visited)) count++
    }

    return count
}

function explore(graph, node, visited){
    if(visited.has(node)) return false
    visited.add(node)

    for(let neighbor of graph[node]){
        explore(graph, neighbor, visited)
    }

    return true
}

console.log(islandCount(cGraph))