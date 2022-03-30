// action types
import * as actionTypes from '../actions/actionTypes';
// theme options
import {
  NAVS,
  THEME_OPTIONS,
  VEHICLE_BRANDS,
  VEHICLE_MODELS,
  VEHICLE_TYPES,
} from '../../constants';

// initial state
const initialState = {
  ui: {
    theme: THEME_OPTIONS.DEFAULT,
  },
  nav: {
    currentNav: NAVS.HOME.CATALOG,
  },
  options: {
    vehicleType: VEHICLE_TYPES.CAR,
    vehicleModel: VEHICLE_MODELS.VERY_OLD,
    vehicleBrand: VEHICLE_BRANDS.BMW,
  },
};

// reducer
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVS:
      return {
        ...state,
        ui: {theme: action.payload.theme},
        options: {
          ...state.options,
          vehicleType: action.payload.type,
          vehicleModel: action.payload.model,
          vehicleBrand: action.payload.brand,
        },
      };
    case actionTypes.SET_NAV:
      return {...state, currentNav: action.payload};
    default:
      return {...state};
  }
};

// exports
export default mainReducer;
