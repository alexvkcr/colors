<template>
  <div id="App">
    <app-header></app-header>
    <tabs></tabs>
  </div>
</template>

<i18n>
{
  "es": {
    "presentation": "presentación",
    "learnColors": "¡Aprende todos los colores!"
  },
  "en": {
    "presentation": "presentation",
    "learnColors": "Learn all the colors!"
  }
}
</i18n>


<script>
import AppHeader from './components/AppHeader.vue';
import Tabs from './components/Tabs.vue';

export default {
  name: 'App',
  components: {
    AppHeader, Tabs
  }
};
</script>

<style>
.bold{
  font-weight: bold;
}
</style>

