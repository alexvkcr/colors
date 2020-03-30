<template>
  <div id="Author">
    <p>{{$t('author')}}: Alejandro Díaz</p>
    <p v-on:click="openTwitter()">
      @alex_vkcr
    </p>
  </div>
</template>

<i18n>

{
  "es": {
    "author": "Autor"
  },
  "en": {
    "author": "Author"
  }
}
</i18n>

<script>
export default {
  name: 'Author',
  methods: {
    openTwitter() {
      window.open("https://www.twitter.com/alex_vkcr");
    }
  }
}
</script>

<style scoped>
#Author{
  max-width: 600px;
}
@media screen and (min-width: 600px) {
  #Author{
    margin: 10px 0 0 40px;
  }
}
</style>
