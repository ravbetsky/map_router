import * as types from '../constants/ActionTypes';
import { omit, findKey, extend, isEqual } from 'lodash'
import { arrayMove } from 'react-sortable-hoc';

const initialState = {
  geos: [],
  geosById: {
  }
};

export default function geos(state = initialState, action) {
  switch (action.type) {

    case types.ADD_GEO:
      if(findKey(state.geosById, (obj) => isEqual(obj.point, action.coordinates))) {
        return {
          ...state
        }
      }
      const newId = state.geos.length === 0 ? 0 : Math.max(...state.geos) + 1
      return {
        ...state,
        geos: state.geos.concat(newId),
        geosById: {
          ...state.geosById,
          [newId]: {
            id: newId,
            name: action.name,
            point: action.coordinates
          }
        }
      }

    case types.MOVE_GEO:
      const updatedGeo = {
        [action.currentId]: {
          id: action.currentId,
          name: action.name
        }
      }
      return {
        ...state,
        geosById: extend({}, state.geosById, updatedGeo)
      }

    case types.SORT_GEOLIST:
      return {
        ...state,
        geos: arrayMove(state.geos, action.oldIndex, action.newIndex)
      }

    case types.DELETE_GEO:
      return {
        ...state,
        geos: state.geos.filter(id => id !== action.id),
        geosById: omit(state.geosById, action.id)
      }

    default:
      return state;
  }
}
