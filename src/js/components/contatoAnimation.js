import anime from 'animejs/lib/anime.es.js';
export const setContato = ()=>{
    let btnLast = document.querySelector('.icon:last-of-type');
    let btnFirst = document.querySelector('.icon:first-of-type');
    let btnMiddle = document.querySelector('.icon:nth-of-type(2)')
    let running
    btnFirst.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: '.icon:first-of-type img',
                scale: 1.5,
                opacity: 0,
                duration: 1000,
                begin: ()=>{
                    running = true;
                },
                complete:()=>{
                    anime({
                        targets: '.icon:first-of-type img',
                        opacity: 1,
                        scale: 1,
                        duration: 1000,
                        complete: ()=>{
                            running = false
                        }
                    })
                }
            })
        }
    })


    btnMiddle.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: '.icon:nth-of-type(2) img',
                rotate: '-90deg',
                duration: 1000,
                begin: ()=>{
                    running = true;
                },
                complete: ()=>{
                    anime({
                        targets: '.icon:nth-of-type(2) img',
                        rotate: '0',
                        duration: 1000,
                    })
                    running = false;
                }
            })
        }
    })



    btnLast.addEventListener('click', ()=>{
        if(!running){
            anime({
                targets: '.icon:last-of-type img',
                translateX: "400%",
                duration: 1000,
                easing: 'easeInOutElastic(1, .5)',
                begin: ()=>{
                    running = true;
                    document.body.style.overflowX = 'none';
                },
                complete: ()=>{                    
                    document.querySelector('.icon:last-of-type img').style.opacity = 0;
                    document.querySelector('.icon:last-of-type img').style.transform = "translateX(0)";
                    anime({
                        targets: '.icon:last-of-type img',
                        opacity: 1,
                        duration: 1000,
                    });
                    running = false;
                    document.querySelector('body').style.overflowX = 'auto';
                }
            })
        }

    })

}