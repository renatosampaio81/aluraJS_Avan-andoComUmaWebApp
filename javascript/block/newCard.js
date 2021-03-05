/* trata do JS para o bloco da app que insere novos cards */

/* o $ significa que a var guarda um elemento do HTML */
var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCardContent.addEventListener('input', function(){ //fica ouvindo a entrada de dados (input) do carmpo textarea, e na alteração executa a função
    //console.log('ouvindo')
    var $error = document.querySelector('.error');

    if ($error != null) { // se existe mensagem de erro, executa
        $error.remove(); // remove a mensagem de erro
    };
});

$newCard.addEventListener('submit',function(event) { // fica ouvindo o newcard, ao executar o submit ele executa a função
    event.preventDefault(); //evita o comportamento padrao de enviar o formulário ao clicar em submit
    
    if ($newCardContent.value == '') { //se o form de criação de card estiver vazio    
        if (document.querySelector('.error') == null) { //verifica se ja existe um objeto com a classe error criado
            var $error = document.createElement('span'); //cria um elemento spam caso o form esteja vazio
            $error.classList.add('error'); // crio uma classe error para o span
            $error.textContent = 'Por favor, preencha o campo acima'; //o conteúdo do spam
            //pra colocar um conteudo dentro de um formulario (input, ou tudo dentro de um form).. se utiliza value
            //pra colocar conteúdo dentro de parágrafo, spam, h1.. se utiliza o textContent
            
            $newCard.insertBefore($error, $newCardAction);
            // insere lá no html o span que foi criado ANTES do botao submit (que lá é um input)
            // IMPORTANTE, o insertBefore tem que ser uma propriedade do pai do input, que no caso é o form (newcard) 
        };
    } else {
        var $wrapCard = document.querySelector('.wrap-cards');
        var $card = document.querySelector('.card');
        var $copyCard = $card.cloneNode(true); // clona um cartao  // o true indica que ele vai copiar os filhos também
        
        $copyCard.querySelector('.card-content').textContent = $newCardContent.value;
        //copia pro textContent do cartao clonado o valor contido no form de inserção de novos cards
        //fazemos o query selector no copyCard porque eu nao quero mudar o textContent do cartao, e sim do paragrafo (que é a classe card-content)
        
        $wrapCard.insertBefore($copyCard, $card);
    };
});

