<template>
  <div id="NameColours">
    <p class="game-title">1 {{$t('colourName')}} -> 4 {{$t('options')}}</p>
    <p class="mob-set name" v-bind:id="'name'" v-bind:attr-id="'id'+randomColour.codes[0]">{{ randomColour[$i18n.locale] }}</p>
    <show-clue class="show-clue" :prop-clue='randomColour[$i18n.locale+"_tip"]'></show-clue>
    <p class="mob-set color-display" 
      v-bind:style="{ backgroundColor: '#'+randomColours[0].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[0].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set color-display" 
      v-bind:style="{ backgroundColor: '#'+randomColours[1].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[1].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set color-display" 
      v-bind:style="{ backgroundColor: '#'+randomColours[2].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[2].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set color-display" 
      v-bind:style="{ backgroundColor: '#'+randomColours[3].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[3].codes[0] "
      v-on:click="isCorrect($event)"> </p>
  </div>
</template>

<i18n>
{
  "es": {
    "colourName": "Nombre del color",
    "options": "Opciones"
  },
  "en": {
    "colourName": "Colour name",
    "options": "Options"
  }
}
</i18n>
<script>
import ShowClue from './ShowClue.vue';

export default {
  name: 'NameColours',
  props: {
      'propColourList': Object
  },
  computed: {
    randomColour: function () {
      return this.methRandomColour()
    },
    randomColours: function () {
      let array = [this.randomColour]
      array.push(this.methRandomColour())
      array.push(this.methRandomColour())
      array.push(this.methRandomColour())
      return this.shuffle(array)
    }
  },
  methods: {
    /**
     * This gives a random color from dataColorList
     */
    methRandomColour(){
      let randomProperty = (object) =>{
          let keys = Object.keys(object);
          return object[keys[Math.floor(keys.length * Math.random())]];
        };
      let rP =randomProperty(this.propColourList)
      if(rP['available_in_'+this.$i18n.locale]){
        return rP
      }
      else {
        return this.methRandomColour()
      }
    },
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    shuffle(a){
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },
    /**
     * This function checks if the option selected is correct or not
     * It recharges the component after result message
     */
    isCorrect(){
      let nameId = document.querySelector('#name').attributes['attr-id']
      let clickAttrId = event.target.attributes['attr-id'];
      return this.showPopUp(nameId,clickAttrId)
    },
    /**
     * This methdos show a pop up, it depends if it correct or wrong
     */
    showPopUp(gameId,clickId){
      if(gameId.value==clickId.value){
        this.$emit('correct',clickId.value)
      }else{
        this.$emit('fail',{'correct':gameId.value, 'fail':clickId.value})
      }
    }
  },
  components:{
    ShowClue
  }
}
</script>

<style scoped>
#NameColours{
  margin: 10px;
  padding: 30px 10px 40px 10px;
  background-color: white;
}
.game-title{
  width: 75%;
  margin: 0 auto;

  font-size: 14px;
  font-family: 'Google Sans',sans-serif;
}
.name{ 
  font-size: 16px;

  font-family: 'Google Sans',sans-serif;
}
.mob-set{
  margin-left:20%;
}
.show-clue{
  position: relative;
  bottom: 18px;
  left: 66%;
}
.color-display{
  width: 100px;
  border: 0.2px solid black;
  padding: 20px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px 4px 6px;
  cursor: pointer;
}

.correct{
  border: 0.2px solid white;
  outline: 3px solid green;
}

.fail{
  border: 0.2px solid white;
  outline: 3px solid #FF355E;
}
@media screen and (min-width: 600px) {
  #NameColours{
    max-width: calc(100vw - 40px);
    margin: 10px 10% 0;
  }
  .name{
    padding: 16px 32px;
    padding: 16px 32px;
  }
  .color-display:hover{
    border: 0.2px solid white;
  }
}
</style>
