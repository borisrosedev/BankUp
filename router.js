import HomeContainer from "./src/js/containers/HomeContainer.js";
import LogContainer from "./src/js/containers/LogContainer.js";
import header from "./src/js/user-interface/layout/header.js";
import homePage from "./src/js/user-interface/pages/home-page.js"
import logPage from "./src/js/user-interface/pages/log-page.js";
import notification from "./src/js/user-interface/layout/notification.js"



export function navigateToPage(h){
    console.log('h', h)
    window.history.pushState({}, "", window.location.pathname + h)
    console.log('🟠 dev says: navigateToPage has been called')
    const app = document.getElementById('app')
    app.innerHTML = "";
    app.innerHTML += header()
    app.innerHTML += notification()
    switch(h){
        case '':   
            app.innerHTML += homePage()
            new HomeContainer(window.onNavigate)
            break;
        case '#register':
            console.log('ici')
            app.innerHTML += logPage(false);
            new LogContainer(window.onNavigate, false)
            break;
        case '#login':
            app.innerHTML += logPage(true)
            new LogContainer(window.onNavigate, true)
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
