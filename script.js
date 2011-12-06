// TODO Monta objeto (ou array?) com várias palavras
// Organizá-las de acordo com nível de dificuldade

// TODO Modularizar?

// Usuário escolhe nivel e uma palavra é escolhida
// pra ele randomicamente

// E aí a forca começa

// Tocar Cannibal Corpse conforme o número de chances
// for diminuindo? Começar com uma música bem fácil?

// Mostrar algumas imagens que mudam de acordo com a
// queda no número de chances do usuário

// Mostrar zumbis?

// Vale a pena usar apenas Js puro? Sem jQuery?

// ...

var obj = ['carro', 'flamengo', 'esternoclidómastódeo'];

// Variaveis globais
var palavra = obj[2];

var tamanho_palavra = palavra.length;

var marcador = 0;

// TODO Se a palavra é numero essa lógica não rola
// O número de chances deve ser sempre limitado
// a talvez apenas metade de letras do número do alfabeto
var chances = tamanho_palavra * 2;

var marcador_pra_chances = 0;

$(document).ready(function(){

  // Foco na input pra letra
  $('#letra').focus();

  // Informo o numero de chances
  $('#chances').html(chances);

  // É executada ao submeter o formulário
  $('#form').submit(function(){
    
    // Pega o valor do input com id letra
    var letra = $('#letra').val();

    // procuro a letra digitada na palavra
    for(var i = 0; i < tamanho_palavra; i++){
      if(palavra[i] == letra){
        var conteudo = $('#letra_' + i).html();
        if(conteudo == ' _ '){
          $('#letra_' + i).html(letra);
          marcador++;
        }
      }
    }
    
    // Limpo o valor do input 
    $('#letra').val('');

    // Diminuo o numero de chances;
    chances--;
    $('#chances').html(chances);
     
    // Se usuario ganha ou perde
    if(marcador == tamanho_palavra){
      alert('aaaaaaaah moleque');
    } else if (chances == 0){
      $('#frase_chance').html('Perdeu playboy');
      $('form').remove();
    }

    return false;
  });

  // Inicializo espaço com as palavras
  cria_espacos(palavra);
});

function cria_espacos(palavra){
  for(var i = 0; i < palavra.length; i++){
    var markup = '<span id="letra_' + i + '"> _ </span>';
    $('#palavra').append(markup); 
  }
}
