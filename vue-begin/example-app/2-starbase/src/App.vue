<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="row">
      <Character v-for="(id, index) in initial_ids" :key="index" :id="id" />
    </div>
  </div>
</template>

<script type="text/javascript">
import Character from "./components/Character.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Ciptakan Tim Idealmu",
      initial_ids: [1, 13, 14]
    };
  },
  methods: {},
  components: {
    Character
  }
};
</script>
