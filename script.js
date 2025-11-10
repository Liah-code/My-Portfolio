// Mobile menu elements
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-view');
const menuIcon = menuBtn.querySelector('.fa-bars');
const closeIcon = menuBtn.querySelector('.fa-xmark');

// Function to close mobile menu
function closeMobileMenu() {
  mobileMenu.style.opacity = '0';
  mobileMenu.style.visibility = 'hidden';
  menuBtn.setAttribute('aria-expanded', 'false');
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

// Function to open mobile menu
function openMobileMenu() {
  mobileMenu.style.opacity = '1';
  mobileMenu.style.visibility = 'visible';
  menuBtn.setAttribute('aria-expanded', 'true');
  menuIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
}

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-view a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    closeMobileMenu();
    
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Small delay to allow menu animation to complete
    }
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

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    offset: 200,
    duration: 800,
    easing: 'ease-in-out'
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (
    mobileMenu.style.visibility === 'visible' &&
    !mobileMenu.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

// Close mobile menu on window resize (in case user switches to desktop view)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // 768px is where the mobile menu switches to desktop
    closeMobileMenu();
  }
});
