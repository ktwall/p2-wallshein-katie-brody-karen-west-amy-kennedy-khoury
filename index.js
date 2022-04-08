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







