document.addEventListener('DOMContentLoaded', function() {
    // Target elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Function to update the timer
    function updateTimer() {
        // Get current time
        const now = new Date();
        const targetDate = new Date("2024-12-31T23:59:59"); // Change this to your target date

        // Calculate the difference in seconds between now and the target date
        let diffInSeconds = Math.floor((targetDate - now) / 1000);

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(diffInSeconds / (24 * 60 * 60));
        diffInSeconds -= days * 24 * 60 * 60;
        
        const hours = Math.floor(diffInSeconds / (60 * 60));
        diffInSeconds -= hours * 60 * 60;
        
        const minutes = Math.floor(diffInSeconds / 60);
        diffInSeconds -= minutes * 60;
        
        const seconds = diffInSeconds;

        // Update the DOM with the calculated values
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Update timer initially and then every second
    updateTimer(); // Update initially to prevent delay on page load
    setInterval(updateTimer, 1000); // Update every second
});
