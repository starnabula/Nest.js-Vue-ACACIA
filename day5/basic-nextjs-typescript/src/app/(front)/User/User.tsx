import React from 'react'

type Props = {}

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {      
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}


async function fetchUser(): Promise<User[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)

  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }

  return response.json()
}

export default async function UserPage({}: Props) {

    const users = await fetchUser()

    return ( 
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            
            {/**/}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Id</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Username</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* */}
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}