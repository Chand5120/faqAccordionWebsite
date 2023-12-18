"use strict";

const descriptionOne = document.querySelector(".description1");
const descriptionTwo = document.querySelector(".description2");
const descriptionThree = document.querySelector(".description3");
const descriptionFour = document.querySelector(".description4");

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");

button1.addEventListener("click", function() {
    descriptionOne.classList.toggle("hidden");
    document.querySelector(".img1").src = "./assets/images/icon-minus.svg";

    if(descriptionOne.classList.contains("hidden")) {
        document.querySelector(".img1").src = "./assets/images/icon-plus.svg";

    }
})

button2.addEventListener("click", function() {
    descriptionTwo.classList.toggle("hidden");
    document.querySelector(".img2").src = "./assets/images/icon-minus.svg";

    if(descriptionTwo.classList.contains("hidden")) {
        document.querySelector(".img2").src = "./assets/images/icon-plus.svg";

    }
})

button3.addEventListener("click", function() {
    descriptionThree.classList.toggle("hidden");
    document.querySelector(".img3").src = "./assets/images/icon-minus.svg";

    if(descriptionThree.classList.contains("hidden")) {
        document.querySelector(".img3").src = "./assets/images/icon-plus.svg";

    }
})

button4.addEventListener("click", function() {
    descriptionFour.classList.toggle("hidden");
    document.querySelector(".img4").src = "./assets/images/icon-minus.svg";

    if(descriptionFour.classList.contains("hidden")) {
        document.querySelector(".img4").src = "./assets/images/icon-plus.svg";

    }
})

