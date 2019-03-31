let btns = document.querySelectorAll(".tab")



const changeSelected=(index)=>{
    console.log(index)
    setTranslate(`${index}00%`);   
    setColor(index, "white")  
}

const setTranslate=(value)=>{
    document.querySelectorAll('.btn-switcher, .txt-content').forEach(e=>{
        e.style.setProperty('--translateX', value)
    })
}

const setColor=(index, color)=>{
    setAllBtnsDefaultColor();
    btns[index].style.color = color;
}

const setAllBtnsDefaultColor=()=>{
    btns.forEach((e)=>{
        e.style.color = '#393e47';
    })
}


export const setSobre=()=>{   
    btns.forEach((element, index)=>{
        element.addEventListener('click', ()=>{
            changeSelected(index, element);
        }) 
    })
    changeSelected(0);
}