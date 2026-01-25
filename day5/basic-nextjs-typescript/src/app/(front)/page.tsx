
import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to the home page of our Next.js application",

}



export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Hello, Next.js!</h1>
      <p className="text-lg text-orange-500">Welcome to your new Next.js project</p>
    </>
  )
}