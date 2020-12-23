// Chiedere all’utente di inserire una parola.
var parolaUtente = prompt("Inserisci una parola").toLowerCase();
console.log(parolaUtente);

// Creare una funzione per capire se la parola inserita è palindroma.
function palindroma(parola) {
  return parola.split("").reverse().join("");
}


var palindroma = palindroma(parolaUtente);
console.log(palindroma);

if (parolaUtente == palindroma) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}


// var parolaUtente = prompt("Inserisci una parola").toLowerCase();
//
// function roveciaParola(parola) {
//   var parolaRovesciata = "";
//
//   for (var i = parola.length -1; i >= 0; i--) {
//     parolaRovesciata += parola[i]
//   }
//
//   return parolaRovesciata;
// }
//
// var parolaGirata = roveciaParola(parolaUtente);
//
// if (parolaUtente == parolaGirata) {
//   alert("La parola è palindroma");
// } else {
//   alert("La parola non è palindroma");
// }
