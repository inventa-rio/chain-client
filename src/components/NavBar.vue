<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      :clipped="clipped"
      app
      class="v-navigation-drawer"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/nestle.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Nestre</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Perfil', icon: 'mdi-account-outline', route: 'Perfil'},
          { title: 'Dashboard', icon: 'mdi-chart-donut', route: 'Home' },
          { title: 'Coletas', icon: 'mdi-calendar-text-outline', route: 'Historic'},
          { title: 'Descontos', icon: 'mdi-tag-outline', route: 'Discount'},
        ],
        mini: true,
      }
    },
  }
</script>

<style lang="scss">

.v-list{
    .v-list-item{
    padding: 17px !important;

    .v-list-item__title{
        margin-left: 10px;
    }

    &.v-list-item--active{
    .v-icon{
        color: #1770B1;
      }
    }
  }
}

.v-image__image{
    margin-left: -10px !important;
}

</style>