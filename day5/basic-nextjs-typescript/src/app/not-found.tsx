
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-4xl font-bold'>404 </h1>
                <p className="text-lg text-orange-400">Page Not Found</p>
                <p className="text-lg text-gray-500">The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}