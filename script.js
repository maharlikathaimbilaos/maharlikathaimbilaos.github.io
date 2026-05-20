// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("remove");
}));

// Form Handling Hook Placeholder
const contactForm = document.getElementById("portfolioForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate form submission alert
    alert("Thank you! Your message has been simulated as successfully sent.");
    contactForm.reset();
});
