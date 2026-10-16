import { daftarProyekAwal } from './data.js';
import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export function muat() {
  try {
    const raw = localStorage.getItem(KUNCI);
    if (!raw) return null;

    const isi = JSON.parse(raw);
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // Versi skema lama dibuang
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);   // Data rusak (bukan JSON) dibuang
    return null;
  }
}

const simpanan = muat();

export const state = {
  kategoriAktif: simpanan?.kategoriAktif ?? "semua",
  daftarProyek: daftarProyekAwal,
  daftarNotisia: [],
};

function simpan(stateSekarang) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSekarang.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  simpan(state);
  render(state);
}

export function setNotisia(daftar) {
  state.daftarNotisia = daftar;
  render(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  render(state);
}