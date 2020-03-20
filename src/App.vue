<template>
<div id="app">
  <div id="menu">
  <div class="page">
      <router-link to="/">
        <p>View All</p>
      </router-link>
      <router-link to="/browse">
          <p>Find By Type</p>
      </router-link>
      <router-link to="/team">
          <p>View Team</p>
          <img src='/images/zero.png' v-if="this.$root.$data.team.length === 0">
          <img src='/images/one.png' v-if="this.$root.$data.team.length === 1">
          <img src='/images/two.png' v-if="this.$root.$data.team.length === 2">
          <img src='/images/three.png' v-if="this.$root.$data.team.length === 3">
          <img src='/images/four.png' v-if="this.$root.$data.team.length === 4">
          <img src='/images/five.png' v-if="this.$root.$data.team.length === 5">
          <img src='/images/six.png' v-if="this.$root.$data.team.length === 6">
      </router-link>
  </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #2C527A;

}

.page {
  width: 75%;
  margin: 0 auto;
}
.page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#menu a {
  color: #F4C4C1;
  text-decoration: none;
}

</style>
