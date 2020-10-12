let bingoSpots = ['Someone compliments Leon\'s hair', 'Someone types "organization" in the chat before a question is asked', 'Someone emotes a Micro Leon in chat', 'Leon says octothorpe', 'Leon says "automagically"', '"A variable is a bucket"', 'Leon forgets to turn off the background music', 'Someone finishes a challenge before the timer goes off', 'Someone mentions the OnlyFans page', 'Alissa posts a helpful link in chat', 'Leon tells us what he is drinking today', 'Everyone freaks out about operators', 'Hydrate!', 'Posture Check!']
    let para = document.createElement('p');

    function randomizeBingoSpots() {
      para.textContent = bingoSpots[Math.floor(Math.random() * bingoSpots.length)]
    }
    randomizeBingoSpots()

    const section = document.querySelector('section');

    section.appendChild(para);
