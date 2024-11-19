<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
  <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
  <NuxtLink :to="switchLocalePath('da')">Dansk</NuxtLink>
  <NuxtLink :to="switchLocalePath('de')">Deutch</NuxtLink>
  <NuxtLink :to="switchLocalePath('nl')">Nederlands</NuxtLink>
</template>
