export const GET_RECORDS = 'GET_RECORDS';
export const POST_RECORD = 'POST_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';
export const GET_RECORD_BY_ID = 'GET_RECORD_BY_ID';
export const SET_LOADING = 'SET_LOADING';
export const OPEN_MODAL = 'OPEN_MODAL';

import {BaseManager} from '../../../database';

export const getRecord = () => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getRecord()
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RECORDS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RECORDS,
        payload: [],
      });
    });
};

export const getRecordById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getRecordById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RECORD_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_RECORD_BY_ID,
        payload: {},
      });
    });
};

export const addRecord = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addRecord(model)
    .then(res => {
      dispatch({
        type: POST_RECORD,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_RECORD,
        payload: [],
      });
    });
};

export const updateRecord = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateRecord(model)
    .then(res => {
      dispatch({
        type: UPDATE_RECORD,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_RECORD,
        payload: [],
      });
    });
};

export const deleteRecord = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteRecord(id)
    .then(res => {
      dispatch({
        type: DELETE_RECORD,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_RECORD,
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

export const setOpenModal = openModal => dispatch => {
  dispatch({
    type: OPEN_MODAL,
    payload: openModal,
  });
};
