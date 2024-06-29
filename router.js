import homePage from "./src/js/user-interface/pages/home-page.js"

function onNavigate(){
    console.log('🟠 dev says: onNavigate has been called')
}

function navigateToPage(){
    console.log('🟠 dev says: navigateToPage has been called')

    /* 
    
    
        Je veux récupérer quelque chose qui existe dans le document autrement dit sur la page html donc j'utilise l'objet document qui représente la page et je cherche en utilisant getElementById qui est une méthode de document, l'élément qui a pour id ce que j'ai passé en argument à la méthode autrement dit la valeur que je lui a passé. En l'occurrence j'ai passé la valeur 'app' qui est une chaîne de caractères. 
    
        on a donné un nom à la variable ici app on l'a assigné comme constante autrement dit sa valeur ne peut pas changer 
    
    */
    const app = document.getElementById('app')
    app.innerHTML = homePage()
}

export default function(){
    console.log('🎾 dev says: router has been called')

    navigateToPage()
    
}