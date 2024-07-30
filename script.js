/* Set default font family */
body {
    font-family: "Poppins", sans-serif;
}

/* Smooth scrolling behavior */
html {
    scroll-behavior: smooth;
}    

/* Paragraph styles */
p {
    color: #555;
}

/* Style headings */
h1, h2, h3, h4, h5, h6 {
    color: #333;
}

/* Transition for links and buttons */
a, .btn {
    transition: all 300ms ease;
}

/* Navbar styles */
nav {
    background-color: #fff; /* Formal background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
    font-size: 1.5rem; /* Decrease font size slightly */
    color: #333; /* Formal color */
    transition: color 0.3s ease;
}

.navbar-brand:hover {
    color: #007bff; /* Formal color on hover */
}

.navbar-toggler {
    border: none; /* Remove default border */
    background-color: transparent; /* Set background color to transparent */
}

.navbar-toggler-icon {
    background-color: transparent !important; /* Set background color to transparent */
    border-radius: 2px; /* Rounded shape */
}

/* Selected button color */
.navbar-toggler:focus,
.navbar-toggler:active {
    color: #fff; /* Set the text color when the link is active */
    outline: none;
}

.navbar-nav .nav-item {
    margin-left: 1rem; /* Add spacing between nav items */
}

.navbar-nav .nav-link {
    color: #333; /* Formal color */
    font-size: 1.2rem; /* Decrease font size slightly */
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
    color: #007bff; /* Formal color on hover */
}

/* Light mode background color */
.navbar-toggler-icon.light-mode {
    background-color: #fff;
}

/* Dark mode background color */
.navbar-toggler-icon.dark-mode {
    background-color: #000;
}

.navbar-nav .nav-link {
    color: #333; /* Default color for links */
    transition: color 0.3s ease; /* Smooth transition for color change */
}

.navbar-nav .nav-link.active {
    color: blue; /* Color for the active link (optional, since we set it inline) */
}


/* Hamburger Menu styles */
#hamburger-nav {
    display: none;
}

.hamburger-menu {
    position: relative;
    display: inline-block;
}

.hamburger-icon {
    position: relative; /* Ensure relative positioning */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 30px;
    cursor: pointer;
}

.hamburger-icon span {
    width: 100%;
    height: 2px;
    background-color: #333; /* Formal color */
    transition: all 0.3s ease-in-out;
    position: relative;
}

.menu-links {
    position: absolute;
    top: calc(100% + 10px); /* Show under the hamburger icon */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    background-color: #fff; /* Formal background color */
    width: auto;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    border-radius: 5px; /* Rounded corners */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
}

.menu-links a {
    display: block;
    padding: 10px 20px; /* Add padding for better spacing */
    text-align: center;
    font-size: 1.2rem; /* Decrease font size slightly */
    color: #333; /* Formal color */
    text-decoration: none;
    transition: color 0.3s ease;
}

.menu-links a:hover {
    color: #007bff; /* Formal color on hover */
}

.menu-links li {
    list-style: none;
}

.menu-links.open {
    max-height: 300px;
}

/* Logo styles */
.logo {
    font-size: 2rem;
}

.logo:hover {
    cursor: default;
}

/* Set padding and height for sections */
section {
    padding-top: 4vh;
    padding-bottom: 4vh;
    box-sizing: border-box;
}

.section-title {
    margin-top: 4rem; /* Adjust the margin-top value as needed */
}

/* HOME SECTION */
#home {
    display: block; /* Display the home section by default */
    text-align: center;
    background-color: #f9f9f9;
}

#home h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

#home img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
}

.section__text__p1 {
    font-size: 1.5rem;
}

.title {
    font-size: 2.5rem;
}

#socials-container {
    margin-top: 2rem;
}

#socials-container .icon {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    cursor: pointer;
}

/* About section styles */
.about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.section-description {
    text-align: justify;
}

.about-image {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Responsive design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    #hamburger-nav {
        display: flex;
        align-items: center;
    }

    .menu-links {
        position: relative;
        top: 0;
        right: 0;
        background-color: transparent;
        width: auto;
        max-height: none;
    }

    .menu-links a {
        display: block;
        text-align: left;
        font-size: 1.5rem;
        color: #333;
        text-decoration: none;
        padding: 10px;
    }

    .hamburger-icon.open span:first-child {
        transform: rotate(45deg) translate(8px, 8px);
    }

    .hamburger-icon.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger-icon.open span:last-child {
        transform: rotate(-45deg) translate(8px, -8px);
    }
}


/* CSS for Animated Button */
.btn-primary {
    background: none;
    border: 2px solid #CF8FEF; /* Soft color border */
    color: #042C3E;
    padding: 10px 10px;
    border-radius: 50px; /* Increased border radius for a rounder shape */
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px; /* Increased font size for better readability */
    font-weight: bold;
    transition: all 0.3s ease; /* Simplified transition */
    cursor: pointer;
    outline: none;
    position: relative; /* Required for pseudo-element positioning */
    overflow: hidden; /* Hide overflowing gradient */
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, rgba(0, 123, 255, 0) 70%); /* Soft color gradient */
    transition: all 0.3s ease;
    border-radius: 50%;
    z-index: -1; /* Ensure it's behind the button */
}

.btn-primary span {
    position: relative;
    z-index: 1; /* Ensure it's above the pseudo-element */
}

@keyframes animate__bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

/* Media query for smaller screens */
@media (max-width: 768px) {
    .btn-primary {
        padding: 10px 10px; /* Adjusted padding for smaller screens */
        font-size: 14px; /* Adjusted font size for smaller screens */
    }
}


/* Project Section Styles */
.section {
    padding: 60px 0;
    background: linear-gradient(135deg, #f0f0f0, #fafafa);
    position: relative;
}

.section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.05));
    z-index: -1;
    pointer-events: none;
}

.text-center {
    text-align: center;
}

.section__text__p1 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 300;
}

.title {
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
}

.project-card {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    margin-bottom: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.image-container-project {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.image-container-project img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.image-container-project img:hover {
    transform: scale(1.1);
}

.card-overlay {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.left-overlay {
    width: 30%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.8));
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
}

.right-overlay {
    width: 70%;
    height: 300px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
    padding-left: 20px;
}

.card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: #fff;
}

.card-text {
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.5;
    color: #3b3b3b;
}

.project-btn-container {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 12px;
}

.project-btn-primary {
    background-color: #042C3E;
    border: none;
    color: #333;
    padding: 8px 15px;
    border-radius: 15px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-btn-primary img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.project-btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.tag {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    padding: 1px 10px;
    font-size: 0.875rem;
    margin-right: 5px;
    color: #555;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
}

.badge {
    position: absolute;
    top: 1px;
    right: -3px;
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.875rem;
}

@media (max-width: 2025px) {
    .project-card {
        margin-bottom: 30px;
    }

    .card-title {
        font-size: 1.25rem;
    }

    .card-text {
        font-size: 0.875rem;
    }

    .btn-primary {
        font-size: 0.875rem;
        padding: 8px 16px;
    }
}
