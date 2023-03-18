import {ADD_TO_CART} from './cartTypes'
import { REMOVE_TO_CART } from './cartTypes'

export const addToCart=(data)=>{
    console.log("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=(title)=>{
    // console.log("action",index)
    return{
        type:REMOVE_TO_CART,
        title:title
    }
}