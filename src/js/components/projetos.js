let appList = document.querySelectorAll(".apps .app")

const nextProject = () => {
    let indexAtual = getIndexAtual();
    if(window.innerWidth<=768 && indexAtual>=2 && indexAtual<appList.length-1){
        appList[indexAtual-2].style.display = 'none';
        appList[indexAtual+1].style.display = 'block';
    }
    if(window.innerWidth<=768 && indexAtual===appList.length-1){
        appList.forEach(element=>{
            element.style.display = 'block';
        })
        appList[appList.length-1].style.display = 'none';
        appList[appList.length-2].style.display = 'none';
    }

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

    let red = {
        screenshootURL: 'google',
        title: 'google',
        description: 'google lorem bla bla',
        buttonHref: 'https://www.google.com/',
    }
    let blue = {
        screenshootURL: 'facebook',
        title: 'facebook',
        description: 'facebook lorem bla bla',
        buttonHref: 'https://www.facebook.com/',
    }
    let purple = {
        screenshootURL: 'github',
        title: 'github',
        description: 'github lorem bla bla',
        buttonHref: 'https://www.github.com/',
    }
    let pokemon = {
        screenshootURL: 'pokemon',
        title: 'Pokemon ASP',
        description: 'Uma bibilioteca de pokemon',
        buttonHref: 'https://github.com/adnanioricce/PokemonOOP', 
    }
    appList.forEach(element=>{
        element.classList.remove("selected")
    })
    appList[index].classList.add('selected')

    if(appList[index].classList.contains('red')){
        updateContent(red)
    }
    if(appList[index].classList.contains('blue')){
        updateContent(blue)
    }
    if(appList[index].classList.contains('pokemon')){
        updateContent(pokemon);
    }
}
var screenshoot = document.querySelector('.screenshoot');
const updateContent=(data)=>{
    console.log(data)
    let title = document.querySelector('.title-container h1');
    let description = document.querySelector('.description-container p');
    
    let button = document.querySelector('.button-container a');
    title.innerHTML = data.title;
    description.innerHTML = data.description;

    let listaProjetos = ['google', 'facebook', 'pokemom','google','pokemon']
    listaProjetos.forEach(elemento=>{
        screenshoot.classList.remove(elemento)
    })

    screenshoot.classList.add(data.screenshootURL);

    
    button.href = data.buttonHref;
}

const resizeEvent=()=>{
    let indexAtual = getIndexAtual();
    if(window.innerWidth <= 768){
        console.log('oi')
        appList[appList.length-1].style.display = 'none';
        appList[appList.length-2].style.display = 'none';
        if(indexAtual>2)
            changeApp(0);
    }
    else{
        appList.forEach(element=>{
            element.style.display = 'block';
        })
    }
}








export const projetos=()=>{
    appList.forEach((element, index)=>{
        element.addEventListener('click', ()=>{
            changeApp(index);
        })
    })

    let rightArrow = document.querySelector('.right-arrow-container')
    let leftArrow  = document.querySelector('.left-arrow-container')
    rightArrow.addEventListener('click', nextProject)
    leftArrow.addEventListener('click', previousProject)

    window.addEventListener('resize', resizeEvent)
}