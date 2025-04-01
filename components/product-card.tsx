"use client"

import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast()
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Item added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 1500,
    })
  }

  return (
    <div
      data-id={product.id}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 product"
    >
      <div className="h-56 w-full">
        <Link href={`#product-${product.id}`} className="mx-auto w-full md:w-3/4 lg:w-1/2 block">
          <div className="relative h-full w-full">
            <Image
              className="mx-auto h-full object-contain"
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
            />
          </div>
        </Link>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"></span>
        </div>

        <Link
          href={`#product-${product.id}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white product-name"
        >
          {product.name}
        </Link>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white product-price">
            {formatCurrency(product.price)}
          </p>

          <button
            onClick={handleAddToCart}
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 whitespace-nowrap add-to-cart"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

