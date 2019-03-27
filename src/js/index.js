import * as HomeAnimation from './components/homeAnimation';
import "../style/main.scss";
import {navBarInteractions} from './components/navBarInteractios';
import {togglerSobre} from './components/togglerSobre';
import {projetos} from './components/projetos';
navBarInteractions();
setInterval(HomeAnimation.animation, HomeAnimation.intervaloAnimation);
togglerSobre();
projetos();










let clearButton = document.querySelector('.icon')
console.log(clearButton)
clearButton.addEventListener('click', ()=>{
    let inputList = document.querySelectorAll('input, textarea');
    inputList.forEach(element=>{
        element.value = '';
    })
})
window.onbeforeunload = ()=>{
    window.scrollTo(0,0)
}