<template>
  <div id="ColourNames">
    <p class="mob-set">1 {{$t('colourName')}} -> 4 {{$t('options')}}</p>
    <p class="mob-set colorDisplay"
      v-bind:id="'colour'" 
      v-bind:style="{ backgroundColor: '#'+randomColour.codes[0]}" 
      v-bind:attr-id="'id'+randomColour.codes[0] ">
    </p>
    <p class="mob-set button"  v-bind:attr-id="'id'+randomColours[0].codes[0]"
      v-on:click="isCorrect($event)">
    {{ randomColours[0][$i18n.locale] }}
    </p>
    <p class="mob-set button"  v-bind:attr-id="'id'+randomColours[1].codes[0]"
      v-on:click="isCorrect($event)">
    {{ randomColours[1][$i18n.locale] }}
    </p>
    <p class="mob-set button"  v-bind:attr-id="'id'+randomColours[2].codes[0]"
      v-on:click="isCorrect($event)">
    {{ randomColours[2][$i18n.locale] }}
    </p>
    <p class="mob-set button"  v-bind:attr-id="'id'+randomColours[3].codes[0]"
      v-on:click="isCorrect($event)">
    {{ randomColours[3][$i18n.locale] }}
    </p>
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
export default {
  name: 'ColourNames',
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
        console.log(rP)
        return rP
      }
      else {
        console.log('NO')
        console.log(rP)
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
      let colourId = document.querySelector('#colour').attributes['attr-id']
      let clickAttrId = event.target.attributes['attr-id'];
      return this.showPopUp(colourId,clickAttrId)
    },
    /**
     * This methdos show a pop up, it depends if it correct or wrong
     */
    showPopUp(gameId,clickId){
      console.log(gameId.value==clickId.value)
      if(gameId.value==clickId.value){
        alert("Correcto")
        this.$emit('reload')
      }else
        alert ("Errore")
    }
  }
}
</script>

<style scoped>
#ColourNames{
  width: 100%;
  padding: 30px 10px 80px 10px;
  background-color: white;
  font-size: 16px;
}
.mob-set{
  margin-left:20%;
}
.button{
  background-color: lightgrey;
  border: 0.2px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.colorDisplay{
  width: 100px;
  border: 2px solid white;
  margin-left:20%;
  padding: 16px 32px;
}

@media screen and (min-width: 600px) {
  #ColourNames{
    max-width: 800px;
  }
  .button:hover{
    border: 0.2px solid white;
    background-color: lightslategrey;
  }
}
</style>
