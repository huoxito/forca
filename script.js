$(document).ready(function(){

  $('#form').hide();
  loadImages();

  $('.nivel').click(function(){

    var nivel = $(this).attr('value');
    var configs = new Configs(nivel);

    setPalavra(configs);
    $('h1').after('<form id=recomecar> <button type=submit class="btn">Recomeçar</button> </form>');

    // desabilito botoes de nivel e add class no escolhido
    $('.nivel').attr('disabled','disabled');
    $(this).addClass('info');

    $('#form').show();

    // Foco na input pra letra
    document.getElementById('letra').focus();

    // Informo o numero de chances
    $('#chances').html(configs.chances);
    logica(configs);

    return false;
  });

});

// preeche element com espacos de acordo com numero de chars na palavra
// também exibe a dica
//
function setPalavra(configs){
  var markup = '';
  for(var i = 0; i < configs.tamanho; i++){
    markup += '<span id="letra_' + i + '"> _ </span>';
  }
  $('#palavra').append(markup); 
  $('#dica').append(configs.dica); 
}

// onde a coisa acontece
//
function logica(configs){

  // se letra inserida foi encontrada ou não
  var achou = false;

  // marca quantas letras foram encontradas na palavra
  var marcador = 0;

  $('#form').submit(function(){
    
    // Pega a letra inserida pelo usuário
    var letra = $('#letra').val();

    // procuro a letra digitada na palavra
    for(var i = 0; i < configs.tamanho; i++){
      if(accentProof(configs.palavra[i]) == accentProof(letra)){
        var conteudo = $('#letra_' + i).html();
        if(conteudo == ' _ '){
          $('#letra_' + i).html(configs.palavra[i]);
          marcador++;
          achou = true;
        }
      }
    }

    // Se usuario ganha
    if(marcador == configs.tamanho){
      setImage('win');
      $("#form :input").attr("disabled", true);
      $('#frase_chance').html('');
    }

    // Diminuo o numero de chances;
    if(!achou){
      configs.chances--;
      if(configs.chances == 0){
        $('#frase_chance').html('Erre mais não brother ...');
        $('#frase_chance').css('color', 'red');
      }else{
        $('#chances').html(configs.chances);
      }
      setImage(configs.chances);
    }

    // Se usuario perde
    if(configs.chances < 0){
      setImage('lose');
      $("#form :input").attr("disabled", true);
      $('#frase_chance').html('');
    }
    
    // Limpo o valor do input 
    $('#letra').val('');
    
    achou = false;

    // nao request pro servidor, prevent default
    return false;
  });
}

// global var
var images = [];

// carrega images no background pra depois serem inseridas
//
function loadImages(){
  for(var i = 1; i < 10; i++){
    var image = new Image();
    images[i] =  image.src  = 'images/forca_' + i + '_.png';
  }
  var win = new Image();
  win.src  = 'images/win.png';

  var lose = new Image();
  lose.src  = 'images/lose.png';
}

// muda imagem dependendo das chances ou situação no jogo
//
function setImage(chances){
  switch(chances){
    case 'win': 
      $("#image").attr("src", 'images/win.png');
      break;
    case 'lose':
      $("#image").attr("src", 'images/lose.png');
      break;
    default:
      $("#image").attr("src", images[chances-1]);
  }
}

// trata palavras acentuadas pra que usuario nao precise
// inserir palavras com acentos
//
function accentProof(l){
  var r=l.toLowerCase();
  r = r.replace(new RegExp("\\s", 'g'),"");
  r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
  r = r.replace(new RegExp("ç", 'g'),"c");
  r = r.replace(new RegExp("[èéêë]", 'g'),"e");
  r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
  r = r.replace(new RegExp("ñ", 'g'),"n");                            
  r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
  r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
  r = r.replace(new RegExp("\\W", 'g'),"");
  return r;
}


