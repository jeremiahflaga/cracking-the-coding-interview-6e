// Jboy Flaga
// Start: July 4, 2018 10:14 PM
// O(n) algo: traverse string then update map if character occurs
//              then return true if everything in map is true, 
//              return false otherwise

const allEnglishAlphabet = 'abcdefghijklmnopqrstuvwxyz';

function isUnique(strInput) {
    
    var mapOfAlphaWithOccurence = new Map(); // about Map() - https://macwright.org/2017/03/13/maps-not-strictly-better.html#introducing-the-map

    for (let i = 0; i < allEnglishAlphabet.length; i++) {
        const char = allEnglishAlphabet.charAt(i);
        mapOfAlphaWithOccurence.set(char, false);
    }

    for (let i = 0; i < strInput.length; i++) {
        const char = strInput.charAt(i);
        mapOfAlphaWithOccurence.set(char, true);
    }

    for (let key of mapOfAlphaWithOccurence.keys()) {
        if (mapOfAlphaWithOccurence.get(key) === false)
            return false;
    }

    return true;
}

console.log(isUnique("a")); // false
console.log(isUnique(allEnglishAlphabet)); // true
console.log(isUnique("a".repeat(24))); // false
console.log(isUnique("a".repeat(25))); // false
console.log(isUnique(allEnglishAlphabet.repeat(2))); // true

