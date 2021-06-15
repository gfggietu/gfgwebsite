function toggletheme() {
  var element = document.body;
  element.classList.toggle("bg-bright");

  var afontcolor = document.getElementsByTagName("a");
  for(var i=0;i<afontcolor.length;i++)
    afontcolor[i].classList.toggle("font-black");

  var afontcolor = document.getElementsByTagName("div");
  for(var i=0;i<afontcolor.length;i++)
    afontcolor[i].classList.toggle("font-black");

  
}