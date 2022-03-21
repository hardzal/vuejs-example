import Vue from "vue";
import App from "./components/App.vue";

import store from "./store";

// store.commit("INIT_JOKES", [{ key_test: "Value_test_jokes" }]);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
