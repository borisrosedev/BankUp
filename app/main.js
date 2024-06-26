console.log("🟢 Bonjour la calculatrice a fini de s'afficher")

const screen = document.getElementById("screen");
screen.innerHTML = "0"

// c'est un tableau
const digitIdentifiers = [0,1,2,3,4,5,6,7,8,9]

for(const el of digitIdentifiers){
    // pour chaque élément du tableau ci-dessus 
    // tu récupères élément HTML qui a la valeur de cet élément comme identifiant
    document.getElementById(el).addEventListener('click', digitClickHandler)
}


function digitClickHandler(e){
    // c'est une fonction qui va gérer ce qui se passe quand je clique sur un bouton
    screen.innerHTML = e.target.id

}

// objectif : faire en sorte que lorsque je clique sur l'un des chiffres puis sur l'opératateur + et encore sur un autre chiffre il m'affiche dans la partie screen la somme des deux.