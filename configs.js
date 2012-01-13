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
          ['capricórnio','QUAL SERIA SEU SIGNO SE VOCÊ NASCESSE NO DIA DO ANO NOVO?'],
          ['mouse','EQUIPAMENTO UTILIZADO NA INFORMATICA'],
          ['perfume','LÍQUIDO FEITO DE FLORES'],
          ['carneiro','ANIMAL QUE SIMBOLIZA SACRIFÍO FEITO POR DEUS '],
          ['vinho','BEBIDA FEITA DE UVA'],
          ['fultebol','ESPORTE JOGADO EM TODO O MUNDO'],
          ['madrugada','entre a noite e o dia']
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
          ['scoobydoo','CACHORRO MEDROSO DE DESENHO ANIMADO'],
          ['rodolfo','NO PROGRAMA DO GUGU, EM 2005, COMO SE CHAMAVA O COMPANHEIRO DO ET?'],
          ['computador','SERVE PARA ARMAZENAR E PROCESSAR DADOS'],
          ['cadeira','OBJETO DE MADEIRA'],
          ['chuck norris','CRIOU A ARTE MARCIAL Chun Kuk Do'],
          ['artigos',' PÁGINAS QUE CONTÉM INFORMAÇÃO SOBRE ALGUM ASSUNTO'],
          ['casamento','ATO DE SACRAMENTO'],
          ['aniversario','ANO DEPOIS DO NASCIMENTO'],
          ['teclado','INSTRUMENTO MÚSICAL'],
          ['hamburguer','ALIMENTO PROVENIENTE DA CULTURA NORTE AMERICANA'],
          ['papagaio','IMITADOR DA VOZ HUMANA'],
          ['bola de gude','antigo briquedo feito vidro']
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
          ['medicina intensivista','ESPECIALIDADE DA MEDICINA'],
          ['programmateur','PROGRAMADOR EM FRANCÊS'],
          ['poculum','BEBIDA EM LATIM'],
          ['canibalismo','ATO DE COMER A PRÓPRIA ESPÉCIE'],
          ['guarda roupa','APELIDO DE HOMEM MUITO FORTE'],
        ];
        this.chances = 3;
    }

  this.index = Math.floor(Math.random() * this.arr.length);
  this.palavra = this.arr[this.index][0];
  this.dica = this.arr[this.index][1];
  this.tamanho = this.palavra.length
}
