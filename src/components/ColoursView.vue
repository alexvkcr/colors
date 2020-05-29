<template>
  <div id="ColoursView">
    <div class="intro">{{ $t('hereYouHave') }}</div>
    <div class="intro">{{ $t('ifYouClick') }}</div>
    <div class="intro">{{ $t('youCanAlso') }} <span class="bold">{{$t('source')}}</span></div>
    <color-list :prop-colour-list="propColourList"></color-list>
  </div>
</template>


<i18n>
{
  "es": {
    "hereYouHave": "Aquí tienes todos los colores disponibles que aprenderás",
    "ifYouClick": "Si clicas o pasas el ratón sobre el color, obtienes una descripción de este",
    "youCanAlso": "También puedes consultar referencias al origen de los colores en la columna",
    "source": "Fuente"
  },
  "en": {
    "hereYouHave": "Here you have all the colors available thet you'll learn",
    "ifYouClick": "If you click or hover over the color, you get a description of it",
    "youCanAlso": "You can also consult references to the where I extracted the colors in the column",
    "source": "Source"
  }
}
</i18n>

<script>
import ColorList from './ColorList.vue';

export default {
  name: 'ColoursView',
  props: {
    'propColourList': Object
  },
  components: {
    ColorList
  }
}
</script>

<style scoped>
*{
    color: #2e586c;
    font-family: 'Roboto',arial,sans-serif;
}

.intro{
  margin: 10px 10px;
  font-size: 16px;
}
</style>
