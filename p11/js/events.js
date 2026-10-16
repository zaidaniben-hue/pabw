import { pilihKategori, aturUlang } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  const tombolReset = document.querySelector("#tombol-reset");
  const formKontak = document.querySelector("form");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  if (tombolReset) {
    tombolReset.addEventListener("click", () => {
      aturUlang();
    });
  }

  if (formKontak) {
    formKontak.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputNama = formKontak.querySelector("#nama");
      const inputPesan = formKontak.querySelector("#pesan");
      let valid = true;

      if (inputNama) {
        if (inputNama.value.trim() === "") {
          inputNama.setAttribute("aria-invalid", "true");
          valid = false;
        } else {
          inputNama.removeAttribute("aria-invalid");
        }
      }

      if (inputPesan) {
        if (inputPesan.value.trim() === "") {
          inputPesan.setAttribute("aria-invalid", "true");
          valid = false;
        } else {
          inputPesan.removeAttribute("aria-invalid");
        }
      }

      if (!valid) {
        if (inputNama && inputNama.value.trim() === "") inputNama.focus();
        else if (inputPesan && inputPesan.value.trim() === "") inputPesan.focus();
        return;
      }

      alert("Pesan berhasil dikirim!");
      formKontak.reset();
    });
  }
}