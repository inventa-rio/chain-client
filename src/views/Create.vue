<template>
  <div class="home">
    <navbar />
    <v-content>
      <v-container fluid>
        <h2>Agendar nova coleta</h2>
        <div class="form">
          <v-text-field
            label="Tipo de material"
            v-model="originType"
            outlined
          ></v-text-field>
          <v-text-field label="Peso (kg)" v-model="weight" outlined></v-text-field>
          <v-text-field label="Data (MM/DD/AAAA)" v-model="plannedDate" v-mask="'##/##/####'"  outlined></v-text-field>
          <v-text-field label="Responsável" v-model="warehouse" outlined></v-text-field>
          <button class="btn" @click="agendar()">Agendar</button>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navbar from "../components/NavBar";
import axios from 'axios'

export default {
  components: {
    navbar,
  },

  data() {
    return {
      weight: "",
      plannedDate: "",
      warehouse: "",
      originType: "",
      latitude: 0,
      longitude: 0,
    };
  },

  methods: {
    agendar() {
      const data = {
        weight:this.weight,
        plannedDate: this.plannedDate,
        warehouse: {
          "address": "Rua tal tal tal",
          "pickups": [
          {
          "weight": this.weight,
          "latitude": 11.3123,
          "longitude": 12.3123,
          "plannedDate": this.plannedDate
          }
          ]
        },
        originType: this.originType,
        latitude: 11.3123,
        longitude: 12.3123,
      }

      axios.post('https://api-chain.herokuapp.com/pickup', data)
        .then(response => console.log(response), alert('Cadastrado com sucesso'))
    },
  },
};
</script>

<style>
.form {
  width: 95vw;
  height: 40vh;
  margin-top: 10%;
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-text-field {
  width: 40%;
}
.btn {
  padding: 15px 80px 15px !important;
  background-color: var(--main-color) !important;
  color: aliceblue;
  border-radius: 8% !important;
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
}
</style>