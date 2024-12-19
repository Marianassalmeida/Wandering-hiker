let slideIndex = 0;

function showDivs(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Initialize the first image
showDivs(slideIndex);