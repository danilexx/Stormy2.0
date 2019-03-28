let appList = document.querySelectorAll(".apps .app")
const nextProject = (e) => {
    console.log(e);
    if(e)
        console.log(manualmente);
    let indexAtual = getIndexAtual();
    // if(window.innerWidth<=768 && indexAtual>=2 && indexAtual<appList.length-1){
    //     appList[indexAtual-2].style.display = 'none';
    //     appList[indexAtual+1].style.display = 'block';
    // }
    // if(window.innerWidth<=768 && indexAtual===appList.length-1){
    //     appList.forEach(element=>{
    //         element.style.display = 'block';
    //     })
    //     appList[appList.length-1].style.display = 'none';
    //     appList[appList.length-2].style.display = 'none';
    // }

    if(indexAtual==appList.length-1){
        console.log('ultimo')
        changeApp(0);
    } 
    else{
        changeApp(++indexAtual);
    }       
}
const previousProject = () => {
    let indexAtual = getIndexAtual();

    if(window.innerWidth<=768 && indexAtual<3 && indexAtual>0){
        appList[indexAtual-1].style.display = 'block';
        appList[indexAtual+2].style.display = 'none';
    }
    if(window.innerWidth<=768 && indexAtual==0){
        appList.forEach(element=>{
            element.style.display = 'none';
        })
        appList[appList.length-1].style.display = 'block';
        appList[appList.length-2].style.display = 'block';
        appList[appList.length-3].style.display = 'block';
        changeApp(appList.length-1);
    } 
    if(indexAtual==0){
        changeApp(appList.length-1);
    } 
    else{
        changeApp(--indexAtual);
    }       
}

const getIndexAtual=()=>{
    for(let i = 0; i<appList.length; ++i){
        if (appList[i].classList.contains("selected")){
            return i;
        } 
    }   
}

const changeApp=(index)=>{

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
    appList.forEach(element=>{
        element.classList.remove("selected")
    })
    appList[index].classList.add('selected')

    if(appList[index].classList.contains('consumoCerto')){
        updateContent(consumoCerto)
    }
    if(appList[index].classList.contains('reactCalc')){
        updateContent(reactCalc)
    }
    if(appList[index].classList.contains('withoff')){
        updateContent(withoff);
    }
    if(appList[index].classList.contains('audlePlayer')){
        updateContent(audlePlayer);
    }
    if(appList[index].classList.contains('pokemon')){
        updateContent(pokemon);
    }
    
}

const updateContent=(data)=>{
    console.log(data)
    let title = document.querySelector('.title-container h1');
    let description = document.querySelector('.description-container p');
    let screenshoot = document.querySelector('.screenshoot');
    let button = document.querySelector('.button-container a');
    title.innerHTML = data.title;
    description.innerHTML = data.description;
    screenshoot.className = `screenshoot ${data.screenshootURL}`;
    button.href = data.buttonHref;
}

let timer

export const projetos=()=>{
    timer = setInterval(nextProject, 2000)
    appList.forEach((element, index)=>{
        element.addEventListener('click', ()=>{
            changeApp(index);
            clearInterval(timer);
            setTimeout(() => {
                timer = setInterval(nextProject, 2000)
            }, 4000);
        })
    })

    // let rightArrow = document.querySelector('.right-arrow-container')
    // let leftArrow  = document.querySelector('.left-arrow-container')
    // rightArrow.addEventListener('click', nextProject)
    // leftArrow.addEventListener('click', previousProject)

    
    
    // window.addEventListener('resize', resizeEvent)
}