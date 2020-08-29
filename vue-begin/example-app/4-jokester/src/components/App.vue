<template>
  <div id="app">
    <h2>Got jokes?</h2>
    <button class="btn btn-primary" @click="init_jokes">add 10 jokes</button>
    <button class="btn btn-success" @click="add_joke">Add a random joke</button>
    <button class="btn btn-danger">Clear joke</button>
    <br />
    <span v-for="(type, index) in types" :key="index">
      <input type="checkbox" :value="type" v-model="checkedTypes" checked />
      <label for="" class="mr-3">{{ type }}</label>
    </span>
    <br />
    <div class="row">
      <!--{{// $store.state }}-->
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :index="index"
        :key="index"
      ></Joke>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  methods: mapActions(["init_jokes", "add_joke"]),
  components: {
    Joke
  }
};
</script>
