document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navigationLinks = document.querySelector('.navigation-links');

  hamburgerMenu.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('active');
      navigationLinks.classList.toggle('active');
  });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a').classList.add('active');
      });
    }
  });
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function sendContact() {
  let fullName = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let interest = document.getElementById('interest').value;

  if (fullName && email && interest) {
      alert(`${fullName}, thanks for registering.`);
      // Save form data to localStorage
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('email', email);
      localStorage.setItem('interest', interest);

      // Display the saved data on the webpage
      document.getElementById('display').innerHTML = `
          <p>Your Name: ${fullName}</p>
          <p>Email Address: ${email}</p>
          <p>Interested in: ${interest}</p>
      `;
  } else {
      alert("There was an error. Please fill in all fields.");
  }
}
