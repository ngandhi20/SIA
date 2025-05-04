document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.querySelector('.menuButton');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuButton && sidebar) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.add('active');
        });
    }
    
    // Close sidebar when clicking close button or outside
    document.addEventListener('click', function(e) {
        if (e.target.closest('.sidebar-close') || 
            (!e.target.closest('.sidebar') && !e.target.closest('.menuButton'))) {
            sidebar.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});