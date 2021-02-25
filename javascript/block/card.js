/* JavaScript do Bloco de Cartões */

var $bolinha = document.querySelectorAll('.bolinha'); // guarda na var $bolinha todos os elementos que possuem a classe bolinha
//console.log($bolinha[0]);

for (let index = 0; index < $bolinha.length; index++) { // percorre todas as bolinhas de cor
    $bolinha[index].addEventListener('click', function(){ // coloquei uma escuta em todas as bolinhas, quando clicarem vai rodar a function
        //console.log('Você clicou em uma bolinha!!');
        var $card = this.parentNode.parentNode.parentNode; //this é a bolinha (ou li), parentNode sobe para o pai, logo, é a ul. Como estou subindo 3x estou chegando no card.
        //console.log($card.dataset.cardcolor); //dataset retorna um json daquela propriedade data- que eu criei dentro de cada card, quando eu especifico que eu quero o cardcolor ele vai trazer o conteúdo
        $card.dataset.cardcolor = this.dataset.cardcolor; //aqui ele vai atribuir à propriedade cardcolor do card clicado o valor do cardcolor da bolinha clicada
        //console.log($card.dataset.cardcolor);
        for (var i = 0; i < $bolinha.length; i++) { //esse for vai ser rodado no click da bolinha e vai correr todas as bolinhas removendo o isActive
            $bolinha[i].classList.remove('isActive');
        }
        this.classList.add('isActive'); //adiciona a classe isActive à bolinha que foi clicada


    });    
}