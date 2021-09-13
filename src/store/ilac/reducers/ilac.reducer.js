import * as Actions from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  item: {},
};

const hospitalReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ILACS:
      return {...state, data: action.payload};

    case Actions.POST_ILAC:
      return {...state};

    case Actions.UPDATE_ILAC:
      return {...state};

    case Actions.DELETE_ILAC:
      return {...state};

    case Actions.GET_ILAC_BY_ID:
      return {...state, item: action.payload};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default hospitalReducer;
