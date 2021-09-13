export const GET_GOREVS = 'GET_GOREVS';
export const POST_GOREV = 'POST_GOREV';
export const UPDATE_GOREV = 'UPDATE_GOREV';
export const DELETE_GOREV = 'DELETE_GOREV';
export const GET_GOREV_BY_ID = 'GET_GOREV_BY_ID';
export const UPDATE_GOREV_COMPLETE = 'UPDATE_GOREV_COMPLETE';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getGorev = hastaneId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getGorev(hastaneId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_GOREVS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_GOREVS,
        payload: [],
      });
    });
};

export const getGorevById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  return manager
    .getGorevById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_GOREV_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_GOREV_BY_ID,
        payload: {},
      });
    });
};

export const addGorev = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addGorev(model)
    .then(res => {
      dispatch({
        type: POST_GOREV,
        payload: res,
      });
      dispatch(getGorev(model.hastaneId));
    })
    .catch(e => {
      dispatch({
        type: POST_GOREV,
        payload: [],
      });
    });
};

export const updateGorev = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateGorev(model)
    .then(res => {
      dispatch({
        type: UPDATE_GOREV,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_GOREV,
        payload: [],
      });
    });
};

export const updateGorevComplete = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateGorevComplete(model)
    .then(res => {
      dispatch({
        type: UPDATE_GOREV_COMPLETE,
        payload: res,
      });
      dispatch(getGorevById(model.id));
      dispatch(getGorev(model.hastaneId));
    })
    .catch(e => {
      dispatch({
        type: UPDATE_GOREV_COMPLETE,
        payload: {},
      });
    });
};

export const deleteGorev = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteGorev(id)
    .then(res => {
      dispatch({
        type: DELETE_GOREV,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_GOREV,
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
