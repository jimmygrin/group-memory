function shuffle(deck) {
  //   console.log("---> shuffle")
  let currentIndex = deck.length
  let temporaryValue
  let randomIndex
  const newArray = deck.slice()
  // While there remains elements to shuffle...
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // Swap it with the current element.
    temporaryValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = temporaryValue
  }
  return newArray
}

function readyDeck(deck) {
  let buttons = ""
  deck = shuffle(deck.split(""))

  deck.forEach(l => {
    buttons += `<button>${l.toUpperCase()}</button>`
  })
  //   deck = shuffle(deck)
  $("#buttons").html(buttons)
}

$(document).ready(function() {
  readyDeck(deck)

  $("#button").on("click", "button", function(e) {
    e.preventDefault()

    // let card1 = $(this).html()
    $(this).addClass("face-up")
  })
})
