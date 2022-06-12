function filtraPar(array) {
        return array.filter(callbackPar);
}
function filtraImpar(array) {
        return array.filter(callbackImpar)
}

function callbackPar(item) {
        return item % 2 === 0;
}

function callbackImpar(item) {
        return item % 2 !== 0;
}

const myArray = [3, 76, 82, 1039, 763, 7, 88, 55, 92, 90, 122, 1];

console.log('Array de pares ->', filtraPar(myArray));
console.log('Array de impares ->', filtraImpar(myArray));