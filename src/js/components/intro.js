import anime from 'animejs/lib/anime.es.js';

export const setIntro=()=>{

    let letters = document.querySelectorAll(".s, .t, .o, .r, .m");  
    let raios = document.querySelectorAll(".y, #splash .cls-1");
    let cloudShader = document.querySelectorAll("#splash .cls-2");
    let overlay = document.querySelector(".overlay")
    console.log(letters)
    anime({
        targets: letters,
        opacity: [0, 1],
        scale: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 3000,
        // loop: true,
    })
    anime({
        targets: raios,
        translateX: [220, 0],
        translateY: [-340, 0],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, 1)',
        duration: 800,
        delay: 1000
    })
    anime({
        targets: cloudShader,
        opacity: [0, 1],
        duration: 2000,
        delay: 1000,
    })
    anime({
        targets: overlay,
        scale: 0,
        opacity: 0,
        duration: 1000,
        easing: 'linear',
        delay: 2500,
    })
    setTimeout(()=>{
        overlay.style.display = "none";
        document.querySelector("body").style.overflowY = 'auto';
    },3500)
}