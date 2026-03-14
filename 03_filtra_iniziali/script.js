/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

//Function
function filterByChar(list, character) {
    const finalArray = []
    for (let i = 0; i < list.length; i++) {
        const listNames = list[i]
        const initialChar = listNames[0]
        if (initialChar.toUpperCase() === character.toUpperCase()) {
            finalArray.push(listNames)
        }

    }
    return finalArray
}

//Arrow Function
/*
const filterByChar = (list, character) => {
    const finalArray = []
    for (let i = 0; i < list.length; i++) {
        const listNames = list[i]
        const initialChar = listNames[0]
        if (initialChar.toUpperCase() === character.toUpperCase())
            finalArray.push(listNames)
        
    }
    return finalArray
}*/
// Invoca la funzione qui e stampa il risultato in console
const finalArray = filterByChar(names, 'A')
console.log(finalArray);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]