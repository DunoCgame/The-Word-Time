window.onscroll = function() {Scroll_herader()};
var Scroll=document.getElementById("HeaderScroll");
var icon=document.getElementById("icon");

function Scroll_herader() {
  if(screen.width>900 ){
	  

   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  Scroll.classList.add("mystyle");
	  icon.style.display="none";
  } 
  else {
  Scroll.classList.remove("mystyle");
   icon.style.display="table";
  
  }
  

}//CONTROL_PANTALLA


 

}


// Add active class to the current button (highlight it)
var NabarUL=document.getElementById("item");

var btns = NabarUL.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
	
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
  
}

//paginacion

var Paginacion=document.getElementById("Contenedor-Paginacion");

var btnpaginacion = Paginacion.getElementsByClassName("item-Paginacion");

for (var i = 0; i < btnpaginacion.length; i++) {
	
  btnpaginacion[i].addEventListener("click", function() {
	
	  var currentpaginacion = document.getElementsByClassName("active-Paginacion");
	  currentpaginacion[0].className = currentpaginacion[0].className.replace(" active-Paginacion", "");
	  this.className += " active-Paginacion";
 
 });
  
}