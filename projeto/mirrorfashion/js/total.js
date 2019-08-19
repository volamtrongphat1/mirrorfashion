var inputQtd = document.querySelector('#qtd');
var outputTotal = document.querySelector('#total');

inputQtd.oninput = function() {
var preco = document.querySelector('#preco').textContent;
preco = preco.replace('R$' , '')
preco = preco.replace(',' , '.')

var total = inputQtd.value * preco;
outputTotal.value = `R$ ${total.toFixed(2).replace('.' , ',')}`;
}   