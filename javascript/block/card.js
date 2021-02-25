/* JavaScript do Bloco de Cartões */

var $bolinha = document.querySelectorAll('.bolinha'); // guarda na var $bolinha todos os elementos que possuem a classe bolinha
//console.log($bolinha[0]);

for (let index = 0; index < $bolinha.length; index++) { // percorre escuta em todas as bolinhas de cor
    $bolinha[index].addEventListener('click', function(){ // coloquei uma escuta na primeira bolinha do primeiro card
        //console.log('Você clicou em uma bolinha!!');
        var $card = this.parentNode.parentNode.parentNode; //this é a bolinha (ou li), parentNode sobe para o pai, logo, é a ul. Como estou subindo 3x estou chegando no card.
        //console.log($card.dataset.cardcolor); //dataset retorna um json daquela propriedade data- que eu criei dentro de cada card, quando eu especifico que eu quero o cardcolor ele vai trazer o conteúdo
        $card.dataset.cardcolor = this.dataset.cardcolor; //aqui ele vai atribuir à propriedade cardcolor do card o valor do cardcolor da bolinha clicada
        //console.log($card.dataset.cardcolor);
    });    
}