<template>
  <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
        <h2>Resultados</h2>
        <div class="graphs-container">
          <img src="../assets/graph1.png" width="45%"/>
          <img src="../assets/graph2.png"/>
          <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
            class="chart-column"
          />
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navbar from '../components/NavBar'
import { GChart } from 'vue-google-charts'

export default {
  name: 'Home',
  components: {
    navbar,
    GChart
  },
   data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Mês', 'Meta', 'Alcançado'],
        ['Janeiro', 1000, 400],
        ['Fevereiro', 1170, 460],
        ['Março', 660, 1120],
        ['Abril', 1030, 540],
        ['Maio', 1000, 400],
        ['Junho', 1170, 460],
        ['Julho', 660, 1120],
        ['Agosto', 1030, 540],
        ['Setembro', 1000, 400],
        ['Outubro', 1170, 460],
        ['Novembro', 660, 1120],
        ['Dezembro', 1030, 540],
      ],
      chartOptions: {
        chart: {
          title: 'Coletado por mês',
          subtitle: 'Meta mensal, e valor alcançado em toneladas',
        }
      }
    }
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

      .chart-column{
        height: 30%;
        width: 60%;

        g > text{
          font-size: 14px;
        }
      }

      img{
        padding: 38px;
      }
    }
}

</style>
