function comparaNumeros (num1, num2){
        const frase1 = iguais(num1, num2);
        const frase2 = maiorMenor(num1, num2);
        return `${frase1} ${frase2}`;
}

function iguais(num1, num2){
        let saoIguais = "";
        if (num1 !== num2){
                saoIguais = "não";                
        }
        return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function maiorMenor(num1, num2){
        let soma = num1 + num2;  
        let dez = "menor";
        let vinte = "menor";     
        
        if (soma > 10) {
             dez = "maior";   
        }
        if (soma > 20){
                vinte = "maior";
        }
        return `Sua soma é ${soma}, que é ${dez} que 10 e ${vinte} que 20.`;
}

console.log(comparaNumeros(5, 2))
