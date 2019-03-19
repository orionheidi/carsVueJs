<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/cars">Cars </router-link>
    <router-link to="/add">Add</router-link>
    <router-view />
  </div>
</template>

<script>
 import Cars from './components/Cars.vue'
 import AddCar from './components/AddCar.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
