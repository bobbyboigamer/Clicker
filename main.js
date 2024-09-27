document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('noob-button');
    
    let counterValue = 0;
    const counterElement = document.querySelector('.counter');

    button.addEventListener('click', function() {
        incrementCounter();
    });

    function incrementCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
    }
});
