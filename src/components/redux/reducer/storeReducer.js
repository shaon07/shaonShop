import { GET_DATA, START_FETCH } from "../constant/storeConstant";

const initData = {
  loading: false,
  data: [],
};

const storeReducer = (state = initData, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        loading: true,
      };
    
    case GET_DATA :
        return {
            loading:false,
            data:[...action.payload]
        }

    default:
      return state;
  }
};

export default storeReducer;