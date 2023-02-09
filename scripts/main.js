  const myButton = document.querySelector("button");
  const parag = document.querySelector("p");
  const listItem = document.querySelector("li");
  const imgFile = document.querySelectorAll("img")[1];

  myButton.onclick = () => {
    let myCards = ["garbage-collection", "cattermelon", "catomic-bomb",
                "reverse", "defuse", "see-the-future", "taco-cat", "skip", 
                "hairy-potato-cat", "feral-cat"];
                
    let random = Math.floor(Math.random() * 10);

    parag.textContent = "Next Card To Be Drawn Is: " + myCards[random];
    listItem.textContent = myCards[random];
    imgFile.setAttribute("src", "images/cards/" + myCards[random] + ".jpg");
  };