
/*
// SPØRSMÅL 1
function kalk(a,b,c) {
    let plus = a+b+c;
    let min = a-b-c;
    let div = a/b/c;
    let times = a*b*c;

    return (`SUM:${plus}, MIN: ${min}`);
    
}

let tall1 = Number(prompt("Skriv tall 1"))
let tall2 = Number(prompt("Skriv tall 2"))
let tall3 = Number(prompt("Skriv tall 3"))

console.log(kalk(tall1,tall2,tall3)); 
*/


/*
// SPØRSMÅL 2

var tall1 = Math.floor(Math.random() * 11);
var tall2 = Math.floor(Math.random() * 11);


function samm(tall1,tall2) {
    if (tall1 < tall2) {
        return (tall1 + " er mindre enn " + tall2)
    } else if (tall1 > tall2) {
        return (tall1 + " er større enn " + tall2)
    } else {
        return (tall1 + " er lik " + tall2)
    }
}

console.log(samm(tall1, tall2));
*/

/*
// OPPGAVE 3


function inputTall(promptTekst) {
    return parseFloat(prompt(promptTekst));
}

function utførOperasjon(tall1, tall2, operasjon) {
    switch (operasjon) {
        case "+":
            return tall1 + tall2;
        case "-":
            return tall1 - tall2;
        case "*":
            return tall1 * tall2;
        case "/":
            return tall1 / tall2;
    }
}

function kalkulator() {
    var tall1 = inputTall("Skriv inn det første tallet:");
    var tall2 = inputTall("Skriv inn det andre tallet:");
    var operasjon = prompt("Velg en (+, -, *, /):");

    var resultat = utførOperasjon(tall1, tall2, operasjon);
    alert("Resultatet er: " + resultat);
}

kalkulator();

*/

// OPPGAVE 4

/*
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomBetween() {
    var min = parseInt(prompt("Skiv det minste tallet:"));
    var max = parseInt(prompt("Skriv det høyeste tallet:"));

    if (isNaN(min) || isNaN(max)) {
        alert("Skriv tall.");
    } else if (min >= max) {
        alert("Det minste tallet må være lavere enn det høyeste.");
    } else {
        var randomNumber = generateRandomNumber(min, max);
        alert("Et tilfeldig tall mellom " + min + " og " + max + " er: " + randomNumber);
    }
}

generateRandomBetween();

*/


/* 

// OPPGAVE 5

function Sortering() {
  var tallListe = [];
 
  for (var i = 1; i <= 5; i++) {
    var tall = parseFloat(prompt("Skriv inn tall " + i));
    tallListe.push(tall);
  }
 
  tallListe.sort(function (a, b) {
    return a - b;
  });
 
  alert(
    "Sorterte tall fra minste til største: " + tallListe.join(", ")
  );
}
 
Sortering();
*/
 
/*Oppgave 6 - utfordring
function RoykenPrint() {
    let resultat = '';
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            resultat += '<div class="rad">';
        }
        resultat += '<div class="boks">Røyken VGS</div>';
        if ((i + 1) % 3 === 0) {
            resultat += '</div>';
        }
    }
    document.body.innerHTML = resultat;
}
RoykenPrint();
*/
 
/*

// OPPGAVE 7

function finnStørsteTall() {
  var tall1 = parseFloat(prompt("Skriv inn det første tallet:"));
  var tall2 = parseFloat(prompt("Skriv inn det andre tallet:"));
  var tall3 = parseFloat(prompt("Skriv inn det tredje tallet:"));
 
  if (isNaN(tall1) || isNaN(tall2) || isNaN(tall3)) {
    alert("Vennligst skriv inn gyldige tall.");
    return;
  }
 
  var størsteTall = Math.max(tall1, tall2, tall3);
 
  alert("Det største tallet er " + størsteTall);
}
 
finnStørsteTall();
*/
 
/*

// OPPGAVE 8
function utførProsessen() {
  var startTall = parseInt(prompt("Skriv inn et heltall:"));
 
  if (isNaN(startTall) || !Number.isInteger(startTall)) {
    alert("Vennligst skriv inn et gyldig heltall.");
    return;
  }
 
  alert(startTall);
 
  while (startTall !== 1) {
    if (startTall % 2 === 0) {
      startTall = startTall / 2;
    } else {
      startTall = 3 * startTall + 1;
    }
 
    alert(startTall);
  }
}
 
utførProsessen();
*/