let bingoWords = [
  "Someone compliments Leon's hair",
  'Someone preemptively types "organization" in the chat',
  "Someone emotes a Micro Leon in chat",
  "Leon says octothorpe",
  'Leon says "automagically"',
  '"A variable is a bucket"',
  "Leon forgets to turn off the background music",
  "Someone finishes a challenge before the timer goes off",
  "Someone mentions the OnlyFans page",
  "Alissa posts a helpful link in chat",
  "Leon tells us what he is drinking today",
  "Everyone freaks out about operators",
  "Hydrate!",
  "Posture Check!",
  "Someone asks Leon how he balances his time",
  "binary upload boom",
  "Don't call yourself a junior dev",
  "one job please!",
  "stretch!",
  "community goal met",
  "Bob is mentioned",
  "Someone asks Leon which programming languages he uses",
  "Dylan spits hot fire",
  "The Bachelor",
  "Bring it on",
  "The nuns!"
];

function createBoard() {
  //set all the squares back to white
  let w;
  for (w = 0; w < 25; w++) {
    // document.getElementById(w).style.backgroundColor = "white";
    // document.getElementById(w).parentNode.style.backgroundColor = "white";
  } //end for w

  let boardWords = [
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

  // pick random ones to put in the final board list
  let i;
  for (i = 0; i < boardWords.length; i++) {
    if (i != 12) {
      let randomNum = Math.floor(Math.random() * bingoWords.length + 0);

      boardWords[i] = bingoWords[randomNum];
    } //end if not 12
  } //end for

  //put the array into the bingo board
  let j;
  for (j = 0; j < 25; j++) {
    document.getElementById(j).innerHTML = boardWords[j];
  }
  //document.getElementById("testP").innerHTML = boardWords[0];
  document.getElementById("bingoBoard").hidden = false;
} //end function create board

function markOff(spaceID) {
  document.getElementById(spaceID).parentNode.classList.toggle("stamp");
} //end mark off function
