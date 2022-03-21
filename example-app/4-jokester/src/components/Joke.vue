<template>
  <div class="col-md-6">
    <div class="joke-card">
      <div class="card-block">
        <button class="close" @click="remove_joke(index)">
          <span>&times;</span>
        </button>
        <p>
          <u>{{ joke.setup }}</u>
        </p>
        <p>
          <em>{{ joke.punchline }}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapActions } from "vuex";

export default {
  props: ["joke", "index"],
  methods: mapActions(["remove_joke"])
};
</script>
