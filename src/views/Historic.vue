<template>
 <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
        <div class="superior">
           <h2>Coletas</h2>
          <button class="btn" @click="$router.push('Create')">+ Agendar nova coleta</button>
        </div>
        <div class="collect-container">
          <div class="collect-item">
            
          </div>
          <div class="collect-item">
            
          </div>
          <div class="collect-item">
            
          </div>
          <div class="collect-item">
            
          </div>
          <div class="collect-item">
            
          </div>
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
*{
  padding: 0;
  margin: 0;
}
.home{
    h2{
    color: var(--main-color);
    padding: 30px;
    font-size: 40px;
    }
    .collect-container{
      // border: 3px solid red;
      height: auto;
      width: 94vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .collect-item{
      width: 80vw;
      height: 12vh;
      margin: 15px;
      background-color: bisque;
    }
    .btn{
      padding: 10px 40px 10px;
      background-color: #F6D944;
      border-radius: 5%;
      font-family: 'DM Sans', sans-serif;
      font-size: 20px;
    }
    .btn:hover{
      background-color: #f6d844d7;
    }
}
.superior{
      width: 90vw;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
</style>
