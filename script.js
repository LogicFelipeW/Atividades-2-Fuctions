function soma (n1, n2){
    return n1 + n2
}
function sub (n1, n2){
    return n1 - n2
}
function mult (n1, n2){
    return n1 * n2
}
function div (n1, n2){
    return n1 / n2
}
let op
while(op !== 0){
    op = parseFloat(prompt('Digite a opção desejada: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão\n 0 para sair.'))

    let n1 = parseFloat(prompt('Digite o primeiro numero: '))
    let n2 = parseFloat(prompt('Digite o segundo numero: '))
    
    switch(op){
        case 1: 
            alert(soma(n1, n2))

            break
        case 2:
            alert(sub(n1, n2))

            break
        case 3:
            alert(mult(n1, n2))

            break
        case 4:
            alert(div(n1, n2))

            break
    }
}