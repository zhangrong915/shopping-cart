export default{
    increment({commit},id){
        commit('increment',id);
    },
    decrement({commit},id){
        commit('decrement',id);
    },
    deleteProduct({commit},id){
        commit('deleteProduct',id);
    },
    submit({commit,state}){
        var promise=new Promise(function(resolve,reject){
           setTimeout(()=>{
                commit('submit');
                resolve();
           },1000) 
        })
        promise.then(function(){
            console.log("提交成功");
            state.flag=true;
        })
    }
}
