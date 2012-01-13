$(document).ready(function(){

  $('#form').hide();

  $('.nivel').click(function(){

    var nivel = $(this).val();

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

function Configs(p){

//switch das palavras

switch(p){
    case 'facil': //easy
      this.arr = 
	  [
	 	  ['chacrinha', 'QUEM REPROVAVA OS CALOUROS EM SEU PROGRAMA TOCANDO UMA BUZINA?'],
	 	  ['corinthians', 'QUAL É O TIME DO CORAÇÃO DO PADRE MARCELO ROSSI?'],
		  ['sede','COMO SE DENOMINA O LUGAR ONDE SE FIXA UM GOVERNO?'],
		  ['despensa','QUE NOME SE DÁ AO LUGAR ONDE SE GUARDAM OS MANTIMENTOS?'],
		  ['trenó','QUAL O VEÍCULO PROVIDO DE ESQUIS NO LUGAR DAS RODAS QUE SE USA PRA DESLIZAR SOBRE O GELO OU A NEVE?'],
		  ['camaleão','QUAL O ANIMAL QUE MUDA DE COR?'],
		  ['minie','QUEM É A NAMORADA DO MICKEY?'],
		  ['cuba','QUE PAÍS TEVE FIDEL CASTRO COMO PRESIDENTE?'],
		  ['segurança','ANTES DE CASAR COM ANA MARIA BRAGA, CARLOS MADRULHA EXERCIA QUAL PROFISSÃO?'],
		  ['capricórnio','QUAL SERIA SEU SIGNO SE VOCÊ NASCESSE NO DIA DO ANO NOVO?']
	  ];
      this.chances = 8;
      break;
    case 'medio': //medium
      this.arr =
	  [
	    ['verde', 'QUAL A COR ASSOCIADA A GRUPOS ECOLÓGICOS?'],
      ['vaticano', 'QUAL O NOME DA ÁREA EM ROMA NA QUAL VIVE O PAPA?'],
		  ['romeu','QUEM FOI O GRANDE AMOR DE JULIETA?'],
		  ['irmãos','QUE PARENTESCO TEM OS CANTORES GIAN E GIOVANI?'],
		  ['gretchen','MARIA ODETE BRITO DE MIRANDA É O NOME VERDADEIRO DE QUAL CANTORA?'],
		  ['cebolinha','QUAL PERSONAGEM DA TURMA DA MÔNICA TEM CINCO FIOS DE CABELO?'],
		  ['wanderléia','QUAL É A CANTORA QUE TINHA O APELIDO DE "TERNURINHA" NA ÉPOCA DA JOVEM GUARDA?'],
		  ['chororó','A ATRIZ E CANTORA SANDY É FILHA DE QUAL CANTOR?'],
		  ['scoobydoo','NOS DESENHOS ANIMADOS, COMO SE CHAMA O CACHORRO MEDROSO DO SALSICHA?'],
		  ['rodolfo','NO PROGRAMA DO GUGU, EM 2005, COMO SE CHAMAVA O COMPANHEIRO DO ET?']
	  ];
      this.chances = 5;
      break;
    default: //hard
      this.arr =
	  [
	    ['carro', 'Um automóvel'],
	    ['flamengo', 'Time de futebol'],
		  ['esternoclidomastódeo', 'Musculo do corpo humano'],
		  ['duas','QUANTAS DENTIÇÕES TEM O SER HUMANO DURANTE A VIDA?'],
		  ['goleiro','EDINHO, FILHO DE PELÉ, JOGOU NO SANTOS EM QUE POSIÇÃO?'],
		  ['diamante','QUAL É A PEDRA PRECIOSA MAIS DURA ENCONTRADA NA NATUREZA?'],
		  ['feiticeira','JOANA PRADO É O NOME VERDADEIRO DE QUAL ARTISTA DA DÉCADA DE 90?'],
		  ['hollywood','QUAL É A CAPITAL DO CINEMA MUNDIAL?'],
		  ['são vicente','O PRIMEIRO ENGENHO DE AÇÚCAR FOI FUNDADO EM 1533. EM QUAL CIDADE ISSO ACONTECEU?'],
		  ['equador','EM QUAL PAÍS SURGIRAM OS CHAPÉUS PANAMÁ?'],
	  ];
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
