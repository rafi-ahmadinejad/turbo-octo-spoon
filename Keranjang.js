  function checkLoginStatus() {
      // Ganti dengan logika untuk memeriksa status login pengguna
      var isLoggedIn = false; // Misalnya, status login diubah sesuai dengan kondisi sebenarnya.
  
      if (isLoggedIn) {
          // Jika pengguna sudah login
          Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'Barang berhasil ditambahkan ke keranjang!',
              confirmButtonText: 'OK',
              showCloseButton: true  // Menambahkan tombol close
          });
      } else {
          // Jika pengguna belum login
          Swal.fire({
              icon: 'warning',
              title: 'Peringatan',
              text: 'Anda perlu login terlebih dahulu untuk menambahkan barang ke keranjang.',
              showConfirmButton: true,
              confirmButtonText: 'Ke Halaman Login',
              confirmButtonColor: "rgb(91,148,250)",
              showCloseButton: true  // Menambahkan tombol close
          }).then((result) => {
              if (result.isConfirmed) {
                  // Redirect ke halaman login
                  window.location.href = '/login'; // Ganti dengan URL login yang sesuai
              }
          });
      }
  }
  
  function showAddToCartAlert() {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "Item added to cart",
    showConfirmButton: false,
    timer: 1500
  });
}

// Panggil fungsi ini saat item ditambahkan ke keranjang
showAddToCartAlert();