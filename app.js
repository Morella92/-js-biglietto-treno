
const titleElement = document.getElementById("ticket-price")
console.log(titleElement)
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il numero di chilometri che vuole percorrere
const kmNumber = parseInt( prompt ('Quanti kilometri vuoi percorrere?') ) 
console.log('Numero kilometri da percorrere:' + kmNumber)

// età del passeggero
const agePassenger = parseInt ( prompt('Quanti anni hai?') )
console.log('Età passeggero:' + agePassenger)

// 1-il prezzo del biglietto è definito in base ai km (0.21 € al km)
const ticketPrice = parseFloat ( 0.21 * kmNumber)
console.log('Prezzo del biglietto in base alla tratta:' + ticketPrice)

let discount = 0

// 2-va applicato uno sconto del 20% per i minorenni
// 3-va applicato uno sconto del 40% per gli over 65
// 4- Prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)


if (agePassenger <= 18) {
    discount = 0.2;  
} else if (agePassenger >= 65) {
    discount = 0.4;
    // let discountPrice = (ticketPrice - (ticketPrice * discount))
    // let roundedPrice = parseFloat(discountPrice.toFixed(2))
    // console.log('Il prezzo scontato è:' + roundedPrice)
}

let discountPrice = (ticketPrice - (ticketPrice * discount)) 
let roundedPrice = parseFloat(discountPrice.toFixed(2))
console.log('Il prezzo scontato è:' + roundedPrice)

document.write('Il prezzo scontato è: ' + roundedPrice)