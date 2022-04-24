import graph from "./Graph.js"
//  This is the iterative
function depthFirst(graph, source){
    let stack = [ source ]

    while(stack.length > 0){
        let current = stack.pop()

        console.log(current)

        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}


function depthFirst2(graph, source){
    console.log(source)
    for(let neighbor of graph[source]){
        depthFirst2(graph, neighbor)
    }
}
depthFirst2(graph, 'a')
// depthFirst(graph, 'a')