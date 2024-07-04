export default class UsersService {
  constructor() {
    this.users = []
    this.getUsers()
      .then(users => {
        this.users = users
        console.log("this.users", this.users)
      })
      .catch(err => console.log("Error fetching users:", err))
  }

  async getUsers() {
    try {
      const response = await fetch("./data/users.json")
      return await response.json()
    } catch (err) {
      console.log("Error fetching users:", err)
      return []
    }
  }

  findUserById(id) {
    if (this.users && this.users.length) {
      const optionalUser = this.users.find(us => us.id == id)
      console.log(optionalUser)
      if (!optionalUser) {
        return "no user found"
      } else {
        return optionalUser
      }
    } else {
      return "no user"
    }
  }

  findUserByEmail(email) {
    console.log("email", email)
    if (this.users && this.users.length) {
      console.log("tinto")
      const optionalUser = this.users.find(us => us.email == email)
      if (!optionalUser) {
        return "no user found with this email"
      } else {
        return optionalUser
      }
    } else {
      return "no user"
    }
  }

  createUser({ email, password }) {
    const optionalUser = this.findUserByEmail(email)
    if (optionalUser && typeof optionalUser !== "string") {
      return "error"
    }

    const newUser = { email, password }
    this.users.push(newUser) // Adding the new user to the local users array

    // Simulating a POST request to update the users data
    return fetch("./data/users.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.users)
    })
      .then(res => res.json())
      .then(message => {
        this.message = message
        return newUser // Returning the newly created user
      })
      .catch(err => {
        console.error(err)
        return "error"
      })
  }
}
