function mapNoThis(array){
        return array.map(function (item){
                return item * 2;
        });
}

const myArray = [1, 2, 8, 4];

console.log(mapNoThis(myArray));