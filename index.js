// burger menu //

function myFunction1() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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

// API //
var dogEl = document.getElementById('breedPhoto')
var button = document.getElementById('photo')

button.onclick = function(e) {
  document.getElementById('breedPhoto').innerHTML = ""
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.message)

    var div = document.createElement('div')
    var img = document.createElement('img')
    img.src = data.message
    div.appendChild(img)

    dogEl.appendChild(div)
  })  
}

//footer//
document.getElementById('img1').onclick = function(e) {
  alert("You will be redirected to our Instagram."); 
}
document.getElementById('img2').onclick = function(e) {
    alert("You will be redirected to our Facebook page."); 
}

function myFunction() {
  document.getElementById('img1')
  alert("You will be redirected to our Instagram.");
}

function myfunction() {
  document.getElementById('img2')
  alert("You will be redirected to our Facebook page.");
}

//modal button//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Make it an API
var catEl = document.getElementById('catFact')

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('catFact').innerHTML = ""
  fetch('https://catfact.ninja/fact')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.fact)

    var div = document.createElement('div')
    var para = document.createElement('p')
    para.innerText = data.fact
    div.appendChild(para)

    catEl.appendChild(div)
  })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}









