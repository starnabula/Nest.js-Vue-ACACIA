
import React from "react"

type props = {}

export default function Admin({}: props) {
    return (
        <>
            {/* Dashboard*/}
            <div className="flex flex-col p-4 items-center justify-center h-screen bg-amber-50">
                <h1 className="text-4xl font-bold text-gray-950">Admin Dashboard</h1>
                <p className="mt-4 text-lg text-gray-500">Welcome to the Admin Dashboard</p>
                <p className="mt-4 text-lg text-gray-500">Manage your content here</p>
            </div>

        </>
    )
}