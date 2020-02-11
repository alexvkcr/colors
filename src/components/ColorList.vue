<template>
  <div id="ColorList">
      <div>Nombre | Color</div>
      <div v-for="color in propColorList" :key="color.codes" class="colorBox" >
          {{color[$i18n.locale]}} <div class="colorDisplay" v-bind:style="{ backgroundColor: '#'+color.codes[0]}"> </div>
      </div>
      {{this.$i18n.locale}}
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
.colorBox{
    display: flex;
}
.colorDisplay{
    height: 15px;
    width: 50px;
    background-color: black;
}
</style>
