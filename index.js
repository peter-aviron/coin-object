/*

Create a new class called CoinObject
This class will have 1 attribute
    - state (heads vs tails)
This class will have a flip method
    - flip method should randomly assign state to heads or tails

*/

class CoinObject {
  constructor(name, state) {
    this.name = name;
    this.state = state;
    this.initializeDOMElement();
  }

  initializeDOMElement() {
    this.element = document.createElement("div");
    this.element.innerHTML = this.name;
    this.element.style.display = "flex";
    this.element.style.flexDirection = "column";
    this.element.style.alignItems = "center";
    this.element.style.border = "1px solid black";

    this.initializeButtonElement();

    this.initializeImageElement();

    document.querySelector("body").appendChild(this.element);
  }

  initializeImageElement() {
    this.imageElement = document.createElement("img");
    this.imageElement.style.width = "10em";
    this.imageElement.style.height = "10em";
    this.updateImage();
    this.element.appendChild(this.imageElement);
  }

  initializeButtonElement() {
    let buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Flip Coin";
    buttonElement.addEventListener("click", () => {
      this.flip();
    });
    this.element.appendChild(buttonElement);
  }

  flip() {
    let randomNum = Math.random();
    if (randomNum > 0.5) {
      this.state = "Heads";
    } else {
      this.state = "Tails";
    }
    this.updateImage();
  }

  updateImage() {
    if (this.state === "Heads") {
      this.imageElement.src = "heads.jpeg";
    } else {
      this.imageElement.src = "tails.jpg";
    }
  }
}

let petersCoin = new CoinObject("Peter", "Heads");

let ashleysCoin = new CoinObject("Ashley", "Tails");

let spencersCoin = new CoinObject("Spencer", "Tails");

// petersCoin.flip();
// console.log(petersCoin.state);
