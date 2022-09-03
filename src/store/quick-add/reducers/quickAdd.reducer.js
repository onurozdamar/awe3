import * as Actions from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  item: {},
};

const recordReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_QUICK_ADDS:
      return {...state, data: action.payload};

    case Actions.POST_QUICK_ADD:
      return {...state, data: [...state.data, action.payload]};

    case Actions.UPDATE_QUICK_ADD:
      return {...state};

    case Actions.DELETE_QUICK_ADD:
      return {...state};

    case Actions.GET_QUICK_ADD_BY_ID:
      return {...state, item: action.payload};

    default:
      return state;
  }
};

export default recordReducer;
