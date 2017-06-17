import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)

const state={
            products:[
                {id:1,name:'产品一',price:120,count:0},
                {id:2,name:'产品二',price:20,count:0},
                {id:3,name:'产品三',price:123,count:0}
            ],
            cartList:[],
            flag:false
        };

export function createStore(){
    return new Vuex.Store({
        state,
        actions,
        getters,
        mutations
    })
}