//Importar AnimeJs ferramenta utilizada para animação
import anime from 'animejs/lib/anime.es.js';

//Retorna um numero aleatorio entre min e max
const getRandomNumber =(min, max)=>{
    return Math.floor(Math.random() * (+max - +min)) + +min
}

//elementos que serão animados, no caso uma lista de svgs dentro de dois ids
var elementos = document.querySelectorAll('#left-icons .cls-1, #right-icons .cls-1');

//intervalo entre cada ciclo de animação
export let intervaloAnimation = 200;

//se explica
let quantidadeDeAlvosParaAnimação = 8

//animação em si
export const animation = () => {

    //instancialização da variavel que controlará quando a animação devera ser reinicializada
    let counter;

    //anima uma quantidade X de elementos
    for(let i = 0; i<quantidadeDeAlvosParaAnimação; i++)
    {
        //Pega um index aleatorio
        let indexElemento = getRandomNumber(0, elementos.length)

        //Pega um numero aleatorio de -10 até 10
        let randomN = getRandomNumber(-10, 10)

        //Anima um elemento aleatorio com numeros aleatorios
        anime({
            targets: elementos[indexElemento], //Alvo
            translateX: randomN, //Posição Horizontal
            translateY: randomN, //Posição Vertical
            // rotate: randomR, //Rotação (Desativada)
            easing: 'linear' // Forma da animação
        });
    }

    counter++; //Notifica que mais uma animação foi ativada

    if(counter === quantidadeDeAlvosParaAnimação){ //Verifica se as animações ja bateram o maximo para poder ser resetada

        //Volta todos os elementos para o ponto inicial
        elementos.forEach(elementos=>{

            anime({
                targets: elementos,
                translateX: 0,
                translateY: 0,
                // rotate: randomR,
                easing: 'linear'
            });

        })
    }
    
}

//Animação, intervalo entre cada animação, a cada X animações todos os svgs voltam a sua posição normal
