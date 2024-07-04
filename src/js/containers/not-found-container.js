export default class NotFoundContainer {
  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    document
      .getElementById("not-found-home-btn")
      .addEventListener("click", this.onHomeClick.bind(this));
  }

  onHomeClick() {
    this.onNavigate("");
  }
}
