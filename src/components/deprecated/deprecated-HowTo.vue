<template>
  <div class="HowTo">
    <p>{{ $t('explanation') }}</p>
    <p>{{ $t('yourBrain') }}</p>
    <p>{{ $t('hereYouHave') }}</p>
    <color-list :prop-colour-list="propColourList"></color-list>
  </div>
</template>


<i18n>
{
  "es": {
    "explanation": "Esta web te permite aprender una gran variedad de colores. El objetivo es ir más allá de los colores que todos conocemos y aprender más colores y más bonitos.",
    "yourBrain": "Tu cerebro se beneficiará y dejarás huella en los demás con tu sabiduría :p",
    "hereYouHave": "Aquí tienes todos los colores disponibles que aprenderás"
  },
  "en": {
    "explanation": "This website allows you to learn a great variety of colors. The point is to go beyond the colors we all know and to learn more colors and more beautiful colors.",
    "yourBrain": "Your brain will benefit and you'll impact others with your wisdom :p",
    "hereYouHave": "Here you have all the colors available thet you'll learn"
  }
}
</i18n>

<script>
import ColorList from './ColorList.vue';

export default {
  name: 'HowTo',
  props: {
    'propColourList': Object
  },
  components: {
    ColorList
  }
}
</script>

<style scoped>
p{
  margin: 30px 10px 0;
}
</style>
