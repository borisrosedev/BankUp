import AuthService from "../services/auth-service.js"

export default class LogoutContainer {
  constructor(onNavigate) {
    this.onNavigate = onNavigate
    this.authService = new AuthService()
    this.authService.logout()
    setTimeout(() => {
      this.onNavigate("")
    }, 3000)
  }
}
