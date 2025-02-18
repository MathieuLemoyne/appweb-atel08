<script setup lang="ts">
defineProps<{
    logo: string
    title: string
}>()
</script>

<template>
  <header>
    <img :src="logo" alt="Logo">
    <h1>{{ title }}</h1>
  </header>
</template>