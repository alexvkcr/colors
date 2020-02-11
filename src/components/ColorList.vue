<template>
  <div id="ColorList">
      <p v-for="color in propColorList" :key="color.codes" >{{color[$i18n.locale]}}</p>
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
</style>
