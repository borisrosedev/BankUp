export default class HomeContainer {
    constructor(onNavigate){
        this.onNavigate = onNavigate
        const btn = document.querySelector('.home-page__button')
        btn.addEventListener('click', this.onLoginClick.bind(this))
    }

    onLoginClick(){
        this.onNavigate('#login')
    }


}