import AuthService from "../services/AuthService.js";
import NotificationService from "../services/NotificationService.js";

export default class LogContainer {
  constructor(onNavigate, isLoggingIn = true) {
    this.onNavigate = onNavigate;
    this.isLoggingIn = isLoggingIn;
    this.authService = new AuthService();
    this.notificationService = new NotificationService();
    this.logForm = document.getElementById("log-form");
    this.logForm.addEventListener("submit", (e) => this.onSubmit(e));
    this.submitButton = document.getElementById("submit-button");
  }

  onSubmit(e) {
    e.preventDefault();
    const emailValue = document.getElementById("email").value;

    this.submitButton.disabled = true;
    this.submitButton.classList.remove("button");
    this.submitButton.classList.add("disabled-button");

    const passwordValue = document.getElementById("password").value;
    switch (this.isLoggingIn) {
      case true:
        if (!(emailValue && passwordValue)) {
          this.notificationService.setNotification({
            type: "negative",
            content: "Formulaire incomplet",
          });
        } else {
          console.log("clicked on submit button of login form");

          const response = this.authService.login({
            email: emailValue,
            password: passwordValue,
          });

          setTimeout(() => {
            if(response == "authorized"){
              this.onNavigate("#dashboard")
            }
          }, 2000)
         
        }
        break;
      case false:
        const confirmedPasswordValue =
          document.getElementById("confirmed-password").value;
        if (!(emailValue && passwordValue && confirmedPasswordValue)) {
          this.notificationService.setNotification({
            type: "negative",
            content: "Formulaire incomplet",
          });
        } else {
       
          const response = this.authService.register({
            email: emailValue,
            password: passwordValue,
            confirmedPassword: confirmedPasswordValue,
          });

          setTimeout(() => {
            if(response == "registered"){
              this.onNavigate("#dashboard")
            }
          }, 2000)
        
          
        }

        break;
      default:
        break;
    }

    setTimeout(() => {
      this.submitButton.classList.remove("disabled-button");
      this.submitButton.classList.add("button");
      this.submitButton.disabled = false;
    }, 3000);
  }
}
