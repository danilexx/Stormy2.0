let btns = document.querySelectorAll('.icon, .backToTop, .app, .screenshoot, .tab, button, .secoes a');

export const setWaves = () => {
    btns.forEach(e=>{
        e.addEventListener('click', createRipple)
    })
}
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight)/3;

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

setTimeout(() => {
    circle.parentElement.removeChild(circle)
}, 650);
    console.log(this);

    circle.classList.add('ripple');
}