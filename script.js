// Intersection Observer for section animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-view');
const menuIcon = menuBtn.querySelector('.fa-bars');
const closeIcon = menuBtn.querySelector('.fa-xmark');

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !isExpanded);
  
  if (isExpanded) {
    // Close menu
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
  } else {
    // Open menu
    mobileMenu.style.opacity = '1';
    mobileMenu.style.visibility = 'visible';
  }
  
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-view a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'false');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Handle contact form submission
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  formStatus.textContent = 'Sending...';
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  form.reset();
  formStatus.textContent = 'Message sent successfully!';
  
  setTimeout(() => {
    formStatus.textContent = '';
  }, 3000);
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Add initial animations to elements
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to hero section
  const heroSection = document.querySelector('#home');
  heroSection.classList.add('animate-fade-in');
  
  // Add slide-in animation to navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
    link.classList.add('animate-slide-in');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
