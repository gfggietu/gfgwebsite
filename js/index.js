function toggletheme() {
  var element = document.body;
  element.classList.toggle("bg-bright");

  // var afontcolor = document.getElementsByTagName("");
  // for(var i=0;i<afontcolor.length;i++)
  //   afontcolor[i].classList.toggle("font-black");

  // var afontcolor = document.getElementsByTagName("div");
  // for(var i=0;i<afontcolor.length;i++)
  //   afontcolor[i].classList.toggle("font-black");

  var navmy = document.getElementsByTagName("nav");
  // for(var i=0;i<afontcolor.length;i++)
  navmy[0].classList.toggle("navbar-light" || "navbar-dark");
  // navmy[0].classList.remove("navbar-dark");
  
  var btnimg = document.getElementById("toggle-button");
  // btnimg.style.backgroundImage = "url(../image/icons/sun.png)";
  btnimg.classList.toggle("day-img");
}