/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let draw = document.getElementById("draw");
  let sort = document.getElementById("sort");
  let contenedorDeCartas = document.getElementById("contenedorDeCartas");
  let contenedorDeCartas2 = document.getElementById("contenedorDeCartas2");
  let numberOfCards = document.getElementById("numberOfCards");
  let arrayOfCards = [];
  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let numeros2 = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let newCard = valor => {
    for (let i = 0; i < valor; i++) {
      //El codigo de abajo crea la carta
      let card = document.createElement("div");
      card.classList.add("card");
      let pinta1 = document.createElement("span");
      pinta1.classList.add("pinta1");
      let pinta2 = document.createElement("span");
      pinta2.classList.add("pinta2");
      let cardNumber = document.createElement("p");
      cardNumber.classList.add("cardNumber");
      pinta1.innerHTML = "♦";
      pinta2.innerHTML = "♦";
      cardNumber.innerHTML = "3";
      card.appendChild(pinta1);
      card.appendChild(cardNumber);
      card.appendChild(pinta2);

      contenedorDeCartas.appendChild(card);
      //EL codigo de abajo hace la carta aleatoria
      let pintaAleatoria = Math.floor(Math.random() * pintas.length);
      pinta1.innerHTML = pintas[pintaAleatoria];
      pinta2.innerHTML = pintas[pintaAleatoria];
      let numeroAleatorio = Math.floor(Math.random() * numeros.length);
      cardNumber.innerHTML = numeros2[numeroAleatorio];
      if (pintas[pintaAleatoria] == "♠") {
        pinta1.style.color = "black";
        pinta2.style.color = "black";
      } else if (pintas[pintaAleatoria] == "♣") {
        pinta1.style.color = "black";
        pinta2.style.color = "black";
      } else {
        pinta1.style.color = "red";
        pinta2.style.color = "red";
      }

      // Este objeto me almacena los valores relevantes de la carta
      arrayOfCards.push({
        pinta: pintas[pintaAleatoria],
        numero: numeros[numeroAleatorio]
      });
      console.log(arrayOfCards);
    }
  };

  draw.addEventListener("click", e => {
    newCard(numberOfCards.value);
  });

  let otherCard = valor => {
    let containerForEachGroupOfCards = document.createElement("div");
    for (let i = 0; i < valor.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let pinta1 = document.createElement("span");
      pinta1.classList.add("pinta1");
      let pinta2 = document.createElement("span");
      pinta2.classList.add("pinta2");
      let cardNumber = document.createElement("p");
      cardNumber.classList.add("cardNumber");
      pinta1.innerHTML = "♦";
      pinta2.innerHTML = "♦";
      cardNumber.innerHTML = "3";
      card.appendChild(pinta1);
      card.appendChild(cardNumber);
      card.appendChild(pinta2);

      containerForEachGroupOfCards.appendChild(card);

      //EL codigo de abajo asigna los valores de DRAW a las nuevas cartas
      pinta1.innerHTML = valor[i].pinta;
      pinta2.innerHTML = valor[i].pinta;
      cardNumber.innerHTML = valor[i].numero;

      if (valor[i].pinta == "♠") {
        pinta1.style.color = "black";
        pinta2.style.color = "black";
      } else if (valor[i].pinta == "♣") {
        pinta1.style.color = "black";
        pinta2.style.color = "black";
      } else {
        pinta1.style.color = "red";
        pinta2.style.color = "red";
      }

      contenedorDeCartas2.appendChild(containerForEachGroupOfCards);
    }
  };

  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        otherCard(arrayOfCards);
        index++;
      }

      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  sort.addEventListener("click", e => {
    bubbleSort(arrayOfCards);
  });
};
