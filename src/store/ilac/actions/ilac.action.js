export const GET_ILACS = 'GET_ILACS';
export const POST_ILAC = 'POST_ILAC';
export const UPDATE_ILAC = 'UPDATE_ILAC';
export const DELETE_ILAC = 'DELETE_ILAC';
export const GET_ILAC_BY_ID = 'GET_ILAC_BY_ID';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getIlac = hastaneId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getIlac(hastaneId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ILACS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ILACS,
        payload: [],
      });
    });
};

export const getIlacById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  return manager
    .getIlacById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ILAC_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ILAC_BY_ID,
        payload: {},
      });
    });
};

export const addIlac = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addIlac(model)
    .then(res => {
      dispatch({
        type: POST_ILAC,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_ILAC,
        payload: [],
      });
    });
};

export const updateIlac = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateIlac(model)
    .then(res => {
      dispatch({
        type: UPDATE_ILAC,
        payload: res,
      });
      getIlac(model.hastaneId);
    })
    .catch(e => {
      dispatch({
        type: UPDATE_ILAC,
        payload: [],
      });
    });
};

export const deleteIlac = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteIlac(id)
    .then(res => {
      dispatch({
        type: DELETE_ILAC,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_ILAC,
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
