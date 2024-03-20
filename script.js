function showSideBar(){
    const sideBar = document.querySelector(".sideBar")
    sideBar.style.display = "flex"
}
function closeSideBar(){
    const sideBar = document.querySelector(".sideBar")
    sideBar.style.display = "none"
}
function showSideBar2(){
    const sideBar = document.querySelector(".sideBar2")
    sideBar.style.display = "flex"
}
function closeSideBar2(){
    const sideBar = document.querySelector(".sideBar2")
    sideBar.style.display = "none"
}

//scrolltop
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
