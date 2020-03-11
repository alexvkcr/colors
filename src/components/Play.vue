<template>
  <div class="Play">
    <button type="button" class="change" v-on:click="changeComp()">Click Me!</button>
    <component :is="dynamicComponent"></component> 
  </div>
</template>

<script>

export default {
  name: 'Play',  
  data() {
     return {
       dataComp: 'NameColors'
     }
   },
  computed: {     
    dynamicComponent() { 
      return () => import(`./${this.dataComp}.vue`)
    }   
  },
  methods: {
    changeComp(){
      if(this.dataComp=='NameColors'){
        this.dataComp='ColorNames'
        console.log('ColorNames')
        return
      }
      if(this.dataComp=='ColorNames'){
        console.log('NameColors')
        this.dataComp='NameColors'
      }
    }
  }
}
</script>

<style scoped>
.change{
  background-color: bisque;
}
</style>
