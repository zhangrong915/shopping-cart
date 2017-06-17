export default{
    total(state){
        let sum=0;
        let length=state.cartList.length;
        for(let i=0;i<length;i++){
            sum=sum+state.cartList[i].count*state.cartList[i].price;
        }
        return sum;
    },
}