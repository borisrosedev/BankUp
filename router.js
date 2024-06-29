import HomeContainer from "./src/js/containers/HomeContainer.js";
import header from "./src/js/user-interface/layout/header.js";
import homePage from "./src/js/user-interface/pages/home-page.js"
import loginPage from "./src/js/user-interface/pages/login-page.js";




export function navigateToPage(h){

    window.history.pushState({}, "", window.location.pathname + h)
    console.log('🟠 dev says: navigateToPage has been called')
    const app = document.getElementById('app')
    app.innerHTML = "";
    app.innerHTML += header()
    switch(h){
        case '':   
            app.innerHTML += homePage()
            new HomeContainer(window.onNavigate)
            break;
        case '#login':
            app.innerHTML += loginPage()
            break;
        default:
            break;
    }
  
}

export default function(){
    console.log('🎾 dev says: router has been called')
    navigateToPage(window.location.hash)
    
}

window.onNavigate = (h) => {
    navigateToPage(h)
}


window.onpopstate = () => {
    navigateToPage(window.location.hash)
}
