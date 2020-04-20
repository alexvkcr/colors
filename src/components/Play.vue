<template>
  <div id="Play">
    <counter class="counter" :prop-correct-answers="correctAnswers"></counter>
    <change-game @change="changeComp"></change-game>
    <name-colours v-if="compName" :prop-colour-list="propColourList" @correct="correctNC" @fail="failNC"></name-colours>
    <colour-names v-if="compColour" :prop-colour-list="propColourList" @correct="correctCN" @fail="failCN"></colour-names>
  </div>
</template>


<script>
import Counter from './Counter.vue';
import ChangeGame from './ChangeGame.vue';

export default {
  name: 'Play',
  props: {
    'propColourList': Object
  },
  data: () => ({
    gameSelected: 'ColourNs',
    compName: false, 
    compColour: true,
    componentKeyNC: 0,
    componentKeyCN: 0,
    correctAnswers: 0
  }),  
  methods: {
    changeComp(gameEmitted){
        if(gameEmitted == 'NameCs'){
          this.gameSelected == 'NameCs'
          this.compColour = false
          this.compName = true
        }else{
          this.gameSelected == 'ColourNs'
          this.compName = false
          this.compColour = true
      }
    },
    forceRerenderNC() {
      this.compName = false
      this.$nextTick(() => {
        this.compName = true
      });
    },
    forceRerenderCN() {
      this.compColour = false
      this.$nextTick(() => {
        this.compColour = true
      });
    },
    correctNC(correct) {
      this.correctAnswers = this.correctAnswers + 1
      
      let corrElem= document.querySelectorAll(`#NameColours p[attr-id=${correct}]`)[1]
      corrElem.classList.add("correct")
      
      setTimeout(() => this.forceRerenderNC(), 1500)
    },
    correctCN(correct) {
      this.correctAnswers = this.correctAnswers + 1

      let corrElem= document.querySelectorAll(`#ColourNames p[attr-id=${correct}]`)[1]
      corrElem.classList.add("correct")
      
      setTimeout(() => this.forceRerenderCN(), 1500)
    },
    failNC(both) {
      let {correct,fail} = both
      let corrElem= document.querySelectorAll(`#NameColours p[attr-id=${correct}]`)[1]
      let failElem= document.querySelector(`#NameColours p[attr-id=${fail}]`)
      corrElem.classList.add("correct")
      failElem.classList.add("fail")
      this.correctAnswers = 0

      setTimeout(() => this.forceRerenderNC(), 1500)
    },
    failCN(both) {
      let {correct,fail} = both
      let corrElem= document.querySelectorAll(`#ColourNames p[attr-id=${correct}]`)[1]
      let failElem= document.querySelector(`#ColourNames p[attr-id=${fail}]`)
      corrElem.classList.add("correct")
      failElem.classList.add("fail")
      this.correctAnswers = 0
      
      setTimeout(() => this.forceRerenderCN(), 1500)
    }
  },
  components:{
    Counter, ChangeGame,
    colourNames: () => import(/* webpackChunkName: "colourNames" */'./ColourNames.vue'),
    nameColours: () => import(/* webpackChunkName: "nameColours" */'./NameColours.vue'),
  }
}
</script>

<style scoped>
.appear-enter-active {
  transition: all .45s cubic-bezier(0,.99,.44,1.28);
}
.appear-leave-active {
  transition: all .45s cubic-bezier(0,.99,.44,1.28);
}
.appear-enter, .appear-leave-to
/* .appear-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media screen and (min-width: 600px) {
  #Play{
    width: 100%;
  }
}

</style>
