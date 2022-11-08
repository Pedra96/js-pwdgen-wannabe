let nome = prompt("qual'è il tuo nome");
let cognome = prompt("qual'è il tuo cognome?");
let colore = prompt("qual'è il tuo colore preferito?");
let numero = "21";

let password= nome+cognome+colore+numero;

document.getElementById("password").innerHTML = password;
document.getElementById("nome").innerHTML = nome;
