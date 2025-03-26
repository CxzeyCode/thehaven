// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar"); // Use class selector
    sidebar.classList.toggle("open");
}

// Automatically Open Sidebar on Hover (Adjusted)
document.addEventListener('mousemove', function(e) {
    const sidebar = document.querySelector(".sidebar"); // Use class selector
    if (!sidebar) return; // Exit if sidebar doesn't exist.
    if (e.clientX < 50) {
        sidebar.classList.add("open");
    } else if (e.clientX > 250 && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    }
});

// Close Sidebar When Clicking a Link
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.querySelector(".sidebar"); // Use class selector
        if (sidebar) sidebar.classList.remove("open");
    });
});

// Slideshow Functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (slides.length === 0 || dots.length === 0) return; // Exit if no slides or dots exist.

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 8000); // Change slide every 3 seconds; // Change slide every 5 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

// Manual Slide Control
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Smooth Scrolling (Adjusted)
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjust for navbar height
        if (window.pageYOffset >= sectionTop) { // Changed pageYOffset to window.pageYOffset
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});