import { grid } from "./Graph.js"


function gridCount(grid){
    let count = 0
    let visited = new Set()

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(explore(grid, r, c, visited)) count++
        }
    }

    return count
}

function explore(grid, r, c, visited){
    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid[0].length
    if(!rowInBounds || !colInBounds) return false
    
    let pos = `${r},${c}`
    if(visited.has(pos)) return false
    visited.add(pos)

    if(grid[r][c] === "W") return false

    explore(grid, r + 1, c, visited)
    explore(grid, r - 1, c, visited)
    explore(grid, r, c + 1, visited)
    explore(grid, r, c - 1, visited)

    return true
}

console.log(gridCount(grid))