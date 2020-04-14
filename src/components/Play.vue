<template>
  <div id="Play">
    <transition name="appear">
      <correct v-if="correct"></correct>
    </transition>
    <transition name="appear">
      <mistake v-if="mistake"></mistake>
    </transition>
    <div class="change-section">
      <span>{{$t('exclamationStart')}}{{$t('changeGame')}}</span>
      <select class="select-game" v-model="gameSelected" @change="changeComp($event)">
          <option value="NameCs">{{$t('NameCs')}}</option>
          <option value="ColourNs">{{$t('ColourNs')}}</option>
      </select>
    </div>
    <counter class="counter" :prop-correct-answers="correctAnswers"></counter>
    <name-colours class="game-itself" v-if="compName" :prop-colour-list="propColourList" @reload="correctNC" @fail="failNC"></name-colours>
    <colour-names class="game-itself" v-if="compColour" :prop-colour-list="propColourList" @reload="correctCN" @fail="failCN"></colour-names>
  </div>
</template>

<i18n>
{
  "es": {
    "exclamationStart": "¡",
    "changeGame": "Cambia de juego!",
    "NameCs": "Escoge el color",
    "ColourNs": "Escoge nombre del color"
  },
  "en": {
    "exclamationStart": " ",
    "changeGame": "Change the game!",
    "NameCs": "Pick the color",
    "ColourNs": "Pick colour's name"
  }
}
</i18n>

<script>
import Counter from './Counter.vue';
import Correct from './Correct.vue';
import Mistake from './Mistake.vue';

export default {
  name: 'Play',
  props: {
    'propColourList': Object
  },
  data: () => ({
    gameSelected: 'ColourNs',
    correct: false, 
    mistake: false,
    compName: false, 
    compColour: true,
    componentKeyNC: 0,
    componentKeyCN: 0,
    correctAnswers: 0
  }),  
  methods: {
    changeComp(event){
      console.log(event.target.value)
    },
    transitionCorrect(){
      this.correct = true
      setTimeout(() => this.correct = false, 1500);
    },
    transitionMistake(){
      this.mistake = true
      setTimeout(() => this.mistake = false, 1500);
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
    correctNC() {
      this.correctAnswers = this.correctAnswers + 1
      this.transitionCorrect();
      this.forceRerenderNC();
    },
    correctCN() {
      this.correctAnswers = this.correctAnswers + 1
      this.transitionCorrect();
      this.forceRerenderCN();
    },
    failNC() {
      this.correctAnswers = 0
      this.transitionMistake();
      this.forceRerenderNC();
    },
    failCN() {
      this.correctAnswers = 0
      this.transitionMistake();
      this.forceRerenderCN();
    }
  },
  components:{
    Counter, Correct, Mistake,
    colourNames: () => import(/* webpackChunkName: "colourNames" */'./ColourNames.vue'),
    nameColours: () => import(/* webpackChunkName: "nameColours" */'./NameColours.vue'),
  }
}
</script>

<style scoped>
.counter{
  position: relative;
  bottom: 20px;
}
.select-game{
  background-color: aliceblue;
  border-style: outset;
  border-radius: 5px;
}
.change-section{
  font-family: 'Manoyri';
  font-size: 18px;
  width: 9em;

  position: relative;
  top: 10px;
  left: 60%;
  border-radius: 3px;
}
.game-itself{
  position: relative;
  bottom: 18px;
}
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
    margin: 0px 10%;
  }
  name-colours,colour-names{
    max-width: 1024px;
  }
  .change{
    left: 75%;
  }
}

</style>
