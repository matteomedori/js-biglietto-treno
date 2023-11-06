"use strict";

// chiede all'utente km da percorrere e età che converto in int
const kmDaPercorrere = parseInt(
  prompt("Inserisci il numero di km da percorrere")
);
const eta = parseInt(prompt("Inserisci la tua età"));

// calcolo prezzo del biglietto senza sconti
let prezzoBiglietto = kmDaPercorrere * 0.21;

// controllo se ci sono sconti da applicare
if (eta < 18) {
  prezzoBiglietto *= 0.8;
} else if (eta >= 65) {
  prezzoBiglietto *= 0.6;
}

console.log(`Km da percorrere: ${kmDaPercorrere}
età: ${eta}
prezzo del biglietto: ${prezzoBiglietto.toFixed(2)} €`);
