<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>


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
