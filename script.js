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
// BACKGROUND CHANGE ON CLICK, First is already dark, than if you click
// one gets dark, the other light. 
var boxes = document.querySelectorAll(".the-numbers__box");


boxes.forEach((box)=>{

    box.addEventListener("click", () => {

        if(!box.classList.contains("the-numbers__box--dark")){
        // If the list doesnt contain box dark make a for loop

            for(index = 0; index < boxes.length /* 6 */; index ++){
                boxes[index].classList.remove("the-numbers__box--dark");
                // Go through all and remove dark
                boxes[index].classList.add("the-numbers__box--light");
                // Go through all and add light
            }
            box.classList.add("the-numbers__box--dark");
            // Add dark to the one you clicked

        }else{
            // box.classList.remove("the-numbers__box--dark");
            // We dont even need this part.
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

// Slides in an array
const slides = Array.from(track.children);

// Next button
const nextButton = document.querySelector(".testimonials__button--down");
// Prev button
const prevButton = document.querySelector(".testimonials__button--up");

// Getting the height of the review box
const slideHeight = slides[0].getBoundingClientRect().height;


// LOOPING THROUGH IT TO ASSIGN THE STYLE TOP VALUE
// for (var i=0; i < slides.length; i++){
//     let height = slides[i].getBoundingClientRect().height;
    
//     // slides[i].style.top = 80 + (height * i + (i * 40)) + "px";

//      slides[i].style.top = 80 + (height * i + (i * 40)) + "px";
// }


// // Loop for setting the position of the review boxes
const setSlidePosition = function (slide, index){
    slide.style.top = 80 + (slideHeight * index + (index * 40)) + "px";
};


// // Actually setting the style top for each box
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
// HEADING FROM BEHIND
// Creating the timeline
let tl = gsap.timeline({
    defaults:{
        ease:"power1.inOut",
        opacity: 1
    }
});

// SETTING THE STARTING PROPERTIES
// Headline moves behind white span
tl.set(".text", {
    y:"100%"
})
// We dont see it because it is small
tl.set(".fade-in-scale", {
    scale:0,
})
// We move them left 
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
// Text moves up so from behind the white rectangles
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

// Put the triggering element inside a variable
const secondFadeIn = document.querySelector(".second-fade-in");

const options = {
    root:null, //This is the viewport
    threshold: 1, //Firing immediately when reaching section, 0.25, will fire 25% in section
    rootMargin: "100px" //You can set a -100px or +50px, so your viewport starts from that. 
};

// SECOND TIMELINE WITH HAPPY MAN FADING ING

// Putting the trigger in a variable
const section1title = document.querySelector(".section__benefits__title");

// Creating the timeline
let happyManAnimation = gsap.timeline({
    paused: true,
    defaults:{
        ease:"power1.inOut",
    }
});

// Setting what should happen in the timeline and to which element
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
        // It fires ONLY when it is encountered
        if(!entry.isIntersecting){
            return;
        } else {
            // Starting the GSAP animation or timeline
            happyManAnimation.play();
            // Unobserve is so it fires once, not everytime you scroll to it
            appearOnScroll.unobserve(entry.target);
        }
    });
}, options);

// Which element will trigger the function which eventually will play the gsap animation
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

// On mouse down we need the active state from css, so to scale it down
emailsubmitbtn.addEventListener("mousedown", function(){
    emailsubmitbtn.style.transform = "translateX(5px) scale(0.93)";
})

// To make it look natural on mouse up it has to be scale 1, so it goes small and big
emailsubmitbtn.addEventListener("mouseup", function(){
    emailsubmitbtn.style.transform = "translateX(5px) scale(1)";
})

// We create an if else, if the user clicks anywhere and the input field is not the current active element and the input field has a value of nothing so nothing is written inside, it moves the button back
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
// Checking the input field and removing the input field when subscribed plus adding text
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
// Choosing the image or the element
let el = document.querySelector(".cost-center__img");

// Getting the height and the width of the element
const height = el.clientHeight;
const width = el.clientWidth;

// Creating the function with an event
function handleMove(e){
    // We will get the horizontal and vertical value of the event happening
    // So a number, it will be relative to the top left of the positioned element
    const xVal = e.layerX;
    const yVal = e.layerY;

    // We count a y rotation, by subtracting vertical value - width of the current element
    // 20 is just a random number, it can be any number, but the effect will be different
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
  
    /* Generate string for CSS transform property */
    const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

    // Setting the transform style for the element
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
