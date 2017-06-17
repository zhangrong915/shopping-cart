<template>
<div name="product">
    <h3>产品展示</h3>
    <ul v-for="product in products">
        <li><button type="button" @click="addToCart(product)">加入购物车</button>
            {{product.name}} --￥{{product.price}}
        </li>
    </ul>
</div>
</template>


<script>
export default {
    name:'product',
    computed:{
        products:function(){
            return this.$store.state.products;
        },
        cartList:function(){
            return this.$store.state.cartList;
        },
    },
    methods:{
        addToCart(product){
            product.count++;
            if(product.count<=1){
                this.cartList.push(product);
            }
            else{
                for(let i=0;i<this.cartList.length;i++){
                    if(this.cartList[i].id===product.id){
                        this.cartList[i].count=product.count;
                    }
                }
            }
        }
    }
}
</script>