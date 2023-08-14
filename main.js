function TocaSom(idElementoAudio){
    var elemento = document.querySelector(idElementoAudio);
    
    if(elemento && elemento.localName === 'audio'){
        if(elemento.play){
            elemento.currentTime = 0;
            elemento.play();
            
        }else{
            elemento.play();
        }
    }else{
        console.log('Elemento ou seletor não encontrado')
    }
    
};

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instumento = tecla.classList[1];
    
    const idAudio = `#som_${instumento}`;

    tecla.onclick = function (){
        TocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            ListaDeTeclas[contador].classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        ListaDeTeclas[contador].classList.remove('ativa');
    }
}