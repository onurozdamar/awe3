export const GET_RANDEVUS = 'GET_RANDEVUS';
export const GET_ALL_RANDEVUS = 'GET_ALL_RANDEVUS';
export const POST_RANDEVU = 'POST_RANDEVU';
export const UPDATE_RANDEVU = 'UPDATE_RANDEVU';
export const DELETE_RANDEVU = 'DELETE_RANDEVU';
export const GET_RANDEVU_BY_ID = 'GET_RANDEVU_BY_ID';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getRandevu = hastaneId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getRandevu(hastaneId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RANDEVUS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RANDEVUS,
        payload: [],
      });
    });
};

export const getAllRandevus = hastaneId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getAllRandevus()
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ALL_RANDEVUS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ALL_RANDEVUS,
        payload: [],
      });
    });
};

export const getRandevuById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getRandevuById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RANDEVU_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RANDEVU_BY_ID,
        payload: {},
      });
    });
};

export const addRandevu = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addRandevu(model)
    .then(res => {
      dispatch({
        type: POST_RANDEVU,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_RANDEVU,
        payload: [],
      });
    });
};

export const updateRandevu = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateRandevu(model)
    .then(res => {
      dispatch({
        type: UPDATE_RANDEVU,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_RANDEVU,
        payload: [],
      });
    });
};

export const deleteRandevu = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteRandevu(id)
    .then(res => {
      dispatch({
        type: DELETE_RANDEVU,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_RANDEVU,
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
