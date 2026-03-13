/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

//Function
function getInitials(names) {
    const initials = []
    for (let i = 0; i < names.length; i++) {
        const thisName = names[i]
        const thisInitial = thisName[0]
        initials.push(thisInitial)
    }
    return initials
}

//Arrow Function

/*
const getInitials = names => {
    const initials = []
    for (let i = 0; i < names.length; i++) {
        const thisName = names[i]
        const thisInitial = thisName[0]
        initials.push(thisInitial)
    } 
    return initials
}
*/

// Invoca la funzione qui e stampa il risultato in console
const firstInitial = getInitials(names)
console.log(firstInitial);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]