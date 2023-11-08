const leftContent = document.getElementById('cb-L');

function createNumberBtns(){
    for (let j = 9; j >= 0; j--){
        let numBtn = document.createElement('button');
        numBtn.textContent = j;
        numBtn.value = j;
        numBtn.classList.add('num-button');
        leftContent.appendChild(numBtn);
    }
    
}
createNumberBtns();