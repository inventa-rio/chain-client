<template>
  <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
           <h2>Agendar nova coleta</h2>
        <div class="form">
            <v-text-field
                label="Tipo de material"
                outlined
            ></v-text-field>
            <v-text-field
                label="Peso"
                outlined
            ></v-text-field>
            <v-text-field
                label="Data"
                outlined
            ></v-text-field>
            <v-text-field
                label="Responsável"
                outlined
            ></v-text-field>
            <button>Agendar</button>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navbar from '../components/NavBar'

export default {
components: {
    navbar
  }
}
</script>

<style>
.form{
    width: 95vw;
    height: 40vh;
    margin-top: 10%;
    /* border: 3px solid red; */
    display: flex;
    flex-direction: column;
    align-items:center;

}
.v-text-field{
    width: 40%;
}
.btn{
      padding: 10px 40px 10px;
      background-color: #F6D944;
      border-radius: 5%;
      font-family: 'DM Sans', sans-serif;
      font-size: 20px;
    }
</style>