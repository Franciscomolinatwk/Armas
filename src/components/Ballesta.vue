<template>
  <div >
    <H1>Ballesta ARK</H1>
    <br>
    <img src="../assets/Balle.png">
    <br>
    <p>  <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Caracteristicas
          </th>
          <th class="text-left">
            Ballesta
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="dato in Ballesta"
            :key="dato.Caracteristicas"
        >
          <td>{{ dato.Caracteristicas }}</td>
          <td>{{ dato.R }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table> </p>
    <p>Ballesta ARK Con Accesorios
      Evolucion de la línea de productos JAG hacia un manejo más rápido, rango medio de 260 fps.
      Liviana y compacta, modelo de perfecto nivel de entrada. Excelente balanceo operacional, obtenido gracias al diseño ergonómico.</p>

  </div>
</template>

<script>
export default {
  name: "Ballesta",
  data: () => ({

    Ballesta: [
      {Caracteristicas: 'Color', R: 'Camuflaje' },
      {Caracteristicas: 'Mira', R: 'Telescopica 3-4x40' },
      {Caracteristicas: 'Capcaidad De Municion', R:'1'},
      {Caracteristicas: 'Largo', R: '40 cm'},
      {Caracteristicas: 'Peso', R: '2,9 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Flecha'},
      {Caracteristicas: 'Calibre', R: '0'},

    ]
  })
}

</script>

<style scoped>
p {
  float:left;
  width: 612px;
  height: 400px;
  border: darkolivegreen 10px solid;
}
div {
  background-color: #b3b3b3;
}


</style>