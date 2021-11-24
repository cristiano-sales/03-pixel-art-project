for(let i = 0; i < 25; i += 1) {
    let newContainer = document.createElement('div');
    newContainer.className = 'pixel';
    document.getElementById('pixel-board').appendChild(newContainer);
}

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


// Referência: Douglas Marçal
let pixelUnit = document.querySelectorAll('.pixel');
let pixelId = document.querySelector('#pixel-board');


function pixelRecebeCor(evento) {
    let selected = document.querySelector('.selected')
    if(evento.target.className === 'pixel') {
        console.log('cristiano');
        evento.target.style.backgroundColor = selected.id;
    } 
};
pixelId.addEventListener('click', pixelRecebeCor);


//Referência: Lucas Vilar
function resetPixels() {
    let botaoReset = document.querySelector('#clear-board')
    botaoReset.addEventListener('click', function (){
        for(let i = 0; i < pixelUnit.length; i += 1) {
    
            pixelUnit[i].style.backgroundColor = 'white';
            console.log(pixelUnit[i]);
        }
    })
}
resetPixels();
