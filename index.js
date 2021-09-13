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
    // const detailedInfo = document.querySelector("#detailed-info");

    const characterName = document.querySelector("#character-name");
    characterName.textContent = `Character Name: ${character.name}`;

    const characterImage = document.querySelector("#character-image");
    characterImage.src = character.image;
    characterImage.alt = character.name;
    characterImage.title = character.name;

    const characterRace = document.querySelector("#character-race");
    characterRace.textContent = `Character Race: ${character.race}`;

    const characterClass = document.querySelector("#character-class");
    characterClass.textContent = `Character Class: ${character.class}`;
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