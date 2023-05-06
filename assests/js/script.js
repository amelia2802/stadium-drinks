

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".wrapper img");

let currentSlide = 0;

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#96031a";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    currentSlide = index - 1;
    indicator(index);
}

function contactForm(){
    document.getElementById("contact").style.display="flex";
}

function cancelForm(){
    document.getElementById("contact").style.display="none";
}
