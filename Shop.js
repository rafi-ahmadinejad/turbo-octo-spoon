// Fungsi menambahkan item ke keranjang
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
        // Jika produk belum ada di keranjang, tambahkan
        cart.push({ id, name, price, quantity: 1 });
    } else {
        // Jika produk sudah ada, tambahkan quantity
        cart[itemIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

}

// Event listener untuk tombol "Add to Cart"
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function () {
        // Ambil elemen produk terdekat
        const productElement = this.closest('.product');

        // Cek jika elemen produk ditemukan
        if (!productElement) {
            console.error('Produk tidak ditemukan');
            return;
        }

        const productId = productElement.getAttribute('data-id'); // Ambil ID produk dari atribut data-id
        const productName = productElement.querySelector('.product-name').textContent.trim(); // Nama produk
        const productPrice = parseFloat(
            productElement.querySelector('.product-price').textContent.replace(/[^0-9.-]+/g, '')
        ); // Harga produk

        // Pastikan harga valid
        if (isNaN(productPrice)) {
            console.error('Harga produk tidak valid');
            return;
        }

        addToCart(productId, productName, productPrice); // Tambahkan ke keranjang
    });
});