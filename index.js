const BASE_URL = "http://localhost:3000/Characters";

function receiveInformation() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => data.forEach(character => renderCharacter(character)));
}
receiveInformation();

function renderCharacter(character) {
    const characterBar = document.querySelector("#character-bar");
    
    const newDiv = document.createElement("div")
    newDiv.id = `new-div-${character.name}`

    const barName = document.createElement("p");
    barName.id = "new-character-name";
    barName.textContent = character.name;

    const barImage = document.createElement("img");
    barImage.src = character.image;
    barImage.alt = character.name;
    barImage.title = character.name;
    barImage.width = 150;
    barImage.height = 210;

    characterBar.appendChild(newDiv)
    newDiv.append(barName, barImage);
    
    barImage.addEventListener("click", e => characterBarClickEvent(character));

    const deleteButton = document.createElement('button')
    deleteButton.id = "delete-button";
    deleteButton.textContent = "Delete"
    newDiv.appendChild(deleteButton)
    
    deleteButton.addEventListener('click', e => {
    const newDiv = document.querySelector(`#new-div-${character.name}`)
    
    let text = confirm("Are you sure? This cannot be undone.");
    if (text === true) {
        newDiv.remove();
        fetch(`${BASE_URL}/${character.id}`, {
            method: "DELETE"
        })
    }

    
    const resetName = document.querySelector('#character-name')
    resetName.textContent = 'Character\'s Name'
    
    const resetImg = document.querySelector('#character-image')
    resetImg.src = 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png'
    
    const resetRace = document.querySelector('#character-race')
    resetRace.textContent = 'Character\'s Race'
    
    const resetClass = document.querySelector('#character-class')
    resetClass.textContent = 'Character\'s Class'
    
    const resetCha = document.querySelector('#char-stat')
    resetCha.textContent = 'CHA:'

    const resetCon = document.querySelector('#con-stat')
    resetCon.textContent = 'CON:'

    const resetDex = document.querySelector('#dex-stat')
    resetDex.textContent = 'DEX:'

    const resetInt = document.querySelector('#int-stat')
    resetInt.textContent = 'INT:'

    const resetStr = document.querySelector('#str-stat')
    resetStr.textContent = 'STR:'

    const resetWis = document.querySelector('#wis-stat')
    resetWis.textContent = 'WIS:'
})
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

    const charStat = document.querySelector("#char-stat");
    charStat.textContent = `CHA: ${character.stats.charisma}`;

    const conStat = document.querySelector("#con-stat");
    conStat.textContent = `CON: ${character.stats.constitution}`;

    const dexStat = document.querySelector("#dex-stat");
    dexStat.textContent = `DEX: ${character.stats.dexterity}`;

    const intStat = document.querySelector("#int-stat");
    intStat.textContent = `INT: ${character.stats.intelligence}`;

    const strStat = document.querySelector("#str-stat");
    strStat.textContent = `STR: ${character.stats.strength}`;

    const wisStat = document.querySelector("#wis-stat");
    wisStat.textContent = `WIS: ${character.stats.wisdom}`;
}

const characterForm = document.querySelector('#character-form');
characterForm.addEventListener('submit', submitCharacter);

function submitCharacter(event){
    event.preventDefault();
    
    // const showStatsList = document.querySelectorAll(".stat-roll");
    // const showStats = Array.from(showStatsList);
    alert("Rolling your stats!")
    const newCharacter = {
        name: event.target['name-input'].value,
        image: event.target['img-input'].value,
        race: event.target['race-input'].value,
        class: event.target['class-input'].value,
        stats: {
            charisma: Math.floor(Math.random() * 20) + 1,
            constitution: Math.floor(Math.random() * 20) + 1,
            dexterity: Math.floor(Math.random() * 20) + 1,
            intelligence: Math.floor(Math.random() * 20) + 1,
            strength: Math.floor(Math.random() * 20) + 1,
            wisdom: Math.floor(Math.random() * 20) + 1
        }
    }

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
    })

    renderCharacter(newCharacter);
    characterBarClickEvent(newCharacter);
    event.target.reset();
}