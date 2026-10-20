export const profil = {
  nama: "Muh Zaidan Iben Naufal",
  peran: "Mahasiswa Informatika Semester 3",
  keahlian: ["HTML", "Python", "Java"], // bisa perbaiki typo Python sekalian
}

export const daftarProyek = [
  { id: 1, judul: "Halaman Profil", kategori: "web", tahun: 2026, selesai: true },
  { id: 2, judul: "Katalog Produk", kategori: "data", tahun: 2026, selesai: false },
]

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`
}

export const formatKeahlian = (daftar) => daftar.join(" · ")