import Gumshoe from "gumshoejs/dist/gumshoe.js";
import SmoothScroll from 'smooth-scroll';
import anime from 'animejs/lib/anime.es.js';

//Istancia a Nav
let navBar = document.querySelector("nav")
//Instancializa o Botão Hamburguer
let toggler = document.querySelector(".toggler-btn")

//Expande ou Esconde a navBar no modo para celulares
const toggleNavbar = event =>{

    //Verifica se a tela é de fato para celulares ou tables pequenos
    if(window.innerWidth <= 768)
    {
        //Toggla a classe "Expand" na navBar
        navBar.classList.toggle("expand")

        //Toggla a classe "Changed" para o togglerButton
        toggler.classList.toggle("changed")
    }
    
}

//Retorna ViewPort Height do valor no parametro
export const getVH = (i)=>(window.innerHeight/100) * i

//Retorna o Offset da Navbar
const getOffset = ()=>window.innerWidth<=768?getVH(10):0;

//Função que seta as interações da navbar
export const navBarInteractions=()=>{

    //Da a função de click para o Botão Hamburguer
    toggler.addEventListener('click', toggleNavbar)

    //Instancializa os botões da Navbar
    let btnsDaNavBar = document.querySelectorAll("nav ul li")
    //Da a função de esconder o menu quando clicados
    btnsDaNavBar.forEach(element=>{
        element.addEventListener('click', toggleNavbar)
    })

    //Instancializa o Gumshoe
    let spy = new Gumshoe('nav a', 
    {offset: getOffset()}
    )
    let spy2 = new Gumshoe(' button a, .secoes a'
    )
    //Instancializa o SmoothScroll
    let scroll = new SmoothScroll('nav a, button a, .secoes a:nth-of-type(2), .secoes a:nth-of-type(3), .secoes a:nth-of-type(4)',
    {offset: getOffset()}
    );

    // setInterval(()=>{
    //         if(window.scrollY > getVH(20))
    //             navBar.classList.remove('big')
    //         else if (!navBar.classList.contains('big'))
    //             navBar.classList.add('big')

    // },1);
    const backToTop=()=>{
        // window.scrollTo(0,0)
        const scrollElement = window.document.scrollingElement;
        anime({
            targets: scrollElement,
            scrollTop: 0,
            duration: 750,
            easing: 'easeInOutQuad'
        })
    }

        window.addEventListener('scroll',()=>{
            if(window.scrollY > getVH(80))
                navBar.classList.remove('big')
            else if (!navBar.classList.contains('big'))
                navBar.classList.add('big')    

            if(window.scrollY > getVH(10))
                document.querySelector(".backToTop").classList.add('show');
            else{
                document.querySelector(".backToTop").classList.remove('show');
            }
        })

        document.querySelector(".backToTop").addEventListener('click', backToTop)

        //corrige um bug
        document.querySelector('.secoes a[href="#Inicio"]').onclick = backToTop       


}
