const listaCompras = [
        {
                nome: 'sabão',
                preco: 21,
        },
        {
                nome: 'detergente',
                preco: 16,
        },
        {
                nome: 'sabonete',
                preco: 27,
        },
        {
                nome: 'shampoo',
                preco: 23,
        },
];

const saldoInicial = 100;

function calculaSaldo(saldo, lista){
        return lista.reduce(callback, saldoInicial);
}

function callback(prev, current){
        return prev - current.preco;
}

console.log('O saldo Final é de R$', calculaSaldo(saldoInicial, listaCompras), ',00.');