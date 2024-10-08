# HTML, CSS, and JavaScript Workshop Documentation

This workshop project teaches the basics of HTML, CSS, and JavaScript by creating a personal portfolio website. The project is divided into three main files: `index.html`, `style.css`, and `script.js`. Let's break down each file and explain its components.

## HTML (index.html)

The HTML file structures the content of the website. Let's examine its key sections:

### Navigation

```html
<div>
  <a href="#" id="home" onclick="changeColor(this)">Home</a>
  <a href="#about" onclick="changeColor(this)">About</a>
  <a href="#projects" onclick="changeColor(this)">Projects</a>
  <a href="#experience" onclick="changeColor(this)">Experience</a>
</div>
```

This section creates the navigation menu. Each `<a>` tag represents a menu item, linking to different sections of the page. The `onclick` attribute calls a JavaScript function to change the active menu item's color.

### Hero Section

```html
<section id="home" class="section hero">
  <img src="./assests/image.jpg" alt="Profile Picture">
  <h1>Sharad Bhadait</h1>
  <div class="cta-buttons">
    <button>Get in Touch</button>
    <button>Download CV</button>
    <button>Linkedin</button>
    <button>Github</button>
  </div>
</section>
```

This section creates the hero area with a profile picture, name, and call-to-action buttons. It's the first thing visitors see when they land on the page.

### About Section

```html
<section id="about">
  <h2>ABOUT ME</h2>
  <p>Hi, I'm Sharad, a full-stack developer based in India. I specialize in creating interactive, responsive websites and web applications...</p>
</section>
```

The about section provides a brief introduction to the portfolio owner, highlighting their skills and expertise.

### Projects Section

```html
<section id="projects" class="section projects">
  <div id="project-title">
    <h2>PROJECTS</h2>
    <img src="https://media.tenor.com/QhRvvwpCdVoAAAAi/rocket.gif" width="100px" alt="Logo">
  </div>
  <div class="project-grid">
    <!-- Project cards go here -->
  </div>
</section>
```

This section showcases the portfolio owner's projects. Each project is represented by a card with an image and brief description.

### Experience Section

```html
<section id="experience" class="section experience">
  <h2>EXPERIENCE</h2>
  <div class="experience-item">
    <div>
      <h3><img src="/api/placeholder/30/30" alt="Google Logo"> Full Stack Developer at Arohi software</h3>
      <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms...</p>
      <p>June 2024 - Sept 2024</p>
    </div>
  </div>
</section>
```

The experience section details the portfolio owner's work history, including job titles, companies, and descriptions of responsibilities.

## CSS (style.css)

The CSS file styles the HTML elements to create an attractive and responsive layout. Let's look at some key styling rules:

### Global Styles

```css
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #1E1E1E;
  color: #FFFFFF;
  scroll-behavior: smooth;
}
```

These rules set the basic styles for the entire page, including font, background color, and text color.

### Navigation Styles

```css
header {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  position: sticky;
  backdrop-filter: blur(10px);
  width: fit-content;
  border-radius: 32px;
  margin: 12px auto;
  padding-right: 32px;
  top: 16px;
  z-index: 1000;
}
```

This CSS creates a sticky header with a blurred background effect, centering the navigation items.

### Responsive Design

```css
@media (max-width: 768px) {
  /* Styles for screens up to 768px wide */
}

@media (max-width: 480px) {
  /* Styles for screens up to 480px wide */
}
```

These media queries adjust the layout and styling for smaller screens, ensuring the site is mobile-responsive.

## JavaScript (script.js)

The JavaScript file adds interactivity to the page. Here's a breakdown of its functionality:

```javascript
const home = document.getElementById("home");
home.classList.add("active");

function changeColor(button) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll("li a");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add 'active' class to the clicked button
  button.classList.add("active");
}
```

This script does two things:
1. It sets the "Home" button as active by default when the page loads.
2. It defines a `changeColor` function that updates the active state of navigation buttons when clicked.

## Workshop Steps

1. Start by creating the HTML structure, explaining the purpose of each section.
2. Move on to CSS, demonstrating how to style the HTML elements and create a responsive layout.
3. Finally, introduce JavaScript to add interactivity to the navigation menu.
4. Encourage participants to customize the content, colors, and styles to create their own unique portfolio.

Remember to emphasize the importance of semantic HTML, clean CSS, and efficient JavaScript throughout the workshop.