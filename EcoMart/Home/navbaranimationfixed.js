document.addEventListener('DOMContentLoaded', () => {
    // Selecting all navbar elements with the 'border' class
    const navItems = document.querySelectorAll('.navbar .border');

    navItems.forEach(item => {
        // Initial styles
        item.style.transition = "transform 0.2s ease";
        item.style.display = "inline-block";

        item.onmouseenter = function() {
            // Enlarge items while excluding EcoMart name and logo
            if (!this.classList.contains('nav-logo') && !this.classList.contains('Name')) {
                this.style.transform = "scale(1.50)";
                this.style.cursor = "pointer";
            }
        };

        item.onmouseleave = function() {
            // Return to original size
            this.style.transform = "scale(1)";
        };
    });
});