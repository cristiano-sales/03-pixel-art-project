for(let i = 0; i < 25; i += 1) {
    let newContainer = document.createElement('div');
    newContainer.className = 'pixel';
    document.getElementById('pixel-board').appendChild(newContainer);
}

// let firstSelected = document.querySelector('.selected');
// Referência: Douglas Marçal
let mainColorPalette =  document.querySelector('#color-palette');
function colorPicker(event) {
    console.log(event.target);
    if(event.target.id !== 'color-palette') {
        let firstSelected = document.querySelector('.selected');
        firstSelected.classList.remove('selected');
        event.target.classList.add('selected');
    }
}
mainColorPalette.addEventListener('click', colorPicker);

// document.getElementById("pixel-board");
// document.getElementsByClassName("pixel");

// document.querySelector('#pixel-board');
// document.querySelector('.pixel'); 
// document.querySelectorAll('.pixel');



