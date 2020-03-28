<template>
  <div id="Tabs">
    <v-tabs
      color="#2E6C61"
      background-color="#aae0bc"
    >
      <v-tab to="/colors">
        {{ $t('presentation') }}
      </v-tab>
    <v-tab to="/play">
        {{ $t('play') }}
    </v-tab>
    <v-tab to="/about">
        {{ $t('about') }}
    </v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<i18n>
{
  "es": {
    "presentation": "presentación",
    "play" : "Juega",
    "about" : "Acerca"
  },
  "en": {
    "presentation": "presentation",
    "play": "play",
    "about" : "About"
  }
}
</i18n>

<script>
export default {
  name: 'Tabs'
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
