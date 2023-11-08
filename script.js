const leftContent = document.getElementById('cb-L');

function createNumberBtns(){
    for (let j = 9; j >= 0; j--){
        let numBtn = document.createElement('button');
        numBtn.textContent = j;
        numBtn.value = j;
        numBtn.classList.add('num-button');
        if (j === 0){
            let dotBtn = document.createElement('button');
            dotBtn.textContent = ".";
            dotBtn.value = ".";
            dotBtn.classList.add('num-button');
            leftContent.appendChild(dotBtn);
            numBtn.classList.add('num-button-0');
            numBtn.setAttribute('width', "60%");
        }
        leftContent.appendChild(numBtn);
    }
}
createNumberBtns();