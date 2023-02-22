const words = ["almalé", "bab", "csirke", "dinnye", "eper", "fagylalt", "gördeszka", "hajó", "iskola", "jégkorong", "kézilabda", "labda", "madár", "napszemüveg", "olvasás"];
let randomIndex;
let randomWord;
let underscore;
var proba;
var probaltbetuk;
var allprobaltbetuk;
var input;

const tippbtn = document.getElementById("tipp");
let imagesrc;

setup();

tippbtn.addEventListener("click", tippeles);


function setup() {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    probaltbetuk = [];
    allprobaltbetuk = [];
    proba = 0;

    underscore = "";
    for (let i = 0; i < randomWord.length; i++) {
        underscore += "_";
    }

    document.getElementById("word").innerHTML = underscore;
    kep();
}

function tippeles() {
    input = document.getElementById("input").value;
    const regex = /[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]/;
    if (input == "") {
        alert("Írj be egy betűt!");
        return;
    }

    if (input.length != 1) {
        alert("Csak egy betűt adj meg!");
        document.getElementById("input").value = "";
        return;
    }

    if (regex.test(input)) {
        alert("Csak betűt adj meg!");
        document.getElementById("input").value = "";
        return;
    }

    if (allprobaltbetuk.includes(input)) {
        alert("Ezt már próbáltad!")
        document.getElementById("input").value = "";
        return;
    }

    if (randomWord.includes(input) && !probaltbetuk.includes(input)) {
        const indexek = [];
        let index = randomWord.indexOf(input);
        while (index !== -1) {
            indexek.push(index);
            index = randomWord.indexOf(input, index + 1);
        }

        let chars = underscore.split("");
        for (let i = 0; i < indexek.length; i++) {
            chars[indexek[i]] = input;
        }
        underscore = chars.join("");
        document.getElementById("word").innerHTML = underscore;
        document.getElementById("input").value = "";
        allprobaltbetuk.push(input);
        if (!underscore.includes('_')) {
            alert("Gratulálok, kitaláltad!")
            if (confirm("Szeretnéd újrakezdeni?")) {
                setup();
            }
        }

    }
    else if (allprobaltbetuk.includes(input)) {
        alert("Ezt már próbáltad!")
        document.getElementById("input").value = "";
    }
    else {
        proba += 1;
        probaltbetuk.push(input);
        allprobaltbetuk.push(input);
        kep();
        document.getElementById("input").value = "";
        document.getElementById("probaltbetuk").innerHTML = probaltbetuk.join(', ')
    }
}



function kep() {
    switch (proba) {
        case 0:
            imagesrc = "akasztofa_forras/forras/akasztofa00.png";
            break;
        case 1:
            imagesrc = "akasztofa_forras/forras/akasztofa01.png";
            break;
        case 2:
            imagesrc = "akasztofa_forras/forras/akasztofa02.png";
            break;
        case 3:
            imagesrc = "akasztofa_forras/forras/akasztofa03.png";
            break;
        case 4:
            imagesrc = "akasztofa_forras/forras/akasztofa04.png";
            break;
        case 5:
            imagesrc = "akasztofa_forras/forras/akasztofa05.png";
            break;
        case 6:
            imagesrc = "akasztofa_forras/forras/akasztofa06.png";
            break;
        case 7:
            imagesrc = "akasztofa_forras/forras/akasztofa07.png";
            break;
        case 8:
            imagesrc = "akasztofa_forras/forras/akasztofa08.png";
            break;
        case 9:
            imagesrc = "akasztofa_forras/forras/akasztofa09.png";
            break;
        case 10:
            imagesrc = "akasztofa_forras/forras/akasztofa10.png";
            break;
        case 11:
            imagesrc = "akasztofa_forras/forras/akasztofa11.png";
            break;
        case 12:
            imagesrc = "akasztofa_forras/forras/akasztofa12.png";
            break;
        case 13:
            imagesrc = "akasztofa_forras/forras/akasztofa00.png";
            if (confirm("Sajnos ez nem sikerült!\nA helyes válasz " + randomWord + " volt." + "\nSzeretnéd újrakezdeni?")) {
                setup();
            }
            break;
        default:
            break;
    }
    document.getElementById("image").src = imagesrc;
}



