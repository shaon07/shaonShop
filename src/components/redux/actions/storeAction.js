import { ADD_TO_CART, GET_CATA, GET_DATA, REMOVE_FROM_CART, START_FETCH } from "../constant/storeConstant"

export const getDataFunc = (data) =>{
    return {
        type : GET_DATA,
        payload:data
    }
}

export const startFetch = (data) => {
    return {
        type :START_FETCH,
        payload:data
    }
}

export const getCatagory = (data) =>{
    return {
        type : GET_CATA,
        payload:data
    }
}

export const addToCart = (data) => {
    return {
        type : ADD_TO_CART,
        payload:data
    }
}

export const removeFromCart = (data) => {
    return {
        type : REMOVE_FROM_CART,
        payload:data
    }
}