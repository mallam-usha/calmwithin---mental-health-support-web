import confetti from 'confetti-js';

document.addEventListener('DOMContentLoaded', () => {
    // Mood Check Modal
    const moodCheckButton = document.getElementById('moodCheckButton');
    const moodCheckModal = document.getElementById('moodCheckModal');
    const moodButtons = document.getElementById('moodButtons');
    const closeBtn = document.querySelector('.close');

    moodCheckButton.addEventListener('click', () => {
        moodCheckModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        moodCheckModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == moodCheckModal) {
            moodCheckModal.style.display = 'none';
        }
    });

    moodButtons.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const mood = event.target.dataset.mood;
            if (mood === 'happy') {
                startConfetti();
            }
            moodCheckModal.style.display = 'none'; // Close modal after mood selection
        }
    });

    // Exercise Buttons (Placeholder)
    const exerciseButtons = document.querySelectorAll('.exercise-button');
    exerciseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exercise = button.dataset.exercise;
            alert(`Starting ${exercise} exercise (placeholder)`);
        });
    });

    //Confetti
    let confettiInstance = null; // Store the confetti instance

    function startConfetti() {
        const confettiSettings = { target: 'confetti-canvas', size: 40, start_from_edge: true };
        confettiInstance = new confetti.Confetti(confettiSettings);
        confettiInstance.render();

        // Stop confetti after 5 seconds
        setTimeout(() => {
            stopConfetti();
        }, 5000);
    }

    function stopConfetti() {
        if (confettiInstance) {
            confettiInstance.clear();
        }
    }
    
});

