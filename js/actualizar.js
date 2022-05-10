
function actualiza(){
	
	var tabla = document.querySelector("#actualizaContactos tbody");
		
		tabla.innerHTML = '';
	
	var contactos = JSON.parse(localStorage.getItem('contactos') );
	var cantidad = contactos.length;
	
	for (var i = 0; i < cantidad; i++){
		
		var filas = document.createElement('tr');
		
		var celIndex = document.createElement('td');
		var celNom = document.createElement('td');
		var celApe = document.createElement('td');
		var celTel = document.createElement('td');
		
		var celBtn = document.createElement('td');
			celBtn.setAttribute('id',i);
			
		var btn = document.createElement('a');
			btn.href="modifica.html?id" + "=" + i ;
			
		var indexText = document.createTextNode(i+1);	
		var nomText = document.createTextNode(contactos[i].name);
		var apeText = document.createTextNode(contactos[i].lastName);
		var telText = document.createTextNode(contactos[i].phone);
		
		var btnText = document.createTextNode("modificar");
		
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
	
}

actualiza();
