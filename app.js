// 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//
// 
// 
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// il numero di chilometri che vuole percorrere
const kmNumber = parseInt( prompt ('Quanti kilometri vuoi percorrere?') ) 
console.log(kmNumber)

// età del passeggero
const agePassenger = parseInt ( prompt('Quanti anni hai?') )
console.log(agePassenger)

// 1-il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = parseFloat ( 0.21 * kmNumber)
console.log(ticketPrice)

let discount = 0

// 2-va applicato uno sconto del 20% per i minorenni
// 3-va applicato uno sconto del 40% per gli over 65

if (agePassenger <= 18) {
    discount = 0.2;
    console.log(ticketPrice * discount)
} else if (agePassenger >= 65) {
    discount = 0.4;
    console.log(ticketPrice * discount)
}


