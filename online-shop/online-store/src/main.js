// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const GreetingComponent = {
  template: `<h1>Hi, you!</h1>`
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    GreetingComponent,
    App
  },
  template: `
    <div>
    <GreetingComponent/>
    <h2>{{message}}</h2>
    </div>`, // spasi berpengaruh
  data () {
    return {
      message: 'Hello, World!'
    }
  }
})

// // JavaScript
// const divElement = document.getElementById('text');
// const textNode = document.createTextNode('Hello Vue');

// divElement.appendChild(textNode);

// Vue
// new Vue({
//   template: `<div>{{text}}</div>`,
//   data () {
//       return {
//           text: 'Hello Vue'
//       };
//   }
// }).$mount('#app')
