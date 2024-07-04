import paragraph from "../user-interface/components/paragraph"

export default class NotificationService {
  constructor() {
    this.content = ""
    this.type = ""
  }

  getNotification() {}

  setNotification(data) {
    this.content = data.content
    this.type = data.type
    this.showContent()
  }

  showContent() {
    const notification = document.getElementById("notification")
    notification.innerHTML = paragraph({
      className: `notification__paragraph show-up  ${this.type}`,
      content: this.content
    })
    setTimeout(() => {
      const para = document.querySelector(".notification__paragraph")
      para.classList.remove("show-up")
      para.classList.add("vanish-down")
      setTimeout(() => {
        notification.removeChild(para)
      }, 1000)
    }, 2000)
  }
}
