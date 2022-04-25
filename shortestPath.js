import { edges } from "./Graph.js"


function shortestPath(edges, nodeA, nodeB){
    let graph = buildGraph(edges)
    let queue = [ [nodeA, 0] ]
    let shortest = Infinity
    let visited = new Set([nodeA])

    while(queue.length > 0){
        let [current, distance] = queue.pop()
        if(current === nodeB) return distance
        for(let neighbor of graph[current]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.unshift([neighbor, distance+1])
            }
        }
    }
    return -1
}


function buildGraph(edges){
    let graph = {}
    
    for(let neighbor of edges){
        let [a, b] = neighbor

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[b].push(a)
        graph[a].push(b)
    }

    return graph
}

console.log(shortestPath(edges, 'w', 'z'))