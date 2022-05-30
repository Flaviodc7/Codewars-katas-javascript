// Kata finalizado el 20/05/2022

function anagrams(word, words) {
    let result = [];
    // se separan las cadenas, se ordenan bajo un mismo criterio (sort) y luego se comparan
    words.map(a => {
        if (word.split("").sort().join("") === a.split("").sort().join("")) {
            result.push(a);
        }
    })
    return result;
}