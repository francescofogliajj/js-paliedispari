// Chiedere all’utente di inserire una parola.
var parolaUtente = prompt("Inserisci una parola");
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
