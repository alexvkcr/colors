<template>
  <div id="Counter">
      {{ $t('exclamationStart') }}{{ $t('youHave') }} {{ propCorrectAnswers }} {{ $t('correctAnswers') }}!
  </div>
</template>


<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "youHave": "Llevas",
    "correctAnswers": "Aciertos"
  },
  "en": {
    "exclamationStart": " ",
    "youHave": "You've got",
    "correctAnswers": "correct answers"
  }
}
</i18n>

<script>
export default {
  name: 'Counter',
  props: {
      'propCorrectAnswers': Object
  }
}
</script>

<style scoped>
#Counter{
  max-width: 600px;
}
@media screen and (min-width: 600px) {
  #Counter{
    margin: 10px 0 0 40px;
  }
}
</style>
