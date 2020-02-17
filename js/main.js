var nomeAnagrafico = prompt('Come ti chiami?');
document.getElementById('nome').innerHTML = nomeAnagrafico;

var cognomeAnagrafico = prompt('Il tuo cognome?');
document.getElementById('cognome').innerHTML = cognomeAnagrafico;

var colorePreferito = prompt('Il tuo colore preferito?');
document.getElementById('colore').innerHTML = colorePreferito;

var data = new Date();
var annoC = data.getFullYear();
document.getElementById('annoC').innerHTML = annoC;

var password = nomeAnagrafico + ";" + cognomeAnagrafico + ";" + colorePreferito + ";" + (annoC - 2000);
document.getElementById('password').innerHTML = password;

document.getElementById('banner').setAttribute('class','visible');
