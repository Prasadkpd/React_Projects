import {InventoryActionTypes, InventoryState} from "./InventoryTypes";
import {AnyAction, Reducer} from "redux";

export const initialState: InventoryState = {
  data: [],
  errors: undefined,
  loading: false
};

const InventoryReducer: (state: InventoryState, action: AnyAction) => void = (state: InventoryState = initialState,
                                                                              action: AnyAction) => {
  switch (action.type) {
    case InventoryActionTypes.FETCH_REQUEST: {
      return {...state, loading: true};
    }
    case InventoryActionTypes.FETCH_SUCCESS: {
      console.log("Action Payload", action.payload);
      return {...state, loading: false, data: action.payload};
    }
    case InventoryActionTypes.FETCH_ERROR: {
      return {...state, loading: false, errors: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default InventoryReducer;