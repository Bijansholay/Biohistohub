(function() {
  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <!-- Column 1: Brand Info -->
        <div class="footer-col footer-about">
          <h4 style="color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 15px;">BioHistoCultural</h4>
          <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px; color: #cbd5e1;">
            Premier Research and Communications Consultant. Specializing in biography writing, academic research, data collection, and publishing since 2008.
          </p>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="Facebook" title="Facebook">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="LinkedIn" title="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="Twitter" title="Twitter">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="research.html">Research Projects</a></li>
            <li><a href="publications.html">Publications</a></li>
          </ul>
        </div>

        <!-- Column 3: Resources -->
        <div class="footer-col">
          <h4>Resources</h4>
          <ul class="footer-links">
            <li><a href="blog.html">News & Blog</a></li>
            <li><a href="contact.html">Get in Touch</a></li>
            <li><a href="privacy.html" style="pointer-events: none; opacity: 0.6;">Privacy Policy</a></li>
            <li><a href="terms.html" style="pointer-events: none; opacity: 0.6;">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="footer-col">
          <h4>Contact Details</h4>
          <ul class="footer-contact-info">
            <li>
              <!-- Phone Icon -->
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:08036446347">08036446347</a>
            </li>
            <li>
              <!-- Mail Icon -->
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:orobiograph@gmail.com">orobiograph@gmail.com</a>
            </li>
            <li>
              <!-- Calendar Icon -->
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span>Established 2008</span>
            </li>
            <li>
              <!-- Map Pin Icon -->
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Research Hub Headquarters,<br>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="container footer-bottom">
        <p>&copy; ${new Date().getFullYear()} BioHistoCultural Resource Hub. All Rights Reserved.</p>
        <div class="footer-bottom-links">
          <span>Consultancy & Publishing</span>
        </div>
      </div>
    </footer>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('footer-root');
    if (root) {
      root.innerHTML = footerHTML;
    }
  });
})();
