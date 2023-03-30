
const container = document.querySelector('.grid');
const numSquares = 16 * 16;

for (let i = 0; i < numSquares; i++ ){
    const square = document.createElement('div');
    square.textContent = "div";
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

function colorChange(){
    squares.classList.add('colorChange');
}



console.log(squares);
