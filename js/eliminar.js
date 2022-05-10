
//Esta es la funcion que llena la tabla de los contactos a eliminar
//Se ejecuta cuando se accede a la pagina
function eliminar(){
	
	var tabla = document.querySelector("#eliminarContactos tbody");
		
		tabla.innerHTML = '';
	
	var contactos = JSON.parse(localStorage.getItem('contactos') );
	var cantidad = contactos.length;
	
	for (var i = 0; i < cantidad; i++){
		//Creando filas
		var filas = document.createElement('tr');
		//Creando las columnas de la tabla
		var celIndex = document.createElement('td');
		var celNom = document.createElement('td');
		var celApe = document.createElement('td');
		var celTel = document.createElement('td');
		var celBtn = document.createElement('td');
		var btn = document.createElement('a');
			btn.setAttribute('id',i);
			//se le agrega la propiedad onclick para llamar la funcion que elimina al usuario
			btn.onclick = function(){borrar(this)};
			//llenamos la tabla con los datos obtenidos de localStorage mediante su indice
		var indexText = document.createTextNode(i+1);
		var nomText = document.createTextNode(contactos[i].name);
		var apeText = document.createTextNode(contactos[i].lastName);
		var telText = document.createTextNode(contactos[i].phone);
		
		var btnText = document.createTextNode("Eliminar");
		
		celIndex.appendChild(indexText);
		celNom.appendChild(nomText);
		celApe.appendChild(apeText);
		celTel.appendChild(telText);
		
		btn.appendChild(btnText);
		celBtn.appendChild(btn);
		
		filas.appendChild(celIndex);
		filas.appendChild(celNom);
		filas.appendChild(celApe);
		filas.appendChild(celTel);
		filas.appendChild(celBtn);
		
		tabla.appendChild(filas);
		
	}
	
	function borrar(id){
	
	//confirmamos si el usuario quiere eliminar el contacto	
	var respuesta = confirm('Realmente desea eliminar este contacto?');
	
		if (respuesta){
				
			if( localStorage.getItem('contactos') != null ){
			
				var listaContactos = JSON.parse(localStorage.getItem('contactos') );
			}
				//obtenemos el id
				var index = id.id;
				
				listaContactos.splice(index,1);
			
				localStorage.setItem("contactos",JSON.stringify(listaContactos) );
				
				eliminar();
				
		}

}


}

eliminar();




	







