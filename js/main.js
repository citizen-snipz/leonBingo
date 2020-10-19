let bingoPhrases = [
  "Someone compliments Leon's hair",
  'Someone preemptively types "organization" in the chat',
  "Someone emotes a Micro Leon in chat",
  "Leon says octothorpe",
  "Leon says 'automagically' ✨✨✨✨",
  '"A variable is a bucket"',
  "Leon forgets to turn off the background music 🎶",
  "Three people finish a challenge before the timer goes off",
  "Someone mentions the OnlyFans page 🎥 ",
  "Alissa posts a helpful link in chat 🔗",
  "Leon tells us what he is drinking today",
  "Everyone freaks out about operators",
  "Hydrate! 💧",
  "Posture Check!",
  "Someone asks Leon how he balances his time ⌛️",
  "binary upload boom 👽",
  "Don't call yourself a junior dev",
  "one job please! 💸",
  "stretch!",
  "community goal met 🎉",
  "Bob is mentioned",
  "Someone asks Leon which programming languages he uses",
  "Dylan spits hot fire 🔥🔥",
  "The Bachelor 🌹",
  "Bring It On",
  "The nuns!",
  "Domino's 🍕"
];

let winningCombos = [
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

let boardSpaces = [
  "B1",
  "I1",
  "N1",
  "G1",
  "O1",
  "B2",
  "I2",
  "N2",
  "G2",
  "O2",
  "B3",
  "I3",
  "",
  "G3",
  "O3",
  "B4",
  "I4",
  "N4",
  "G4",
  "O4",
  "B5",
  "I5",
  "N5",
  "G5",
  "O5"
];

function createBoard() {
  for (let i = 0; i < boardSpaces.length; i++) {
    if (i != 12) {
      let randomNum = Math.floor(Math.random() * bingoPhrases.length + 0);

      let randomPhrase = bingoPhrases[randomNum];

      // console.log(randomPhrase, i);  uncomment this if you want to see how the logic makes sure there are no repeats

      if (boardSpaces.indexOf(randomPhrase) < 0) {
        boardSpaces[i] = randomPhrase;
      } else {
        i--;
      }
    }
  }

  for (let j = 0; j < 25; j++) {
    document.getElementById(j).innerHTML = boardSpaces[j];
  }
  document.getElementById("bingoBoard").hidden = false;

  document.querySelector("button").remove();
}

function markOff(spaceID) {
  document.getElementById(spaceID).parentNode.classList.toggle("stamp");

  winningCondition();
}

function winningCondition() {
  winningCombos.forEach((combo) => {
    let count = 0;
    combo.forEach((squareID) => {
      let stampCheck = document.getElementById(squareID).parentNode;

      if (stampCheck.className === "stamp") {
        count++;
      }
    });
    if (count === 5) {
      document.getElementById("bingoBoard").hidden = true;
    }
  });
}
