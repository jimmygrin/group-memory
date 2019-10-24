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
  let arrCards=[]
  // let count=0;
    // setTimeout()
    // setTimeout(function(){ alert("Hello"); }, 3000);

    
  $("#buttons").on("click", "button", function(e) {
    e.preventDefault(
    )
     arrCards.push($(this))
     console.log(arrCards)
    $(this).toggleClass("face-up")
    if(arrCards.length==2)
    {
      if(arrCards[0][0].innerHTML !=arrCards[1][0].innerHTML)
      {
        setTimeout(function(){
          arrCards[0].toggleClass("face-up")
          arrCards[1].toggleClass("face-up")
          arrCards=[];
        },3000)
        
       
        
      }else
      {

        // alert("same")
      }
      
    }

    
    // if(count==1)
    // {
    //   // alert(count)


    //     card2=$(this)  
        
    // }else{
      // count = 0
    // }if(card1!=card2){
      // alert("different")
      
    //   // card1.toggleClass("face-down")
    //   card2.toggleClass("face-down")


    // }else{
    //   //same cards
    // }


  })


})
