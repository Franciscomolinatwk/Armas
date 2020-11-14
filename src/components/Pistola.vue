<template>
  <div >
    <H1>Pistola Taurus 9mm</H1>
    <br>
    <img src="../assets/Taurus2.png">
    <br>
    <p>  <v-simple-table >
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
    <p> Fuerza, fiabilidad, seguridad y fácil manejo. Estas son las palabras que definen la Pistola TH. La versión de tamaño standard es la arma ideal para la policía y el uso ostensivo militar, con alta capacidad de fuego y precisión, mecanismo de disparo de acción simple y doble, así como un martillo externo, todas excelentes características en la prestación de seguridad al usuario.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jaBo13r9kwU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "Ballesta",
  data: () => ({

    Ballesta: [
      {Caracteristicas: 'Color', R: 'Negro' },
      {Caracteristicas: 'Mira', R: 'Punto' },
      {Caracteristicas: 'Capcaidad De Municion', R:'12'},
      {Caracteristicas: 'Largo', R: '20 cm'},
      {Caracteristicas: 'Peso', R: '1,7 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Bala'},
      {Caracteristicas: 'Calibre', R: '9mm'},

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