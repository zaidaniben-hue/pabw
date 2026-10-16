import './api.js';
import { ambilNotisia } from './api.js';

const profil = {
  nama: "Muh Zaidan Iben Naufal",
  peran: "Mahasiswa Informatika Semester 3",
  keahlian: ["HTML", "Phyton", "Java"],
};

export const daftarProyek = [
  { judul: "Halaman Profil", kategori: "web", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", kategori: "data", tahun: 2026, selesai: false },
];

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

const wadah = document.querySelector('#daftar-notisia');

async function jalankan() {
  try {
    const data = await ambilNotisia();
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

jalankan();

function gambar(daftar) {
  wadah.textContent = '';
  daftar.forEach(function (n) {
    const kartu = document.createElement('li');
    kartu.className = 'kartu notisia';

    const judul = document.createElement('h3');
    judul.className = 'kartu__judul';
    judul.textContent = n.titulu;

    const ringkasan = document.createElement('p');
    ringkasan.className = 'kartu__isi';
    ringkasan.textContent = n.ringkasan;

    const kaki = document.createElement('p');
    kaki.className = 'kartu__kaki';
    kaki.textContent = n.kategori + ' · ' + n.tanggal;

    kartu.append(judul, ringkasan, kaki);
    wadah.append(kartu);
  });
}

async function tampilkan() {
  wadah.textContent = 'Memuat...';
  try {
    const daftar = await ambilNotisia();
    if (daftar.length === 0) {
      wadah.textContent = 'Belum ada notisia';
      return;
    }
    gambar(daftar);
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkan();
