import * as Actions from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  item: {},
};

const recordReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RECORDS:
      return {...state, data: action.payload};

    case Actions.POST_RECORD:
      return {...state, data: [...state.data, action.payload]};

    case Actions.UPDATE_RECORD:
      return {...state};

    case Actions.DELETE_RECORD:
      return {...state};

    case Actions.GET_RECORD_BY_ID:
      return {...state, item: action.payload};

    default:
      return state;
  }
};

export default recordReducer;
