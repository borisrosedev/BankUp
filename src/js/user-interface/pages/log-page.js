import Form from "../../models/Form/form-model.js"
import form from "../components/form"

export default function (showLoginPage) {
  const page = {}
  let formInstance
  const data = {
    id: "log-form",
    className: "log-form",
    inputs: [
      {
        type: "email",
        placeholder: "Entrer votre email",
        id: "email"
      },
      {
        type: "password",
        placeholder: "Entrer votre mot de passe",
        id: "password"
      }
    ],
    buttons: [
      {
        id: "submit-button",
        type: "submit",
        content: "Valider"
      },
      {
        id: "reset-button",
        type: "reset",
        content: "Réinitialiser"
      }
    ]
  }
  if (showLoginPage) {
    page.title = "Se connecter"

    formInstance = new Form(data)
  } else {
    page.title = "Register Page"

    data.inputs.push({
      type: "password",
      placeholder: "Confirmez votre mot de passe",
      id: "confirmed-password"
    })
    formInstance = new Form(data)
  }

  return `
         <main class="main log-page__main">   
            <h1 data-testid="log-page__title">${page.title}</h1>
            <section>
                ${form(formInstance)}
            </section>
            <section>
            ${showLoginPage ? '<small>Pas encore inscrit(e) ? Cliquez <a href="#register">ici</a> </small>' : '<small>Déjà inscrit(e) ? Cliquez <a href="#login">ici</a> </small>'}
            </section>
         </main>
        
        
        `
}
