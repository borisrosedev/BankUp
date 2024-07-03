import NotificationService from "./NotificationService.js";
import UsersService from "./UsersService.js";

export default class AuthService {
    constructor(){
        this.usersService = new UsersService();
        this.notificationService = new NotificationService()
    }

    login({ email, password }){
        const user = this.usersService.findUserByEmail(email)
        console.log('user', user)
        if(user && user.password == password){
            console.log('ici')
            localStorage.setItem('token', JSON.stringify({ username: email}))
            this.notificationService.setNotification({ type: 'positive', content: 'Connexion réussie'})
        } else {
            this.notificationService.setNotification({ type: 'negative', content: 'Connexion échouée'})
        }
    }

    register({ email, password}){
        this.usersService.createUser({email, password})
            .then((res) => {
                if(res){
                    this.notificationService.setNotification({ type: 'positive', content: 'Inscription réussie'})
                }
            })
    }

    logout(){
        localStorage.removeItem('token')
        this.notificationService.setNotification({ type: 'positive', content: 'Déconnexion réussie'})
    }
}