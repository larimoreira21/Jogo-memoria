const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "vue.svg",
  "angular.svg",
  "react.svg",
  "ember.svg",
  "backbone.svg",
  "aurelia.svg"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
      <img class="back-face" src="img/js-badge.svg">
  </div>`
});

cardBoard.innerHTML = cardHTML + cardHTML;

/** Fim renderização HTML */

const cards = document.querySelectorAll(".memory-card");

let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;

    return false;
  }

  secondCard = this;
  
  checkForMatch();
};

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

 !isMatch ? disableCards() : resetCards(isMatch);
}

function disableCards() {
  lockCard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}


function resetCards(isMatch = false) {
  if(isMatch) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  [firstCard, secondCard, lockCard] = [null, null, false];

}

cards.forEach(card => card.addEventListener("click", flipCard));
