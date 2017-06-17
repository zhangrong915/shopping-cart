export default{
    increment(state,id){
        for(let i=0;i<state.cartList.length;i++){
            if(state.cartList[i].id==id){
               state.cartList[i].count++;
            }
        }
    },
    decrement(state,id){
        for(let i=0;i<state.cartList.length;i++){
            if(state.cartList[i].id==id){
               state.cartList[i].count--;
            }
        }
    },
    deleteProduct(state,id){
        for(let i=0;i<state.cartList.length;i++){
            if(state.cartList[i].id==id){
                state.cartList[i].count=0;
                state.cartList.splice(i,1);
            }
        }
    },
    submit(state){
        let length=state.cartList.length;
        for(let i=0;i<length;i++){
            state.cartList[i].count=0;
        }
        state.cartList.splice(0,length);
    }
}
