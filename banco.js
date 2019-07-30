let cajaDeAhorro = {
	saldo : 0,
	limite : 0,
	historial : "",
}

let cuentaCorriente = {
	saldo : 0,
	limite : -100,
	historial : "",
}

let depositar = function(cuenta, saldo){
	cuenta.saldo += 50;
	cuenta.historial+= "Deposito : 50";
	cuenta.historial+= "<br>"
	document.getElementById(saldo).innerHTML=cuenta.saldo;
}

let retirar = function(cuenta, saldo){
	if (cuenta.saldo > cuenta.limite){
		cuenta.saldo -= 50;
		cuenta.historial+= "Retiro: 50";
		cuenta.historial+= "<br>"
		document.getElementById(saldo).innerHTML=cuenta.saldo;
	}
	else{
		alert("No puede retirar mas plata");
	}
}

let historial = function(cuenta, historial){
	document.getElementById(historial).innerHTML=cuenta.historial;
}