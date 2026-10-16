import { daftarProyekAwal } from './data.js';

export const state = {
  kategoriAktif: "semua",
  daftarProyek: daftarProyekAwal,
  daftarNotisia: [],
};

export function setNotisia(daftar) {
  state.daftarNotisia = daftar;
}