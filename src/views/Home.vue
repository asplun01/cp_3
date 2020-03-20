<template>
<div>
<div class="wrapper">
  <div class="search">
    <form class="pure-form">
      <i class="fas fa-search"></i><input v-model="searchText" />
    </form>
  </div>
</div>
  <Pokelist :pokemon="pokemon" />
  <div class='footer'>
    <a href='https://github.com/asplun01/cp_3'>
      <img src='images/github_logo.png' />
    </a>
  </div>
</div>
</template>

<script>
import Pokelist from "../components/pokelist.vue"
export default {
  name: 'Home',
  components: {
    Pokelist
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon.filter(p => p.name.toLowerCase().search(this.searchText) >= 0);
    }

  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer img {
  width: 50px;
  height: auto;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
