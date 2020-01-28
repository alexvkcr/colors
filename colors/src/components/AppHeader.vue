<template>
  <div id="AppHeader">
    <h1>{{ $t('learnColors') }}</h1>
    <v-tabs
      color="#2E6C61"
    >
      <v-tab to="/">
        {{ $t('presentation') }}
      </v-tab>
    <v-tab to="/play">
        {{ $t('play') }}
    </v-tab>
    <v-tab>
        {{ $t('about') }}
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
    "about" : "Sobre mí"
  },
  "en": {
    "learnColors": "Learn all the colors!",
    "presentation": "presentation",
    "play": "play",
    "about" : "About me"
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
