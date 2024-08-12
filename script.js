document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll'); // Add or remove no-scroll class
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll'); // Remove no-scroll when closing menu
    }
  });

  // Email Button
  const emailButton = document.querySelector('.email-button');
  emailButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'mailto:railmin@rb.railnet.gov.in?subject=Regarding%20Sawantwadi%20Terminus&body=Please%20take%20necessary%20actions%20for%20the%20completion%20of%20Sawantwadi%20Terminus';
  });

  // Donation Button
  const donationButton = document.querySelector('.donation-button');
  donationButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://yourdonationpage.com', '_blank'); // Open in new tab
  });
});