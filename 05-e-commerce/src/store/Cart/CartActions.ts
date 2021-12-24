import {CartActionTypes} from "./CartTypes";
import {Inventory} from "../Inventory/InventoryTypes";
import {ActionCreator, Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ApplicationState} from "../Store";
import {deepStrictEqual} from "assert";

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>;

export const fetchCartRequest: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: CartActionTypes.FETCH_CART_SUCCESS,
        payload: state.cart
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.FETCH_CART_ERROR
      });
    }
  };
};

export const addToCart: ActionCreator<ThunkAction<void, ApplicationState, Inventory, Action<string>>> = item => {
  return (dispatch: Dispatch): Action =>{
    try {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: item
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: null
      });
    }
  };
};