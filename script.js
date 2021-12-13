// HAMBURGER MENU 2

var hamButton2 = document.querySelector(".navbar__ham");
var hiddenMenu2 = document.querySelector(".hide2");
var exitBtn2 = document.querySelector (".exit2");

function reveal2(){
    hiddenMenu2.classList.toggle("show2");
}

window.addEventListener('mouseup',function(e)
{
    if(e.target != hiddenMenu2 && e.target.parentNode != hiddenMenu2 || e.target == exitBtn2 ){
        hiddenMenu2.classList.remove("show2");
    }
})

hamButton2.onclick = reveal2;
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// BACKGROUND CHANGE ON CLICK
var boxes = document.querySelectorAll(".the-numbers__box");


boxes.forEach((box)=>{

    box.addEventListener("click", () => {

        if(!box.classList.contains("the-numbers__box--dark")){
            for(index = 0; index < boxes.length /* 6 */; index ++){
                boxes[index].classList.remove("the-numbers__box--dark");
                boxes[index].classList.add("the-numbers__box--light");
            }
            box.classList.add("the-numbers__box--dark");
        }
           
        
    });
});
// 
// 
// 
// 
// 
// 
// 
// 
//
// CAROUSEL FOR REVIEW CARDS
const track = document.querySelector(".carousel__track");

const slides = Array.from(track.children);

// Next button
const nextButton = document.querySelector(".testimonials__button--down");
// Prev button
const prevButton = document.querySelector(".testimonials__button--up");

// Getting the height of the review box
const slideHeight = slides[0].getBoundingClientRect().height;


// // Loop for setting the position of the review boxes
const setSlidePosition = function (slide, index){
    slide.style.top = 80 + (slideHeight * index + (index * 40)) + "px";
};

slides.forEach(setSlidePosition);




// Main function to move the track
const moveToSlide = function (track, currentSlide, targetSlide){

    const amountToMove = targetSlide.style.top;
    let newAmountToMove = amountToMove.split("px");
    track.style.transform = "translateY(-" + (newAmountToMove[0] - 80) +'px)';

    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");



    
    // TO remove and add the class active when we get to the bottom
    if(newAmountToMove[0] > slideHeight * (slides.length -1)){
        nextButton.classList.remove("testimonials__button-active");
    } else {
        nextButton.classList.add("testimonials__button-active");
    }

    // To add when we start and remove at the bottom the active class
    if (newAmountToMove[0] > 80){
        prevButton.classList.add("testimonials__button-active");
    } else {
        prevButton.classList.remove("testimonials__button-active");
    }

}


//Clicking up brings the previous box of review
prevButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector ('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
  
    moveToSlide(track, currentSlide, prevSlide);
})

//clicking down brings the next review
nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector ('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);

})
// 
// 
// 
// 
// 
// 
//MAKE THE REVIEW BOX CONTAINER RESPONSIVE
function changeReviewContainer(){
    let testimonialBoxHeight = document.querySelector(".testimonials__box").clientHeight;
    
   let testimonialContainerHeight = document.querySelector(".carousel__track-container").style.height = testimonialBoxHeight + 150 + "px";
}

window.onload = changeReviewContainer();
window.onresize = changeReviewContainer();
// 
// 
// 
// 
// 
// 
// 
// Navbar gets fixed and smaller on scroll
window.addEventListener("scroll", function(){
    const NAVBAR = document.querySelector(".navbar");
    const navbarLinks = document.querySelectorAll(".navbar__link");

    let windowPosition = window.scrollY > 20;

    navbarLinks.forEach (link => {
        if (window.scrollY > 20){
            link.style.padding = "18px 26px"; 
        } else {
            link.style.padding = "26px 26px";
        }
    })

    NAVBAR.classList.toggle("scroll-active",windowPosition);

})
// 
// 
// 
// 
// 
// 
// 
// 
// 
// HERO SECTION ANIMATION
let tl = gsap.timeline({
    defaults:{
        ease:"power1.inOut",
        opacity: 1
    }
});

// SETTING THE STARTING PROPERTIES
tl.set(".text", {
    y:"100%"
})

