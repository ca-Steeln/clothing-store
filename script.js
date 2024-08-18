
document.addEventListener('DOMContentLoaded', () => {
  // Toggle Mobile Menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const toggleThemeButtons = document.querySelectorAll('.theme-toggle');
  const body = document.body;

  if (menuBtn && mobileMenu && mobileMenuOverlay) {
      menuBtn.addEventListener('click', (e) => {
          mobileMenu.classList.toggle('hidden');
          mobileMenuOverlay.classList.toggle('hidden');
          e.stopImmediatePropagation();
      });

      document.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenuOverlay.classList.add('hidden');
      });
  }

  // Theme Toggle
  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
  } else {
      body.classList.remove('dark');
  }

  toggleThemeButtons.forEach(button => {
      button.addEventListener('click', () => {
          body.classList.toggle('dark');
          localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      });
  });

  // Modal Handling
  window.openModal = (imgElement) => {
      const fullImageUrl = imgElement.getAttribute('data-full');
      const modalImage = document.getElementById('modalImage');
      const imageModal = document.getElementById('imageModal');
      const imgModelOverlay = document.getElementById('img-model-overlay');

      if (modalImage && imageModal && imgModelOverlay) {
          modalImage.src = fullImageUrl;
          imageModal.classList.remove('hidden');
          imgModelOverlay.classList.remove('hidden');
      }
  };

  window.closeModal = () => {
      const modalImage = document.getElementById('modalImage');
      const imageModal = document.getElementById('imageModal');
      const imgModelOverlay = document.getElementById('img-model-overlay');

      if (modalImage && imageModal && imgModelOverlay) {
          imageModal.classList.add('hidden');
          imgModelOverlay.classList.add('hidden');
          modalImage.src = '';
      }
  };
});




