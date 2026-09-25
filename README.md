# pabw
# PABW — Muhammad Zaidan Iben Naufal - 25523055
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 4 — Halaman profil saya
 
Topik halaman saya: koleksi buku di rak saya.
 
- Judul halaman: Profil saya
- Deskripsi: daftar buku yang saya miliki beserta status bacanya
- Tautan navigasi: Daftar Buku, Tambah Buku, Tentang Saya
- Dua bagian utama: Daftar Buku, Tambah Buku
- Kolom tabel: judul, penulis, tahun terbit, status baca
- Kolom form: judul, penulis, status baca
- Gambar: koleksi-1.webp
 
## Catatan penggunaan AI
 
Tulis bagian mana yang dibantu AI dan bagian mana yang Anda
kerjakan sendiri, atau tulis: tidak memakai AI.

## Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Arah visual: Cerah dan ringan (warna utama biru langit #0284C7 dan aksen/fokus kuning #EAB308).

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #0284C7 (var(--sky-600)) | Tombol, tautan, penanda utama |
| --color-focus | #EAB308 (var(--yellow-500)) | Garis fokus papan ketik & aksen |
| --color-fg | #0F172A (var(--slate-900)) | Warna teks utama |
| --color-bg | #F0F9FF (var(--sky-100)) | Latar halaman |
| --color-surface | #FFFFFF | Latar kartu dan panel |
| --color-border | #BAE6FD (var(--sky-200)) | Garis pemisah & tepi |
| --space-4 | 1rem | Jarak standar antar elemen |
| --space-6 | 1.5rem | Jarak antar bagian halaman |
| --radius-md | 0.5rem | Sudut membulat tombol & kartu |
| --text-md | 1rem | Ukuran dasar teks isi |
| --text-3xl | 2.25rem | Ukuran judul utama (h1) |

Kriteria selesai saya: Mengubah --sky-600 di lapis 1 atau --color-primary di lapis 2 pada tokens.css di satu baris akan mengubah seluruh komponen interaktif secara konsisten.