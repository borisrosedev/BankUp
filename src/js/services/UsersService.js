export default class UsersService {
    
    constructor(){
        const self = this
        this.getUsers()
                .then(() => {
                    console.log('this.users', self.users)
                })
    }

    async getUsers(){
        return fetch('./data/users.json')
            .then((res) => res.json())
            .then((users) => this.users = users)
            .catch((err) => console.log(err))
    }


    findUserById(id){

        if(this.users && this.users.length){
            const optionalUser = this.users.filter((us) => us.id == id)
            if(!optionalUser){
                return "no user found"
            } else {
                return optionalUser
            }

        } else {
            return "no user"
        }
      
    }

    findUserByEmail(email){

        if(this.users && this.users.length){
            const optionalUser = this.users.find((us) => us.email == email)
            if(!optionalUser){
                return "no user found with this email"
            } else {
                return optionalUser
            }
        } else {
            return "no user"
        }
      
    }
      
    createUser({ email, password }){
        return fetch('./data/users.json', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ email, password})
        })
        .then((res) => res.json())
        .then((message) => this.message = message)
        .catch((err) => console.error(err))
    }

       
}