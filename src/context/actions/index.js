// action types
import * as actionTypes from './actionTypes';

// action creators
export const getData = data => {
  return {
    type: actionTypes.GET_DATA,
    payload: data,
  };
};

export const saveVehicle = vahicle => {
  return {
    type: actionTypes.SAVE_VEHICLE,
    payload: vahicle,
  };
};

export const unSaveVehicle = vahicle => {
  return {
    type: actionTypes.SAVE_VEHICLE,
    payload: vahicle,
  };
};

// shared action

//  favs: (theme, type, model, brand)
export const setFavs = favs => {
  console.log ('SET FAVS!');
  return {
    type: actionTypes.SET_FAVS,
    payload: {
      favs,
    },
  };
};

export const setNav = nav => {
  return {
    type: actionTypes.SET_NAV,
    payload: nav,
  };
};
