<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Normal')" href="#" class="pure-menu-link">Normal</a></li>
      <li class="pure-menu-item"><a @click="select('Bug')" href="#" class="pure-menu-link">Bug</a></li>
      <li class="pure-menu-item"><a @click="select('Dragon')" href="#" class="pure-menu-link">Dragon</a></li>
      <li class="pure-menu-item"><a @click="select('Electric')" href="#" class="pure-menu-link">Electric</a></li>
      <li class="pure-menu-item"><a @click="select('Fighting')" href="#" class="pure-menu-link">Fighting</a></li>
      <li class="pure-menu-item"><a @click="select('Fire')" href="#" class="pure-menu-link">Fire</a></li>
      <li class="pure-menu-item"><a @click="select('Flying')" href="#" class="pure-menu-link">Flying</a></li>
      <li class="pure-menu-item"><a @click="select('Ghost')" href="#" class="pure-menu-link">Ghost</a></li>
      <li class="pure-menu-item"><a @click="select('Grass')" href="#" class="pure-menu-link">Grass</a></li>
      <li class="pure-menu-item"><a @click="select('Ground')" href="#" class="pure-menu-link">Ground</a></li>
      <li class="pure-menu-item"><a @click="select('Ice')" href="#" class="pure-menu-link">Ice</a></li>
      <li class="pure-menu-item"><a @click="select('Poison')" href="#" class="pure-menu-link">Poison</a></li>
      <li class="pure-menu-item"><a @click="select('Psychic')" href="#" class="pure-menu-link">Psychic</a></li>
      <li class="pure-menu-item"><a @click="select('Rock')" href="#" class="pure-menu-link">Rock</a></li>
      <li class="pure-menu-item"><a @click="select('Water')" href="#" class="pure-menu-link">Water</a></li>
    </ul>
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
  name: 'Browse',
  components: {
    Pokelist
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    pokemon() {
    console.log(this.type.toLowerCase());
    console.log(this.$root.$data.pokemon);
      return this.$root.$data.pokemon.filter(p => p.types.some(t => t.type.name === this.type.toLowerCase()));
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>

<style scoped>
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
</style>
