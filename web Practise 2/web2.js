
src = "https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"

var menubtn = document.getElementById('menubtn')
var sidenav = document.getElementById('sidenav')

sidenav.style.right = '-250px';

menubtn.onclick = function () {
    if (sidenav.style.right == '-250px') {
        sidenav.style.right = '0'
    }
    else {
        sidenav.style.right = '-250px'
    }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});
