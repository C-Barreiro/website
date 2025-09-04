document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('about-button');
    const aboutSection = document.getElementById('about-section');

    aboutButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default anchor link behavior (page jump)
        aboutSection.classList.toggle('visible');  // Toggle the visibility class
    });
});