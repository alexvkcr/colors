<template>
  <div id="Correct">
      {{ $t('exclamationStart') }}{{ $t('correct') }}
  </div>
</template>


<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "correct": "Correcto!"
  },
  "en": {
    "exclamationStart": " ",
    "correct": "Correct!"
  }
}
</i18n>

<script>
export default {
  name: 'Mistake'
}
</script>

<style scoped>
#Correct{
  position: absolute;
  top: 45%;
  left: 45%;

  background-color: green;
  color: white;

  font-size: 40px;

  border-radius: 36px;
}
@media screen and (min-width: 600px) {
  #Correct{
    top: 30%;
    left: 30%;
  }
}
</style>
