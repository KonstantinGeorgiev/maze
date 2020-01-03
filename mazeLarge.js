function mazeLarge(){
let mazeLarge = 
[
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', 's', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', '*', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', '*', '*', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
    ['*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', ' ', ' ', ' ', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', ' ', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' ', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
    ['*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', '*', '*', '*', '*', '*',],
]
    let example = document.getElementById('app');
    let size = 50;
    let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    canvas.setAttribute('width', mazeLarge[0].length * size);
    canvas.setAttribute('height', mazeLarge.length * size);

    let appendElement = (canvas, node, mazeLarge) => {
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blockRef.setAttribute('height', size);
        blockRef.setAttribute('width', size);
        blockRef.setAttribute('x', node.x * size);
        blockRef.setAttribute('y', node.y * size);
        if (mazeLarge[node.y][node.x] === 's') {
            blockRef.setAttribute('fill', 'black');
        }
        if (mazeLarge[node.y][node.x] === '*') {
            blockRef.setAttribute('fill', 'red');
        }
        if (mazeLarge[node.y][node.x] === ' ') {
            blockRef.setAttribute('fill', 'green');
            blockRef.onclick = function () {
                blockClick(node, mazeLarge, size, canvas);
            };
        }
        canvas.appendChild(blockRef);
    }
    mazeLarge.map((row, y) => {
        row.map((col, x) => {
            appendElement(canvas, { x, y }, mazeLarge);
        })
    })
    example.appendChild(canvas);

function buttonLarge (){ 
    let buttonLarge = document.getElementById("buttonLarge");
    buttonLarge.remove();
} 
while(position.row < 0 || position.row >= maze.length || position.col < 0 || position.col >= maze[0].length){


}






if(position.row < 0 || position.row >= maze.length || position.col < 0 || position.col >= maze[0].length){
    exit.push(position.path);
}
else if(maze[position.row][position.col] === ' '){
    let new_path = position.routh.slice();
    new_path.push({row:position.row, col:position.col});
    queue.push({row:position.row, col:position.col, path:new_path});
    maze[position.row][position.col] = steps;
}
}  
    