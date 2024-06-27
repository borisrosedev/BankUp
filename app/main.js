console.log("🟢 Bonjour la calculatrice a fini de s'afficher")


let val = 0;
const screen = document.getElementById("screen");
const calculatorForm = document.getElementById("calculator")
let whatOperation = "";

screen.innerHTML = 0

// c'est un tableau
const digitIdentifiers = [0,1,2,3,4,5,6,7,8,9]
const operationIdentifiers = ["add","substract", "divide", "multiply"];



for(const el of digitIdentifiers){
    // pour chaque élément du tableau ci-dessus 
    // tu récupères élément HTML qui a la valeur de cet élément comme identifiant
    document.getElementById(el).addEventListener('click', digitClickHandler)
}

for(const el of operationIdentifiers){
    document.getElementById(el).addEventListener('click',operationClickHandler)
}


calculatorForm.addEventListener('submit', submitHandler)


function operationClickHandler(e){
    whatOperation = e.target.id
             
}


function digitClickHandler(e){
    // c'est une fonction qui va gérer ce qui se passe quand je clique sur un bouton

    // quand j'utilise la fonction on dit qu'on l'appelle et on lui passe un argument qui est en réalité la VALEUR que vous avez donné au paramètre (digit)
    makeOperation(e.target.id)
}


function submitHandler(e){
    // casser le comportement par défaut du formulaire 
    e.preventDefault()
    screen.innerHTML = val;
}


// je définis la fonction et donc je dis que la fonction accepte un paramètre digit
function makeOperation(digit){
    console.log(whatOperation)
    switch(whatOperation){
        case "add":
            val+= Number(digit);
            break;
        case "substract":
            val -= Number(digit)    
            break;
        case "divide":
            val /= Number(digit) 
            break;
        case "multiply":
            val *= Number(digit)  
            break;
        default:
            val = val +  Number(digit)
            break;
        
    }
}

// objectif : faire en sorte que lorsque je clique sur l'un des chiffres puis sur l'opératateur + et encore sur un autre chiffre il m'affiche dans la partie screen la somme des deux.