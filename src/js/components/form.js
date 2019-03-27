export const clear=()=>{let clearButton = document.querySelector('.icon')
clearButton.addEventListener('click', ()=>{
    let inputList = document.querySelectorAll('input, textarea');
    inputList.forEach(element=>{
        element.value = '';
    })
})}