<template>
 <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
        <h2>Coletas</h2>
        <div class="graphs-container">
          <img src="../assets/graph1.png" width="45%"/>
          <img src="../assets/graph2.png"/>
          <img src="../assets/graph3.png" width="75%"/>
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
    .graphs-container{
      // border: 3px solid red;
      height: auto;
      width: 94vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      img{
        padding: 38px;
      }
    }
}
</style>
