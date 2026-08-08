(function() {
  const headerHTML = `
    <header class="site-header" id="site-header">
      <div class="container header-container">
        <a href="index.html" class="logo">
          <div class="logo-icon">BH</div>
          <div class="logo-info">
            <span class="logo-text">BioHistoCultural</span>
            <span class="logo-subtitle">Resource Hub</span>
          </div>
        </a>
        
        <button class="hamburger" id="hamburger-toggle" aria-label="Toggle Navigation Menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <nav class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link" data-page="index">Home</a></li>
            <li><a href="about.html" class="nav-link" data-page="about">About Us</a></li>
            <li><a href="services.html" class="nav-link" data-page="services">Our Services</a></li>
            <li><a href="research.html" class="nav-link" data-page="research">Research Projects</a></li>
            <li><a href="publications.html" class="nav-link" data-page="publications">Publications</a></li>
            <li><a href="blog.html" class="nav-link" data-page="blog">Blog/News</a></li>
            <li><a href="contact.html" class="nav-link" data-page="contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('header-root');
    if (root) {
      root.innerHTML = headerHTML;
      setupNav();
    }
  });

  function setupNav() {
    const hamburger = document.getElementById('hamburger-toggle');
    const menu = document.getElementById('nav-menu');
    const header = document.getElementById('site-header');
    
    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      menu.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target) && menu.classList.contains('open')) {
        hamburger.classList.remove('open');
        menu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });

    // Sticky Nav effect on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Active link highlighting
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    let currentPage = 'index'; // default

    if (filename.includes('about')) currentPage = 'about';
    else if (filename.includes('services')) currentPage = 'services';
    else if (filename.includes('research')) currentPage = 'research';
    else if (filename.includes('publications')) currentPage = 'publications';
    else if (filename.includes('blog')) currentPage = 'blog';
    else if (filename.includes('contact')) currentPage = 'contact';
    else if (filename === '') currentPage = 'index';

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
})();
