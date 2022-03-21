<template>
  <div id="app">
    <h3>NewStarbase</h3>
    <h4>
      <router-link class="link" to="/data/people"
        >Meet the characters
      </router-link>
      |
      <router-link class="link" to="/data/planets"
        >Explore the planets</router-link
      >
    </h4>
    <router-view></router-view>
  </div>
</template>
