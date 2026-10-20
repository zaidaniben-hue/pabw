<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')

function handleSubmit() {
  alert(`Terima kasih, ${nama.value}! Pesan terkirim.`)
  nama.value = ''
  pesan.value = ''
}
</script>

<template>
  <form class="form-kontak" @submit.prevent="handleSubmit">
    <h2>Hubungi Saya</h2>
    <div>
      <label for="nama">Nama:</label>
      <input id="nama" v-model="nama" required type="text" />
    </div>
    <div>
      <label for="pesan">Pesan:</label>
      <textarea id="pesan" v-model="pesan" required></textarea>
    </div>
    <button type="submit">Kirim Pesan</button>
  </form>
</template>