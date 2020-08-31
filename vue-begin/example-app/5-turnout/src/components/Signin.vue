<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="form-inline">
        <h3>Sign In</h3>
        <div class="form-group">
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="email"
            class="form-control"
            v-model="email"
          />&nbsp;&nbsp;
          <input
            type="password"
            placeholder="password"
            class="form-control"
            autocomplete="off"
            v-model="password"
          />

          <button class="btn btn-primary" @click="signIn">sign in</button>
        </div>
        <br />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <p v-if="error.message" class="alert alert-danger">
          {{ error.message }}
        </p>
      </div>
    </div>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
