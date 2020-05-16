const combos = [
    ['r', 'rr', 'c', 'cr'],
    ['w', 'wr', 'n'],
    ['fs', 'fe', 'c', 'l', 'r', 'n', 'sb', 'sa', 'se'],
    ['fs', 'fe', 'c', 'n', 'b']
]


const array1 = combos[0]
const array2 = combos[1]
const array3 = combos[2]
const array4 = combos[3]


const output = array1.map(e => array2.map(f => array3.map(g => array4.map(h => `f-${e}-${f}-${g}-${h}`)))).flat(5)

console.log(output)