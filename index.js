import { dogs } from "/data.js";
import { Dog } from "/Dog.js";

let dogsArray = dogs.map((dog) => {
  return dog;
});

let dog = new Dog(dogsArray[0]);

const dogContainer = document.getElementById("swipe-section");
const likeButton = document.getElementById("like-button");

document.addEventListener("click", (e) => {
  if (e.target.id === "like-button") {
    dog.setLikedStatus();
    render();
    getNewDog();
  }
  if (e.target.id === "pass-button") {
    dog.setSwipedStatus();
    getNewDog();
  }
});

dogContainer.innerHTML = dog.generateDogCardHtml();

const getNewDog = () => {
  if (dog.hasBeenSwiped) {
    dogsArray.push(dogsArray.shift());
  } else {
    dogsArray.shift();
  }
  setTimeout(() => {
    if (dogsArray.length > 0) {
      dog = new Dog(dogsArray[0]);
      render();
    } else {
      document.body.innerHTML = `<h1>There are no more dogs today!</h1>
      <img class="end-image" src="/images/dog-teddy.jpg" alt="dog" />`;
    }
  }, 1500);
  render();
};

const render = () => {
  dogContainer.innerHTML = dog.generateDogCardHtml();
};
