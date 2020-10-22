// Variable Declarations

const boardSquares = document.querySelectorAll("td")
const table = document.querySelector("tbody")
const hiddenElements = document.querySelectorAll("[hidden]")
const createBoardButton = document.getElementById("createBoard")
const mainSection = document.getElementById("main")
const freeSpace = document.getElementById("freeSpace")
const btnContainer = document.getElementById("btnContainer")
let coverAllMode = false

const phraseBank = [
  "Someone compliments Leon's hair",
  'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  "Someone emotes a Micro Leon in chat",
  "Leon says octothorpe",
  "Leon says 'automagically' \r✨✨✨✨",
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
  "Simba barks in the background 🐕",
  "which house am I??",
  "House Turing is mentioned",
  "House Hamilton is mentioned",
  "House Hopper is mentioned",
  "Leon turns into Little Leon",
  "We're going to end early today LOL"
]

const winningCombos = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
  [0, 4, 12, 20, 24]
]

// Function Declarations

function createBoard() {
  let boardPhrases = []
  for (let i = 0; i < 25; i++) {
    // index 12 is my free space, which I want to keep clear of phrases
    if (i === 12) {
      boardPhrases.push("")
    } else {
      let randomNum = Math.floor(Math.random() * phraseBank.length)

      let randomPhrase = phraseBank[randomNum]

      /* console.log(randomPhrase, i);  <-- uncomment 
      and then check the console if you want to see 
      how the logic makes sure there are no repeats */

      if (!boardPhrases.includes(randomPhrase)) {
        boardPhrases.push(randomPhrase)
      } else {
        /* i is subtracted here when a repeat is found. Since i will get a ++ to my index at the end of the current iteration, it evens out and makes the loop repeat the same value of i until it finds a phrase that hasn't been used yet. e.g, if I am on index 5, and the boardPhrases array already includes randomPhrase, i-- will reduce index to 4, then the natural iteration of the loop will bump my index back up to 5 before it checks conditions again. That will continue until an unused randomPhrase is selected. */

        i--
      }
    }
  }

  for (let i = 0; i < 25; i++) {
    boardSquares[i].innerHTML = boardPhrases[i]
  }
  hiddenElements.forEach((element) => (element.hidden = false))

  createBoardButton.remove()
}

function winningCondition() {
  if (!coverAllMode) {
    winningCombos.forEach((combo) => {
      /* This filter method iterates over a 5-value array in winningCombos and stores in the stamped array each value that meets the condition of having the 'stamp' class. */
      const stamped = combo.filter((squareIndex) => {
        return boardSquares[squareIndex].className === "stamp"
      })

      /* After the previous loop iterates over a 5-value winning scenario and returns an array, this conditional verifies that a stamped square exists at index 4 of the winning scenario, i.e. a 5th value. Therefore, if all of the values in the scenario are stamped, we've met our win condition. */
      if (stamped[4]) {
        freeSpace.className = "victory"
        freeSpace.innerHTML = `
      \n
      \n
      CONGRATS! 😃 
      🎉🎉🎉`
      }
    })
  } else {
    const stamped = [...boardSquares].filter((square) => {
      return square.className === "stamp"
    })
    console.log(stamped)
    if (stamped[24]) {
      freeSpace.className = "victory"
      freeSpace.innerHTML = `
    \n
    \n
    CONGRATS! 😃 
    🎉🎉🎉`
    }
  }
}

// Event Listeners

createBoardButton.addEventListener("click", createBoard)

/* setting an event listener on my whole table allows 
my clicks to be registered for all my squares, but also
all non-square elements of my table like borders and
headers. This is due to a process called event
bubbling, i.e. what event happens to a child element 
alsohappens to a parent element. By setting a 
conditional inside the event listener, I've created an 
environment where I don't have to write an event  
listener for every square. */

table.addEventListener("click", (event) => {
  if (event.target.tagName == "TD" && event.target != freeSpace) {
    event.target.classList.toggle("stamp")

    /* I had to set this 0.6s delay on winningCondition because I was facing a graphical error at the bottom of the page when a winning scenario was reached on a bottom row click. It seemed to be an issue with overlapping animations. I tried setting an animation delay in CSS, but the error would still appear after the last stamp click, then disappear on the winning animation. I set this delay so that the final stamp animation would complete before function ran to trigger the winner animation. This seemed to solve that issue. */

    setTimeout(winningCondition, 600)
  } else if (event.target.className === "victory") {
    event.target.className = "stamp"
  }
})

btnContainer.addEventListener("click", (event) => {
  if (event.target.className === "coverAllOn") {
    coverAllMode = false
    event.target.className = ""
    event.target.textContent = "Cover-all Mode: Off"
    freeSpace.innerHTML = ""
    winningCondition()
  } else if (event.target.id === "coverAll") {
    coverAllMode = true
    event.target.className = "coverAllOn"
    event.target.textContent = "Cover-all Mode: On"
    freeSpace.innerHTML = `COVER-ALL
    MODE`
    // freeSpace.className = "stamp"
  } else if (event.target.id === "shuffle") {
    boardSquares.forEach((square) => {
      if (square.id != "freeSpace") {
        square.className = ""
      }
    })
    createBoard()
  }
})
