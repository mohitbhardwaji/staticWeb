const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);

// Add event listeners for navigation buttons
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Auto-slide functionality
setInterval(nextSlide, 5000);
