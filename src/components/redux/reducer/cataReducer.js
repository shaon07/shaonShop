import { GET_CATA } from "../constant/storeConstant";

const initCatagory = {
  loading: true,
  catagory: [],
};

const cataReducer = (state = initCatagory, action) => {
  switch (action.type) {
    case GET_CATA:
      return {
        loading: false,
        catagory: action.payload
      };

    default:
      return state;
  }
};
export default cataReducer;
