const maca = {
        value: 2,
}
const uva = {
        value: 3,
}

function mapThis(array, thisArg){
        return array.map(function(item){
                return item * this.value;
        }, thisArg);
}

const nums = [1, 3, 5];

console.log('Thisarg => maça', mapThis(nums, maca));
console.log('Thisarg => uva', mapThis(nums, uva));