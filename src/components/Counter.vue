<template>
  <div id="Counter">
      {{ $t('exclamationStart') }}{{ $t('youHave') }} {{ $tc('correctAnswers', propCorrectAnswers ) }} <span class="bold">{{ propCorrectAnswers }}</span>!
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
    "correctAnswers": "Correct answers streak | Correct answer streak | Correct answers streak"
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
  display: inline-block;
  margin-left: 3vw;
  
  font-family: 'Google Sans',sans-serif;
  font-size: 14px;

}
@media screen and (min-width: 600px) {
  #Counter{
    margin: 10px 0 0 40px;
  }
}
</style>
