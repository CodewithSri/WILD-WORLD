//side navbar
var sidenav=document.querySelector('.side-navbar')
function shownavbar(){
    sidenav.style.left="0";
}
function closenavbar(){
    sidenav.style.left='-60%';
}
//Donate
var donation=document.getElementById("donation-popup");
var navbar=document.querySelector(".navbar");
var head=document.querySelector(".header");
var headerimg=document.querySelector('.header-main-img');
function donate(){
    navbar.style.filter="blur(10px)";
    head.style.filter="blur(10px)";
    donation.style.top="20%"
    
}
function popupclose(){
    navbar.style.filter="none";
    head.style.filter="none";
    donation.style.top="-80%"
}
//submit popup button
const confettiBtn = document.querySelector(".confetti-button");

confettiBtn.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const container = document.querySelector(".wrapper");

  // set dimensions for canvas
  canvas.width = 600;
  canvas.height = 600;

  container.appendChild(canvas);

  // create confetti inside the canvas
  const confetti_btn = confetti.create(canvas);

  // remove the canvas after spreading confetti
  confetti_btn().then(() => canvas.remove());
});
//number count
var sectioncounter=document.querySelector("#section-counter")
var counters=document.querySelectorAll(".counter-main .counter")

//scroll animation
let counterobserver=new IntersectionObserver((entries,observer)=>{
    let[entry] =entries;
    if(!entry.isIntersecting) return;
    let speed=200;
counters.forEach((counter,index)=>{
    function updatacounter(){
        const targetnumber=+counter.dataset.target;
        const initialnumber=+counter.innerText;
        const incpercount=targetnumber / speed;
        if(initialnumber < targetnumber){
            counter.innerText= Math.ceil(initialnumber + incpercount);
            setTimeout(updatacounter,40);
        }
    }
    updatacounter();
})
},{
    root:null,
    threhold:0.4,
})
counterobserver.observe(sectioncounter)
//campaus container
var campus=document.querySelector(".campus-container")
function change(){
    location.href = 'https://wild.org/wild12/';
}
//onscroll Navbar
// window.onscroll = () => {
//     const nav = document.querySelector('.navbar');
//     if(nav >= 10){
//         nav.style.backgroundColor="none"
//     }
//     else{
//         nav.style.backgroundImage="url(https://img.freepik.com/premium-vector/green-abstract-glass-background-design-natural-fresh-green-wallpaper-design_293525-29.jpg?w=360)";
//     }
    
//   };