import { grid2 } from "./Graph.js"

function smallestComponent(grid){
    let smallest = Infinity
    let visited = new Set()

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            let size = exploreSize(grid, r, c, visited)
            if(size > 0 && size < smallest)  smallest = size
        }
    }

    return smallest
}


function exploreSize(grid, r, c, visited){
    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid[0].length
    if(!colInBounds || !rowInBounds) return 0

    const pos = `${r},${c}`
    if(visited.has(pos)) return 0
    visited.add(pos)

    if(grid[r][c] === "W") return 0

    let size = 1

    size += exploreSize(grid, r + 1, c, visited)
    size += exploreSize(grid, r - 1, c, visited)
    size += exploreSize(grid, r, c + 1, visited)
    size += exploreSize(grid, r, c - 1, visited)

    return size
}

console.log(smallestComponent(grid2))