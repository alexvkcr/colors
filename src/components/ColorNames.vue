<template>
  <div id="ColorNames">
    <p class="mob-set">1 {{$t('colour')}} ->4{{$t('options')}}</p>
    <p class="mob-set" v-bind:id="'name'" v-bind:attr-id="'id'+randomColour.codes[0]">{{ randomColour[$i18n.locale] }}</p>
    <p class="mob-set colorDisplay" 
      v-bind:style="{ backgroundColor: '#'+randomColours[0].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[0].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set colorDisplay" 
      v-bind:style="{ backgroundColor: '#'+randomColours[1].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[1].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set colorDisplay" 
      v-bind:style="{ backgroundColor: '#'+randomColours[2].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[2].codes[0] "
      v-on:click="isCorrect($event)"> </p>
    <p class="mob-set colorDisplay" 
      v-bind:style="{ backgroundColor: '#'+randomColours[3].codes[0]}" 
      v-bind:attr-id="'id'+randomColours[3].codes[0] "
      v-on:click="isCorrect($event)"> </p>
  </div>
</template>

<i18n>
{
  "es": {
    "colour": "Color",
    "options": "Opciones"
  },
  "en": {
    "colour": "Color",
    "options": "Options"
  }
}
</i18n>
<script>
export default {
  name: 'ColorNames',
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
      let nameId = document.querySelector('#name').attributes['attr-id']
      let clickAttrId = event.target.attributes['attr-id'];
      return this.showPopUp(nameId,clickAttrId)
    },
    /**
     * This methdos show a pop up, it depends if it correct or wrong
     */
    showPopUp(gameId,clickId){
      console.log(gameId.value==clickId.value)
    }
  }
}
</script>

<style scoped>
#ColorNames{
    width: 100%;
    padding: 30px 10px 80px 10px;
    background-color: white;
}
.mob-set{
  margin-left:20%;
}

.colorDisplay{
    height: 25px;
    width: 80px;
    border: 2px solid white;
    margin-left:20%;
}

@media screen and (min-width: 600px) {
  #ColorNames{
    max-width: 600px;
  }
}
</style>
