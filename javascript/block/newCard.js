/* trata do JS para o bloco da app que insere novos cards */

/* o $ significa que a var guarda um elemento do HTML */
var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCard.addEventListener('submit',function(event) { // fica ouvindo o newcard, ao executar o submit ele executa a função
    if ($newCardContent.value == '') { //se o form de criação de card estiver vazio
        event.preventDefault(); //evita o comportamento padrao de enviar o formulário ao clicar em submit
        //console.log('está vazio !');
        
        if (document.querySelector('.error') == null) { //verifica se ja existe um objeto com a classe error criado
            var $error = document.createElement('span'); //cria um elemento spam caso o form esteja vazio
            $error.classList.add('error'); // crio uma classe error para o span
            $error.textContent = 'Por favor, preencha o campo acima'; //o conteúdo do spam
            //pra colocar um conteudo dentro de um formulario (input, ou tudo dentro de um form).. se utiliza value
            //pra colocar conteúdo dentro de parágrafo, spam, h1.. se utiliza o textContent
            $newCard.insertBefore($error, $newCardAction);
            // insere lá no html o span que foi criado ANTES do botao submit (que lá é um input)
            // IMPORTANTE, o insertBefore tem que ser uma propriedade do pai do input, que no caso é o form (newcard) 
        }
    }
})

