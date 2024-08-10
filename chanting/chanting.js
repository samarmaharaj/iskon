const circle = document.querySelector('.circle');
const header = document.querySelector('h1');
let circleCount = 0;
let headerCount = 0;

circle.addEventListener('click', () => {
    if (headerCount < 16) {
        circleCount++;
        if (circleCount === 108) {
            circleCount = 0;
            headerCount++;
            header.textContent = headerCount;

            // Trigger vibration for 200 milliseconds
            if (navigator.vibrate) {
                navigator.vibrate(200);
            }
        }
        circle.textContent = circleCount;
    }
});