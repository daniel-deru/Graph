export default {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

export const cGraph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}

export const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

export const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

export const grid2 = [
    ['W', 'L', 'W', 'W', 'L', 'W'],
    ['L', 'L', 'W', 'W', 'L', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'W', 'W'],
]