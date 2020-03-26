<template>
  <div class="Play">
    <counter :prop-correct-answers="correctAnswers"></counter>
    <button type="button" class="change" v-on:click="changeComp()">{{ $t('exclamationStart') }}{{ $t('changeGame') }}!</button>
    <name-colours v-if="compName" :prop-colour-list="propColourList" @reload="forceRerenderNC"></name-colours>
    <colour-names v-if="compColour" :prop-colour-list="propColourList" @reload="forceRerenderCN"></colour-names>
  </div>
</template>

<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "changeGame": "Cambiar de juego"
  },
  "en": {
    "exclamationStart": " ",
    "changeGame": "Change the game"
  }
}
</i18n>

<script>
import Counter from './Counter.vue';

export default {
  name: 'Play',
  props: {
    'propColourList': Object
  },
  data: () => ({
    compName: false, 
    compColour: true,
    componentKeyNC: 0,
    componentKeyCN: 0,
    correctAnswers: 0
  }),  
  methods: {
    changeComp(){
      if(this.compColour){
        this.compName = true
        this.compColour = false
        return
      }
      if(this.compName){
        this.compColour = true
        this.compName = false
      }
    },
    forceRerenderNC() {
      this.correctAnswers = this.correctAnswers + 1
      this.compName = false
      this.$nextTick(() => {
        this.compName = true
      });
    },
    forceRerenderCN() {
      this.correctAnswers = this.correctAnswers + 1
      this.compColour = false
      this.$nextTick(() => {
        this.compColour = true
      });
    }
  },
  components:{
    Counter,
    colourNames: () => import(/* webpackChunkName: "colourNames" */'./ColourNames.vue'),
    nameColours: () => import(/* webpackChunkName: "nameColours" */'./NameColours.vue'),
  }
}
</script>

<style scoped>
.change{
  position: relative;
  left: 60%;
  background-color: lightcoral;
  border-radius: 3px;
}

@media screen and (min-width: 600px) {
  .change{
    left: 75%;
  }
}

</style>
