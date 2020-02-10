<template>
  <div class="HowTo">
    HowTo!
    <color-list :prop-color-list="propColorList"></color-list>
  </div>
</template>

<script>

import ColorList from './ColorList.vue';

export default {
  name: 'HowTo',
  props: {
    'propColorList': Array
  },
  components: {
    ColorList
  }
}
</script>

<style scoped>
</style>
