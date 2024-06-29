import Button from "../../models/Button.js";
import button from "../components/button.js";

export default function(){

    let btn = new Button("", "home-page__button", "", "Se connecter")
    return(
        `
            <main class="main home-page__main">   
                ${button(btn)}
            </main>
        
        
        `
    )



}