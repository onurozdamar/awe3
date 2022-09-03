import * as Actions from '../actions/index';

const initialState = {
  data: [],
  allData: [],
  loading: false,
  item: {},
};

const appointmentReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_APPOINTMENTS:
      return {...state, data: action.payload};

    case Actions.GET_ALL_APPOINTMENTS:
      return {...state, allData: action.payload};

    case Actions.POST_APPOINTMENT:
      return {...state, data: [...state.data, action.payload]};

    case Actions.UPDATE_APPOINTMENT:
      return {...state};

    case Actions.DELETE_APPOINTMENT:
      return {...state};

    case Actions.GET_APPOINTMENT_BY_ID:
      return {...state, item: action.payload};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default appointmentReducer;
