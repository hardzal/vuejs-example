<template>
  <div>
    <h4>Add an Event <input type="checkbox" v-model="showForm" /></h4>
    <div class="form" v-if="showForm">
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-8">
          <input type="text" v-model="event.title" class="form-control" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-8">
          <textarea
            class="form-control"
            v-model="event.description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-8">
          <input type="date" v-model="event.date" class="form-control" />
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Location</label>
        <div class="col-sm-8">
          <input type="text" v-model="event.location" class="form-control" />
        </div>
      </div>

      <button class="btn btn-sm btn-primary" @click="addEvent">submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
};
</script>
