<template>
  <div class="Play">
    <button type="button" class="change" v-on:click="changeComp()">{{ $t('changeGame') }}!</button>
    <name-colors v-if="compName" :prop-colour-list="propColourList"></name-colors>
    <color-names v-if="compColor" :prop-colour-list="propColourList"></color-names>
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
    compColor: true
  }),  
  methods: {
    changeComp(){
      if(this.compColor){
        this.compName = true
        this.compColor = false
        return
      }
      if(this.compName){
        this.compColor = true
        this.compName = false
      }
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
