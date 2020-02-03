<template>
  <div id="AppHeader">
    <h1>{{ $t('learnColors') }}</h1>
    <v-tabs
      color="#2E6C61"
      background-color="#aae0bc"
    >
      <v-tab to="/">
        {{ $t('presentation') }}
      </v-tab>
    <v-tab to="/play">
        {{ $t('play') }}
    </v-tab>
    <v-tab to="/howto">
        {{ $t('howto') }}
    </v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<i18n>
{
  "es": {
    "learnColors": "¡Aprende todos los colores!",
    "presentation": "presentación",
    "play" : "Juega",
    "howto" : "Cómo jugar"
  },
  "en": {
    "learnColors": "Learn all the colors!",
    "presentation": "presentation",
    "play": "play",
    "howto" : "How to"
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
.v-slide-group__prev:not(.a):not(.a):not(.a):not(.a):not(.a):not(.a){
  display:none;
}
</style>
