<template>
  <div class="home">
    <navbar />
    <v-content>
      <v-container fluid>
        <div class="superior">
          <h2>Coletas</h2>
          <button class="btn" @click="$router.push('Create')">
            + Agendar nova coleta
          </button>
        </div>
        <div class="collect-container">
          <v-card
            v-for="item in items"
            :key="item.id"
            class="card"
            elevation="6"
            width="80%"
          >
            <div class="item">
              <h3>{{ item.id }}</h3>
            </div>
            <div class="item">
              <h3>{{ item.plannedDate }}</h3>
            </div>
            <div class="item">
              <h3>{{item.weight}}kg</h3>
            </div>
            <div class="item price">
              <h3>R$853</h3>
            </div>
            <div class="item">
              <h3>></h3>
            </div>
          </v-card>
        </div>
        <h3 class="more">Ver mais</h3>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navbar from "../components/NavBar";
import axios from 'axios';

var moment = require('moment')

export default {
  name: "Home",
  data() {
    return {
      items: [],
    };
  },

  created(){
    this.getPickup()
  },

  filters: {
    formatDate: function(value){
        if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    }
  },

  methods: {
    getPickup() {
      axios
        .get("https://api-chain.herokuapp.com/pickup")
        .then( res => {
          console.log(res.data[0]);
          this.items = res.data[0];

          this.items.forEach(function(item) {
            var dia = item.plannedDate.substring(8, 10)
            var mes = item.plannedDate.substring(5, 7)
            var ano = item.plannedDate.substring(0, 4)
            item.plannedDate = dia + '/' + mes + '/' + ano
          })
        });
    },
  },

  components: {
    navbar,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.home {
  h2 {
    color: var(--main-color);
    padding: 30px;
    font-size: 40px;
  }

  h3 {
    font-size: 32px;
  }

  .more {
    font-size: 24px;
    color: var(--main-color);
    margin-left: 50%;
    margin-top: 2%;
  }

  .item {
    display: flex;
    padding: 20px;
    margin-left: 7%;
  }

  .item:last-child {
    color: rgb(218, 218, 218);
  }

  .price {
    color: var(--main-color);
  }

  .collect-container {
    // border: 3px solid red;
    height: auto;
    width: 94vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    li {
      list-style: none;
      width: 100%;
    }
  }

  .card {
    display: flex;
    justify-content: center !important;
  }
  // .collect-item{
  //   width: 80vw;
  //   height: 12vh;
  //   margin: 15px;
  //   background-color: bisque;
  // }

  .btn {
    padding: 10px 40px 10px;
    background-color: #f6d944 !important;
    border-radius: 5%;
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
  }
  .btn:hover {
    background-color: #f6d844d7;
  }
}
.superior {
  width: 90vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
