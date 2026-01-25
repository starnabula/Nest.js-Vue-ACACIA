
import AboutPage from "./About"
import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "About",
  description: "Welcome to the home page of our Next.js application",

}

export default function About() {
    return <AboutPage />
}