tl.set(".fade-in-scale", {
    scale:0,
})

tl.set(".anim-move-in", {
    x: "-250",
    opacity:0
})

tl.set(".navbar-animation", {
    y: "-100%",
})

// 
// 
// ANIMATING IN ORDER
tl.to(".text", {
    y: "0%",
    duration:1,
    stagger: 0.35,
})

// Paragraph fades in
tl.to(".fade-in", {
    duration:0.3,
    stagger: 0.4,
})

// Iphone mockup image scales in
tl.to(".fade-in-scale", {
    duration:0.5,
    scale:1
})

// Tags move in from the left
tl.to(".anim-move-in", {
    x:"0px",
    duration:0.5,
    stagger:0.25
})

tl.to(".navbar-animation", {
    y: "0%",
    duration:1,
})

// TRIGGERING THE ANIMATION ON SCROLL WITHOUT THE PLUGIN
const secondFadeIn = document.querySelector(".second-fade-in");

const options = {
    root:null,
    threshold: 1,
    rootMargin: "100px"
};

// SECOND TIMELINE WITH HAPPY MAN FADING ING
const section1title = document.querySelector(".section__benefits__title");

// Creating the timeline
let happyManAnimation = gsap.timeline({
    paused: true,
    defaults:{
        ease:"power1.inOut",
    }
});

// Happy person picture fade in
happyManAnimation.to(".fade-in-happy-man", {
    opacity:1,
    duration:0.5
})

happyManAnimation.to(".fade-in-right", {
    opacity:1,
    duration:0.5
})

happyManAnimation.set(".tag-anim", {
    y:-200,
    x:100
})

happyManAnimation.to(".tag-anim", {
    opacity:1,
    duration:0.3,
    stagger:0.12,
    y:0,
    x:0

})

// Creating the observer which will play the animation
const imageFadein = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            // Starting the GSAP animation or timeline
            happyManAnimation.play();
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

imageFadein.observe(section1title);
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// 
// NEWSLETTER INPUT FIELD AND BUTTON FUNCTION

const emailinputfield = document.querySelector(".newsletter__emailinput");
const emailsubmitbtn = document.querySelector(".newsletter__submit");

// Clicking inside input field moves the button outside
emailinputfield.addEventListener("click", function(){
    emailsubmitbtn.style.transform = "translateX(5px)";
})

emailsubmitbtn.addEventListener("mousedown", function(){
    emailsubmitbtn.style.transform = "translateX(5px) scale(0.93)";
})

emailsubmitbtn.addEventListener("mouseup", function(){
    emailsubmitbtn.style.transform = "translateX(5px) scale(1)";
})

document.addEventListener("click", function(){
    if (emailinputfield !== document.activeElement && emailinputfield.value == ""){
        emailsubmitbtn.style.transform = "translateX(-60px)";
    }
})
// 
// 
// 
// 
// INPUT FIELD CHECK
const form = document.querySelector(".newsletter__form")

function logSubmit(event) {
    // To not refresh the page when submited
    event.preventDefault();

    // Removing the input field
    emailinputfield.style.display = "none";
    // Removing the submit button
    emailsubmitbtn.style.display="none";

    // Creating an h5 element
    var heading = document.createElement("h5");

    // Assigning its inner html
    heading.innerHTML = "You have successfully subscribed";

    // Appending it in the place of the input field and button
    form.appendChild(heading);
  }

//   Running the function only when the form is submitted with a valid email
form.addEventListener('submit', logSubmit);
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 3D TILT EFFECT ON THE IMAGE
let el = document.querySelector(".cost-center__img");

// Getting the height and the width of the element
const height = el.clientHeight;
const width = el.clientWidth;

// Creating the function with an event
function handleMove(e){
    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
  
    /* Generate string for CSS transform property */
    const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
    el.style.transform = string;
}

// When we move the mouse over the element, it fires the function
el.addEventListener("mousemove", handleMove);

// When we move the mouse outside the element it will go back to normal
el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

// When we click the element, it will go back to normall plus scale down a bit
el.addEventListener('mousedown', function() {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

// When we release the click it will go back to normal
el.addEventListener('mouseup', function() {
    el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})
