import * as types from '../constants/ActionTypes';

export function addGeo(name) {
  return {
    type: types.ADD_GEO,
    name
  };
}

export function deleteGeo(id) {
  return {
    type: types.DELETE_GEO,
    id
  };
}

export function moveGeo(id) {
  return {
    type: types.MOVE_GEO,
    id
  };
}

export function sortGeoList(id) {
  return {
    type: types.SORT_GEOLIST,
    id
  };
}
