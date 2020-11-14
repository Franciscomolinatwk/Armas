<template>
  <div >
    <H1>Revolver Magnum 9mm</H1>
    <br>
    <img src="../assets/Revolver.png">
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
            v-for="dato in Revolver"
            :key="dato.Caracteristicas"
        >
          <td>{{ dato.Caracteristicas }}</td>
          <td>{{ dato.R }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table> </p>
    <p>El Revolver Magnum (Smith & Wesson), o simplemente .357 Magnum, conocido como 9×33 mmR por el sistema métrico, es un cartucho para revólver creado por la empresa de armas Smith&Wesson en 1934 y basado en uno anterior, el .38 Special. Desde su creación se ha difundido ampliamente su uso. La diferencia entre una bala disparada del .38 y otra de .357 (a pesar del nombre miden lo mismo) es que, mientras la .38 sale de la boca del cañón a 250 m/s, la Magnum lo hace a 400, con el drástico aumento de poder de detención y capacidad de perforación que conlleva esto.</p>

  </div>
</template>

<script>
export default {
  name: "Revolver",
  data: () => ({

    Revolver: [
      {Caracteristicas: 'Color', R: 'Cromado' },
      {Caracteristicas: 'Mira', R: 'Punto' },
      {Caracteristicas: 'Capcaidad De Municion', R:'6'},
      {Caracteristicas: 'Largo', R: '23 cm'},
      {Caracteristicas: 'Peso', R: '2,9 Kg'},
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