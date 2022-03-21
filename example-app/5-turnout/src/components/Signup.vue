<template>
  <div class="container justify-content-center align-items-center">
    <h3>Sign Up</h3>
    <div class="row mt-3">
      <div class="col-12">
        <p v-if="error.message" class="alert alert-danger">
          {{ error.message }}
        </p>
      </div>
    </div>

    <div class="form-group row">
      <label for="" class="col-sm-2 col-form-label left-align">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
          placeholder="Email"
          class="form-control"
          v-model="email"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="form-control"
        />
      </div>
    </div>

    <button class="btn btn-primary" @click="signUp">sign up</button><br /><br />
    <router-link to="/signin">Sign In</router-link>
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
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
