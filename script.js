const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

const cardSlider = document.querySelector('.card-slider');
const cards = document.querySelectorAll('.card');
let cardIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

showCard(cardIndex);

function nextCard() {
    cardIndex = (cardIndex + 1) % cards.length;
    showCard(cardIndex);
}

function prevCard() {
    cardIndex = (cardIndex - 1 + cards.length) % cards.length;
    showCard(cardIndex);
}

setInterval(nextCard, 3000); // Auto-slide every 3 seconds

// You can add event listeners for user interaction if needed.
