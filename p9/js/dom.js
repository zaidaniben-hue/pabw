import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  wadah.textContent = ""; 
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Klik di luar tombol diabaikan

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
  });
}

render(daftarProyek);

const formKontak = document.querySelector("form");

if (formKontak) {
  formKontak.addEventListener("submit", (event) => {
    // 1. Tahan pengiriman bawaan browser agar halaman tidak memuat ulang
    event.preventDefault();

    const inputNama = formKontak.querySelector("#nama");
    const inputPesan = formKontak.querySelector("#pesan");
    let valid = true;

    // 2. Periksa kolom Nama (gunakan .trim() untuk membuang spasi di tepi)
    if (inputNama) {
      if (inputNama.value.trim() === "") {
        inputNama.setAttribute("aria-invalid", "true");
        valid = false;
      } else {
        inputNama.removeAttribute("aria-invalid");
      }
    }

    // 3. Periksa kolom Pesan (gunakan .trim() juga)
    if (inputPesan) {
      if (inputPesan.value.trim() === "") {
        inputPesan.setAttribute("aria-invalid", "true");
        valid = false;
      } else {
        inputPesan.removeAttribute("aria-invalid");
      }
    }

    // 4. Jika ada kolom yang tidak valid, fokuskan ke kolom bermasalah
    if (!valid) {
      if (inputNama && inputNama.value.trim() === "") {
        inputNama.focus();
      } else if (inputPesan && inputPesan.value.trim() === "") {
        inputPesan.focus();
      }
      return; // Berhenti di sini, form tidak dikirim
    }

    // 5. Jika seluruh kolom valid
    alert("Pesan berhasil dikirim!");
    formKontak.reset();
  });
}