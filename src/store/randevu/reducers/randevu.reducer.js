import * as Actions from '../actions/index';

const initialState = {
  data: [],
  allData: [],
  loading: false,
  item: {},
};

const randevuReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RANDEVUS:
      return {...state, data: action.payload};

    case Actions.GET_ALL_RANDEVUS:
      return {...state, allData: action.payload};

    case Actions.POST_RANDEVU:
      return {...state};

    case Actions.UPDATE_RANDEVU:
      return {...state};

    case Actions.DELETE_RANDEVU:
      return {...state};

    case Actions.GET_RANDEVU_BY_ID:
      return {...state, item: action.payload};

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default randevuReducer;
