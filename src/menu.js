import butterChickenImg from './Butter-Chicken.jpg';
import chickenKebabImg from './Chicken-Kebab.jpg';
import chickenBiryani from './chicken-biryani.jpg'
function createMenu(){
    const container = document.createElement('div');
    container.classList.add('menuContainer');

    const card1 = document.createElement('div');
    card1.classList.add('card');
    const card1Img = document.createElement('img');
    card1Img.src = butterChickenImg;
    card1Img.alt = "Butter Chicken";
    card1Img.classList.add('cardImg');
    card1.appendChild(card1Img);
    const card1text = document.createElement('h3');
    card1text.textContent = "Butter Chicken";
    card1.appendChild(card1text);
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const card2Img = document.createElement('img');
    card2Img.src = chickenKebabImg ;
    card2Img.alt = "Chicken Kebab";
    card2Img.classList.add('cardImg');
    card2.appendChild(card2Img);
    const card2text = document.createElement('h3');
    card2text.textContent = "Chicken Kebab";
    card2.appendChild(card2text);
    container.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const card3Img = document.createElement('img');
    card3Img.src = chickenBiryani ;
    card3Img.alt = "Chicken Biryani";
    card3Img.classList.add('cardImg');
    card3.appendChild(card3Img);
    const card3text = document.createElement('h3');
    card3text.textContent = "Chicken Biryani";
    card3.appendChild(card3text);
    container.appendChild(card3);

    return container;
}
export default createMenu;
