import { digitClickHandler, operationClickHandler, submitHandler } from "./js/handlers/index.js";

console.log("🟢 Bonjour la calculatrice a fini de s'afficher")

const screen = document.getElementById("screen");
const calculatorForm = document.getElementById("calculator")

screen.innerHTML = document.getElementById('result-button').dataset.val

// c'est un tableau
const digitIdentifiers = [0,1,2,3,4,5,6,7,8,9]
const operationIdentifiers = ["add","substract", "divide", "multiply"];



for(const el of digitIdentifiers){
    // pour chaque élément du tableau ci-dessus 
    // tu récupères élément HTML qui a la valeur de cet élément comme identifiant
    document.getElementById(el).addEventListener('click', digitClickHandler)
}

for(const el of operationIdentifiers){
    document.getElementById(el).addEventListener('click', operationClickHandler)
}


calculatorForm.addEventListener('submit', (e) => submitHandler(e, screen))





// je définis la fonction et donc je dis que la fonction accepte un paramètre digit


// objectif : faire en sorte que lorsque je clique sur l'un des chiffres puis sur l'opératateur + et encore sur un autre chiffre il m'affiche dans la partie screen la somme des deux.