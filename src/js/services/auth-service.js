import NotificationService from "./notification-service.js"
import UsersService from "./users-service.js"

export default class AuthService {
  constructor() {
    this.usersService = new UsersService()
    this.notificationService = new NotificationService()
  }

  login({ email, password }) {
    const user = this.usersService.findUserByEmail(email)
    console.log("user", user)
    if (user && user.password == password) {
      console.log("ici")
      localStorage.setItem("token", JSON.stringify({ username: email }))
      this.notificationService.setNotification({
        type: "positive",
        content: "Connexion réussie"
      })
      return "authorized"
    } else {
      this.notificationService.setNotification({
        type: "negative",
        content: "Connexion échouée"
      })
      return "unauthorized"
    }
  }

  register({ email, password }) {
    this.usersService.createUser({ email, password }).then(res => {
      if (res) {
        if (res == "error") {
          this.notificationService.setNotification({
            type: "negative",
            content: "Echec de l'inscription"
          })
          return res
        } else {
          this.notificationService.setNotification({
            type: "positive",
            content: "Inscription réussie"
          })
          return "registered"
        }
      } else {
        this.notificationService.setNotification({
          type: "positive",
          content: "Erreur lors de l'inscription"
        })
        return "error"
      }
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.notificationService.setNotification({
      type: "positive",
      content: "Déconnexion réussie"
    })
  }
}
