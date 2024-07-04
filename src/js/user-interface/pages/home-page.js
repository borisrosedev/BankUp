import Button from "../../models/Button/button-model.js"
import button from "../components/button.js"

export default function () {
  const btn = new Button({
    className: "home-page__button",
    content: "Se connecter"
  })
  return `
            <main class="main home-page__main">   
                ${button(btn)}
            </main>
        
        
        `
}
