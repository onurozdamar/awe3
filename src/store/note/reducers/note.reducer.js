import * as Actions from '../actions/index';

const initialState = {
  data: [],
  loading: false,
  item: {},
};
          
const noteReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NOTES:
      return {...state, data: action.payload};

    case Actions.GET_NOTE_BY_ID:
      return {...state, item: action.payload};

    case Actions.POST_NOTE:
      return {...state, data: [...state.data, action.payload]};

    case Actions.UPDATE_NOTE:
      return {
        ...state,
        data: state.data.map(d => {
          if (d.id === action.payload.id) {
            return {...d, ...action.payload};
          }
          return d;
        }),
      };

    case Actions.DELETE_NOTE:
      return {
        ...state,
        data: state.data.filter(d => d.id !== action.payload.id),
      };

    case Actions.SET_LOADING:
      return {...state, loading: action.payload};

    default:
      return state;
  }
};

export default noteReducer;
