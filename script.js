document.addEventListener("DOMContentLoaded", function () {
    const hitungButton = document.getElementById("hitungButton");
    hitungButton.addEventListener("click", hitungTotal);
});

function hitungTotal() {
    const nama = document.getElementById("nama").value;
    const tujuan = document.getElementById("tujuan").value;
    const harga = parseFloat(document.getElementById("harga").value);
    const member = document.getElementById("member").checked;
    const diskon = parseFloat(document.getElementById("diskon").value) || 0;
    const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);

    let totalBayar = harga * jumlahTiket;

    if (member) {
        totalBayar *= 0.9; // Diskon 10% untuk member
    }

    totalBayar -= diskon;

    document.getElementById("totalBayar").value = totalBayar.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    // Tambahkan kode untuk menampilkan detail pesanan di modal
    document.getElementById("modalNama").textContent = nama;
    document.getElementById("modalTujuan").textContent = tujuan;
    document.getElementById("modalHarga").textContent = harga;
    document.getElementById("modaljumlahTiket").textContent = jumlahTiket;
    document.getElementById("modalTotalBayar").textContent = totalBayar.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    // Tampilkan modal
    const pesananModal = new bootstrap.Modal(document.getElementById("pesananModal"));
    pesananModal.show();
}
