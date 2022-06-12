const myArray = [30, 30, 40 , 5, 223, 2045, 3034, 5];

function valoresUnicos(array){
        const mySet = new Set(array);
        // técnica spread para transformar a Set em um Array
        return [...mySet];
}

console.log(valoresUnicos(myArray))