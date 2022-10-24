// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  generateDogCardHtml = () => {
    const banner = this.hasBeenLiked
      ? '<img src="/images/badge-like.png" alt="like or not" />'
      : this.hasBeenSwiped
      ? '<img src="/images/badge-nope.png" alt="like or not" />'
      : "";

    document.getElementById(
      "swipe-section"
    ).style.backgroundImage = `url(${this.avatar})`;

    return `<div class="container image-card">
    <div class="like-or-not">
        ${banner}
    </div>
    <div class="user-details">
      <h1 class="username">${this.name}, ${this.age}</h1>
      <p class="user-caption">${this.bio}</p>
    </div>
  </div>`;
  };

  setSwipedStatus = () => {
    if (this.hasBeenLiked) {
      this.hasBeenLiked = false;
      this.hasBeenSwiped = true;
    } else if (this.hasBeenSwiped) {
      this.hasBeenSwiped = false;
    } else {
      this.hasBeenSwiped = true;
    }
  };

  setLikedStatus = () => {
    if (this.hasBeenSwiped) {
      this.hasBeenLiked = true;
      this.hasBeenSwiped = false;
    } else if (this.hasBeenLiked) {
      this.hasBeenLiked = false;
    } else {
      this.hasBeenLiked = true;
    }
  };
}

export { Dog };
