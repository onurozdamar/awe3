export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const GET_ALL_APPOINTMENTS = 'GET_ALL_APPOINTMENTS';
export const POST_APPOINTMENT = 'POST_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const GET_APPOINTMENT_BY_ID = 'GET_APPOINTMENT_BY_ID';
export const SET_LOADING = 'SET_LOADING';

import {BaseManager} from '../../../database';

export const getAppointment = hospitalId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getAppointment(hospitalId)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_APPOINTMENTS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_APPOINTMENTS,
        payload: [],
      });
    });
};

export const getAllAppointments = hospitalId => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getAllAppointments()
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ALL_APPOINTMENTS,
        payload: res,
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_ALL_APPOINTMENTS,
        payload: [],
      });
    });
};

export const getAppointmentById = id => dispatch => {
  const manager = new BaseManager();
  dispatch(setLoading(true));

  manager
    .getAppointmentById(id)
    .then(res => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_APPOINTMENT_BY_ID,
        payload: res[0],
      });
    })
    .catch(e => {
      dispatch(setLoading(false));
      dispatch({
        type: GET_APPOINTMENT_BY_ID,
        payload: {},
      });
    });
};

export const addAppointment = model => dispatch => {
  const manager = new BaseManager();

  manager
    .addAppointment(model)
    .then(res => {
      dispatch({
        type: POST_APPOINTMENT,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: POST_APPOINTMENT,
        payload: [],
      });
    });
};

export const updateAppointment = model => dispatch => {
  const manager = new BaseManager();

  manager
    .updateAppointment(model)
    .then(res => {
      dispatch({
        type: UPDATE_APPOINTMENT,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: UPDATE_APPOINTMENT,
        payload: [],
      });
    });
};

export const deleteAppointment = id => dispatch => {
  const manager = new BaseManager();

  manager
    .deleteAppointment(id)
    .then(res => {
      dispatch({
        type: DELETE_APPOINTMENT,
        payload: res,
      });
    })
    .catch(e => {
      dispatch({
        type: DELETE_APPOINTMENT,
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
