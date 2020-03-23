<template>
  <div class="Play">
    <button type="button" class="change" v-on:click="changeComp()">{{ $t('changeGame') }}!</button>
    <name-colours v-if="compName" :prop-colour-list="propColourList" @reload="forceRerenderNC"></name-colours>
    <colour-names v-if="compColour" :prop-colour-list="propColourList" @reload="forceRerenderCN"></colour-names>
  </div>
</template>

<i18n>
{
  "es": {
    "changeGame": "Cambiar de juego"
  },
  "en": {
    "changeGame": "Change the game"
  }
}
</i18n>

<script>

export default {
  name: 'Play',
  props: {
    'propColourList': Object
  },
  data: () => ({
    compName: false, 
    compColour: true,
    componentKeyNC: 0,
    componentKeyCN: 0
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
    }
  },
  components:{
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
