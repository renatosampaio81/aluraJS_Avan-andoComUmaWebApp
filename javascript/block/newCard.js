/* trata do JS para o bloco da app que insere novos cards */

/* o $ significa que a var guarda um elemento do HTML */
var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');

$newCard.addEventListener('submit',function(event) { // fica ouvindo o newcard, ao executar o submit ele executa a função
    if ($newCardContent.value == '') { //se o form de criação de card estiver vazio
        event.preventDefault(); //evita o comportamento padrao de enviar o formulário ao clicar em submit
        console.log('está vazio !');
    }
})

