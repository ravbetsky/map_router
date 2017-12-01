import * as types from '../constants/ActionTypes';

export function addGeo(name, coordinates) {
  return {
    type: types.ADD_GEO,
    name,
    coordinates
  };
}

export function deleteGeo(id) {
  return {
    type: types.DELETE_GEO,
    id
  };
}

export function moveGeo(currentId, name) {
  return {
    type: types.MOVE_GEO,
    currentId,
    name
  };
}

export function sortGeoList(oldIndex, newIndex) {
  return {
    type: types.SORT_GEOLIST,
    oldIndex,
    newIndex
  };
}
