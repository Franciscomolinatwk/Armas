<template>


  <v-simple-table >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Arma
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
        <th class="text-left">
          Calibre
        </th>
      </tr>
      </thead>
      <tbody>



      <tr v-for="dato in Armas" :key="dato.nombre">

        <td v-on:click="test(dato.id)" >{{ dato.nombre }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.precio }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Marca }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Modelo }}</td>
        <td v-on:click="test(dato.id)" >{{ dato.Calibre }}</td>
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
      {nombre: 'Carabina', precio: '$1.600.000', Marca: 'Winchester', Calibre:30.30,Modelo: 1998, id:1 },
      {nombre: 'Escopeta', precio:'$1.550.000', Marca: 'Maverick', Calibre:12,Modelo:'AKKAR' , id:2 },
      {nombre: 'Revolver', precio: '$400.000', Marca: 'Magnum', Calibre:9,Modelo:375, id:3},
      {nombre: 'Fusil', precio: '$1.200.000', Marca: 'Remington', Calibre:308 , Modelo:700, id:4},
      {nombre: 'Rifle Poston', precio: '$200.000', Marca: 'Apolo', Calibre: 5.5,Modelo:'AP1000', id:5 },
      {nombre: 'Pistola', precio: '$890.000', Marca: 'Taurus', Calibre:9,Modelo:'G2c' , id:6},
      {nombre: 'Rifle a Bala', precio:'$900.000', Marca: 'Wesson', Calibre:50,Modelo:'XXV', id:7},
      {nombre: 'Ballesta', precio: '$350.000', Marca: 'ARK', Calibre:0, Modelo:'Primitive', id:8},
      {nombre: 'Arco', precio: '$450.000', Marca: 'Crosman', Calibre:0,Modelo:'19-22', id:9},

    ]

  }), methods:{

      test(id){
        if(id == 1){
        this.$router.push('Carabina')
        }
        if(id == 2){
          this.$router.push('Escopeta')
        }
        if(id == 3){
          this.$router.push('Revolver')
        }
        if(id == 4){
          this.$router.push('Fusil')
        }
        if(id == 5){
          this.$router.push('RiflePoston')
        }
        if(id == 6){
          this.$router.push('Pistola')
        }
        if(id == 7){
          this.$router.push('RifleBala')
        }
        if(id == 8){
          this.$router.push('Ballesta')
        }
        if(id == 9){
          this.$router.push('Arco')
        }

        {
      }console.log(id)

      }
  }
,

}



</script>

<style scoped>

</style>