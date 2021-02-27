<template>
  <div class="navbar-container">
      <p>Aço²</p>
      <nav>
          <ul>
              <li><a href="">Dashboard</a></li>
              <li><a href="">Não sei</a></li>
              <li><a href="">Não sei</a></li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.navbar-container{
    background-color: rgb(0, 17, 255);
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;

    p{
        color: #FFF;
        font-size: 24px;
        margin-left: 5%;
    }
}

ul{
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        list-style-type: none;
        padding: 10px;
    }

    li > a {
    text-decoration: none;
    color: white;
    padding: 10px;
    font-size: 18px;
}
}


</style>