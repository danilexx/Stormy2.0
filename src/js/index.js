import * as HomeAnimation from './components/homeAnimation';
import "../style/main.scss";
import {navBarInteractions} from './components/navBarInteractios';
import {togglerSobre} from './components/togglerSobre';
import {projetos} from './components/projetos';
import {clear} from './components/form';
import {setIntro} from './components/intro';
import "../256x256.png";
navBarInteractions();
setInterval(HomeAnimation.animation, HomeAnimation.intervaloAnimation);
togglerSobre();
projetos();
clear();
setIntro();

window.onbeforeunload = ()=>{
    window.scrollTo(0,0)
}




