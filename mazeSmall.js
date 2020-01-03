function mazeSmall(){
let mazeSmall = 
[
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', 's', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', ' ', '*', '*', '*', '*', '*', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*'],
    ['*', '*', '*', ' ', '*', '*', '*', ' ', '*', '*'],
    [' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '*'],
    [' ', '*', '*', '*', '*', ' ', ' ', ' ', '*', '*'],
    [' ', ' ', '*', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*'],
]
let example = document.getElementById('app');
let size = 50;
let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

canvas.setAttribute('width', mazeSmall[0].length * size);
canvas.setAttribute('height', mazeSmall.length * size);

let appendElement = (canvas, node, mazeSmall) => {
    let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    blockRef.setAttribute('height', size);
    blockRef.setAttribute('width', size);
    blockRef.setAttribute('x', node.x * size);
    blockRef.setAttribute('y', node.y * size);
    if (mazeSmall[node.y][node.x] === 's') {
        blockRef.setAttribute('fill', 'black');
    }
    if (mazeSmall[node.y][node.x] === '*') {
        blockRef.setAttribute('fill', 'red');
    }
    if (mazeSmall[node.y][node.x] === ' ') {
        blockRef.setAttribute('fill', 'green');
        blockRef.onclick = function () {
            blockClick(node, mazeSmall, size, canvas);
        };
    }
    canvas.appendChild(blockRef);
}
mazeSmall.map((row, y) => {
    row.map((col, x) => {
        appendElement(canvas, { x, y }, mazeSmall);
    })
})
example.appendChild(canvas);


let buttonSmall = document.getElementById("button1");
buttonMedium = document.getElementById("button2");
buttonBig = document.getElementById("button3");
buttonsmall = document.getElementById("button4");
buttonSmall.remove();
buttonMedium.remove();
buttonBig.remove();
buttonsmall.remove();
}