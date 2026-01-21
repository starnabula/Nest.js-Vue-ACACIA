

export  const asyncawait = async () => {

    async function getUserData() {
    
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
            const data = await response.json()
            console.log('User Data ', data)
        } catch (error) {
            console.error('Failed to fetch user data', error)
        }
     
    }
    // getUserData()


    interface User {
        id: number
        name: string 
        email: string
        phone: string
    }

    async function getUserTyped(): Promise<User> {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5')
        const data = await response.json()
        return data
    }

    getUserTyped().then(user => { console.log('User Data:', user.phone)})

}