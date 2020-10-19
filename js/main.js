// Variable Declarations

const tds = document.querySelectorAll("td");
const table = document.querySelector("tbody");
const bingoBoard = document.getElementById("bingoBoard");
const createBoardButton = document.getElementById("createBoard");
const mainSection = document.getElementById("main");
let freeSpace = document.getElementById("freeSpace");

const phraseDatabase = [
  "Someone compliments Leon's hair",
  'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  "Someone emotes a Micro Leon in chat",
  "Leon says octothorpe",
  "Leon says 'automagically' ✨✨✨✨",
  '"A variable is a bucket"',
  "Leon forgets to turn off the background music 🎶",
  "Three people finish a challenge before the timer goes off ⏲️",
  "Someone mentions the OnlyFans page 🔞 ",
  "Alissa posts a helpful link in chat 🔗",
  "Leon tells us what he is drinking today",
  "Everyone freaks out about operators",
  "Hydrate! 🚰",
  "Posture Check!",
  "Someone asks Leon how he balances his time ⌛",
  "binary upload boom 👽",
  "Don't call yourself a junior dev 🙅🏿",
  "one job please! 💰",
  "STRETCH!",
  "community goal met 🎉",
  "Bob is mentioned",
  "Someone asks Leon which programming languages he uses",
  "Dylan spits hot fire 🔥🔥",
  "The Bachelor 🌹",
  "Bring It On 📣",
  "The nuns!",
  "Domino's 🍕",
  "Simba barks in the background 🐕"
];

const winningCombos = [
  ["0", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14"],
  ["15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24"],
  ["0", "5", "10", "15", "20"],
  ["1", "6", "11", "16", "21"],
  ["2", "7", "12", "17", "22"],
  ["3", "8", "13", "18", "23"],
  ["4", "9", "14", "19", "24"],
  ["0", "6", "12", "18", "24"],
  ["4", "8", "12", "16", "20"]
];

const boardPhrases = [];

// Function Declarations

function createBoard() {
  for (let i = 0; i < 25; i++) {
    // index 12 is my free space, which I want to keep clear of phrases
    if (i === 12) {
      boardPhrases.push("");
    } else {
      let randomNum = Math.floor(Math.random() * phraseDatabase.length);

      let randomPhrase = phraseDatabase[randomNum];

      /* console.log(randomPhrase, i);  <-- uncomment 
      and then check the console if you want to see 
      how the logic makes sure there are no repeats */

      if (boardPhrases.indexOf(randomPhrase) < 0) {
        boardPhrases.push(randomPhrase);
      } else {
        /* i is subtracted here when a repeat is found. Since i will get a ++ to my index at the end of the current iteration, it evens out and makes the loop repeat the same value of i until it finds a phrase that hasn't been used yet. */

        i--;
      }
    }
  }

  for (let i = 0; i < 25; i++) {
    tds[i].innerHTML = boardPhrases[i];
  }
  bingoBoard.hidden = false;

  createBoardButton.remove();
}

function winningCondition() {
  winningCombos.forEach((combo) => {
    let count = 0;
    combo.forEach((squareID) => {
      let stampCheck = tds[squareID];

      if (stampCheck.className === "stamp") {
        count++;
      }
    });
    if (count === 5) {
      freeSpace.className = "victory";
      freeSpace.innerHTML = `
      \n
      \n
      CONGRATS!
      🎉🎉🎉`;
    }
  });
}

// Event Listeners

table.addEventListener("click", (event) => {
  if (event.target.tagName == "TD" && event.target != freeSpace) {
    event.target.classList.toggle("stamp");
  }

  /* I had to set this 1s delay on winningCondition because I was facing a graphical error at the bottom of the page when a winning scenario was reached on a bottom row click. It seemed to be an issue with overlapping animations. I tried setting an animation delay in CSS, but the error would still appear after the last stamp click, then dissapear on the winning animation. I set this delay so that the final stamp animation would complete before function ran to trigger the winner animation. This seemed to solve that issue. */

  setTimeout(winningCondition, 600);
});

createBoardButton.addEventListener("click", createBoard);
