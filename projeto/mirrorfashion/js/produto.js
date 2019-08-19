//cria uma referência em memória para o objeto
// "tamanho" (input=range) do HTML
// querySelector sempre retorna um objeto do HTML //Retorna null se não encontrar
var inputTamanho = document.querySelector('#tamanho');

// cria uma referência para o output "valorTamanho"
var outputTamanho = document.querySelector('[name=valorTamanho]');

//ao trocar de valor chame a função anonima para mudar o valor
inputTamanho.oninput = function() {
    // atribui o valor do input à tag output
    outputTamanho.value = inputTamanho.value;
}