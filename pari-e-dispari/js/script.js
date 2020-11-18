// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("Pari o Dispari?");
console.log(sceltaUtente);

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeroComputer = numeroRandom(1, 5);
console.log(numeroComputer);

// Sommiamo i due numeri.
var somma = numeroUtente + numeroComputer;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function pariDispari(numero) {

  var risultato;
  if (numero % 2 == 0) {
    risultato = "Pari";
  } else {
    risultato = "Dispari";
  }
  return risultato;

}

var pariDispari = pariDispari(somma);
console.log(pariDispari);

// Dichiariamo chi ha vinto.
if (sceltaUtente == pariDispari) {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}
