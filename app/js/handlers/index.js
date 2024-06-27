import { makeOperation } from "../utils/makeOperation.js";

export function digitClickHandler(e){
    // c'est une fonction qui va gérer ce qui se passe quand je clique sur un bouton

    // quand j'utilise la fonction on dit qu'on l'appelle et on lui passe un argument qui est en réalité la VALEUR que vous avez donné au paramètre (digit)
    makeOperation(e.target.id)
}


export function operationClickHandler(e){
    document.getElementById('result-button').dataset.operation = e.target.id
             
}

export function submitHandler(e,screen){
    // casser le comportement par défaut du formulaire 
    e.preventDefault()
    screen.innerHTML = document.getElementById('result-button').dataset.val;
}
