<template>
  <div class="Play">
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
  } 
}
</script>

<style scoped>
</style>
