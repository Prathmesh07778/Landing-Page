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




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Change the icon dynamically
        const icon = item.querySelector('.toggle-icon');
        icon.textContent = item.classList.contains('active') ? '×' : '+';
    });
});