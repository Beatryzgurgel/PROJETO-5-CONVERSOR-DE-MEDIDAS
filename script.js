let meters = prompt('Digite um valor em metros:')
let choosemeters = prompt('agora,selecione uma opção abaixo para converter, entre:')
1 - milimetro(mm)
2 - centimetro(cm)
3 - decimetro(dm)
4 - decametro(dam)
5 - hectometro(hm)
6 - quilometro(km)
switch(choosemeters){
    case('mm'):
    alert('${meters} equivale a ${meters * 100}')
    break
    case('cm'):
    alert('${meters} equivale a ${meters * 100}')
    break
    case ('dm'):
    alert('${meters} equivale a ${meters * 10')
    break
    case ('dam'):
    alert('${meters} equivale a ${metrs / 1000')
    break
    case('hm'):
    alert('${meters} equivale a ${meters / 100')
    break
    case ('km'):
    alert('${meters} equivale a ${meters / 10')
    break
    default:
        console.log('opção invalida!')
}
