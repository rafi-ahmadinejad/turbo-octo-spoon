"use client"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { cart, updateQuantity, removeItem, calculateTotal } = useCart()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Your Shopping Cart</h1>

      {/* Container for cart items */}
      <div id="cart-items" className="space-y-4">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="relative mx-auto mb-4 h-[200px] w-[200px]">
              <Image src="/orang.jpeg" alt="Empty State" fill className="object-cover" />
            </div>
            <p className="text-lg text-gray-700">Keranjangmu masih kosong</p>
            <p className="text-gray-500">Yuk, belanja sekarang dan tambahkan barang ke keranjangmu!</p>
            <Link href="/" className="mt-4 inline-block px-7 py-4 bg-blue-500 text-white rounded-full">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item flex justify-between items-center bg-white shadow p-4 rounded-lg">
              <div className="info">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">{formatCurrency(item.price)}</p>
              </div>
              <div className="actions flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(index, -1)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(index, 1)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700">
                  🗑
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total price */}
      <div className="mt-6">
        <p className="text-xl font-semibold">
          Total: <span id="cart-total">{formatCurrency(calculateTotal())}</span>
        </p>
      </div>

      {cart.length > 0 && (
        <Button
          onClick={() => alert("Checkout functionality will be implemented here")}
          className="relative mt-10 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Checkout
        </Button>
      )}
    </div>
  )
}

