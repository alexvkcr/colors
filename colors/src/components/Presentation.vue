<template>
  <div class="Presentation">
    <h2>{{ $t('welcome') }}</h2>
    <h3>{{ $t('learn') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>

<i18n>
{
  "es": {
    "welcome": "¡Bienvenidos a GetColors!",
    "learn": "Aquí puedes aprender los nombres de TODOS los colores existentes"
  },
  "en": {
    "welcome": "Welcome to GetColors!",
    "learn": "Here you can learn the name of ALL the existing colors"
  }
}
</i18n>

<style scoped>
h2,h3{
    margin: 30px 0;
    color: #2e586c;
    text-align: center;
}
</style>
