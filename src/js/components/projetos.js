import anime from 'animejs/lib/anime.es.js';
let appList = document.querySelectorAll(".apps .app")

const nextProject = () => {
    let indexAtual = getIndexAtual();
    if (indexAtual == appList.length - 1) {
        changeApp(0);
    } else {
        changeApp(++indexAtual);
    }
}
const previousProject = () => {
    let indexAtual = getIndexAtual();
    if (indexAtual == 0) {
        changeApp(appList.length - 1);
    } else {
        changeApp(--indexAtual);
    }
}

const getIndexAtual = () => {
    //TODO trocar por alguma high order function
    for (let i = 0; i < appList.length; ++i) {
        if (appList[i].classList.contains("selected")) {
            return i;
        }
    }
}

const changeApp = (index) => {

    let reactCalc = {
        screenshootURL: 'reactCalc',
        title: 'React Calculator',
        description: 'Uma calculadora simples feita com React',
        buttonHref: 'https://www.google.com/',
    }
    let withoff = {
        screenshootURL: 'withoff',
        title: 'Withofft',
        description: 'Ecommerce voltado a pessoas jovens e descoladas como você que esta lendo',
        buttonHref: 'https://www.facebook.com/',
    }
    let audlePlayer = {
        screenshootURL: 'audlePlayer',
        title: 'Audle Music Player',
        description: 'Um music player comum',
        buttonHref: 'https://www.github.com/',
    }
    let pokemon = {
        screenshootURL: 'pokemon',
        title: 'Pokemon ASP',
        description: 'Uma bibilioteca de pokemon',
        buttonHref: 'https://github.com/adnanioricce/PokemonOOP',
    }
    let consumoCerto = {
        screenshootURL: 'consumoCerto',
        title: 'Consumo Certo',
        description: 'Uma aplicativo para calcular seus gastos',
        buttonHref: 'https://github.com/adnanioricce/PokemonOOP',
    }
    appList.forEach(element => {
        element.classList.remove("selected")
    })
    appList[index].classList.add('selected')

    if (appList[index].classList.contains('consumoCerto')) {
        updateContent(consumoCerto)
    }
    if (appList[index].classList.contains('reactCalc')) {
        updateContent(reactCalc)
    }
    if (appList[index].classList.contains('withoff')) {
        updateContent(withoff);
    }
    if (appList[index].classList.contains('audlePlayer')) {
        updateContent(audlePlayer);
    }
    if (appList[index].classList.contains('pokemon')) {
        updateContent(pokemon);
    }

}

const updateContent = (data) => {
    let title = document.querySelector('.title-container h1');
    let description = document.querySelector('.description-container p');
    let screenshoot = document.querySelector('.screenshoot');
    let button = document.querySelector('.button-container a');
    title.innerHTML = data.title;
    description.innerHTML = data.description;
    let list = ['consumoCerto', 'reactCalc', 'withoff', 'audlePlayer', 'pokemon']
    list.forEach((e)=>{
        screenshoot.classList.remove(e)
    })
    screenshoot.classList.add(data.screenshootURL);
    button.href = data.buttonHref;
}


export const projetos = () => {
    var i = 2000;
    var timer
    var time
    timer = setInterval(nextProject, i)
    appList.forEach((element, index) => {
        element.addEventListener('click', () => {
            changeApp(index);
            clearInterval(timer);
            time = setTimeout(() => {
                clearInterval(timer);
                timer = setInterval(nextProject, i)
            }, 2000);

        })
    })

    // let rightArrow = document.querySelector('.right-arrow-container')
    // let leftArrow  = document.querySelector('.left-arrow-container')
    // rightArrow.addEventListener('click', nextProject)
    // leftArrow.addEventListener('click', previousProject)



    // window.addEventListener('resize', resizeEvent)
    var running = false;
    //Hero Animation/Interaction
    const togglarImg = () => {
        let img = document.querySelector('.screenshoot');

        
        console.log(running)
        // if(running)
        //     return false
        if (!running) {
            if (img.classList.contains('over')) {
                anime({
                    targets: img,
                    opacity: 0,
                    duration: 500,
                    easing: 'linear',
                    begin: () => {
                        document.querySelector("body").style.overflowY = 'auto';
                        document.querySelector('.backToTop').style.visibility = '';
                        document.querySelector('.backToTop').style.opacity = '';
                        running = true
                    },
                    complete: () => {
                        img.classList.remove('over'),
                            anime({
                                targets: img,
                                opacity: 1,
                                duration: 500,
                                easing: 'linear',
                            })
                        running = false;
                        clearInterval(timer);                        
                        setTimeout(() => {
                            clearInterval(timer);
                            timer = setInterval(nextProject, i)
                        }, 2000);
                    }
                })
            } else {
                clearInterval(timer);
                clearTimeout(time);
                anime({
                    targets: img,
                    opacity: 0,
                    duration: 500,
                    easing: 'linear',
                    begin: () => {
                        running = true;
                        document.querySelector('.backToTop').style.visibility = 'hidden';
                        document.querySelector('.backToTop').style.opacity = '0';
                    },
                    complete: () => {
                        anime({
                            targets: img,
                            opacity: 1,
                            duration: 500,
                            easing: 'linear',
                        })
                        img.classList.add('over');
                        document.querySelector("body").style.overflowY = 'hidden';
                        running = false;

                    }

                })
            }
        }

    }
    const zoom = () => {
        let img = document.querySelector('.screenshoot')
        togglarImg();
        if(running)
            return false

        let close = document.querySelector('.closeBtn');
        if (close) {
            document.body.removeChild(close);
            img.removeEventListener('click', zoom);
            setTimeout(() => {
                img.addEventListener('click', zoom)
            }, 1000)
        } else {
            let close = document.createElement('div');
            close.classList.add('closeBtn')
            close.addEventListener('click', zoom);
            document.body.appendChild(close);
        }







    }
    let img = document.querySelector('.screenshoot')
    img.addEventListener('click', zoom)

}