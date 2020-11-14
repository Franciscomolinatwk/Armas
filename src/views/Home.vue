<template>
  <div>


  <div class="home">



    <H1>Tienda de Armas</H1>
    <img src="../assets/logop.png">


    <h2>Bienvenido a Nuestra Tienda de Armas</h2>

    En esta tienda de armas podras encontrar tu arma ideal


    <router-view></router-view>

  </div>
    <h3>¿Como Adquirir un Arma de Fuego?</h3>
    <pre>
    <h4> Requisitos mínimos para el procedimiento de compra de un arma:

      Ser mayor de 18 años
      No tener antecedentes judiciales
      Además si comprará por primera vez una escopeta, deberá obtener la Licencia de caza que entrega el SAG (leer más abajo).

      Documentación necesaria para adquirir un arma de fuego

      Certificado de antecedentes para fines especiales
      Certificado de acreditación de domicilio notarial
      Evaluación siquiátrica
      Responder cuestionario en Comandancia de Guarnición sobre ley 17.798 de manejo y mantención de armas
      Para armas de caza: Obtener carné del SAG, cuestionario,</h4></pre>
  </div>

</template>

<script>
import Barranavegacion from "../components/barranavegacion";
export default {
  name: 'Home',
  components: {Barranavegacion},
  methods:{
    catalogo(){
      this.$router.push("/catalogo");

    }

  },

}
</script>
<style>
h2{

}
h4 {
  float:left;
  width: 1223px;
  height: 400px;
  border: darkolivegreen 10px solid;

}
div {
  background-color: #ACB2AE;
}
</style>