# pabw
# PABW — Muhammad Zaidan Iben Naufal - 25523055
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 4 — Halaman profil saya
 
Topik halaman saya: Profil Mahasiswa.
 
- Judul halaman: Profil saya
- Deskripsi: Laman web tentang saya
- Tautan navigasi: Tentang,karya,kontak
- Dua bagian utama: Profil,Kontak
- Kolom tabel: Kegiatan,Peran,Waktu
- Kolom form: Nama lengkap,Email,Nim,Pesan
- Gambar: foto-profil.png
 
## Catatan penggunaan AI
 
CSS

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

## Evaluasi Tujuan Tiap Bagian 

- Profil: Mengenalkan identitas ke orang.
- Portofolio: Menunjukkan hasil proyek saya.
- Kontak: Memudahkan pengunjung menghubungi saya.

## Worksheet P5 Flexbox dan Grid

* .page: Menambahkan CSS Grid 3 baris  agar tinggi halaman pas setinggi layar.
* .navbar: Menambahkan Flexbox untuk merapikan menu berderet satu baris.
* .isi: Menambahkan CSS Grid 2 kolom  untuk memisahkan area sidebar dan konten utama.
* .galeri: Menambahkan Grid adaptif agar jumlah kolom berubah otomatis tanpa media query.
* .kartu__kaki: Menambahkan Flexbox untuk menyelaraskan bagian bawah kartu.
* .galeri .kartu: Menyamakan tinggi minimum kartu di dalam grid.
* **.kartu__isi & .kartu__judul: Menambahkan untuk mencegah teks meluber keluar kotak pada layar sempit.

## worksheet P6 Responsif Mobile first
* 1. Meta Viewport: Memasang `<meta name="viewport" content="width=device-width, initial-scale=1.0">` di `index.html`
  2. Hapus Lebar Tetap: Mengubah elemen berlebar piksel tetap (`.sidebar`, `.kartu`, `img`) menjadi persentase/relatif
  3. `responsif.css`:
   * Base (All Screen): Layout 1 kolom & pembatasan media (`max-width: 100%`)
   * Tablet (`min-width: 48rem`): Galeri berubah jadi 2 kolom
   * Desktop (`min-width: 60rem`): Galeri 3 kolom + sidebar di samping konten