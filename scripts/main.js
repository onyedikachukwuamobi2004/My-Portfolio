// Functions
const consoleMessage = (msg) => console.log(msg);

// Load javascript after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Toggle the visibility of the navigation menu
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }});
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    consoleMessage("If you can read this, the JavaScript is working!");
});
