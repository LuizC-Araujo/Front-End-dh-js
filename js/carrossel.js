  //CRIANDO CARROSSEL

  var imgs = [];
  var slider;
  var imgAtual;
  var imgMax;
  var tempo, tempoTroca;
  var vTime, vBar;
  
  //PRE CARREGAMENTO DAS IMAGENS
  function preCarregamento(){
      let b =  1;
      for(var i = 0; i < 5; i++){
          imgs[i] = new Image();
          imgs[i].src = "../img/img-carrossel/books"+b+".jpg";
          b++;
      }
  }
  
  //CARREGA IMAGEM PARA O CARROSSEL
  function carregarImg(img){
      slider.style.background = "url('"+imgs[img].src+"')";
      slider.style.backgroundSize = "100% 100%";
  }
  
  //INICIA
  function init(){
      preCarregamento();
      imgAtual = 0;
      imgMax = imgs.length - 1;
      slider = document.getElementById("dh_carousel");
      vBar = document.getElementById("dv_bar");
      carregarImg(imgAtual);
      tempoTroca = 0;
      anima();
  }
  
  //TROCA IMAGEM DO CARROSSEL
  function trocarImagem(direction){
      tempoTroca = 0;
      imgAtual+=direction;
      if(imgAtual > imgMax)
          imgAtual = 0;
      else if(imgAtual < 0)
          imgAtual = imgMax;
      carregarImg(imgAtual);
  }
  
  function anima(){
      tempoTroca++;
      if(tempoTroca > 300){
          tempoTroca = 0;
          trocarImagem(1);
      }
      vTime = tempoTroca / 3;
      vBar.style.width = vTime+"%";
      window.requestAnimationFrame(anima);    
  }
  
  //TROCAR IMAGENS PELOS BOTÕES
  const trocarImagemParaTras = document.getElementById("btn_carousel_ant");
  trocarImagemParaTras.addEventListener("click", function(){
      trocarImagem(-1);
  });
  
  const trocarImagemParaFrente = document.getElementById("btn_carousel_prox");
  trocarImagemParaFrente.addEventListener("click", function(){
      trocarImagem(1);
  })

  window.addEventListener("load", init);