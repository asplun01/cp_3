<template>
<div>
  <div class="wrapper">
  <div class="pokemon">
  <p v-show="this.$root.$data.team.length === 0">Party empty. Go catch more Pokemon!</p>
    <div class="p" v-for="p in this.$root.$data.team" :key="p.id">
      <div class="info">
        <h1>{{p.name}}</h1>
        <p>{{p.types[0].type.name}}</p>
      </div>
      <div class="image">
        <img :src="p.sprites.front_default">
      </div>
      <div class="moveset">
      <h2>Moveset</h2>
      <p>{{p.moves[0].move.name}}</p>
      <p>{{p.moves[1].move.name}}</p>
      <p>{{p.moves[2].move.name}}</p>
      <p>{{p.moves[3].move.name}}</p>
      </div>
      <div class="price">
  <button class="auto" v-on:click="removeTeam(p)">Release</button>
</div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  props: {
  },
  methods: {
    removeTeam(p) {
    var index = this.$root.$data.team.indexOf(p);
    if (index > -1)
    this.$root.$data.team.splice(index,1);
    }
  },
};
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.moveset {
background-color: #C41F3B;
color: white;
text-align: center;
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

p {
color: #F4C4C1;
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
  margin-bottom: 0px;
}

.info {
  background: #C41F3B;
  color: #E3F7F3;
  padding: 10px 30px;
  height: 80px;
  margin-bottom: 5px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  width: 200px;
}

.auto {
  margin-left: auto;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
