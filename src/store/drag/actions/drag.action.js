export const GET_DRAGS = 'GET_DRAGS';
export const POST_DRAG = 'POST_DRAG';
export const UPDATE_DRAG = 'UPDATE_DRAG';
export const DELETE_DRAG = 'DELETE_DRAG';
export const GET_DRAG_BY_ID = 'GET_DRAG_BY_ID';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getDrag = recordId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getDrag(recordId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_DRAGS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_DRAGS,
        payload: [],
      });
    });
};

export const getDragById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  return manager
    .getDragById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_DRAG_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_DRAG_BY_ID,
        payload: {},
      });
    });
};

export const addDrag = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addDrag(model)
    .then(res => {
      dispatch({
        type: POST_DRAG,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_DRAG,
        payload: [],
      });
    });
};

export const updateDrag = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateDrag(model)
    .then(res => {
      dispatch({
        type: UPDATE_DRAG,
        payload: res,
      });
      getDrag(model.recordId);
    })
    .catch(e => {
      dispatch({
        type: UPDATE_DRAG,
        payload: [],
      });
    });
};

export const deleteDrag = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteDrag(id)
    .then(res => {
      dispatch({
        type: DELETE_DRAG,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_DRAG,
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
