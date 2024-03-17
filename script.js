document.addEventListener("DOMContentLoaded", function() {
    const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    // Check if dark mode is enabled
    const darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (darkModeEnabled) {
            // Dark mode
            navbarTogglerIcon.style.backgroundColor = "#333";
        } else {
            // Light mode
            navbarTogglerIcon.style.backgroundColor = "#fff"; // Change to light mode background color
        }
    }

    // Call the function to initially set the color based on the mode
    toggleDarkMode();

    // Listen for changes in color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addListener(toggleDarkMode);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Collapse the navbar after clicking a link
                const navbarCollapse = document.querySelector('.navbar-collapse');
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Highlight navigation links based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`).classList.add('active');
            }
        });
    });

    // Show active section on page load
    window.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`).classList.add('active');
            }
        });
    });

    // Function to toggle active section
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }
});
