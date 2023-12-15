var firstcard, secondcard;
let max = 12;
let min = 1;
let diff = max - min;
let isAlive = true;
let message = "";
let s = 0;
let cardsEl= document.getElementById("numbers")
let cards=[]

function generateRandomcard() {
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand = rand + min;
    return rand;
}

function startgame(){
    firstcard = generateRandomcard();
    secondcard = generateRandomcard();
    s=0
    cards=[firstcard,secondcard]

    rendergame()
}

function rendergame(){
    s=0
    cardsEl.textContent="Cards: "

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
        s+=cards[i]
    }

    document.getElementById("sum").innerText = "Sum: " + s;

    if (s < 21) {
        message = "Do you want to draw a new card?";
        document.getElementById("message").innerText="Result: "+message
      } else if (s == 21) {
        message = "Wohooo! You have got a Blackjack!";
        document.getElementById("message").innerText="Result: "+message
      } else {
        message = "Better Luck next Time!!";
        document.getElementById("message").innerText="Result: "+message
        isAlive = false;
      }
}
function newcard(){
    let thirdcard=generateRandomcard()
    cards.push(thirdcard)
    rendergame()
}