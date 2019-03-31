import * as HomeAnimation from './components/homeAnimation';
import "../style/main.scss";
import {navBarInteractions} from './components/navBarInteractios';
import {setSobre} from './components/Sobre';
import {projetos} from './components/projetos';
import {clear} from './components/form';
import {setIntro} from './components/intro';
import {setContato} from './components/contatoAnimation';
import {setWaves} from './components/waves';
import "../256x256.png";
navBarInteractions();
console.log('oi')
setInterval(HomeAnimation.animation, HomeAnimation.intervaloAnimation);
// togglerSobre();
projetos();
clear();
setIntro();
setContato();
setWaves();
setSobre();
window.onbeforeunload = ()=>{
    window.scrollTo(0,0)
}
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.querySelector('html');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
    }
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
        console.log('Tap');
    }
}



