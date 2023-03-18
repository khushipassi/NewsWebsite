import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './fetchTypes'

export const fetchUsersRequest=()=>{
    // console.log('request')
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess=users=>{
    // console.log('success',users)
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure=error=>{
    // console.log('failure',error)
    return{
        type:FETCH_USERS_FAILURE,
        playload:error
    }
}
