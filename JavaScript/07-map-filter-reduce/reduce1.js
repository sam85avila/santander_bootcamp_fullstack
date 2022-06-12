function soma(array) {
        return array.reduce(function (prev, current) {
                return prev + current;
        });
}

const myArray = [23, 16, 10, 52, 18];

console.log(soma(myArray))
