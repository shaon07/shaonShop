import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/storeConstant";

const initCart = {
  loading: true,
  cart: [],
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        loading: false,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      console.log(action.payload);
      
      return {
        loading:false,
        cart:action.payload
      }
    case "shaon":
      console.log(action.payload)
      return {
        loading: false,
        cart: [...state.cart],
      };

    default:
      return state;
  }
};

export default cartReducer;
