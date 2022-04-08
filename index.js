// burger menu //

var menuButton = document.querySelector('.menu-btn')
var closeButton = document.querySelector('.close-btn')
var menu = document.querySelector('.menu')

var menuOpen = false

function toggleMenu() {
  if (menuOpen) {
    menu.style.transform = 'translateX(-250px)'
    menuOpen = false
  } else {
    menu.style.transform = 'translateX(0)'
    menuOpen = true
  }
}

menuButton.onclick = toggleMenu
closeButton.onclick = toggleMenu

window.addEventListener("click", function(e) {
  if (!menuOpen) return
  if (e.target === menuButton || e.target === closeButton) return
  if (!menu.contains(e.target)) toggleMenu()
})

window.addEventListener("keydown", function(e) {
  if (!menuOpen) return
  var linkList = document.querySelectorAll('.menu a')
  var lastLink = linkList[linkList.length - 1]
  if (e.key === 'Tab' && !e.shiftKey && document.activeElement === lastLink) {
    closeButton.focus()
    e.preventDefault()    
  }
  if (e.key === 'Tab' && e.shiftKey && document.activeElement === closeButton) {
    lastLink.focus()
    e.preventDefault()    
  }
})

// about //

function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }









//footer//
document.getElementById('img1').onclick=function(){myFunction()};
function myFunction(){
    alert("You will be redirected to our Instagram"); 
}
document.getElementById('img2').onclick=function(){myFunction()};
function myFunction(){
    alert("You will be redirected to our Instagram"); 
}







