
const titleElement = document.getElementById("ticket-price")
console.log(titleElement)
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//1- il numero di chilometri che vuole percorrere
const kmNumber = parseFloat( prompt ('Quanti kilometri vuoi percorrere?') ) 
console.log('Numero kilometri da percorrere:' + kmNumber)

//2- età del passeggero
const agePassenger = parseInt ( prompt('Quanti anni hai?') )
console.log('Età passeggero:' + agePassenger)

//3-il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = parseFloat ( 0.21 * kmNumber)
// prima dichiarare prezzo base = a 0.21 e poi fare il calcolo
console.log('Prezzo del biglietto in base alla tratta:' + ticketPrice)

let discount = 0

// 4-va applicato uno sconto del 20% per i minorenni
// 5-va applicato uno sconto del 40% per gli over 65

if (agePassenger <= 18) {
    discount = 0.2;  
    // discount = ticketprice * 0.2
} else if (agePassenger >= 65) {
    discount = 0.4;
    // discount = ticketprice * 0.4
}

let discountPrice = (ticketPrice - (ticketPrice * discount)) 

// 6- Prezzo finale va messo fuori in forma umana (con massimo due decimali, 
// per indicare centesimi sul prezzo)
let roundedPrice = parseFloat(discountPrice.toFixed(2))
console.log('Il prezzo scontato è:' + roundedPrice)

document.write('Il prezzo scontato è: ' + roundedPrice)