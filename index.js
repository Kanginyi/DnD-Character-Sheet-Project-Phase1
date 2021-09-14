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

const characterForm = document.querySelector('#character-form');
    characterForm.addEventListener('submit', submitCharacter);

function submitCharacter(event){
    event.preventDefault();
    const newCharacter = {
        name: event.target['name-input'].value,
        image: event.target['img-input'].value,
        race: event.target['race-input'].value,
        class: event.target['class-input'].value
    }
    renderCharacter(newCharacter);
    event.target.reset();
}

//Work on the functionality of this for your stat rolls button

//***************Essentially rollStats1*****************************************/
//This rollStats function instantly randomly rolls for the 6 traits
// function rollStats () {
//     const statButton = document.querySelector("#dice");
//         statButton.addEventListener("click", e => {
//             e.target.remove(); //Removes button

//             const showStatsList = document.querySelectorAll(".stat-roll");
//             const showStats = Array.from(showStatsList);

//             showStats.forEach(number => {
//                 const statRoll = document.createElement("p");
//                 statRoll.textContent = Math.floor(Math.random() * 20) + 1;
//                 number.appendChild(statRoll);
//             })
//         })
// }
// rollStats();
//*****************************************************************************/

function characterStats () {
    const charButton = document.querySelector("#char-dice");
    charButton.addEventListener("click", e => {
        e.target.remove();

        const charisma = document.querySelector("#char-roll");
        
        const charRoll = document.createElement("p");
        charRoll.textContent = Math.floor(Math.random() * 20) + 1;
        charisma.appendChild(charRoll);
    })

    const constButton = document.querySelector("#const-dice");
    constButton.addEventListener("click", e => {
        e.target.remove();

        const constitution = document.querySelector("#const-roll");
        
        const constRoll = document.createElement("p");
        constRoll.textContent = Math.floor(Math.random() * 20) + 1;
        constitution.appendChild(constRoll);
    })

    const dexButton = document.querySelector("#dex-dice");
    dexButton.addEventListener("click", e => {
        e.target.remove();

        const dexterity = document.querySelector("#dex-roll");
        
        const dexRoll = document.createElement("p");
        dexRoll.textContent = Math.floor(Math.random() * 20) + 1;
        dexterity.appendChild(dexRoll);
    })

    const intButton = document.querySelector("#int-dice");
    intButton.addEventListener("click", e => {
        e.target.remove();

        const intelligence = document.querySelector("#int-roll");
        
        const intRoll = document.createElement("p");
        intRoll.textContent = Math.floor(Math.random() * 20) + 1;
        intelligence.appendChild(intRoll);
    })

    const strButton = document.querySelector("#str-dice");
    strButton.addEventListener("click", e => {
        e.target.remove();

        const strength = document.querySelector("#str-roll");
        
        const strRoll = document.createElement("p");
        strRoll.textContent = Math.floor(Math.random() * 20) + 1;
        strength.appendChild(strRoll);
    })

    const wisButton = document.querySelector("#wis-dice");
    wisButton.addEventListener("click", e => {
        e.target.remove();

        const wisdom = document.querySelector("#wis-roll");
        
        const wisRoll = document.createElement("p");
        wisRoll.textContent = Math.floor(Math.random() * 20) + 1;
        wisdom.appendChild(wisRoll);
    })
}
characterStats();