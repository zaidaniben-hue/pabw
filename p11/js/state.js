import { daftarProyekAwal } from './data.js';
import { render } from './dom.js';

export const state = {
  kategoriAktif: "semua",
  daftarProyek: daftarProyekAwal,
  daftarNotisia: [],
};

// Fungsi mutator: satu-satunya jalan memodifikasi state
export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  render(state);
}

export function setNotisia(daftar) {
  state.daftarNotisia = daftar;
  render(state);
}