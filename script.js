// let firstSelected = document.querySelector('.selected');

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



