

const fs = require('fs');

const combos = [
    ['r', 'rr', 'c', 'cr'],
    ['w', 'wr', 'n'],
    ['fs', 'fe', 'c', 'l', 'r', 'n', 'sb', 'sa', 'se'],
    ['fs','fe','c','l','r','n','sb','sa','se','sfs','sfe','sc','sl','sr','sn','ssb','ssa','sse']
]

//#region palmyLookup 
const palmyLookup = {
    f: 'display: flex;',
    r: 'flex-direction: row;',
    rr: 'flex-direction: row-reverse;',
    c: 'flex-direction: column;',
    cr: 'flex-direction: column-reverse;',
    w: 'flex-wrap: wrap;',
    wr: 'flex-wrap: wrap-reverse;',
    n: 'flex-wrap: nowrap;',
    fs: 'justify-content: flex-start;',
    fe: 'justify-content: flex-end;',
    c: 'justify-content: center;',
    l: 'justify-content: left;',
    r: 'justify-content: right;',
    n: 'justify-content: normal;',
    sb: 'justify-content: space-between;',
    sa: 'justify-content: space-around;',
    se: 'justify-content: space-evenly;',
    sfs: 'justify-content: safe flex-start;',
    sfe: 'justify-content: safe flex-end;',
    sc: 'justify-content: safe center;',
    sl: 'justify-content: safe left;',
    sr: 'justify-content: safe right;',
    sn: 'justify-content: safe normal;',
    ssb: 'justify-content: safe space-between;',
    ssa: 'justify-content: safe space-around;',
    sse: 'justify-content: safe space-evenly;',
    fs: 'align-items: flex-start;',
    fe: 'align-items: flex-end;',
    c: 'align-items: center;',
    n: 'align-items: normal;',
    b: 'align-items: baseline;',
    fb: 'align-items: first baseline;',
    lb: 'align-items: last baseline;',
    sfs: 'align-items: safe flex-start;',
    sfe: 'align-items: safe flex-end;',
    sc: 'align-items: safe center;',
    ufs: 'align-items: unsafe flex-start;',
    ufe: 'align-items: unsafe flex-end;',
    uc: 'align-items: unsafe center;'
}
//#endregion

const array1 = combos[0]
const array2 = combos[1]
const array3 = combos[2]
const array4 = combos[3]


const output = array1.map(e => array2.map(f => array3.map(g => array4.map(h => `f-${e}-${f}-${g}-${h}`)))).flat(5)

console.log(output)

function palmyParser(toParse) {
    const load = toParse.split('-')
    const parsing = load.map(e => palmyLookup[e])
    const parsed = parsing.join('\r\n')
    return parsed
}

output.map(e => fs.appendFile('./test/output.css', 
'.' + e + ' {\r\n' + palmyParser(e) +'\r\n} ', err => err ? console.log(err) : console.log('File saved')))



// output.map(e =>)
