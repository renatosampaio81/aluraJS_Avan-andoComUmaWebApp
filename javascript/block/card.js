/* JavaScript do Bloco de Cartões */

var $bolinha = document.querySelectorAll('.bolinha'); // guarda na var $bolinha todos os elementos que possuem a classe bolinha
//console.log($bolinha[0]);
$bolinha[0].addEventListener('click', function(){ // coloquei uma escuta na primeira bolinha do primeiro card
    console.log('Você clicou no primeiro elemento');
});