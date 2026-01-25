
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


type Props = {}

export default function Navbar({}: Props) {
    return (
        <nav className="flex justify-between items-center p-4 bg-amber-300">
            <div className="text-xl font-bold">MyApp</div>
            <ul className="flex space-x-4">
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="/" className= {
                   usePathname() === "/" ? "text-gray-400" : "text-white"
                   
                   }>Home</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="/about" className= {
                   usePathname() === "/about" ? "text-gray-400" : "text-white"
                   }>About</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="/contact" className= {
                   usePathname() === "/contact" ? "text-gray-400" : "text-white"
                   }>Contact</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="/login" className= {
                   usePathname() === "/login" ? "text-gray-400" : "text-white"
                   }>login</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link href="/register" className= {
                   usePathname() === "/register" ? "text-gray-400" : "text-white"
                   }>Register</Link>
                </li>
            </ul>
        </nav>
    )
}