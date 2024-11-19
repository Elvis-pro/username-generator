const adjectives = [
    "amazing", "brave", "bright", "clever", "cool", "creative", "daring", "determined", "dynamic", "energetic",
    "epic", "excited", "fantastic", "fearless", "fierce", "friendly", "funny", "generous", "gentle", "glorious",
    "happy", "helpful", "honest", "incredible", "joyful", "kind", "legendary", "lively", "majestic", "marvelous",
    "mighty", "mysterious", "noble", "passionate", "powerful", "radiant", "reliable", "smart", "spirited", "strong",
    "stunning", "swift", "talented", "thoughtful", "thrilling", "unique", "vibrant", "victorious", "wise", "wonderful"
];

const nouns = [
    "adventure", "artist", "captain", "champion", "chaser", "cloud", "creator", "crusader", "cyclone", "defender",
    "dreamer", "eagle", "explorer", "fighter", "flame", "genius", "gladiator", "guardian", "hero", "hunter",
    "innovator", "jaguar", "king", "knight", "legend", "lion", "magician", "master", "maverick", "ninja",
    "nomad", "owl", "panther", "pioneer", "pirate", "prodigy", "rebel", "rider", "rocket", "seeker",
    "shadow", "shark", "slayer", "star", "storm", "titan", "trailblazer", "warrior", "wolf", "wizard"
];
  
let number = Math.floor(Math.random() * 49);

function generate(){
    let adj = adjectives;
    let nns = nouns;
    return `${adj[number]} ${nns[number]}`
}

// console.log(generate())

const ethnic_names = {
    igboNames: [
        "Chinonso", "Ifeanyi", "Chimamanda", "Obinna", "Uchenna", "Amarachi", "Chukwudi", "Nkechi", "Chinedu", "Ebere",
        "Onyeka", "Ngozi", "Chidera", "Ogechi", "Chijioke", "Adaeze", "Chizoba", "Ijeoma", "Chigozie", "Ugochukwu",
        "Ezinne", "Ekene", "Chinwe", "Chinyere", "Ozioma", "Nkiruka", "Emeka", "Amaka", "Ikenna", "Uchechukwu",
        "Ogechukwu", "Chukwuma", "Nkemdilim", "Chioma", "Oluebube", "Ifunanya", "Kelechi", "Nnamdi", "Chukwuemeka", "Kosisochukwu",
        "Ifeoma", "Obiageli", "Munachimso", "Chizaram", "Somadina", "Chisom", "Chibuike", "Nnedi", "Olamma", "Chinaza"
    ],
    yorubaNames: [
        "Adeola", "Adebayo", "Ayotunde", "Babatunde", "Boluwatife", "Damilola", "Eniola", "Feyisayo", "Folashade", "Funmilayo",
        "Iretiola", "Iyabo", "Kehinde", "Kolawole", "Modupe", "Morounkeji", "Nifemi", "Oladayo", "Olamide", "Olanrewaju",
        "Olufemi", "Oluwadamilola", "Oluwakemi", "Oluwasegun", "Oluwaseun", "Omobolanle", "Omolara", "Omowumi", "Oyindamola", "Segun",
        "Temidayo", "Temilade", "Toluwalope", "Toluwanimi", "Yewande", "Abisola", "Adedayo", "Adekunle", "Ayobami", "Ayodele",
        "Ibijoke", "Ifedayo", "Ifedolapo", "Ireti", "Mobolaji", "Olajumoke", "Opeyemi", "Oluwatoyin", "Titilayo", "Yetunde"
    ],
    hausaNames: [
        "Abubakar", "Aisha", "Aliyu", "Amina", "Balaraba", "Bilkisu", "Bello", "Danjuma", "Fatima", "Faruq",
        "Gambo", "Hadiza", "Hauwa", "Hassan", "Ibrahim", "Idris", "Iliyasu", "Inna", "Jamilu", "Jibrin",
        "Kabiru", "Khadija", "Lami", "Lukman", "Magaji", "Maimuna", "Mansur", "Maryam", "Musa", "Mustapha",
        "Nafisa", "Nasiru", "Rabi", "Rabi’u", "Rahama", "Ramatu", "Sa’adu", "Safiya", "Salihu", "Sani",
        "Suleiman", "Tanimu", "Umaru", "Usman", "Yakubu", "Yusuf", "Zainab", "Zahra", "Zubairu", "Zulai"
    ]
};

function ethnicNameGenerator(nametype) {
    // Check if the ethnic group exists in the ethnic_names object
    if (ethnic_names[nametype]) {
        // Generate a random index to pick a random name
        const randomIndex = Math.floor(Math.random() * ethnic_names[nametype].length);
        return ethnic_names[nametype][randomIndex];
    } else {
        console.log("Incorrect nametype");
        return null;
    }
}

function username(name) {
    if (typeof name === "number") {
        return `incorrect typo`;
    } else {
        return `${name} ${adjectives[number]}`;
    }
}

console.log(username("elvis"))
