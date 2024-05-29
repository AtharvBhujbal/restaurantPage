import createHome from './home';
import createAbout from './about';
import createMenu from './menu';
import './style.css';
import gitLogoImg from './github-logo.jpg'
// console.log("Hello There,My name is Atharv");

const homebtn = document.getElementById('home');
const aboutbtn = document.getElementById('about');
const menubtn = document.getElementById('menu');


function btnCall(){
    const content = document.getElementById('content');
    switch(this.textContent){
        case 'Menu':
            content.textContent='';
            content.appendChild(createMenu());
            break;
        case 'About':
            content.textContent='';
            content.appendChild(createAbout());
            break;
        default:
            content.textContent='';
            content.appendChild(createHome());
    }
}

homebtn.addEventListener("click", btnCall);
aboutbtn.addEventListener("click", btnCall);
menubtn.addEventListener("click", btnCall);
homebtn.click();

function createHeader(){
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const resturantName = document.createElement('h1');
    resturantName.textContent = "Maharaja's Chicken";
    header.insertBefore(resturantName,navbar);
}

function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = "Copyright © AtharvBhujbal 2024";
    const gitlink = document.createElement('a');
    gitlink.href = 'https://github.com/AtharvBhujbal';
    const githubLogo = document.createElement('img');
    githubLogo.src = gitLogoImg;
    githubLogo.alt = "Github Logo";
    gitlink.appendChild(githubLogo)
    footer.appendChild(gitlink);
    // const body = document.getElementsByTagName('body');
    document.body.appendChild(footer);
}
createHeader();
createFooter();