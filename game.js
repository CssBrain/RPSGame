//var nomeGiocatore = window.prompt("inserisci il tuo nome");
// document.getElementById("titolo").innerHTML = "Benvenuto " + nomeGiocatore;

var sceltaUtente;
function cliccatoCarta(){
  sceltaUtente = "carta";
    document.getElementById("carta").innerHTML = "HAI SCELTO CARTA";
    document.getElementById("sasso").style.display = "none";
    document.getElementById("forbice").style.display = "none";
}
function cliccatoSasso(){
  sceltaUtente = "sasso";
  document.getElementById("sasso").innerHTML = "HAI SCELTO SASSO";
  document.getElementById("forbice").style.display = "none";
  document.getElementById("carta").style.display = "none";
}
function cliccatoForbice(){
  sceltaUtente = "forbice";
  document.getElementById("forbice").innerHTML = "HAI SCELTO FORBICE";
  document.getElementById("carta").style.display = "none";
  document.getElementById("sasso").style.display = "none";
}
function verdetto(){
  document.getElementById("carta").style.color = "blue";
  document.getElementById("sasso").style.color = "blue";
  document.getElementById("forbice").style.color = "blue";
  document.getElementById("btn").style.display = "none";
  var sceltaComputer;
  if (sceltaUtente == "carta"){
    sceltaComputer ="forbice";
   }
  if (sceltaUtente == "forbice"){
    sceltaComputer ="sasso";
   }
  if (sceltaUtente == "sasso"){
    sceltaComputer ="carta";
   }
document.getElementById("risultato").innerHTML = "il computer ha scelto " + sceltaComputer;
document.getElementById("verdetto").innerHTML = " MI DISPIACE HAI PERSO";
document.getElementById("verdetto").style.color = "red";
document.getElementById("risultato").style.fontWeight = "bold";
document.getElementById("riprova").style.display = "block";
}
