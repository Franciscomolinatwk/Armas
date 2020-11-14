<template>
  <div>

  <v-app>
    <barranavegacion></barranavegacion>
    <router-view>
    </router-view>
  </v-app>
  </div>
</template>

<script>

import barranavegacion from "./components/barranavegacion";


export default {
  name: 'App',

  components: {
    barranavegacion,

  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  margin: 80px 0 0;
  background-color: darkolivegreen;
  color: BLACK;
}
body{
  background-color: darkolivegreen;
}

</style>
