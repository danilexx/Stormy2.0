let toggler = document.querySelector(".toggler-btn")
var listItems = document.querySelector("nav")
const toggleNavbar = ()=>{
    if(window.innerWidth <= 768)
    {
        listItems.classList.toggle("expand")
        toggler.classList.toggle("changed")
    }
    
}
toggler.addEventListener('click', toggleNavbar)
let Items = document.querySelectorAll("nav ul li")
Items.forEach(element=>{
    element.addEventListener('click', toggleNavbar)
})


const getVH = (i)=>{
    return (window.innerHeight/100) * i
}
var spy = new Gumshoe('nav ul a',{
    offset: ()=>{return window.innerWidth===768?getVH(10.1):getVH(10.2)}
});
var scroll = new SmoothScroll('a[href*="#"]',{
    offset: ()=>{return window.innerWidth===768?getVH(10.1):getVH(10.2)}
});

const getRandomNumber =(min, max)=>{
    return Math.floor(Math.random() * (+max - +min)) + +min
}
var elements = document.querySelectorAll('#left-icons .cls-1, #right-icons .cls-1');
var counter;
setInterval(() => {
    for(let i = 0; i<8; i++)
    {
        let indexElemento = getRandomNumber(0, elements.length)
        let randomN = getRandomNumber(-10, 10)
        anime({
            targets: elements[indexElemento],
            translateX: randomN,
            translateY: randomN,
            // rotate: randomR,
            easing: 'linear'
        });
    }
    counter++;
    if(counter === 8){
        for(let i = 0; i<elements.length; i++)
        {
            anime({
                targets: elements[i],
                translateX: 0,
                translateY: 0,
                // rotate: randomR,
                easing: 'linear'
            });
        }
    }
    
}, 200);

let btns = document.querySelector('.btns')
let switcher = document.querySelector('.txtSwitcher')
let isSmall =  screen.width<=768;
const toggleSobre = ()=>{
    btns.classList.toggle('inverted');
    switcher.classList.toggle('switch');
}
const updateEvents = ()=>{
    if (screen.width<=768)
    {
        btns.removeEventListener('click', toggleSobre)
        btns.addEventListener('touchstart', toggleSobre)
    }
    else{
        btns.removeEventListener('touchstart',toggleSobre)
        btns.addEventListener('click', toggleSobre)
    }
}
window.addEventListener('resize', updateEvents)
updateEvents();


window.addEventListener('scroll',()=>{
    if(window.scrollY > getVH(80))
        listItems.classList.remove('big')
    else if (!listItems.classList.contains('big'))
        listItems.classList.add('big')

        
})

var appList = document.querySelectorAll(".apps .app")
const changeApp=(index)=>{
    let red = {
        screenshootURL: '../assets/google.png',
        title: 'google',
        description: 'google lorem bla bla',
        buttonHref: 'https://www.google.com/',
    }
    let blue = {
        screenshootURL: '../assets/facebook.png',
        title: 'facebook',
        description: 'facebook lorem bla bla',
        buttonHref: 'https://www.facebook.com/',
    }
    let purple = {
        screenshootURL: '../assets/github.png',
        title: 'github',
        description: 'github lorem bla bla',
        buttonHref: 'https://www.github.com/',
    }
    appList.forEach(element=>{
        element.classList.remove("selected")
    })
    appList[index].classList.add('selected')
    classesAlvo = appList[index].classList;
    if(classesAlvo.contains('red')){
        updateContent(red)
    }
    if(classesAlvo.contains('blue')){
        updateContent(blue)
    }
    if(classesAlvo.contains('purple')){
        updateContent(purple);
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
    screenshoot.style.backgroundImage = `url(${data.screenshootURL})`;
    button.href = data.buttonHref;
}
appList.forEach((element, index)=>{
    element.addEventListener('click', ()=>{
        changeApp(index);
    })
})

let rightArrow = document.querySelector('.right-arrow-container')
let leftArrow  = document.querySelector('.left-arrow-container')
const getIndexAtual=()=>{
    for(let i = 0; i<appList.length; ++i){
        if (appList[i].classList.contains("selected")){
            return i;
        } 
    }   
}
rightArrow.addEventListener('click', event => {
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
})
leftArrow.addEventListener('click', event => {
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
})
window.addEventListener('resize', ()=>{
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
})

let clearButton = document.querySelector('.icon')
console.log(clearButton)
clearButton.addEventListener('click', ()=>{
    let inputList = document.querySelectorAll('input, textarea');
    inputList.forEach(element=>{
        element.value = '';
    })
})
// while (appList.length>5){

// }
