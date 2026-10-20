<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="kepala-profil">
    <h1>{{ props.profil.nama }}</h1>
    <p class="peran">{{ props.profil.peran }}</p>
  </header>
</template>