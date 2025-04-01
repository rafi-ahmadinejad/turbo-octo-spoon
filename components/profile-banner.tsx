"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export function ProfileBanner() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mx-4">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-30 h-30 bg-green-200 rounded-full md:h-50 md:w-50 md:ml-10">
          <div className="relative w-10 h-10 md:w-[5.5rem] md:h-[5.5rem]">
            <Image src="/avatar.jpeg" alt="User Avatar" fill className="Profile object-cover rounded-full" />
          </div>
        </div>
        <div className="md:px-5">
          <p className="text-lg font-semibold mb-1 md:text-4xl">Hai, Martian!</p>
          <p className="text-sm text-gray-500 md:text-3xl">Akses semua fitur, yuk~</p>
        </div>
      </div>
      <button
        onClick={() => router.push("/login")}
        className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 md:px-10 md:py-4 md:text-2xl"
      >
        Masuk
      </button>
    </div>
  )
}

