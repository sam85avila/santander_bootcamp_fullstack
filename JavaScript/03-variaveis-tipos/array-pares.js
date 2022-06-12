function substituirPares(array){
        if(!array) return -1;
        if(!array.length) return -1;

        for(let i = 0; i < array.length; i++){
                if(array[i] === 0) {
                        console.log(`O ${array[i]} já é igual a zero!`);
                } else if((array[i] % 2 === 0) && (array[i] !== 0)){
                        console.log(`Substituindo ${array[i]} por zero!`);
                        array[i] = 0;
                }                 
        } 
        return array;
}

let arr = [1, 0, 4, 54, 67, 98, 241, 21, 44, 0, 88, 103, 10];
console.log(substituirPares(arr));
