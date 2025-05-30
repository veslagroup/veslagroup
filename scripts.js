// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu?.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Hide mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add some interactive hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic background animation
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    }
});

// Reading time calculator for blog posts
function calculateReadingTime() {
    const blogContent = document.querySelector('.blog-content-full');
    if (blogContent) {
        const text = blogContent.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 225); // Average reading speed is 225 words per minute
        
        document.getElementById('reading-time').textContent = readingTime;
    }
}

// Run on page load
window.addEventListener('DOMContentLoaded', () => {
    calculateReadingTime();
});