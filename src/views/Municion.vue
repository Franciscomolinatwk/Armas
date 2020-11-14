<template>
  <div>
  <v-simple-table >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Replicas
        </th>
        <th class="text-left">
          Precio
        </th>
        <th class="text-left">
          Marca
        </th>
        <th class="text-left">
          Cantidad
        </th>

      </tr>
      </thead>
      <tbody>



      <tr v-for="dato in Armas" :key="dato.nombre">

        <td v-on:click="test(dato.id)" >{{ dato.nombre }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.precio }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Marca }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Cantidad }}</td>

      </tr>
      </tbody>

      <router-view></router-view>

    </template>
  </v-simple-table>
  <router-view></router-view>
    <v-btn>
      <router-link  to= "/FMunicion" tag="button">Adquirir Municion</router-link>
    </v-btn>

</div>
</template>

<script>
import Barranavegacion from "../components/barranavegacion";
export default {
  name:'Arma',
  components: {Barranavegacion},
  data: () => ({

    Armas: [
      {nombre: 'Balines', precio: '$8.000', Marca: 'Kalashnikov', Cantidad:3000 },
      {nombre: 'Postones', precio:'$5.000', Marca: 'ABRG',  Cantidad:200 },
      {nombre: 'Cartuchos', precio: '$26.000', Marca: 'CROSPIN', Cantidad:28},
      {nombre: 'Balas 9mm', precio: '$25.000', Marca: 'MCSOL',Cantidad:44 },
      {nombre: 'Balas cal. 50', precio: '65.000', Marca: 'BigH',Cantidad:30},
      {nombre: 'Flechas', precio: '$30.000', Marca: 'FZS', Cantidad:24},
    ]

  }), methods:{



    }


}



</script>

<style scoped>
th{

  padding: 20px;
}
button {
  width: 150px;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background-color: darkolivegreen;
  font-size: 16px;
  color: black;
  cursor: pointer;
  border: 5px solid #000000;
}
</style>
