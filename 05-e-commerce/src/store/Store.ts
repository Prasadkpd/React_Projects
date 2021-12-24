import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {History} from "history";
import {InventoryState} from "./Inventory/InventoryTypes";
import {cartState} from "./Cart/CartTypes";
import {RouterState} from "connected-react-router";
import CartReducer from "./Cart/CartReducer";
import InventoryReducer from "./Inventory/InventoryReducer";


export interface ApplicationState {
  cart: cartState,
  inventory: InventoryState,
  router: RouterState
}

export const createRootReducer = (history: History) =>
    combineReducers({
      cart: CartReducer,
      inventory: InventoryReducer,
      router: connectRouter(history)
    });

