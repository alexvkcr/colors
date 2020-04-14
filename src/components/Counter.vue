<template>
  <div id="Counter">
      {{ $t('exclamationStart') }}{{ $t('youHave') }} {{ propCorrectAnswers }} {{ $tc('correctAnswers', propCorrectAnswers ) }}!
  </div>
</template>


<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "youHave": "Racha de",
    "correctAnswers": "aciertos | acierto | aciertos"
  },
  "en": {
    "exclamationStart": " ",
    "youHave": " ",
    "correctAnswers": "correct answers streak | correct answer streak | correct answers streak"
  }
}
</i18n>

<script>
export default {
  name: 'Counter',
  props: {
      'propCorrectAnswers': Number
  }
}
</script>

<style scoped>
#Counter{
  max-width: 600px;
  font-family: 'Manoyri';
  font-size: 18px;
}
@media screen and (min-width: 600px) {
  #Counter{
    margin: 10px 0 0 40px;
  }
}
</style>
