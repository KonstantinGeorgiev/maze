function mazeBig(){
let mazeBig = 
[
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', 's', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', '*', ' ', '*'],
    [' ', ' ', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', '*', ' ', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
]
let example = document.getElementById('app');
    let size = 50;
    let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    canvas.setAttribute('width', mazeBig[0].length * size);
    canvas.setAttribute('height', mazeBig.length * size);

    let appendElement = (canvas, node, mazeBig) => {
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blockRef.setAttribute('height', size);
        blockRef.setAttribute('width', size);
        blockRef.setAttribute('x', node.x * size);
        blockRef.setAttribute('y', node.y * size);
        if (mazeBig[node.y][node.x] === 's') {
            blockRef.setAttribute('fill', 'black');
        }
        if (mazeBig[node.y][node.x] === '*') {
            blockRef.setAttribute('fill', 'red');
        }
        if (mazeBig[node.y][node.x] === ' ') {
            blockRef.setAttribute('fill', 'green');
            blockRef.onclick = function () {
                blockClick(node, mazeBig, size, canvas);
            };
        }
        canvas.appendChild(blockRef);
    }
    mazeBig.map((row, y) => {
        row.map((col, x) => {
            appendElement(canvas, { x, y }, mazeBig);
        })
    })
    example.appendChild(canvas);

    
    let buttonSmall = document.getElementById("button1");
    buttonMedium = document.getElementById("button2");
    buttonBig = document.getElementById("button3");
    buttonLarge = document.getElementById("button4");
    buttonSmall.remove();
    buttonMedium.remove();
    buttonBig.remove();
    buttonLarge.remove();
}   
    