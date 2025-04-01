"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert(
      activeTab === "login" ? "Login functionality will be implemented" : "Signup functionality will be implemented",
    )
  }

  return (
    <main className="flex items-center justify-center py-12">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Logo and Text */}
        <div className="flex items-center p-6 border-b">
          <div className="flex-shrink-0">
            <Image src="/k_20250105_180112_0000.png" alt="Logo" width={64} height={64} className="rounded-lg" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Skymart</h1>
            <p className="text-gray-600 text-lg">Tampil Stylish, Belanja di Sky Mart</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-3 text-center font-bold ${
              activeTab === "login" ? "text-gray-700 border-b-2 border-blue-500" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`w-1/2 py-3 text-center font-bold ${
              activeTab === "signup" ? "text-gray-700 border-b-2 border-green-500" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6">
          {activeTab === "login" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="loginEmail">Email</Label>
                <Input
                  type="email"
                  id="loginEmail"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="loginPassword">Password</Label>
                <Input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="signupName">Nama</Label>
                <Input
                  type="text"
                  id="signupName"
                  placeholder="Nama"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="signupEmail">Email</Label>
                <Input
                  type="email"
                  id="signupEmail"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="signupPassword">Password</Label>
                <Input
                  type="password"
                  id="signupPassword"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                Sign Up
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

