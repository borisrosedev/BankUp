export default class LogContainer {
    
    constructor(onNavigate, isLoggingIn = true) {
        this.onNavigate = onNavigate
        this.isLoggingIn = isLoggingIn
    }

    onSubmit(){
        switch(this.isLoggingIn){
            case true:
                    console.log('clicked on submit button of login form')
                break;
            case false:
                    console.log('clicked on submit button of register form')
                break;
            default:
                break;      
        }
    }

}