<template>
  <div id="Mistake">
      {{ $t('exclamationStart') }}{{ $t('mistake') }}
  </div>
</template>


<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "mistake": "Error!"
  },
  "en": {
    "exclamationStart": " ",
    "mistake": "Mistake!"
  }
}
</i18n>

<script>
export default {
  name: 'Mistake'
}
</script>

<style scoped>
#Mistake{
  position: absolute;
  top: 45%;
  left: 45%;

  background-color: red;
  color: white;

  font-size: 40px;

  border-radius: 36px;
}
@media screen and (min-width: 600px) {
  #Mistake{
    top: 30%;
    left: 30%;
  }
}
</style>
