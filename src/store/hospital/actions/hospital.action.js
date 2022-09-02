export const GET_HOSPITALS = 'GET_HOSPITALS';
export const POST_HOSPITAL = 'POST_HOSPITAL';
export const UPDATE_HOSPITAL = 'UPDATE_HOSPITAL';
export const DELETE_HOSPITAL = 'DELETE_HOSPITAL';
export const GET_HOSPITAL_BY_ID = 'GET_HOSPITAL_BY_ID';
export const SET_LOADING = 'SET_LOADING';
export const OPEN_MODAL = 'OPEN_MODAL';

import {BaseManager} from '../../../database';

export const getHospital = () => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getHospital()
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_HOSPITALS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_HOSPITALS,
        payload: [],
      });
    });
};

export const getHospitalById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getHospitalById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_HOSPITAL_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_HOSPITAL_BY_ID,
        payload: {},
      });
    });
};

export const addHospital = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addHospital(model)
    .then(res => {
      dispatch({
        type: POST_HOSPITAL,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_HOSPITAL,
        payload: [],
      });
    });
};

export const updateHospital = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateHospital(model)
    .then(res => {
      dispatch({
        type: UPDATE_HOSPITAL,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_HOSPITAL,
        payload: [],
      });
    });
};

export const deleteHospital = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteHospital(id)
    .then(res => {
      dispatch({
        type: DELETE_HOSPITAL,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_HOSPITAL,
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
