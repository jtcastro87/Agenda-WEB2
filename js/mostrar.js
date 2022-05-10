
//funcion para mostrar la lista de contactos 
function mostrarDatos(){
	
	var tabla = document.querySelector("#listaContactos tbody");
		
		tabla.innerHTML = '';
		
	var contactos = JSON.parse(localStorage.getItem('contactos') );
		
	var cantidad = contactos.length;
	
	for (var i = 0; i < cantidad; i++){
		
		var filas = document.createElement('tr');
		
		var celIndex = document.createElement('td');
		var celNom = document.createElement('td');
		var celApe = document.createElement('td');
		var celTel = document.createElement('td');
		
		var indexText = document.createTextNode(i+1);		
		var nomText = document.createTextNode(contactos[i].name);
		var apeText = document.createTextNode(contactos[i].lastName);
		var telText = document.createTextNode(contactos[i].phone);
		
		celIndex.appendChild(indexText);
		celNom.appendChild(nomText);
		celApe.appendChild(apeText);
		celTel.appendChild(telText);
	
		filas.appendChild(celIndex);
		filas.appendChild(celNom);
		filas.appendChild(celApe);
		filas.appendChild(celTel);
		
		tabla.appendChild(filas);
		
		
	}
	
	
	
}

mostrarDatos();
