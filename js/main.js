var nomeAnagrafico = prompt('Come ti chiami?');
document.getElementById('nome').innerHTML = nomeAnagrafico;

var cognomeAnagrafico = prompt('Il tuo cognome?');
document.getElementById('cognome').innerHTML = cognomeAnagrafico;

var colorePreferito = prompt('Il tuo colore preferito?');
document.getElementById('colore').innerHTML = colorePreferito;

var password = nomeAnagrafico + cognomeAnagrafico + colorePreferito + 20;
document.getElementById('password').innerHTML = password;
