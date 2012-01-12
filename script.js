$(document).ready(function(){

  $('#form').hide();

  $('.nivel').click(function(){

    var nivel = $(this).val();

    var configs = new Configs(nivel);

    setPalavra(configs);

    $('.nivel').attr('disabled','disabled');
    $('#nivelinfo').html('Nivel ' + nivel);

    loadImages();

    $('#form').show();

    // Foco na input pra letra
    document.getElementById('letra').focus();

    // Informo o numero de chances
    $('#chances').html(configs.chances);
    logica(configs);

    return false;
  });

});

function Configs(p){

  switch(p){
    case 'facil': //easy
      this.arr = [['raiz', 'parte de uma planta'], ['radiohead', 'uma banda inglesa']];
      this.chances = 8;
      break;
    case 'medio': //medium
      this.arr = [['porrada', 'Uma agressão'], ['Zico', 'Jogador de futebol']];
      this.chances = 5;
      break;
    default: //hard
      this.arr = [['carro', 'Um automóvel'], ['flamengo', 'Time de futebol'], ['esternoclidomastódeo', 'Musculo do corpo humano']];
      this.chances = 3;
  }

  this.index = Math.floor(Math.random() * this.arr.length);
  this.palavra = this.arr[this.index][0];
  this.dica = this.arr[this.index][1];
  this.tamanho = this.palavra.length
}

function setPalavra(configs){
  var markup = '';
  for(var i = 0; i < configs.tamanho; i++){
    markup += '<span id="letra_' + i + '"> _ </span>';
  }
  $('#palavra').append(markup); 
  $('#dica').append(configs.dica); 
}

function logica(configs){

  var achou = false;
  var marcador = 0;

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
      setImage(configs.chances);
      configs.chances--;
      $('#chances').html(configs.chances);
    }
    
    // Limpo o valor do input 
    $('#letra').val('');
     
    // Se usuario ganha ou perde
    if(marcador == configs.tamanho){
      $('#frase_chance').html('YOU WIN');
    } else if (configs.chances == 0){
      $('#frase_chance').html('YOU LOSE');
      $("#form :input").attr("disabled", true);
    }
    
    achou = false;
    return false;
  });
}

var images = [];
function loadImages(){
  for(var i = 1; i < 10; i++){
    var image = new Image();
    images[i] =  image.src  = 'images/forca_' + i + '.jpg';
  }
}

function setImage(chances){
  $("#image").attr("src", images[chances-1]);
}
