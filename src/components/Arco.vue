<template>
  <div >
    <H1>Arco Compuesto</H1>
    <br>
    <img src="../assets/Arco.png">
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
            v-for="dato in Arco"
            :key="dato.Caracteristicas"
        >
          <td>{{ dato.Caracteristicas }}</td>
          <td>{{ dato.R }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table> </p>
    <p>Arco Compuesto Con Accesorios
      Evolucion de la línea de productos JAG hacia un manejo más rápido, rango medio de 500 fps.
      Liviana y compacta, modelo de perfecto nivel de entrada. Excelente balanceo operacional, obtenido gracias al diseño ergonómico.</p>

  </div>
</template>

<script>
export default {
  name: "Arco",
  data: () => ({

    Arco: [
      {Caracteristicas: 'Color', R: 'Camuflaje' },
      {Caracteristicas: 'Mira', R: 'Punto Rojo' },
      {Caracteristicas: 'Capcaidad De Municion', R:'1'},
      {Caracteristicas: 'Largo', R: '90 cm'},
      {Caracteristicas: 'Peso', R: '3.3 Kg'},
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