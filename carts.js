// Ambil data keranjang dari localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Fungsi menyimpan keranjang ke localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Fungsi menghitung total harga
function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

// Format angka menjadi mata uang
function formatCurrency(amount) {
  return `Rp ${amount.toLocaleString("id-ID")}`
}

// Fungsi menampilkan keranjang
function renderCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")
  cartItems.innerHTML = "" // Kosongkan kontainer

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="text-center py-20">
  <img src="orang.jpeg" alt="Empty State" class="mx-auto mb-4 gambar">
  <p class="text-lg text-gray-700">Keranjangmu masih kosong</p>
  <p class="text-gray-500">Yuk, belanja sekarang dan tambahkan barang ke keranjangmu!</p>
  <a href="index.html" class="mt-4 inline-block px-7 py-4 bg-blue-500 text-white rounded-full">Mulai Belanja</a>
</div>`
    cartTotal.textContent = formatCurrency(0)
    return
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div")
    div.className = "cart-item flex justify-between items-center bg-white shadow p-4 rounded-lg"

    div.innerHTML = `
            <div class="info">
                <h4 class="text-lg font-semibold">${item.name}</h4>
                <p class="text-gray-600">${formatCurrency(item.price)}</p>
            </div>
            <div class="actions flex items-center space-x-2">
                <button onclick="updateQuantity(${index}, -1)" class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">-</button>
                <span class="px-4">${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)" class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">+</button>
                <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">🗑</button>
            </div>
        `

    cartItems.appendChild(div)
  })

  cartTotal.textContent = formatCurrency(calculateTotal())
}

// Fungsi menambahkan item ke keranjang
function addToCart(productName, productPrice) {
  // Cek apakah item sudah ada di keranjang
  const existingItem = cart.find((item) => item.name === productName)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 })
  }
  saveCart()
  renderCart()
}

// Fungsi mengubah jumlah item
function updateQuantity(index, change) {
  cart[index].quantity += change
  if (cart[index].quantity <= 0) {
    if (confirm("Yakin ingin menghapus item ini dari keranjang?")) {
      cart.splice(index, 1)
    } else {
      cart[index].quantity = 1
    }
  }
  saveCart()
  renderCart()
}

// Fungsi menghapus item
function removeItem(index) {
  if (confirm("Apakah Anda yakin ingin menghapus item ini?")) {
    cart.splice(index, 1)
    saveCart()
    renderCart()
  }
}

// Fungsi checkout
async function checkout() {
  window.snap.pay("TRANSACTION_TOKEN_HERE")

  try {
    const response = await fetch("php/placeOrder.php", {
      method: "POST",
      body: data,
    })

    const token = await response.text()
  } catch (err) {
    console.log(err.message)
  }

  console.log(token)
}

// Tambahkan event listener ke tombol add-to-cart
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productElement = this.closest(".product") // Ambil elemen induk produk
    const productName = productElement.querySelector(".product-name").textContent // Ambil nama produk
    const productPrice = Number.parseFloat(
      productElement.querySelector(".product-price").textContent.replace(/[^0-9.-]+/g, ""),
    ) // Ambil harga produk
    addToCart(productName, productPrice)
  })
})

// Render keranjang saat halaman dimuat
renderCart()

