document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', function() {
            answer.classList.toggle('open');
            const isOpen = answer.classList.contains('open');
            question.querySelector('.toggle-button').textContent = isOpen ? '-' : '+';
        });
    });
});



// Set the date we're counting down to
var countDownDate = new Date('September 20, 2024 18:00:00 EST').getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdowntimer"
  document.getElementById('countdowntimer').innerHTML = 'Countdown: ' + days + 'd ' + hours + 'h '
  + minutes + 'm ' + seconds + 's';

  // If the countdown is over, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdowntimer').innerHTML = 'EXPIRED';
  }
}, 1000); // Update every 1 second