import * as Actions from '../actions';

const initialState = {
  data: [],
  loading: false,
  item: {},
};

const hospitalReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GOREVS:
      return {...state, data: action.payload};

    case Actions.POST_GOREV:
      return {...state};

    case Actions.UPDATE_GOREV:
      return {...state};

    case Actions.DELETE_GOREV:
      return {...state};

    case Actions.GET_GOREV_BY_ID:
      return {...state, item: action.payload};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default hospitalReducer;
