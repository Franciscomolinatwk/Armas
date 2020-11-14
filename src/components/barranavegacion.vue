<template>
  <v-bottom-navigation
      :value="value"
      background-color="black"
  >
    <v-btn>
      <router-link  to= "/" tag="button">Inicio</router-link>
    </v-btn>
    <v-btn>
      <router-link  to= "/catalogo" tag="button">CATALOGO</router-link>
    </v-btn>
    <v-btn>
      <router-link  to= "/Formulario" tag="button">Adquirir</router-link>
    </v-btn>
    <v-btn>
      <router-link  to= "/Airsoft" tag="button">Airsoft</router-link>
    </v-btn>
    <v-btn>
      <router-link  to= "/Municion" tag="button">Municion</router-link>
    </v-btn>


  </v-bottom-navigation>
</template>

<script>
export default {
name: "barranavegacion",
  data: () => ({ value: 1 }),
}

</script>

<style scoped>
button  {
  text-decoration:none;

  font-weight:900;
  font-size:20px;
  color:#000000;
  padding-top:-10px;
  padding-bottom:1px;
  padding-left:10px;
  padding-right:10px;
  background-color: darkolivegreen;
}

</style>