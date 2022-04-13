/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function numeroEntero(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min;
}
function signosRandom() {
  let signos = ["♠", "♥", "♦", "♣"];
  let random = numeroEntero(0, 3);
  return signos[random];
}

function numeroRandom() {
  let numeroRandom = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeritosCentral = numeroEntero(0, 12);
  return numeroRandom[numeritosCentral];
}
window.onload = function() {
  //write your code here
  let signo = signosRandom();
  let numero = numeroRandom();
  let numeritosCentral = document.getElementById("numeritosCentral");
  numeritosCentral.innerHTML = numero;
  let signoSuperior = document.getElementById("signoSuperior");
  let signoInferior = document.getElementById("signoInferior");
  signoSuperior.innerHTML = signo;
  signoInferior.innerHTML = signo;
  document.getElementById("signoInferior").style.transform = "rotate(180deg)";
  document.getElementById("signoInferior").innerHTML = signo;
  if (signo === "♥") {
    signoSuperior.style.color = "red";
    signoInferior.style.color = "red";
  }
  if (signo === "♦") {
    signoSuperior.style.color = "red";
    signoInferior.style.color = "red";
  }
};
