export const togglerSobre = ()=>{
    //Instancializa o Botão
    let sobreBtn = document.querySelector('.btns')

    //Instancializa o TextSwitcher que é onde a magica acontece
    let switcher = document.querySelector('.txtSwitcher')

    const toggleSobre = ()=>{
        //Toggla a classe do Botão
        sobreBtn.classList.toggle('inverted');

        //Toggla a classe do Switcher
        switcher.classList.toggle('switch');
    }
    //Da uma função para o botão
    sobreBtn.addEventListener('click', toggleSobre)
}

