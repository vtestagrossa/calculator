const leftContent = document.getElementById('cb-L');
const rightContent = document.getElementById('cb-R');

// TODO: Need to add rows to the left-content element
// and change the flex-direction of left-content to 
// column. Then, each row will have a class that has
// flex-direction row-reverse and only elements that need
// to be added per row are added.
function createNumberBtns(){

    let backBtn = document.createElement('button');
    let clrBtn = document.createElement('button');

    backBtn.textContent = "<-";
    clrBtn.textContent = "CE";

    backBtn.classList.add('num-button');
    clrBtn.classList.add('num-button');

    leftContent.appendChild(backBtn);
    leftContent.appendChild(clrBtn);
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
    
    rightContent.appendChild(divBtn);
    rightContent.appendChild(multBtn);
    rightContent.appendChild(minBtn);
    rightContent.appendChild(plsBtn);
    rightContent.appendChild(eqlsBtn);

}
createNumberBtns();