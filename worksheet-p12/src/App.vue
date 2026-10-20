<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

const identitas = {
  nama: 'Muh Zaidan Iben Naufal',
  peran: 'Mahasiswa Informatika'
}

// Baca simpanan satu kali saat komponen terpasang
onMounted(() => {
  const isi = muat()
  if (isi && isi.kategoriAktif) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

// Simpan otomatis setiap ada perubahan pada state
watch(
  () => state.kategoriAktif,
  () => {
    simpan(state)
  }
)

// Tombol atur ulang dari P11 lembar D.2
function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <main class="wadah-utama">
    <KepalaProfil :profil="identitas" />
    <div class="kontrol-filter">
      <TombolFilter />
      <button type="button" class="btn-reset" @click="aturUlangPilihan">
        Atur Ulang
      </button>
    </div>
    <DaftarProyek />
    <FormKontak />
  </main>
</template>