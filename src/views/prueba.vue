<template>
  <div class="login-page">
    <form>
      <h1>Ingresar</h1>
      <div class="inset">
        <p>
          <label for="user">User</label>
          <input type="text" name="user" id="user">
        </p>
        <p>
          <label for="password">PASSWORD</label>
          <input type="password" name="password" id="password">
        </p>
        <p>
          <input type="checkbox" name="remember" id="remember">
          <label for="remember">Remember me for 14 days</label>
        </p>
      </div>
      <p class="p-container">
        <span>Forgot password ?</span>
        <input type="submit" name="go" id="go" value="Log in">
      </p>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import prueba from '../views/prueba.vue'

export default {
  name: 'prueba',
  components: {
    prueba
  }
}

function Ingresar() {
  var usuario = document.getElementById("Usuario").value;
  var Contraseña = document.getElementById("Contraseña").value;
  if (usuario == ""){
    alert("Debes Escribir el Usuario");
    return ;
  }
  if (Contraseña == ""){
    alert("Debes Escribir la Contraseña")
  }

}
</script>
<style scoped>


* { box-sizing: border-box; }

body {
  font-family: "HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
  color:white;
  font-size:12px;

}

form {
  width:350px;
  margin:40px auto;
  border-radius:0.4em;
  border:10px solid #000000;
  overflow:hidden;
  position:relative;

}



.inset {
  padding:20px;
  border-top:1px solid #19191a;
}

form h1 {
  font-size:20px;
  text-shadow:0 1px 0 black;
  text-align:center;
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,1);
  position:relative;
}





input[type=text],
input[type=password] {
  width:100%;
  padding:8px 5px;
  background:linear-gradient(#1f2124, #27292c);
  border:1px solid #222;
  box-shadow:
      0 1px 0 rgba(255,255,255,0.1);
  border-radius:0.3em;
  margin-bottom:20px;
}

label[for=remember]{
  color:white;
  display:inline-block;
  padding-bottom:0;
  padding-top:5px;
}

input[type=checkbox] {
  display:inline-block;
  vertical-align:top;
}

.p-container {
  padding:0 20px 20px 20px;
}

.p-container:after {
  clear:both;
  display:table;
  content:"";
}

.p-container span {
  display:block;
  float:left;
  color:#0d93ff;
  padding-top:8px;
}

input[type=submit] {
  padding:5px 20px;
  text-shadow:0 -1px 0 rgba(0,0,0,0.4);
  box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 10px 10px rgba(255,255,255,0.1);
  border-radius:0.3em;
  background:#0184ff;
  color:white;
  float:right;
  font-weight:bold;
  cursor:pointer;
  font-size:13px;
}

input[type=submit]:hover {
  box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -10px 10px rgba(255,255,255,0.1);
}

input[type=text]:hover,
input[type=password]:hover,
label:hover ~ input[type=text],
label:hover ~ input[type=password] {
  background: #27292c;
}
</style>