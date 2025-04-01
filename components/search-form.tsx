"use client"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    alert("Search functionality will be implemented")
  }

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-4 py-6">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <Input
          type="search"
          id="default-search"
          className="flex h-10 rounded-md border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-6 text-lg w-full"
          placeholder="Search, Kategori"
          style={{ textIndent: "2rem" }}
          required
        />
        <Button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
        >
          Search
        </Button>
      </div>
    </form>
  )
}

