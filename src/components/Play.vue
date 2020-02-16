<template>
  <div class="Play">
    <component :is="dynamicComponent"></component> 
  </div>
</template>

<script>
import ColorNames from './ColorNames.vue';
import NameColors from './NameColors.vue';

export default {
  name: 'Play',   
  props: {     
    component: Boolean   
    },    
    computed: {     
      dynamicComponent() {       
      if(component) {         
        return 'name-colors';       
      } else {         
        return 'color-names';       
        }    
      }   
    } 
}
</script>

<style scoped>
</style>
