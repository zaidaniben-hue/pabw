// src/state.js
import { reactive } from 'vue'
import { daftarProyek } from './data.js'

export const state = reactive({
  daftarProyek: daftarProyek,
  kategoriAktif: 'semua',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai // langsung ubah nilai, tanpa panggil render()
}