// script.js
document.querySelector('.btn').addEventListener('click', () => {
    alert('Sign In button clicked!');
});

const emailInput = document.querySelector('.email-input');
const getStartedBtn = document.querySelector('.btn-red-sem');

getStartedBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        alert(`Welcome! Membership started for: ${email}`);
    } else {
        alert('Please enter a valid email address!');
    }
});


document.getElementById("logo").addEventListener("click",function(){

    let isLoggedIn = false;

    if(isLoggedIn){
        wind
    }

});

const movieGrid = document.querySelector('.movie-grid');

movieGrid.addEventListener('wheel', (event) => {
    event.preventDefault();
    movieGrid.scrollLeft += event.deltaY;
});



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Change the icon dynamically
        const icon = item.querySelector('.toggle-icon');
        icon.textContent = item.classList.contains('active') ? '×' : '+';
    });
});