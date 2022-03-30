// action types
import * as actionTypes from '../actions/actionTypes';

// initial state
const initialState = {
  data: null,
  savedList: [],
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
    default:
      return {...state};
  }
};

// exports
export default mainReducer;
