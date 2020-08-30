<template>
  <div class="">
    <h3>Event Dashboard</h3>
    <!-- {{ $store.state }} -->
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">
      sign out
    </button>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  }
};
</script>
