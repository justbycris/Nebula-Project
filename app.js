// -------------- LOADING PAGE ----------------------------

// Hide the loading page once the content is fully loaded, after a short delay
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
  }, 1000); // 1 second delay
});

// ---------------- STARS ----------------------------------

const NUM_STARS = 200;

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
  const delay = Math.random() * -20; // Negative delay starts each star mid-cycle

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;

  document.querySelector('.stars').appendChild(star);
}

for (let i = 0; i < NUM_STARS; i++) {
  createStar();
}

// ---------------- CONTACT FORM ---------------------------

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the default submission so we can validate first

  // Client-side validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send the form data to Netlify Forms
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(contactForm)).toString(),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      alert('Your message has been sent successfully!');
      contactForm.reset();
    })
    .catch(function () {
      alert('Something went wrong. Please try again.');
    });
});

// ---------------- HAMBURGER MENU -------------------------

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});