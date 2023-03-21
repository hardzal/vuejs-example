<template>
  <div id="app">
    <NewHome />
    <MovieList/>
  </div>
</template>

<script>
import NewHome from './components/NewHome.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    NewHome,
    MovieList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
