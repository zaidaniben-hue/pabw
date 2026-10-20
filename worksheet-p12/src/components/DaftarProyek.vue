<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTersaring = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }
  return state.daftarProyek.filter(p => p.kategori === state.kategoriAktif)
})
</script>

<template>
  <section class="daftar-proyek">
    <article
      v-for="proyek in proyekTersaring"
      :key="proyek.id"
      class="kartu-proyek"
    >
      <h3>{{ proyek.judul }}</h3>
      <p>Kategori: {{ proyek.kategori }}</p>
      <span :class="proyek.selesai ? 'status-selesai' : 'status-proses'">
        {{ proyek.selesai ? 'Selesai' : 'Dalam Proses' }}
      </span>
    </article>
  </section>
</template>