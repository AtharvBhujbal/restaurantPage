import chef from './chef.jpg';
function createHome(){
    const container = document.createElement('div');
    container.classList.add('homeContainer')
    
    const text1 = document.createElement('span');
    text1.textContent = "Best Indian Cuisine Chicken";
    container.appendChild(text1);

    const chefImg = document.createElement('img');
    chefImg.classList.add('chefImg');
    chefImg.src = chef;
    chefImg.alt = "Chef Image";
    container.appendChild(chefImg);
    
    const text2 = document.createElement('span');
    text2.textContent = "Serving since 1959";
    container.appendChild(text2);
    
    return container;
}
export default createHome;
