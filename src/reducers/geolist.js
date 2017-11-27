import * as types from '../constants/ActionTypes';
import { omit, uniqueId } from 'lodash'

const initialState = {
  geos: [1, 2, 3],
  geosById: {
    1: {
      id: 1,
      name: "Москва"
    },
    2: {
      id: 2,
      name: "Ульяновск"
    },
    3: {
      id: 3,
      name: "Санкт-Петербург"
    }
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
