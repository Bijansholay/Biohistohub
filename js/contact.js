document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const statusBanner = document.getElementById('submit-status');
  
  if (!contactForm) return;

  // Pre-populate Subject field from URL Query parameter (?subject=...)
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  if (subjectParam) {
    const subjectField = document.getElementById('contact-subject');
    if (subjectField) {
      subjectField.value = decodeURIComponent(subjectParam);
    }
  }

  // Handle Form Submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous banner state
    statusBanner.className = 'submit-status-banner';
    statusBanner.style.display = 'none';

    // Retrieve fields
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Validation
    if (!name || !email || !subject || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Success Mock - Change button state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="16" height="16" viewBox="0 0 50 50" style="animation: spin 1s linear infinite; margin-right: 8px; display: inline-block; vertical-align: middle;">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="80, 200" stroke-dashoffset="0"></circle>
      </svg>
      Sending...
    `;

    // Add spinner style dynamically if not exist
    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.innerHTML = `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `;
      document.head.appendChild(style);
    }

    /* 
      ==========================================================================
      BACKEND / EMAIL INTEGRATION NOTE:
      To wire up actual email sending:
      1. Replace this setTimeout block with a fetch() call to your backend.
      2. Examples:
         fetch('https://api.yourdomain.com/send-email', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ name, email, subject, message })
         })
         .then(res => res.json())
         .then(data => { ... })
      ==========================================================================
    */
    setTimeout(() => {
      // Re-enable and reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Show Success Message
      showStatus('Thank you! Your message has been sent successfully. We will get back to you shortly.', 'success');
      
      // Clear fields
      contactForm.reset();
    }, 1500);
  });

  function showStatus(text, type) {
    statusBanner.innerHTML = text;
    statusBanner.className = `submit-status-banner ${type}`;
    statusBanner.style.display = 'block';
    
    // Auto-scroll to banner
    statusBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
