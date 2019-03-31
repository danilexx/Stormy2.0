import anime from 'animejs/lib/anime.es.js';
export const setContato = ()=>{
    let btnLast = document.querySelector('.icon:last-of-type');
    let btnFirst = document.querySelector('.icon:first-of-type');
    let btnMiddle = document.querySelector('.icon:nth-of-type(2)')
    let icone = document.querySelector('.icon:last-of-type');
    let running
    btnFirst.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: btnFirst,
                scale: 2,
                opacity: 0,
                duration: 1000,
                begin: ()=>{
                    running=true;
                },
                complete:()=>{
                    btnFirst.style.transform = 'scale(1)';
                    anime({
                        targets: btnFirst,
                        opacity: 1,
                        duration: 1000,
                        complete: ()=>{
                            running=false
                        }
                    })
                }
            })
        }
    })


    btnMiddle.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: btnMiddle,
                rotate: '-60deg',
                duration: 1000,
                complete: ()=>{
                    anime({
                        targets: btnMiddle,
                        rotate: '0',
                        duration: 1000,
                    })
                }
            })
        }
    })



    btnLast.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: icone,
                backgroundPositionX: ['50%',"200%"],
                duration: 1000,
                easing: 'easeInOutElastic(1, .5)',
                begin: ()=>{
                    running = true;
                },
                complete: ()=>{                    
                    icone.style.opacity = 0;
                    icone.style.backgroundPosition = '50%, 50%';
                    anime({
                        targets: icone,
                        opacity: 1,
                        duration: 1000,
                    });
                    running = false;
                    document.querySelector('body').style.overflowX = 'auto';
                }
            })
        }

    })


    let btns = document.querySelectorAll('.icon, .backToTop, .app, .ValoresContainer');

    for (var i = 0; i < btns.length; i++) {
        btns[i].onmousedown = function(e) {
            e.stopPropagation();
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left,
                y = e.clientY - rect.top,
                w = this.offsetWidth;
            var ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top  = y + 'px';
            ripple.style.setProperty('--scale', w);
            this.appendChild(ripple);
            setTimeout(function() {
                ripple.parentNode.removeChild(ripple);
            }, 500);
    }
}

}