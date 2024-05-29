function createAbout(){
    const container = document.createElement('div');
    container.classList.add('aboutContainer');

    const phoneNumber = document.createElement('div');
    phoneNumber.textContent = "☎️ +91 123 456 789 ";
    container.appendChild(phoneNumber);
    
    const address = document.createElement ('div');
    address.textContent = "🏠 Maharaja's Chicken, Chandni Chowk, Delhi, India";
    container.appendChild(address);

    const location = document.createElement('div');
    location.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.166914941274!2d77.22860932704393!3d28.65234736693285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1716998547896!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    container.appendChild(location);
    return container;
}
export default createAbout;
