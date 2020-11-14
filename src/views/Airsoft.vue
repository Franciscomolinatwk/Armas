<template>


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
          Modelo
        </th>

      </tr>
      </thead>
      <tbody>



      <tr v-for="dato in Armas" :key="dato.nombre">

        <td v-on:click="test(dato.id)" >{{ dato.nombre }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.precio }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Marca }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Modelo }}</td>

      </tr>
      </tbody>

      <router-view></router-view>
    </template>
  </v-simple-table>

</template>

<script>
import Barranavegacion from "../components/barranavegacion";
export default {
  name:'Arma',
  components: {Barranavegacion},
  data: () => ({

    Armas: [
      {nombre: 'M4', precio: '$555.000', Marca: 'Boyi', Modelo:'Co2', id:1 },
      {nombre: 'AKA 47', precio:'$450.000', Marca: 'BRG', Modelo:'AEG' , id:2 },
      {nombre: 'BERETTA 90', precio: '$90.000', Marca: 'Crosman', Modelo:'Spring', id:3},
      {nombre: 'MP5', precio: '$200.000', Marca: 'UMAREX', Modelo:'Electrica', id:4 },
      {nombre: 'M4A1', precio: '130.000', Marca: 'A&K', Modelo:'AEG' , id:5},
      {nombre: 'UMP', precio: '$230.000', Marca: 'ALM', Modelo:'AEG' , id:6},
    ]

  }), methods:{

    test(id){
      if(id == 1){
        this.$router.push('M4')
      }
      if(id == 2){
        this.$router.push('AK47')
      }
      if(id == 3){
        this.$router.push('BERETTA')
      }
      if(id == 4){
        this.$router.push('HK')
      }
      if(id == 5){
        this.$router.push('M4A1')
      }
      if(id == 6){
        this.$router.push('UMP')
      }

      {
      }console.log(id)

    }
  }
  ,

}



</script>

<style scoped>
th{

  padding: 20px;
}
</style>
