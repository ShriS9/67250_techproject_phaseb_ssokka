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


    