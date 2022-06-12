function calculaIdade(anos) {
        return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
        nome: "Mary",
        idade: 17
}

const pessoa2 = {
        nome: "June",
        idade: 35
}  

const pessoa3 = {
        nome: "John",
        idade: 42
}
// uso call
console.log(calculaIdade.call(pessoa1, 15));
// uso do apply
console.log(calculaIdade.apply(pessoa2, [20]));
