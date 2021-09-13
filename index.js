const BASE_URL = "http://localhost:3000/Characters";

function receiveInformation() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => data.forEach(character => renderCharacter(character)));
}
receiveInformation();

function renderCharacter(character) {
    const characterBar = document.querySelector("#character-bar");
    
    const barName = document.createElement("p");
    barName.textContent = character.name;

    const barImage = document.createElement("img");
    barImage.src = character.image;
    barImage.alt = character.name;
    barImage.title = character.name;
    barImage.width = 100;

    characterBar.append(barName, barImage);
    
    barImage.addEventListener("click", e => characterBarClickEvent(character));
}

function characterBarClickEvent(character) {
    
}

//Work on the functionality of this for your stat rolls button
// const statButton = document.querySelector(".dice");
// statButton.addEventListener("click", e => {
//     statButton.remove();
//     const showStats = document.querySelector(".stat-roll");

//     const newP = document.createElement("p");
//     newP.textContent = Math.floor(Math.random() * 20) + 1;

//         showStats.appendChild(newP);

// } )