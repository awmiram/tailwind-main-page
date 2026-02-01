
# Tailwind Main Page

**A modern, responsive landing page built with Tailwind CSS v4.1.14, featuring smooth animations and a mobile-friendly hamburger menu.**

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Author](#author)

---

## ✨ Features

- **Responsive Design** – Fully responsive across mobile, tablet, and desktop devices
- **Tailwind CSS Framework** – Utility-first CSS with v4.1.14 for rapid styling
- **Mobile Navigation** – Hamburger menu with smooth toggle functionality
- **Gradient Styling** – Modern pink-to-amber gradient accents
- **Accessible** – Semantic HTML and WCAG-compliant markup
- **Minimal JavaScript** – Lightweight DOM manipulation for menu toggling
- **Production Ready** – Optimized CSS and clean code structure

---

## 🛠 Tech Stack

- **HTML5** – Semantic markup
- **CSS** – Tailwind CSS v4.1.14 (compiled in `main.css`)
- **JavaScript** – Vanilla ES6+ for interactive elements

**Dependencies:** None (Tailwind CSS pre-compiled)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/awmiram/tailwind-main-page.git
cd tailwind-main-page
```

### 2. Open in Browser

Since this is a static site, simply open `index.html` in your browser:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js with http-server
npx http-server
```

Then navigate to `http://localhost:8000`

---

## 🚀 Usage

### Basic Setup

The project is ready to use as-is. All styling is included via Tailwind CSS, and the layout is mobile-responsive.

### Customizing Content

Edit `index.html` to modify:
- Page title and meta information
- Navigation menu items
- Hero section text and imagery
- Body content sections
- Footer information

### Modifying Styles

To update Tailwind classes:
1. Edit utility classes directly in `index.html` (e.g., `class="text-pink-700"`)
2. For advanced customization, rebuild `main.css` using Tailwind CLI

### Mobile Menu Toggle

The hamburger menu is controlled by `script.js`:

```javascript
let navicon = document.getElementById("menu-button");
let navcontent = document.getElementById("nav-content");

navicon.addEventListener("click", (event)=>{
  navcontent.classList.toggle("hidden");
});
```

**Example HTML structure:**

```html
<!-- Menu Button -->
<button id="menu-button" class="md:hidden">☰</button>

<!-- Navigation Content -->
<nav id="nav-content" class="hidden md:flex">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>
```

---

## 📁 Project Structure

```
tailwind-main-page/
├── index.html          # Main HTML file with page structure
├── main.css           # Compiled Tailwind CSS framework
├── style.css          # Additional custom styles (minimal)
├── script.js          # Mobile menu toggle functionality
└── README.md          # Documentation
```

---

## 🎨 Color Palette

| Color | Usage |
|-------|-------|
| `pink-500` / `#d53569` | Primary gradient start |
| `amber-300` / `#daad51` | Primary gradient end |
| `gray-100` to `gray-900` | Neutral text and backgrounds |
| `white` | Light surfaces |

---

## ✅ Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

---


**Author:** [awmiram](https://github.com/awmiram)

