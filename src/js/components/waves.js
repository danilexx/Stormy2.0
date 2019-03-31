let btns = document.querySelectorAll('.icon, .backToTop, .app, .screenshoot, .tab');

export const setWaves = () => {
    for (var i = 0; i < btns.length; i++) {
        btns[i].onmousedown = function (e) {
            e.stopPropagation();
            var rect = e.target.getBoundingClientRect();
            
            var w = this.offsetWidth>598?598:this.offsetWidth,
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            console.log(w)
            var ripple = document.querySelector('.ripple')
            if (!ripple)
            {
                var ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.borderRadius = '50%';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.setProperty('--scale', w);
                this.appendChild(ripple);
                setTimeout(function () {
                    ripple.parentNode.removeChild(ripple);
                }, 500);
            }

        }
    }
}