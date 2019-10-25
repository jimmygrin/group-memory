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
    buttons += `<button class="face-down">${l.toUpperCase()}</button>`
  })
  //   deck = shuffle(deck)
  $("#buttons").html(buttons)
}

$(document).ready(function() {
  readyDeck(deck)
  function handleGame() {
    
  }
  let arrCards = []

  // Handling cards
  $("#buttons").on("click", "button", function(e) {
    e.preventDefault()

    // putting values of clicked cards into the array
    arrCards.push($(this))

    //if 2 cards are active, disables you from selecting other cards
    if (arrCards.length <= 2) {
      $(this).toggleClass("face-up")
    }


    if (arrCards.length === 2) { // if total cards in array are equal to 2 then compare win/lose scenario
      if (arrCards[0].html() != arrCards[1].html()) {
        setTimeout(function() {
          arrCards[0].toggleClass("face-up")
          arrCards[1].toggleClass("face-up")
          arrCards = []
        }, 1200)
        // boo.play()
      } else {
        arrCards[0].addClass("stay")
        arrCards[1].addClass("stay")
        

        if (arrCards[0].hasClass("stay") && arrCards[1].hasClass("stay")) {
          $(".stay").attr("disabled", true)
          win.play()
        }
        arrCards = []
      }
    }
  })
})
