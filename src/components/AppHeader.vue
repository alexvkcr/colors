<template>
  <div id="AppHeader">
    <h1>{{ $t('learnColors') }}</h1>
  </div>
</template>

<i18n>
{
  "es": {
    "learnColors": "¡Todos los colores!"
  },
  "en": {
    "learnColors": "Learn all the colors!"
  }
}
</i18n>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
h1{
    margin: 30px 0;
    color: #2E6C61;
    text-align: center;
}
</style>
