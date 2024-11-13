<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <button @click="setLocale('da')">da</button>
      <button @click="setLocale('de')">de</button>
      <button @click="setLocale('nl')">nl</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
