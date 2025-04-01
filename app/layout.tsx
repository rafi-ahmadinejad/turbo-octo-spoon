import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skymart - Online Shopping",
  description: "Tampil Stylish, Belanja di Sky Mart",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

