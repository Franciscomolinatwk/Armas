<template>
  <div >
    <H1>Carabina Winchester</H1>
    <br>
    <img src="../assets/Carabina.png">
    <br>
    <p>  <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Caracteristicas
          </th>
          <th class="text-left">
            Escopeta
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="dato in Escopeta"
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
  name: "Escopete",
  data: () => ({

    Escopeta: [
      {Caracteristicas: 'Color', R: 'Madera' },
      {Caracteristicas: 'Mira', R: 'Clasica' },
      {Caracteristicas: 'Capcaidad De Municion', R:'2'},
      {Caracteristicas: 'Largo', R: '110 cm'},
      {Caracteristicas: 'Peso', R: '3,6 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Cartucho'},
      {Caracteristicas: 'Calibre', R: '12'},

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