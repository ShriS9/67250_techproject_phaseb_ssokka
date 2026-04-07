var now = new Date();
var hour = now.getHours();

function greeting(hour) {
    let greetingTest = document.getElementById("greeting");
    if (greetingTest == null) return;

    let greeting;
    if (hour < 5 || hour >= 20) {
        greeting = "Good Night";
    } else if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById("greeting").innerHTML = greeting + ", Welcome to Monomuse!";

}

greeting(hour);


function addYear() {
    let yearTest = document.getElementById("copyYear");
    if (yearTest == null) return;

    document.getElementById("copyYear").innerHTML = `© ${new Date().getFullYear()} MonoMuse. All rights reserved.`;

}

addYear();

function activeNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
activeNav();


 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });


function showForm() {
    document.getElementById("checkoutForm").style.display = "block";
    document.getElementById("cancel").style.display = "block";
}

function hideForm(){
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("cancel").style.display = "none";

}

function boughtForm() {
    alert("Redirecting to payment system.");
}

function hamburger() {
    document.getElementById("nav_bar").classList.toggle("responsive");
}


function mapCode(){
    if (document.getElementById("map")) {
        var map = L.map('map').setView([40.4391, -79.9511], 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([40.4438, -79.9485]).addTo(map);

    }
}

mapCode();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (document.getElementsByClassName("mySlides").length > 0) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
 }
}

function ticketsLink(){
    window.location.href = "./views/buytickets.html";
}

if (document.getElementById("quantity")) {
    document.getElementById("quantity").addEventListener("change", displayPrice);
    document.getElementById("types").addEventListener("change", displayPrice);
}
function displayPrice() {
    if (document.getElementById("quantity")) {
        var quantity = document.getElementById("quantity").value;
        var x = document.getElementById("price");
        if (document.getElementById("types").value == "Adult") {
            x.innerHTML = quantity * 18;
        }
        else if (document.getElementById("types").value == "Student") {
            x.innerHTML = quantity * 10 ;
        }
        else {
            x.innerHTML = quantity * 16;
        }
    }
}