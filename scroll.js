/*Boutton scroll to the top*/
const myButton = document.querySelector("#topButton");
function topFunction() {
  document.documentElement.scrollTop = 0; // renvoie l'Element qui est l'élément racine du document (html)
}