import * as Actions from '../actions';

const initialState = {
  data: [],
  loading: false,
  item: {},
};

const taskdReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TASKS:
      return {...state, data: action.payload};

    case Actions.POST_TASK:
      return {...state, data: [...state.data, action.payload]};

    case Actions.UPDATE_TASK:
      return {...state};

    case Actions.DELETE_TASK:
      return {...state};

    case Actions.GET_TASK_BY_ID:
      return {...state, item: action.payload};

    case Actions.UPDATE_TASK_COMPLETE:
      return {...state};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default taskdReducer;
