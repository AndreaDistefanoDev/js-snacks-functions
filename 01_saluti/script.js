/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
//Function
function userWelcome(text) {
    const hello = 'Ciao ' + text
  return hello  
} 

///Arrow Function


// Invoca la funzione qui e stampa il risultato in console
const firstWelcome = userWelcome(userName)
console.log(firstWelcome);






//Risultato atteso se si passa 'Mario': // ciao Mario
