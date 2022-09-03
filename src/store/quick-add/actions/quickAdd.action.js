export const GET_QUICK_ADDS = 'GET_QUICK_ADDS';
export const POST_QUICK_ADD = 'POST_QUICK_ADD';
export const UPDATE_QUICK_ADD = 'UPDATE_QUICK_ADD';
export const DELETE_QUICK_ADD = 'DELETE_QUICK_ADD';
export const GET_QUICK_ADD_BY_ID = 'GET_QUICK_ADD_BY_ID';
export const SET_LOADING = 'SET_LOADING_QUICK_ADD';

import {QuickAddService} from '../../../database/bussiness/QuickAddService';

export const getQuickAdd = () => dispatch => {
  const service = new QuickAddService();
  dispatch(setLoading(true));

  service
    .get()
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_QUICK_ADDS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_QUICK_ADDS,
        payload: [],
      });
    });
};

export const getQuickAddById = id => dispatch => {
  const service = new QuickAddService();
  dispatch(setLoading(true));

  service
    .getById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_QUICK_ADD_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_QUICK_ADD_BY_ID,
        payload: {},
      });
    });
};

export const addQuickAdd = model => dispatch => {
  const service = new QuickAddService();

  service
    .add(model)
    .then(res => {
      dispatch({
        type: POST_QUICK_ADD,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_QUICK_ADD,
        payload: [],
      });
    });
};

export const updateQuickAdd = model => dispatch => {
  const service = new QuickAddService();

  service
    .update(model)
    .then(res => {
      dispatch({
        type: UPDATE_QUICK_ADD,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_QUICK_ADD,
        payload: [],
      });
    });
};

export const deleteQuickAdd = id => dispatch => {
  const service = new QuickAddService();

  service
    .delete(id)
    .then(res => {
      dispatch({
        type: DELETE_QUICK_ADD,
        payload: {res, id},
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_QUICK_ADD,
        payload: [],
      });
    });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};
