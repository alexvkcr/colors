<template>
  <div id="ColorList">
      <div class="header"></div>
      <div class="header">Nombre</div>
      <div class="header">Color</div>
      <template v-for="color in propColorList"  >
          <div :key="'space_'+color.codes"></div>
          <div :key="'text_'+color.codes">{{color[$i18n.locale]}}</div>
          <b-tooltip :key="'color_'+color.codes" 
            :label="color[$i18n.locale+'_tip']" 
            type="is-light">
            <div class="colorDisplay" v-bind:style="{ backgroundColor: '#'+color.codes[0]}"> </div>
        </b-tooltip>
      </template>    
  </div>
</template>


<script>
export default {
  name: 'ColorList',
  props: {
      'propColorList': Object
  }
}
</script>

<style scoped>
#ColorList{
    width: 80%;
    margin-top: 10px;
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 4fr 8fr;
    grid-auto-rows: 40px;
    grid-gap: 10px;
}
.colorBox{
    display: flex;
}
.colorDisplay{
    height: 25px;
    width: 100%;
    border: 2px solid white;
}
@media screen and (min-width: 600px) {
  #ColorList{
    max-width: 600px;
  }
}
</style>
