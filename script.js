// Carousel code
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

//hamburger
document.getElementById('hamburger').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
});

document.getElementById('close-btn').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
});

// Email sending code
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
console.log({email},{subject})
  Email.send({
    Host: "smtp.elasticemail.com", // Replace with your SMTP server
    Port:2525,
    Username: "rkglobalcomm@gmail.com", // Replace with your email
    Password: "89B0BA90EEC620A33E69B6A8AA3411C77208", // Replace with your email password
    To: 'rkglobalcomm@gmail.com', // Replace with the recipient's email
    From: "rkglobalcomm@gmail.com",
    Subject: subject,
    Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
  })
  .then(function(message) {
    console.log(message)
    if(message == 'OK'){
      swal("Success", "Mail has been sent successfully", "success");
    }
    else {
      swal("Oops!", "Failed to send the mail. Please try again later.", "error");
    }
   
  })
  .catch(function(error) {
    console.error('Failed to send email:', error);
  });
});
