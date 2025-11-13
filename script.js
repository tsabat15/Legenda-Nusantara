
// DATABASE CERITA LEGENDA
const legendData = {
"sumatera": {
title: "Legenda Danau Toba",
story: "Di sebuah desa di wilayah Sumatera Utara, hiduplah seorang petani bernama Toba. Suatu hari, ia memancing ikan mas yang sangat indah. Ikan itu berubah menjadi seorang putri cantik yang dikutuk. Mereka menikah dengan syarat Toba tidak boleh membocorkan asal-usul sang putri. Mereka memiliki anak bernama Samosir. Suatu hari, Toba marah dan menyebut Samosir 'anak ikan'. Janji itu dilanggar, sang putri menangis hebat, dan air matanya menyebabkan banjir besar yang kini dikenal sebagai Danau Toba.",
imageSrc: "danautoba.jpg.jpeg"
},
"jawa": {
title: "Legenda Sangkuriang",
story: "Cerita tentang Sangkuriang yang jatuh cinta pada ibunya sendiri, Dayang Sumbi. Untuk mencegah pernikahan terlarang, Dayang Sumbi meminta Sangkuriang membuat perahu dan danau dalam satu malam. Ketika Sangkuriang hampir berhasil dengan bantuan jin, Dayang Sumbi memukul lesung dan mengibaskan selendangnya, menipu ayam agar berkokok dan fajar palsu muncul. Sangkuriang marah, menendang perahu yang belum selesai, dan perahu itu terbalik menjadi gunung Tangkuban Perahu.",
imageSrc: "tangkubanprahu.jpg.jpeg"
},
"kalimantan": {
title: "Legenda Batu Menangis",
story: "Di sebuah bukit di Kalimantan Barat, hiduplah seorang janda miskin dengan putrinya yang sangat cantik namun pemalas dan manja. Ia selalu membuat ibunya sedih. Suatu hari, saat berjalan ke pasar, si anak berjalan di depan dan ibunya di belakang membawa keranjang berat. Ketika ditanya siapa wanita di belakangnya, si anak menjawab bahwa itu adalah pembantunya. Ibunya sangat sedih dan berdoa. Perlahan, kaki si anak berubah menjadi batu, dan ia menangis memohon ampun, namun terlambat. Seluruh tubuhnya menjadi batu yang terus mengeluarkan air mata.",
imageSrc: "batumenangis.jpg.jpeg"
},
"papua": {
title: "Asal Usul Burung Cenderawasih",
story: "Alkisah, di pedalaman Papua, ada seorang wanita yang hidup dengan anjingnya. Suatu hari, saat berburu, anjingnya menemukan telur ajaib. Telur itu menetas menjadi seorang bayi laki-laki yang diberi nama Kweiya. Kweiya tumbuh menjadi pemuda tampan namun sakti. Suatu hari, ia memutuskan untuk 'pergi' ke surga. Ia menari dengan indah, dan perlahan-lahan bulu-bulu indah tumbuh di tubuhnya, mengubahnya menjadi burung Cenderawasih yang terbang ke langit.",
imageSrc: "cendrawasih.jpg.jpeg"
}
};

// LOGIKA JAVASCRIPT
// 1. Ambil semua elemen yang kita butuhkan
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('info-title');
const modalContent = document.getElementById('info-content');
const modalImage = document.getElementById('info-image');
const closeModalBtn = document.getElementById('close-modal');
const hotspots = document.querySelectorAll('.hotspot');

// 2. Fungsi untuk menampilkan modal
function showModal(region) {
const data = legendData[region];
if (data) {
// Isi konten modal
modalTitle.textContent = data.title;
modalContent.textContent = data.story;
modalImage.src = data.imageSrc;
modalImage.alt = "Ilustrasi " + data.title;
// Tampilkan modal
modal.classList.remove('hidden');
} else {
console.error("Data tidak ditemukan untuk region:", region);
}
}

// 3. Fungsi untuk menyembunyikan modal
function hideModal() {
modal.classList.add('hidden');
modalImage.src = "";
}

// 4. Tambahkan event listener ke setiap hotspot
hotspots.forEach(spot => {
spot.addEventListener('click', () => {
const regionName = spot.dataset.region;
showModal(regionName);
});
});

// 5. Tambahkan event listener untuk tombol close 	
closeModalBtn.addEventListener('click', hideModal);

// 6. Tutup modal jika mengklik di luar area konten
modal.addEventListener('click', (event) => {
if (event.target === modal) {
hideModal();
}
});

