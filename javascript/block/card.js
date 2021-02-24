/* JavaScript do Bloco de Cartões */

var $bolinha = document.querySelectorAll('.bolinha'); // guarda na var $bolinha todos os elementos que possuem a classe bolinha
//console.log($bolinha[0]);

for (let index = 0; index < $bolinha.length; index++) { // percorre escuta em todas as bolinhas de cor
    $bolinha[index].addEventListener('click', function(){ // coloquei uma escuta na primeira bolinha do primeiro card
        console.log('Você clicou !!');
    });    
}