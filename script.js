const leftContent = document.getElementById('cb-L');
const rightContent = document.getElementById('cb-R');
const display = document.getElementById('display');
let dotted = false;
let operatorPressed = false;
let newOperand = false;
let inFirstOperand = true;
let operator = "";
let first = "0";
let second = "0";
display.textContent = "0";

function createNumberBtns(){
    let backBtn = document.createElement('button');
    let clrBtn = document.createElement('button');
    backBtn.addEventListener('click', backSpace);
    clrBtn.addEventListener('click', clear);

    backBtn.textContent = "←";
    clrBtn.textContent = "C";

    backBtn.classList.add('num-button');
    clrBtn.classList.add('num-button-0');

    // rows are needed to make the button layout look correct
    // with the css
    let row = document.createElement('div');
    row.classList.add('cb-row');
    row.appendChild(backBtn);
    row.appendChild(clrBtn);
    leftContent.appendChild(row);

    // Each row adds 3 buttons in reverse-row order from
    // top to bottom, then adds the event listeners
    for (let j = 9; j >= 0; j--){
        if (j % 3 === 0){
            row = document.createElement('div');
            row.classList.add('cb-row');
            leftContent.appendChild(row);
        }
        let numBtn = document.createElement('button');
        numBtn.textContent = j;
        numBtn.value = j;
        numBtn.addEventListener('click', numberPressed);
        numBtn.classList.add('num-button');
        // edge case for the final row could be handled 
        // outside the loop, but I wanted to append the
        // row inside the loop with the same statement 
        // and save a line.
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

    divBtn.textContent = "÷";
    multBtn.textContent = "x";
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
    eqlsBtn.addEventListener('click', solveEquation);
    
    // uses rows for the same spacing as the left part
    // of the bottom container
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
function numberPressed(evt){
    if (!isMaxLength()){
        if (inFirstOperand){
            // not assuming the textcontent is going to start
            // as 0.
            if (newOperand){
                display.textContent = "0";
                newOperand = false;
            }
            // The leading 0 should be changed to whatever other
            // number is used.
            if(display.textContent !== '0'){
                display.textContent += evt.target.value;
                first = display.textContent;
            }
            else {
                display.textContent = evt.target.value;
                first = display.textContent;
            }
        }
        else {
            // resets textContent to 0 because the second 
            // operand is being handled here
            if (newOperand){
                display.textContent = "0";
                newOperand = false;
            }
            // The leading 0 should be changed to whatever other
            // number is used.
            if(display.textContent !== '0'){
                display.textContent += evt.target.value;
                second = display.textContent;
            }
            else {
                display.textContent = evt.target.value;
                second = display.textContent;
            }
        }
    }
}
// Convenience function to be able to change display
// length in case of redesign.
function isMaxLength(){
    if (display.textContent.length <= 26){
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
    first = "0";
    second = "0";
    operator = "";
    operatorPressed = false;
    newOperand = true;
    inFirstOperand = true;
}
function dot(){
    if (!dotted){
        display.textContent += '.';
        dotted = true;
    }
}
function setOperator(evt){
    if (operatorPressed){
        solveEquation();
    }
    first = display.textContent;
    inFirstOperand = false;
    operatorPressed = true;
    operator = evt.target.value;
    dotted = false;
    newOperand = true;
}
// Unary add is needed to add the strings instead of
// concatenating them.
function calculate(firstOperand, operation, secondOperand){
    switch (operation){
        case '/':
            if (secondOperand === "0"){
                alert("You cannot divide by 0!");
                second = 1;
                return firstOperand;
            }
            return +firstOperand / +secondOperand;
        case '*':
            return +firstOperand * +secondOperand;
        case '-':
            return +firstOperand - +secondOperand;
        case '+':
            return +firstOperand + +secondOperand;
    }
}

// repeated presses of equals button now repeats operation
function solveEquation(){
    if (operator.length >= 1){
        // no longer needed because second is updated in real
        // time.
        // second = display.textContent;
        first = calculate(first, operator, second);
        display.textContent = first;
    }
}
createNumberBtns();