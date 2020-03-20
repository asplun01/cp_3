<template>
<div class="wrapper">
  <div class="pokemon">
    <div class="p" v-for="p in pokemon" :key="p.id">
      <div class="info">
        <h1>{{p.name}}</h1>
        <p>{{p.types[0].type.name}}</p>
        <p v-if="p.types.length === 2">{{p.types[1].type.name}}</p>
      </div>
      <div class="image">
        <img :src="p.sprites.front_default">
      </div>
      <div class="price">
  <button class="auto" v-on:click="addTeam(p)">Catch Pokemon!</button>
</div>
    </div>
  </div>
</div>
</template>

<script>



export default {
  name: 'Pokelist',
  props: {
    pokemon: Array
  },
  methods: {
  addTeam(p) {
  if (this.$root.$data.team.length < 6)
  {
  this.$root.$data.team.push(p);
  console.log(p);
  }
  }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.p {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.p img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.p .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #E3F7F3;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
  text-align: center;
}

.info h2 {
  font-size: 14px;
  text-align: center;
}

.info p {
  margin: 0px;
  font-size: 10px;
  text-align: center;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #F4C4C1;
  color: white;
  border: none;
  width: 200px;
}

.auto {
  margin-left: auto;
}
</style>
