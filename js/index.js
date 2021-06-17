function toggletheme() {
  var element = document.body;
  element.classList.toggle("bg-bright");

  var navmy = document.getElementsByTagName("nav");
  navmy[0].classList.toggle("navbar-light");

  var btnimg = document.getElementById("toggle-button");
  btnimg.classList.toggle("day-img");
}

function mouseover() {
  var btnimg = document.getElementById("toggle-button");
  // console.log(btnimg.classList[1]); // don't remove it's for testing
  if(btnimg.classList[1]=="day-img" || btnimg.classList[1]=="day-img-hover")
    btnimg.classList.toggle("day-img-hover");
  else
    btnimg.classList.toggle("toggle-button-hover");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if ( currentScrollPos <= 30) {
    document.getElementById("toggle-button").style.top = "20px";
  } else {
    document.getElementById("toggle-button").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

