function converteMoeda(valorReais, cotacao, moeda){
    console.log(`R$ ${valorReais} vale ${cotacao * valorReais} em ${moeda}.`)

}
function recebeValor(valorReais, cotacao, moeda){
    converteMoeda(valorReais, cotacao, moeda)

}

let valorReais = prompt('Digite o valor em reais: ')
let cotacao = prompt ('Digite a cotação: ')
let moeda = prompt('Digite o nome da moeda: ')

recebeValor (valorReais, cotacao, moeda)

