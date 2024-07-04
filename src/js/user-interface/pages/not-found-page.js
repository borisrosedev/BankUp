import Button from "../../models/Button";
import button from "../components/button";

export default function(){
    const btn = new Button({ id: "not-found-home-btn", className: "button", content: "Retour à la page d'accueil"})
    return(
        `
            <main class="main not-found__main">
                <h1> 404 | La page que vous cherchez n'existe pas </h1
                <section>
                    ${button(btn)}
                </section>
            <main>
        
        `
    )
}