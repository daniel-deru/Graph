import graph from "./Graph.js"


function breadthFirst(graph, source){
    let queue = [ source ]

    while(queue.length > 0){
        let current = queue.pop()
        console.log(current)
        for(let neighbor of graph[current]){
            queue.unshift(neighbor)
        }
    }
}

breadthFirst(graph, 'a')