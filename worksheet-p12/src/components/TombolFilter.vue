<script setup>
import { state, pilihKategori } from '../state.js'

const daftarKategori = ['semua', 'web', 'riset']
</script>

<template>
  <div class="filter-kategori">
    <button
      v-for="kat in daftarKategori"
      :key="kat"
      type="button"
      :class="{ aktif: state.kategoriAktif === kat }"
      @click="pilihKategori(kat)"
    >
      {{ kat.toUpperCase() }}
    </button>
  </div>
</template>