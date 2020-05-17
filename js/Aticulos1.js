 var ArticulosImpar = document.getElementsByClassName("Articulos1");
 var TextContener = document.getElementsByClassName("Articletext");
 

 
 if(ArticulosImpar.length%2==1){
	
	 ArticulosImpar[ArticulosImpar.length-1].style.width = "100%";
	 ArticulosImpar[ArticulosImpar.length-1].style.height = "250px";
	 TextContener[ArticulosImpar.length-1].style.width = "97%";
	
	 
 }