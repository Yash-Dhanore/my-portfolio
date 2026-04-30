// Typing Animation Logic (Updated Text)
const typingElement = document.getElementById('typing-text');
const myName = "I'M YASH DHANORE.";
let charIndex = 0;

function typeEffect() {
    if (charIndex < myName.length) {
        typingElement.innerHTML += myName.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    }
}

// Reveal on Scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(windowEl => {
        const windowHeight = window.innerHeight;
        const elementTop = windowEl.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            windowEl.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    typeEffect();
    revealOnScroll();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Logic for Case Studies
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevents background scrolling
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restores background scrolling
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}