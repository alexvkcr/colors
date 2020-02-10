<template>
  <div id="ColorList">
      {{ propColorList }}
  </div>
</template>


<script>
export default {
  name: 'ColorList',
  props: {
      'propColorList': Array
  }
}
</script>

<style scoped>
</style>
