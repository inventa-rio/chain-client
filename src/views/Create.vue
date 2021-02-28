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
            <button class="btn" @click="agendar()">Agendar</button>
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
  },

  methods: {
    agendar(){
    alert("Parabens! Nova coleta cadastrada")
    }
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
      padding: 15px 80px 15px !important;
      background-color: var(--main-color) !important;
      color: aliceblue;
      border-radius: 8% !important;
      font-family: 'DM Sans', sans-serif;
      font-size: 20px;
    }
</style>