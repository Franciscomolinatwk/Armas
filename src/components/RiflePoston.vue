<template>
  <div >
    <H1>Rifle Poston Apolo 5,5</H1>
    <br>
    <img src="../assets/Rifle-Poston.png">
    <br>
    <p>  <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Caracteristicas
          </th>
          <th class="text-left">
            Rifle Poston
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="dato in RiflePoston"
            :key="dato.Caracteristicas"
        >
          <td>{{ dato.Caracteristicas }}</td>
          <td>{{ dato.R }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table> </p>
    <p>Moderno rifle de aire comprimido que incorpora las sofisticadas tecnologías. Los 800 FPS de potencia de salida en boca del cañón y su gran precisión hacen de este modelo una opción ideal para la caza menor, control de plagas y tiro al blanco.</p>

  </div>
</template>

<script>
export default {
  name: "RiflePoston",
  data: () => ({

    RiflePoston: [
      {Caracteristicas: 'Color', R: 'Camuflaje' },
      {Caracteristicas: 'Mira', R: 'Telescopica 3-4x40' },
      {Caracteristicas: 'Capcaidad De Municion', R:'1'},
      {Caracteristicas: 'Largo', R: '110 cm'},
      {Caracteristicas: 'Peso', R: '3 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Poston'},
      {Caracteristicas: 'Calibre', R: '5,5'},

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