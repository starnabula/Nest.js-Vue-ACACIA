
export const interfaceandtype = ( ) => {

    interface User {
        name: string
        age: number 
    }

    interface User {
        gender: string
    }

    const user: User = {
        name: "John",
        age: 30,
        gender: "male"
    }

    interface Admin extends User {
        isAdmin: boolean
    }

    console.log(user.name, user.age)

    const admin: Admin = {
        name: "Jane",
        age: 25,
        gender: "female",
        isAdmin: true
    }

    // console.log(admin.name, admin.age, admin.isAdmin, admin.gender)   
    type Person = {
        name: string
        age: number
    }

    type Role = Person & { isAdmin: boolean }

    const person: Role = {
        name: "John",
        age: 30,
        isAdmin: true
    }

    console.log(person.name, person.age, person.isAdmin)

}