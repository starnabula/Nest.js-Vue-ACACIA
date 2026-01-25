
import "@/app/globals.css";
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to the home page of our Next.js application",
  keywords: ["Next.js", "React", "TypeScript CSS"],
  authors: [{name: "Your Name", url: "https://yourwebsite.com"}],
  creator: "Your Name",
  publisher: "My Next.js App",
  applicationName: "my Next.js App"
}




export default function FronLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >

        <Navbar />
        <div className="container mx-auto p-4">
          {children}
        </div>
        <Footer />  
      </body>
    </html>
  )
}
