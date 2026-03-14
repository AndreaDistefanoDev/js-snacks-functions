/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function getOnlyVowels (text) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let textVowels = '';
    
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (vowels.includes(letter)) {
            textVowels += letter;
        }
    } 
    return textVowels;
}

// Invoca la funzione qui e stampa il risultato in console
const result = getOnlyVowels(word);
console.log(result.length);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)