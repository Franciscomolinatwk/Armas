<template>
<div >
  <H1>Fusil Remington 308</H1>
  <br>
  <img src="../assets/Fusil.png">
  <br>
  <p>  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Caracteristicas
        </th>
        <th class="text-left">
          Fusil
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="dato in Fusil"
          :key="dato.Caracteristicas"
      >
        <td>{{ dato.Caracteristicas }}</td>
        <td>{{ dato.R }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table> </p>
  <p>Fusil de acción tiro a tiro para caza mayor calibre .308 Win. Capacidad de 4+1 tiros con cargador de cajetilla. Cañón de acero en acabado pavonado tipo Varmint (sin miras fijas). Culata de polímero color negro. Culatín de goma blanda. Seguro manual contra disparo activable con el dedo pulgar. Gatillo ajustable con seguro secundario. Tiene orificios integrados en la culata para los portacorreas. Cañón de 22 pulgadas (55,88 cm). Mide 105,72 cm en total. Pesa 3,85 Kg. Incluye una mira 3-9x40. Viene empacado en una básica caja de cartón. Producto fabricado en EE.UU.</p>


</div>
</template>

<script>
export default {
name: "Fusil",
  data: () => ({

    Fusil: [
      {Caracteristicas: 'Color', R: 'Camuflaje' },
      {Caracteristicas: 'Mira', R: 'Telescopica 3-9x40' },
      {Caracteristicas: 'Capcaidad De Municion', R:'5'},
      {Caracteristicas: 'Largo', R: '105,72 cm'},
      {Caracteristicas: 'Peso', R: '3,85 Kg'},
      {Caracteristicas: 'Tipo De Municion', R: 'Bala'},
      {Caracteristicas: 'Calibre', R: '308'},

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