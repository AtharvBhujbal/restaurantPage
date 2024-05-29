import createHome from './home';
import createAbout from './about';
import createMenu from './menu';
// console.log("Hello There,My name is Atharv");
const homebtn = document.getElementById('home');
const aboutbtn = document.getElementById('about');
const menubtn = document.getElementById('menu');


function btnCall(){
    const content = document.getElementById('content');
    switch(this.textContent){
        case 'Menu':
            content.textContent = createMenu();
            break;
        case 'About':
            content.textContent = createAbout();
            break;
        default:
            content.textContent = createHome();
    }
}

homebtn.addEventListener("click", btnCall);
aboutbtn.addEventListener("click", btnCall);
menubtn.addEventListener("click", btnCall);
homebtn.click();
