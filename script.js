const leftContent = document.getElementById('cb-L');
const rightContent = document.getElementById('cb-R');
const display = document.getElementById('display');
let dotted = false;
let operator = "";
let first = "";
let second = "";
display.textContent = "0";


function createNumberBtns(){
    let backBtn = document.createElement('button');
    let clrBtn = document.createElement('button');
    backBtn.addEventListener('click', backSpace);
    clrBtn.addEventListener('click', clear);

    backBtn.textContent = "<-";
    clrBtn.textContent = "CE";

    backBtn.classList.add('num-button');
    clrBtn.classList.add('num-button');


    let row = document.createElement('div');
    row.classList.add('cb-row');
    row.appendChild(backBtn);
    row.appendChild(clrBtn);
    leftContent.appendChild(row);
    for (let j = 9; j >= 0; j--){
        if (j % 3 === 0){
            row = document.createElement('div');
            row.classList.add('cb-row');
            leftContent.appendChild(row);
        }
        let numBtn = document.createElement('button');
        numBtn.textContent = j;
        numBtn.value = j;
        // TODO: need to refactor this function.
        numBtn.addEventListener('click', () => {
            if (!isMaxLength()){
                if(display.textContent !== '0'){
                    display.textContent += numBtn.value;
                }
                else {
                    display.textContent = numBtn.value;
                }
            }
        });
        numBtn.classList.add('num-button');
        if (j === 0){
            let dotBtn = document.createElement('button');
            dotBtn.textContent = ".";
            dotBtn.value = ".";
            dotBtn.classList.add('num-button');
            dotBtn.addEventListener('click', dot);
            row.appendChild(dotBtn);
            numBtn.classList.add('num-button-0');

        }
        row.appendChild(numBtn);
    }
    let divBtn = document.createElement('button');
    let multBtn = document.createElement('button');
    let minBtn = document.createElement('button');
    let plsBtn = document.createElement('button');
    let eqlsBtn = document.createElement('button');

    divBtn.textContent = "/";
    multBtn.textContent = "*";
    minBtn.textContent = "-";
    plsBtn.textContent = "+";
    eqlsBtn.textContent = "=";

    divBtn.value = "/";
    multBtn.value = "*";
    minBtn.value = "-";
    plsBtn.value = "+";
    eqlsBtn.value = "=";

    divBtn.classList.add("operator-button");
    multBtn.classList.add("operator-button");
    minBtn.classList.add("operator-button");
    plsBtn.classList.add("operator-button");
    eqlsBtn.classList.add("operator-button");

    divBtn.addEventListener('click', setOperator);
    multBtn.addEventListener('click', setOperator);
    minBtn.addEventListener('click', setOperator);
    plsBtn.addEventListener('click', setOperator);
    eqlsBtn.addEventListener('click', equals);
    

    row = document.createElement('div');
    row.classList.add('cb-row');
    rightContent.appendChild(row);
    row.appendChild(divBtn);
    rightContent.appendChild(row);

    row = document.createElement('div');
    row.classList.add('cb-row');
    rightContent.appendChild(row);
    row.appendChild(multBtn);
    rightContent.appendChild(row);

    row = document.createElement('div');
    row.classList.add('cb-row');
    rightContent.appendChild(row);
    row.appendChild(minBtn);
    rightContent.appendChild(row);

    row = document.createElement('div');
    row.classList.add('cb-row');
    rightContent.appendChild(row);
    row.appendChild(plsBtn);
    rightContent.appendChild(row);

    row = document.createElement('div');
    row.classList.add('cb-row');
    rightContent.appendChild(row);
    row.appendChild(eqlsBtn);
    rightContent.appendChild(row);

}
function isMaxLength(){
    if (display.textContent.length <= 37){
        return false;
    }
    return true;
}
function backSpace(){
    display.textContent = display.textContent.slice(0,-1);
    if (!display.textContent.includes('.')){
        dotted = false;
    }
    if (display.textContent.length === 0){
        display.textContent = "0";
    }
}
function clear(){
    display.textContent = "0";
    dotted = false;
    first = "";
    second = "";
    operator = "";
}
function dot(){
    if (!dotted){
        display.textContent += '.';
        dotted = true;
    }
}
function setOperator(evt){
    if (first.length <= 0) {
        first = display.textContent;
    }
    operator = evt.target.value;
}
function calculate(first, operator, second){
    switch (operator){
        case '/':
            if (second !== "0"){
                return first / second;
            }
            else {
                alert("You cannot divide by 0!");
            }
            break;
        case '*':
            return first * second;
            break;
        case '-':
            return first - second;
            break;
        case '+':
            return first + second;
            break;
    }
}
function equals(){
    if (first.length >= 1 && second.length >= 1 && operator.length === 1){
        first = calculate(first, operator, second);
        second = "";
        display.textContent = first;
    }
}
createNumberBtns();