const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 16;

playerLivesCount.textContent = playerLives;

    //We generate the object 🧑🏻‍💻
    const getData = () =>  [
    { imgSrc: "./cards/ace_of_hearts.jpg", id: 1, name: "ace of hearts" },
    { imgSrc: "./cards/blame_king.jpg", id: 2, name: "blame king" },
    { imgSrc: "./cards/cross_queen.jpg", id: 3, name: "cross queen" },
    { imgSrc: "./cards/deuce_Diamonds.jpg", id: 4, name: "deuce Diamonds" },
    { imgSrc: "./cards/eight_of_hearts.jpg", id: 5, name: "eight of hearts" },
    { imgSrc: "./cards/Jack_of_Diamonds.jpg", id: 6, name: "Jack of Diamonds" },
    { imgSrc: "./cards/nine_blame.jpg", id: 7, name: "nine blame" },
    { imgSrc: "./cards/ten_crosses.jpg", id: 8, name: "ten crosses" },
  { imgSrc: "./cards/ace_of_hearts.jpg", id: 9, name: "ace of hearts" },
    { imgSrc: "./cards/blame_king.jpg", id: 10, name: "blame king" },
    { imgSrc: "./cards/cross_queen.jpg", id: 11, name: "cross queen" },
    { imgSrc: "./cards/deuce_Diamonds.jpg", id: 12, name: "deuce Diamonds" },
    { imgSrc: "./cards/eight_of_hearts.jpg", id: 13, name: "eight of hearts" },
    { imgSrc: "./cards/Jack_of_Diamonds.jpg", id: 14, name: "Jack of Diamonds" },
    { imgSrc: "./cards/nine_blame.jpg", id: 15, name: "nine blame" },
    { imgSrc: "./cards/ten_crosses.jpg", id: 16, name: "ten crosses" },
    ];

    const randomize = () => {
        const cardData = getData();
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
    };  

    const cardGenerator = () => {
        const cardData = randomize();

        //generate HTML

        cardData.forEach((item) => {

           const section = document.querySelector("section");
           const card = document.createElement("div");
           card.classList = "card";

           card.setAttribute("id", item.id);
           card.setAttribute("name", item.name);

           const face = document.createElement("img");
           face.classList = "face";
           face.src = item.imgSrc;

           const back = document.createElement("div");
           back.classList = "back";

           section.appendChild(card);
           card.appendChild(face);
           card.appendChild(back);

           card.addEventListener("click", (e) => {
              console.log(e);
      //Run our flip animation
      card.classList.toggle("toggleCard");
      checkCards(e);
  });
       });
    };

    const checkCards = (e) => {
        const clickedCard = e.target;
        clickedCard.classList.add("flipped");
        const flippedCards = document.querySelectorAll(".flipped");
        const toggleCard = document.querySelectorAll(".toggleCard");
        console.log(flippedCards);

     //logic

     if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
            ) {
            console.log("match");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.classList.pointerEvents = "none";
        });
    } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            setTimeout(() => card.classList.remove("toggleCard"), 1000)
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if (playerLives === 0) {
            restart("Попробуй ещё раз");
        }
    }
}
    // if win
    if (toggleCard.length === 16) {
        restart("Победа!")
    }
};

//restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        //randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 16;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};



cardGenerator();



