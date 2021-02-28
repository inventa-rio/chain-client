<template>
  <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
        <h2>Desconto por embalagem</h2>
        <div class="discount-container">
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title class="title">Atomatado</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title  class="title">Carnes</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title  class="title">Blank e Tira</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title class="title">Tintas</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title class="title">Aerossol</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
          <v-card
            class="card"
            elevation="6"
            width="370"
          >
            <v-card-title class="title">Rolo</v-card-title>
            <img src="../assets/atomatado.png"/>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navbar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>

<style lang="scss">
.home{
    h2{
    color: var(--main-color);
    padding: 30px;
    font-size: 40px;
    }
    .discount-container{
      margin-left: auto;
      margin-right: auto;
      height: auto;
      max-width: 1600px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .card{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px;
      padding: 20px;

      .title{
        font-size: 32px;
        padding: 40px;
      }

      img{
        padding: 10px;
      }
    }
    .card:last-child{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 20px;
      padding: 20px;

      .title{
        font-size: 32px;
        padding: 45px;
      }

      img{
        padding: 10px;
      }
    }
}
</style>
