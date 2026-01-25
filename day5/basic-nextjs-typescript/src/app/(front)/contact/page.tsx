import type { Metadata } from "next"
import Contactpage from "./Contact"


export const metadata: Metadata = {
  title: "Contact",
  description: "Welcome to the home page of our Next.js application",
}

export default function Contact() {
    return <Contactpage />
}