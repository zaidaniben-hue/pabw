const wadahProyek = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const wadahNotisia = document.querySelector("#daftar-notisia");

export function buatKartuProyek(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function buatKartuNotisia(n) {
  const kartu = document.createElement("li");
  kartu.className = "kartu notisia";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = n.titulu;

  const ringkasan = document.createElement("p");
  ringkasan.className = "kartu__isi";
  ringkasan.textContent = n.ringkasan;

  const kaki = document.createElement("p");
  kaki.className = "kartu__kaki";
  kaki.textContent = `${n.kategori} · ${n.tanggal}`;

  kartu.append(judul, ringkasan, kaki);
  return kartu;
}

export function saring(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  );
}

export function setStatusNotisia(teks) {
  if (wadahNotisia) {
    wadahNotisia.textContent = teks;
  }
}

export function render(state) {
  const tombolAktif = document.querySelector(
    `#filter button[data-kategori="${state.kategoriAktif}"]`
  );
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });

  if (wadahProyek) {
    wadahProyek.textContent = "";
    const tampil = saring(state);

    if (tampil.length === 0) {
      if (kosong) kosong.hidden = false;
    } else {
      if (kosong) kosong.hidden = true;
      tampil.forEach((proyek) => wadahProyek.append(buatKartuProyek(proyek)));
    }
  }

  if (wadahNotisia && state.daftarNotisia.length > 0) {
    wadahNotisia.textContent = "";
    state.daftarNotisia.forEach((n) => wadahNotisia.append(buatKartuNotisia(n)));
  }
}