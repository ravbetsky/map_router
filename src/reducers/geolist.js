import * as types from '../constants/ActionTypes';
import { omit, uniqueId } from 'lodash'
import { arrayMove } from 'react-sortable-hoc';

const initialState = {
  geos: [],
  geosById: {
  }
};

export default function geos(state = initialState, action) {
  switch (action.type) {

    case types.ADD_GEO:
      const newId = +uniqueId()
      return {
        ...state,
        geos: state.geos.concat(newId),
        geosById: {
          ...state.geosById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    case types.MOVE_GEO:
      return {
        ...state
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
