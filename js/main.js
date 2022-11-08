let nome = prompt("qual'è il tuo nome");
let cognome = prompt("qual'è il tuo cognome?");
let colore = prompt("qual'è il tuo colore preferito?");
let numero1 = prompt("dammi un numero");
let numero2 =prompt("dammi un altro numero");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let summ=numero1/numero2;
summ=Math.round(summ);
let password= nome+cognome+colore+summ;

document.getElementById("password").innerHTML = password;
document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore").innerHTML = colore;
document.getElementById("numero").innerHTML = summ;
