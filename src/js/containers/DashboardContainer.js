import miniProfileCard from "../user-interface/components/mini-profile-card.js"
import UsersService from "../services/UsersService.js"

export default class DashboardContainer {

    constructor(onNavigate){
        this.onNavigate = onNavigate
        this.usersService = new UsersService()
       
            const main = document.querySelector('.dashboard__main')
            const token =  JSON.parse(localStorage.getItem('token'))
            console.log('token', token)
            if(token){
    
                this.usersService.getUsers()
                    .then((users) => {
                        const user = users.find((u) => u.email == token.username)
                        if(user.email){
                            console.log('mini')
                            main.innerHTML += miniProfileCard(user)
                        }
                    })
               
            }
         


    
      
 
    }

    onProfileClick(){
        
    }

    onWalletClick(){

    }

}