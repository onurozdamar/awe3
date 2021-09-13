import * as Actions from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  openModal: false,
  item: {},
};

const hospitalReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_HOSPITALS:
      return {...state, data: action.payload};

    case Actions.POST_HOSPITAL:
      return {...state};

    case Actions.UPDATE_HOSPITAL:
      return {...state};

    case Actions.DELETE_HOSPITAL:
      return {...state};

    case Actions.GET_HOSPITAL_BY_ID:
      return {...state, item: action.payload};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    case Actions.OPEN_MODAL:
      return {...state, openModal: action.payload};

    default:
      return state;
  }
};

export default hospitalReducer;
