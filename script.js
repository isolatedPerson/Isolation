var slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

var titleSlideIndex = 1; // Start at the first slide
titleSliderShowSlides(titleSlideIndex);

// Set the interval for auto-sliding
setInterval(function() {
    titleSlideIndex++;
    if (titleSlideIndex > document.getElementsByClassName("title-slide").length) {
        titleSlideIndex = 1; // Reset to the first slide
    }
    titleSliderShowSlides(titleSlideIndex);
}, 10000); // Change image every 10 seconds

// Function to be called when a dot is clicked
function titleSliderCurrentSlide(n) {
    titleSlideIndex = n; // Set the current slide to the one corresponding to the dot
    titleSliderShowSlides(titleSlideIndex);
}

// Function to display the slide and update the dots
function titleSliderShowSlides(n) {
    var slides = document.getElementsByClassName("title-slide");
    var dots = document.getElementsByClassName("title-dot");
    
    // If n is greater than the number of slides, reset to the first slide
    if (n > slides.length) {
        titleSlideIndex = 1;
    }
    
    // If n is less than 1, set it to the last slide
    if (n < 1) {
        titleSlideIndex = slides.length;
    }
    
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove the 'active' class from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and add the 'active' class to the corresponding dot
    slides[titleSlideIndex - 1].style.display = "block";
    dots[titleSlideIndex - 1].className += " active";
}

function setupVerticalSliders() {
    var sliders = document.querySelectorAll('.vertical-slider');

    sliders.forEach(function(slider) {
        var images = slider.getElementsByTagName('img');
        var currentImageIndex = 0;

        // Set up a click event for each image
        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function() {
                // Hide current image
                images[currentImageIndex].style.display = 'none';

                // Show next image
                currentImageIndex = (currentImageIndex + 1) % images.length;
                images[currentImageIndex].style.display = 'block';
            });
        }

        // Initially, hide all images except the first one
        for (let i = 1; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        // Show the first image
        if(images.length > 0) {
            images[0].style.display = 'block';
        }
    });
}

// Initialize the sliders when the window loads
window.onload = setupVerticalSliders;


function changeSlide(slideNumber) {
    var slides = document.getElementsByClassName('your-slide-class');
    var totalSlides = slides.length;

    // Hide all slides
    for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
    }

    // Show the selected slide
    slides[slideNumber - 1].style.display = 'block';
}
