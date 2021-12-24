import {CartActionTypes, cartState} from "./CartTypes";
import {AnyAction, Reducer} from "redux";

export const initialState: cartState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false
};

const CartReducer: Reducer<cartState> = (state: cartState = initialState, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.FETCH_CART_REQUEST: {
      return {...state, loading: true};
    }
    case CartActionTypes.FETCH_CART_SUCCESS: {
      return {...state,loading: false,data:action.payload};
    }
    case CartActionTypes.FETCH_CART_ERROR: {
      return {...state, loading: false, errors: action.payload};
    }
    case CartActionTypes.ADD_TO_CART: {
      return {
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        },
        loading: state.loading,
        errors: state.errors
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter(item=> item !== action.payload.id)
        },
        loading: state.loading,
        errors: state.errors
      };
    }
    default: {
      return state
    }
  }
};

export default CartReducer;