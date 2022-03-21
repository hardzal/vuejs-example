<template>
  <div class="">
    <h3>Event Dashboard</h3>

    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">
      sign out
    </button>
    <hr />
    <AddEvent />
    <div class="row">
      <EventItem
        v-for="(event_item, index) in this.$store.state.events"
        :key="index"
        :event="event_item"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
      console.log("events", events);
    });
  }
};
</script>
