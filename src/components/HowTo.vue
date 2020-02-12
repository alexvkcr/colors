<template>
  <div class="HowTo">
    <p>{{ $t('hereYouHave') }}</p>
    <color-list :prop-color-list="propColorList"></color-list>
  </div>
</template>


<i18n>
{
  "es": {
    "hereYouHave": "Aquí tienes todos los colores disponibles"
  },
  "en": {
    "hereYouHave": "Here you have all the colors available"
  }
}
</i18n>

<script>

import ColorList from './ColorList.vue';

export default {
  name: 'HowTo',
  props: {
    'propColorList': Object
  },
  components: {
    ColorList
  }
}
</script>

<style scoped>
</style>
