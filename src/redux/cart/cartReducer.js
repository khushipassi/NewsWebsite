import {ADD_TO_CART} from './cartTypes'
import { REMOVE_TO_CART } from './cartTypes'

const initialState={
    cartData:[]
}

const cartReducer=(state=initialState,action)=>{
    // console.log('reducer',action)

    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartData:[...state.cartData,action.data]
            }   
        case REMOVE_TO_CART: 
        // console.log('reducer',action.index)
            return{
                ...state,
                cartData: state.cartData.filter((item) => item.title !== action.title)
            }   
        default:
            return state 
    }
}

export default cartReducer;