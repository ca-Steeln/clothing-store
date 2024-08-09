
document.getElementById('menu-btn').addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    mobileMenu.classList.toggle('hidden');
    mobileMenuOverlay.classList.toggle('hidden');
    e.stopImmediatePropagation();
});

document.addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  mobileMenu.classList.add('hidden');
  mobileMenuOverlay.classList.add('hidden');
});

const toggleThemeButtons = document.querySelectorAll('.theme-toggle');
const body = document.body;


// Load theme from local storage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}

// Toggle theme on button click
toggleThemeButtons.forEach(button => {
    button.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    });
});


function openModal(imgElement) {
    // Get the full-size image URL from the data attribute
    var fullImageUrl = imgElement.getAttribute('src');

    // Set the modal image source
    document.getElementById('modalImage').src = fullImageUrl;

    // Display the modal
    document.getElementById('imageModal').classList.remove('hidden');
    document.getElementById('img-model-overlay').classList.remove('hidden');
}

function closeModal() {
    // Hide the modal
    document.getElementById('imageModal').classList.add('hidden');
    document.getElementById('img-model-overlay').classList.add('hidden');

    // Optionally, clear the image source
    document.getElementById('modalImage').src = '';
}



