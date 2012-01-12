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

//2 dicas
var easy = ['carro', 'flamengo', 'esternoclidomastódeo','exemple','rodrigo','carlos','bonequinho','cerveja','sexo','drogas','futebol','alfabeto','camarada','cadeira','mesada','começo','camareira'];
//1 dica
var medium = ['carro', 'flamengo', 'esternoclidomastódeo','exemple','rodrigo','carlos','bonequinho','cerveja','sexo','drogas','futebol','alfabeto','camarada','cadeira','mesada','começo','palavras especificas da area da internet'];
//sem dicas
var hard = ['carro', 'flamengo', 'esternoclidomastódeo','exemple','rodrigo','carlos','bonequinho','cerveja','sexo','drogas','futebol','alfabeto','camarada','cadeira','mesada','começo','palavras em outras linguas'];
//...
var impossible = ['carro', 'flamengo', 'esternoclidomastódeo','exemple','rodrigo','carlos','bonequinho','cerveja','sexo','drogas','futebol','alfabeto','camarada','cadeira','mesada','começo','palavras onde o jogador so pode errar 2 letras'];



var nivel = easy ;

// Variaveis globais

var escolha= Math.random()*16;

	escolha = Math.round(escolha);

var palavra = nivel[escolha];

var tamanho_palavra = palavra.length;

var marcador = 0;

var jogador=prompt("Write your name: "); 

// O número de chances deve ser sempre 5 letras
var chances=5 ;

//if(tamanho_palavra<20 && tamanho_palavra>=10){
	//chances = 15;
//}

//if(tamanho_palavra>=20){
	//chances = 13;
//}
//else chances= 9;



var ganhou='Parabéns você ganhou '+ jogador;
//document.write(palavra);
	
    
	$('#chances').html(chances);{
		
	//Se usuario ganha ou perde
		    if(marcador == tamanho_palavra){
		    window.alert(ganhou);
		    } 
		else 
		if (chances <= 0 ){
	    $('#frase_chance').html('GAME OVER ');
	    $('#formLetra').remove();
	    }
	}
// TODO Se a palavra é numero essa lógica não rola


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
	var qtd_acertos = 0;

    // procuro a letra digitada na palavra
    for(var i = 0; i < tamanho_palavra; i++){
      if(palavra[i] == letra){
		  qtd_acertos++;
        var conteudo = $('#letra_' + i).html();
        if(conteudo == ' _ '){
          $('#letra_' + i).html(letra);
          marcador++;
        }
      }
    }
	
	if (qtd_acertos == 0) {
	  // Diminuo o numero de chances;
		 chances--;
	   $('#chances').html(chances);
	}
    
    // Limpo o valor do input 
    $('#letra').val('');

    
     
    // Se usuario ganha ou perde
    if(marcador == tamanho_palavra){
      alert(ganhou);
	  $('#form').remove();
	  $('#frase_chance').remove();
	  $('#chance').remove();
    } else if (chances <= 0){
      $('#frase_chance').remove();
	  window.alert('Perdeu '+jogador);
      window.alert('A palavra era: '+palavra);
	  $('#form').remove();
	  
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
