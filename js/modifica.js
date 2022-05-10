
function getGET(){
	// capturamos la url
	var url = document.location.href;
	// si existe el interrogante
	if(url.indexOf('?')>0){
		// cogemos la parte de la url que hay despues del interrogante
		var getString = url.split('?')[1];
		// obtenemos un array con cada clave=valor
		var GET = getString.split('&');
		var get = {};
		// recorremos todo el array de valores
		for(var i = 0, l = GET.length; i < l; i++){
			var tmp = GET[i].split('=');
			get[tmp[0]] = unescape(decodeURI(tmp[1]));
		}
		return get;
	}
}

var valores=getGET();
		
window.onload = function()  {
	
	if(valores)
	{		
		if( localStorage.getItem('contactos') != null ){
		
			var listaContactos = JSON.parse(localStorage.getItem('contactos') );
		
		}
		
		var id = valores['id'];
		var nom = listaContactos[id].name;
		var ape = listaContactos[id].lastName;
		var tel = listaContactos[id].phone;

		document.getElementById('nom').value=nom;
		document.getElementById('ape').value=ape;
		document.getElementById('tel').value=tel;
		
	}
	
	function modificar(){
	
	var listaContactos = [];
		
	var nomModificado = document.getElementById('nom').value;
	var apeModificado = document.getElementById('ape').value;
	var telModificado = document.getElementById('tel').value;
	
	if(  !(/^\d{10}$/.test(tel))  ){
		
		if( tel.length < 10){
			alert("El numero telefonico necesita diez digitos");
			return false;
		}
		
		return false;
	}
	
	if( localStorage.getItem('contactos') != null ){
		
		listaContactos = JSON.parse(localStorage.getItem('contactos') );
	}
	
	var contacto = {
		name: nomModificado,
		lastName: apeModificado,
		phone: telModificado
	};
	
	listaContactos[id]=(contacto);

	localStorage.setItem("contactos",JSON.stringify(listaContactos) );
		
	}
	
	var boton = document.querySelector("#actualizar");
	boton.addEventListener('click',modificar);
	
}




  
  
  
  
	
  
  
 







