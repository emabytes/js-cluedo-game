const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: "45",
        description: "He has a lot of connections",
        image: "https://cdn2.vectorstock.com/i/1000x1000/47/66/business-man-entrepreneur-vector-17124766.jpg",
        color: "green"
    },
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: "26",
        description: "PhD in plant toxicology. Adopted daughter of Mr.Boddy",
        image: "https://365psd.com/images/previews/1e9/male-doctor-vector-character-with-case-25855.jpg",
        color: "white"
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: "22",
        description: "Billionaire video game designer",
        image: "https://cdn5.vectorstock.com/i/1000x1000/83/04/a-caucasian-game-designer-in-vr-headset-vector-21198304.jpg",
        color: "purple"
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: "31",
        description: "She is an A - list movie star with a dark past",
        image: "https://cdn.pixabay.com/photo/2016/03/31/20/19/actress-1295681_960_720.png",
        color: "red"
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: "36",
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://thumbs.dreamstime.com/b/brunette-rich-successful-business-woman-beautiful-young-under-falling-money-rain-shower-49698055.jpg",
        color: "blue"
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: "62",
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://image.freepik.com/free-vector/online-male-personal-trainer_23-2148564216.jpg",
        color: "yellow"
    }
];

const weaponsArray = [
    {
        name: "rope",
        weight: "10"
    },
    {
        name: "knife",
        weight: "8"
    },
    {
        name: "candlestick",
        weight: "2"
    },
    {
        name: "dumbbell",
        weight: "30"
    },
    {
        name: "poison",
        weight: "2"
    },
    {
        name: "axe",
        weight: "15"
    },
    {
        name: "bat",
        weight: "13"
    },
    {
        name: "trophy",
        weight: "25"
    },
    {
        name: "pistol",
        weight: "20"
    }
]


const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
];

//pick random cards from decks
function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function pickMystery() {
    console.log("pick works")
    console.log(selectRandom(suspectsArray))
    let mistery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
    return mistery;
}
let revealed = pickMystery();

function revealMistery() {
    document.getElementById("result").innerHTML =
    `
    ${revealed.suspect.firstName} 
    ${revealed.suspect.lastName}
    killed Mr. Boddy using the ${revealed.weapon.name}
    in the ${revealed.room.name}
    <img src="${revealed.suspect.image}" alt="">
    `
}