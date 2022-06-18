function validaArray(array, num) {
    try {
        if (!array && !num)
            throw new ReferenceError("Envie os parametros");

        if (typeof array !== 'object')
            throw new TypeError("O array precisa ser do tipo object");

        if (typeof num !== 'number')
            throw new TypeError("O número precisa ser do tipo number");

        if (array.length !== num)
            throw new RangeError("Array inválido!");

        return array;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.message);
        } else {
            console.log("Erro inesperado... ", e);
        }
    }
}

console.log(validaArray());
console.log(validaArray(5, 5));
console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3], 3));