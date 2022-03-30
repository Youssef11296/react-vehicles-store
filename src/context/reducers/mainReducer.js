// action types
import {VEHICLE_BRANDS, VEHICLE_MODELS, VEHICLE_TYPES} from '../../constants';
import * as actionTypes from '../actions/actionTypes';

// initial state
const initialState = {
  data: null,
  savedList: [],
  favs: {
    type: VEHICLE_TYPES.CAR,
    model: VEHICLE_MODELS.MODERN,
    brand: VEHICLE_BRANDS.BMW,
  },
};

// reducer
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {...state, data: action.payload};
    case actionTypes.SAVE_VEHICLE:
      return {...state, savedList: [...state.savedList, action.payload]};
    case actionTypes.UNSAVE_VEHICLE:
      return {
        ...state,
        savedList: state.savedList.filter (
          vehicle => vehicle.id !== action.payload.id
        ),
      };
    case actionTypes.SET_FAVS:
      return {...state, favs: action.payload};
    default:
      return {...state};
  }
};

// exports
export default mainReducer;
