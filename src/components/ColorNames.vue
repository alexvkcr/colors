<template>
  <div class="ColorNames">
    Color Names
  </div>
</template>

<script>
export default {
  name: 'ColorNames'
}
</script>

<style scoped>
#ColorNames{
    width: 80%;
    margin: 10px 0 80px;
    border: 1px solid blue;
}

@media screen and (min-width: 600px) {
  #ColorNames{
    max-width: 600px;
  }
}
</style>
