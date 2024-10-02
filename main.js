let totalNoobs = localStorage.getItem('totalNoobs') ? parseInt(localStorage.getItem('totalNoobs')) : 0;

function updateTabTitle() {
    const currentTitle = document.title;
    const parts = currentTitle.split('-');
    const noobsCount = parseInt(parts[0]);
    const appName = parts[1];
    
    const newTitle = `${totalNoobs} Noobs - Noob Clicker`;
    document.title = newTitle;
}

updateTabTitle();

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('noob-button');
    const counterElement = document.querySelector('.counter');

    counterElement.textContent = totalNoobs + " Noobs";

    button.addEventListener('click', function(event) {
        totalNoobs++;
        counterElement.textContent = totalNoobs + " Noobs";

        updateTabTitle();

        localStorage.setItem('totalNoobs', totalNoobs);

        showPlusOne(event);

        button.style.transform = 'scale(1.05)';
        setTimeout(function() {
            button.style.transform = 'scale(1)';
        }, 100);
    });

    function showPlusOne(event) {
        const plusOne = document.createElement('span');
        plusOne.textContent = '+1';
        plusOne.classList.add('plus-one');

        document.body.appendChild(plusOne);
        const buttonRect = button.getBoundingClientRect();
        plusOne.style.left = `${event.clientX}px`;
        plusOne.style.top = `${event.clientY}px`;

        setTimeout(function() {
            plusOne.remove();
        }, 1000);
    }
});
