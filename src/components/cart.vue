<template>
<div name="cart">
    <h3>你的购物车</h3>
    <ul v-for="product in cartList">
        <li>
            <button type="button" @click="increment(product.id)">+</button>
            <button type="button" @click="decrement(product.id)">-</button>
            <button type="button" @click="deleteProduct(product.id)">删除</button>
            {{product.name}}--￥{{product.price}}--x{{product.count}}
        </li>
    </ul>
    <p>合计:￥{{total}}</p>
    <button type="button" @click="submit" :disabled="!cartList.length">提交</button>
    <p v-show="flag">提交成功</p>
</div>
</template>


<script>
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    name:'cart',
    computed:{
        cartList(){
            return this.$store.state.cartList;
        },
        total(){
            return this.$store.getters.total;
        },
        flag(){
            return this.$store.state.flag;
        }
    },
    methods:mapActions([
        'increment',
        'decrement',
        'deleteProduct',
        'submit'
    ]) 
}
</script>