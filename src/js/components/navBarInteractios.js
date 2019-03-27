import Gumshoe from "gumshoejs/dist/gumshoe.js";
import SmoothScroll from 'smooth-scroll';

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
const getVH = (i)=>(window.innerHeight/100) * i

//Retorna o Offset da Navbar
const getOffset = ()=>window.innerWidth===768?getVH(10):getVH(10.1)

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
    let spy = new Gumshoe('nav ul a', {offset: getOffset()})

    //Instancializa o SmoothScroll
    let scroll = new SmoothScroll('a[href*="#"]',{offset: getOffset()});

    setInterval(()=>{
            if(window.scrollY > getVH(20))
                navBar.classList.remove('big')
            else if (!navBar.classList.contains('big'))
                navBar.classList.add('big')
        },1);

        window.addEventListener('scroll',()=>{
            if(window.scrollY > getVH(80))
                navBar.classList.remove('big')
            else if (!navBar.classList.contains('big'))
                navBar.classList.add('big')               
        })

}
