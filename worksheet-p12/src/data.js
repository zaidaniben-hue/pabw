export const profil = {
  nama: "Muh Zaidan Iben Naufal",
  peran: "Mahasiswa Informatika Semester 3",
  keahlian: ["HTML", "Phyton", "Java"],
};

export const daftarProyekAwal = [
  { judul: "Halaman Profil", kategori: "web", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", kategori: "data", tahun: 2026, selesai: false },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");