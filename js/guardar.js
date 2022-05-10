function setDatos(){
	
	var listaContactos = [];
	//obtenemos los valores de cada campo 
	var nom = document.getElementById("nom").value;
	var	ape = document.getElementById("ape").value;
	var	tel = document.getElementById("tel").value;
	//Esta funcion verifica si el numero de telefono solo contiene numeros	
	if(  !(/^\d{10}$/.test(tel))  ){
		alert("Esta campo solo acepta numeros");	
		if( tel.length < 10){
			alert("El numero telefonico debe tener 10 digitos");
			return false;
		}
		
		return false; //cuando se devuelve false se queda en la misma pagina
	}
	//comprobamos si localStorag no esta vacia, de contener algo lo guardamos en el arreglo listaContactos
	if( localStorage.getItem('contactos') != null ){
		
		listaContactos = JSON.parse(localStorage.getItem('contactos') );
	}
	//Se crea el objeto tipo json para luego ser guardado en localStorage
	var contacto = {
		name: nom,
		lastName:ape,
		phone:tel
	};
	//se agrega el contacto al arreglo
	listaContactos.push(contacto);
	//guardando el contacto en localStorage
	localStorage.setItem("contactos",JSON.stringify(listaContactos) );
	
	return true;

}

