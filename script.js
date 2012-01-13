$(document).ready(function(){

  $('#form').hide();

  $('.nivel').click(function(){

    var nivel = $(this).attr('value');
    var configs = new Configs(nivel);

    setPalavra(configs);
    $('h1').after('<form id=recomecar> <button type=submit class="btn">Recomeçar</button> </form>');

    $('.nivel').attr('disabled','disabled');
    $(this).addClass('info');

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
    var letra = $('#letra').val().toLowerCase();

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
    return false;
  });
}

var images = [];
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


