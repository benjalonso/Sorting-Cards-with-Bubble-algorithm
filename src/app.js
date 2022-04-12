/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let draw = document.getElementById("draw");
  let sort = document.getElementById("sort");
  let contenedorDeCartas = document.getElementById("contenedorDeCartas");
  let numberOfCards = document.getElementById("numberOfCards");

  let pintas = ["♦", "♥", "♠", "♣"];
  let numeros = [
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

  draw.addEventListener("click", e => {
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
        cardNumber.innerHTML = numeros[numeroAleatorio];
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
      }
    };

    newCard(numberOfCards.value);
  });
  // Evento de creación y ordenamiento de cartas
  sort.addEventListener("click", e => {
    // Fuonción para la creación de la carta
  });
  const bubbleSort = arr => {
    for (let wall = arr.length - 1; wall > 0; wall--) {
      for (let i = 0; i < wall; i++) {
        if (arr[i] > arr[i + 1]) {
          let aux = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = aux;
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
              cardNumber.innerHTML = numeros[numeroAleatorio];
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
            }
          };

          newCard(numberOfCards.value);
        }
      }
    }
    return arr;
  };
  bubbleSort();
};
