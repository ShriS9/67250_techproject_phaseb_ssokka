var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);

}
if (C.length < z) {
    console.log(z);
}
else {
    console.log("good job!");
}

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

/* L3 = [L1, L2];
L3.forEach(findTheBanana); */
/* function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "Banana") {
            alert("Banana found!");
        }
    }
} */

/* function findTheBanana(string) {
    if (string == "Banana"){xw
        alert("Banana found!");
    }
}

L1.forEach(findTheBanana);
L2.forEach(findTheBanana); */

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

    document.getElementById("greeting").innerHTML = greeting;

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
    alert("Redirecting to payment system.")
}