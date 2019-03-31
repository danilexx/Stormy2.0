import * as HomeAnimation from './components/homeAnimation';
import "../style/main.scss";
import {navBarInteractions} from './components/navBarInteractios';
import {togglerSobre} from './components/togglerSobre';
import {projetos} from './components/projetos';
import {clear} from './components/form';
import {setIntro} from './components/intro';
import {setContato} from './components/contatoAnimation';
import "../256x256.png";
navBarInteractions();
console.log('oi')
setInterval(HomeAnimation.animation, HomeAnimation.intervaloAnimation);
togglerSobre();
projetos();
clear();
setIntro();
setContato();
window.onbeforeunload = ()=>{
    window.scrollTo(0,0)
}




function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
    while (el) {
    if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
        var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
        xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
        yPosition += (el.offsetTop - yScrollPos + el.clientTop);
    }else {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    }
    el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}
console.log(getPosition(document.querySelector('.icon')))