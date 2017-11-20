import * as types from '../constants/ActionTypes';
import { omit } from 'lodash'

const initialState = {
  geos: [1, 2, 3],
  geosById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};

export default function geos(state = initialState, action) {
  switch (action.type) {

    case types.ADD_GEO:
      return {
        ...state
      }

    case types.MOVE_GEO:
      return {
        ...state
      }

    case types.SORT_GEOLIST:
      return {
        ...state
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
