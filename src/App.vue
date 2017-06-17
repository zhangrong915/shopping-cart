<template>
  <div id="app">
    <h1>购物车</h1>
    <hr />
    <product></product>
    <hr />
    <cart></cart>
  </div>
</template>

<script>
import product from './components/product.vue'
import cart from './components/cart.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    product,
    cart
  }
}
</script>

<style>
</style>
