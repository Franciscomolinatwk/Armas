<template xmlns="http://www.w3.org/1999/html">
  <div>
    <body>
    <div class="testbox">
      <form action="/">
        <h1>Formulario para Adquirir Municion</h1>

          <div class="city-item">
            <input type="text" name="name" placeholder="Nombre "/>
            <input type="text" name="name" placeholder="Apellido "/>
            <input type="text" name="name" placeholder="Email"/>
            <input type="text" name="name" placeholder="Direccion" />
            <input type="text" name="name" placeholder="Ciudad" />
            <input type="text" name="name" placeholder="Region" />
            <input type="text" name="name" placeholder="Numero de Telefono" />

            <br>
            <p></p>

            <select>
              <option selected disabled>PERMISO PARA PORTAR ARMA</option>
              <option value="1" >SI</option>
              <option value="2">NO</option>
            </select>

            <select>
              <option selected disabled>SELECCIONE LA EDAD</option>
              <option value="1">+18</option>
              <option value="2">-18</option>
            </select>
          </div>

        <div class="btn-block">
          <button type="submit" href="/">Siguiente</button>
        </div>

      </form>
    </div>
    </body>
  </div>
</template>

<script>
import Barranavegacion from "../components/barranavegacion";
export default {
  name: "FMunicion",
  components: {Barranavegacion}
}
</script>

<style scoped>
html, body {
  min-height: 100%;
}
body, div, form, input, select, p {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  margin: 15px 0;
  font-weight: 800;
}
h2{
  margin: 15px 0;
  font-weight: 800;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 3px;
}
form {
  width: 100%;
  padding: 20px;
  background: darkolivegreen;
}
input, select, textarea {
  margin-bottom: 10px;
  border: 1px solid #000000;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
select {
  width: 100%;
  padding: 7px 0;
  background: transparent;
}
textarea {
  width: calc(100% - 6px);
}
.item {
  position: relative;
  margin: 10px 0;
}
.item:hover p, .item:hover i {
  color: #095484;
}
input:hover, select:hover, textarea:hover {
  box-shadow: 0 0 5px 0 #095484;
}
.btn-block {
  margin-top: 20px;
  text-align: center;
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
button:hover {
  background-color: #4fff03;
}
@media (min-width: 350px) {
  .name-item, .city-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input, .city-item input {
    width: calc(50% - 20px);
  }
  .city-item select {
    width: calc(50% - 8px);
  }
}
.question-answer label {
  display: block;
}

</style>