const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.addEventListener("click", createNewGrid);

function createNewGrid(){
    const input = prompt("Please enter grid size between 1 to 90: ")
    const size = Number(input);
    if (!isNaN(size) && Number.isInteger(size) && size >= 1 && size <= 90){
        container.innerHTML = "";
        createGrid(size);
    } else {
        alert("Invalid input, please try again!")
    }
}


function createGrid(num){
    for (let i = 0; i<num; i++){
    const newDivContainer = document.createElement("div");
    newDivContainer.classList.add("flex-container");

    for (let j = 0; j<num; j++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.addEventListener("mouseover", (e)=>e.target.style.backgroundColor = "black");
        newDivContainer.appendChild(newDiv);
    }

    container.appendChild(newDivContainer);
}
}

createGrid(16);

