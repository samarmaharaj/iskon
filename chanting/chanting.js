const circle = document.querySelector('.circle');
        const header = document.querySelector('h1');
        const successSound = document.getElementById('success-sound');
        let circleCount = 0;
        let headerCount = 0;

        circle.addEventListener('click', () => {
            if (headerCount < 16) {
                // Trigger vibration for each click
                if (navigator.vibrate) {
                    navigator.vibrate(50); // Vibrate for 50 milliseconds
                }

                circleCount++;
                if (circleCount === 108) {
                    circleCount = 0;
                    headerCount++;
                    header.textContent = headerCount;

                    // Play success sound
                    successSound.play();

                    // Trigger vibration for 200 milliseconds
                    if (navigator.vibrate) {
                        navigator.vibrate(200);
                    }
                }
                circle.textContent = circleCount;
            }
        });