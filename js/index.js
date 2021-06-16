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