<template>
  <div class="home">
    <navbar/>
    <v-content>
      <v-container fluid>
        <p>Perfil</p>
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

</style>
