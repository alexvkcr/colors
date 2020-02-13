<template>
  <div id="ColorList">
      <div class="header"></div>
      <div class="header">Nombre</div>
      <div class="header">Color</div>
      <template v-for="color in propColorList"  >
          <div :key="color.codes"></div>
          <div :key="color.codes">{{color[$i18n.locale]}}</div>
          <div :key="color.codes" class="colorDisplay" v-bind:style="{ backgroundColor: '#'+color.codes[0]}"> </div>
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
    display: grid;
    grid-template-columns: 1fr 4fr 8fr;
    grid-template-rows:    40px repeat(auto-fill, 40px);
}
.header{
    grid-area: "header";
}
.colorBox{
    display: flex;
    grid-area: "row";
}
.colorDisplay{
    height: 15px;
    width: 100%;
    background-color: black;
}
  @media screen and (min-width: 600px) {
    #ColorList{
      max-width: 600px;
    }
  }
</style>
