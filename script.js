// TODO Monta objeto (ou array?) com várias palavras
// Organizá-las de acordo com nível de dificuldade

// TODO Modularizar?

// Usuário escolhe nivel e uma palavra é escolhida
// pra ele randomicamente

// E aí a forca começa

// Mostrar algumas imagens que mudam de acordo com a
// queda no número de chances do usuário

// Vale a pena usar apenas Js puro? Sem jQuery?


/* Variaveis globais */

// Obj com os dados sobre a palavra
var configs = new Configs(1);

var marcador = 0;

var chances = configs.chances;

var achou = false;

$(document).ready(function(){

  // Foco na input pra letra
  document.getElementById('letra').focus();

  // Informo o numero de chances
  $('#chances').html(chances);

  // É executada ao submeter o formulário
  $('#form').submit(function(){
    
    // Pega a letra inseridapelo usuário
    var letra = $('#letra').val();

    // procuro a letra digitada na palavra
    for(var i = 0; i < configs.tamanho; i++){
      if(configs.palavra[i] == letra){
        var conteudo = $('#letra_' + i).html();
        if(conteudo == ' _ '){
          $('#letra_' + i).html(letra);
          marcador++;
          achou = true;
        }
      }
    }

    // Diminuo o numero de chances;
    if(!achou){
      chances--;
      $('#chances').html(chances);
    }
    
    // Limpo o valor do input 
    $('#letra').val('');
     
    // Se usuario ganha ou perde
    if(marcador == configs.tamanho){
      $('#frase_chance').html('YOU WIN');
    } else if (chances == 0){
      $('#frase_chance').html('YOU LOSE');
      $('form').remove();
    }
    
    achou = false;
    return false;
  });

  // Inicializo espaço com as palavras
  cria_espacos(configs.palavra);
});

function Configs(p){

  switch(p){
    case 1: //easy
      this.arr = ['raiz', 'radiohead'];
      this.chances = 8;
      break;
    case 2: //medium
      this.arr = ['porrada','camareira'];
      this.chances = 5;
      break;
    default: //hard
      this.arr = ['carro', 'flamengo', 'esternoclidomastódeo','exemple','rodrigo',
                  'carlos','bonequinho','cerveja','sexo','drogas','futebol','alfabeto',
                  'camarada','cadeira','mesada','começo','camareira'];
      this.chances = 3;
  }

  this.index = Math.floor(Math.random() * this.arr.length);
  this.palavra = this.arr[this.index];
  this.tamanho = this.palavra.length
}

function cria_espacos(palavra){
  for(var i = 0; i < palavra.length; i++){
    var markup = '<span id="letra_' + i + '"> _ </span>';
    $('#palavra').append(markup); 
  }
}
