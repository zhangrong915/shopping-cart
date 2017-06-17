import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store/index'

const store=createStore();
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
