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