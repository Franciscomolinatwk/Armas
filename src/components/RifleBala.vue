<template>
  <div >
    <H1>Rifle A Bala Wesson </H1>
    <br>
    <img src="../assets/Riflebala.png">
    <br>
    <p>  <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Caracteristicas
          </th>
          <th class="text-left">
            Rifle A Bala
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="dato in RifleBala"
            :key="dato.Caracteristicas"
        >
          <td>{{ dato.Caracteristicas }}</td>
          <td>{{ dato.R }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table> </p>
    <p>El rifle semiautomático de la plataforma AR de mayor calidad. Destaca su liviano peso y calidad de construcción en polímero. La principal característica es el nivel de versatilidad que permite configurar y adaptar el rifle según las necesidades del usuario utilizando accesorios o algunos elementos de stock. Cuenta con un amplio cargador de 25 tiros, una empuñadura removible con textura de agarre y una culata CAR ajustable de seis posiciones</p>

  </div>
</template>

<script>
export default {
  name: "RifleBala",
  data: () => ({

    RifleBala: [
      {Caracteristicas: 'Color', R: 'Madera' },
      {Caracteristicas: 'Mira', R: 'Telescopica 3-4x40' },
      {Caracteristicas: 'Capcaidad De Municion', R:'8'},
      {Caracteristicas: 'Largo', R: '108 cm'},
      {Caracteristicas: 'Peso', R: '3,4 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Bala'},
      {Caracteristicas: 'Calibre', R: '50'},

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