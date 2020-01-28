<template>
  <div id="AppHeader">
    <h1>Learn all the colors!</h1>
    <v-tabs
      fixed-tabs
      color="#2E6C61"
    >
      <v-tab>
        Presentación
      </v-tab>
      <v-tab>
      Option
    </v-tab>
    <v-tab>
      Another Selection
    </v-tab>
    <v-tab>
      Items
    </v-tab>
    <v-tab>
      Another Screen
    </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
h1{
    color: #2E6C61;
    text-align: center;
}
</style>
